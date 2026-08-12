import io
import os
import time
from typing import Dict, Tuple
from pathlib import Path
import numpy as np
import librosa
from scipy.spatial.distance import cosine
from app.schemas.audio import AudioScoreResponse


# Reference audio paths mapping - maps heritage item IDs to reference vocal audio files
# Path is configurable via PROJECT_DIR env var for Docker deployments
_PROJECT_DIR = Path(os.environ.get("PROJECT_DIR", Path(__file__).resolve().parents[3] / "Project"))
REFERENCE_AUDIO_PATHS: Dict[int, Path] = {
    3: _PROJECT_DIR / "audio" / "quanho-embed.wav",
    17: _PROJECT_DIR / "audio" / "ho-embed.wav",
}


class VocalSimilarityAnalyzer:
    """
    Compare user's singing against reference vocal samples using MFCC similarity.
    Returns a 0-100 score indicating how close the user's voice matches the reference style.
    Includes vocal activity detection to filter out non-vocal audio.
    """

    def __init__(self, reference_dir: str = "Project/audio"):
        self.reference_dir = Path(reference_dir)

    def _extract_mfcc(self, y: np.ndarray, sr: int, n_mfcc: int = 13) -> np.ndarray:
        """Extract MFCC features from audio signal."""
        mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=n_mfcc)
        return np.mean(mfccs, axis=1)

    def _compute_vocal_confidence(self, y: np.ndarray, sr: int) -> Tuple[float, str]:
        """
        Compute confidence that the audio contains sung vocals.
        Uses multiple acoustic features with strict thresholds.
        Returns (confidence_score, reason).
        """
        y_harmonic, y_percussive = librosa.effects.hpss(y)
        harmonic_energy = np.mean(y_harmonic ** 2)
        percussive_energy = np.mean(y_percussive ** 2)
        hpss_ratio = harmonic_energy / (percussive_energy + 1e-10)
        
        f0, voiced_flag, _ = librosa.pyin(y, fmin=80, fmax=400, sr=sr)
        pitches = f0[~np.isnan(f0)]
        pitch_activity = len(pitches) / len(f0) if len(f0) > 0 else 0
        
        spectral_flatness = librosa.feature.spectral_flatness(y=y)
        mean_flatness = np.mean(spectral_flatness)
        
        zcr = librosa.feature.zero_crossing_rate(y)
        mean_zcr = np.mean(zcr)
        
        rms = librosa.feature.rms(y=y)
        rms_var = np.var(rms)
        rms_mean = np.mean(rms)
        
        # Strict vocal detection - ANY check failing = non-vocal
        if hpss_ratio < 5.0:
            return 1.0, "percussive"
        if pitch_activity < 0.7:
            return 1.0, "low_pitch"
        if mean_flatness > 0.2:
            return 1.0, "noise_like"
        if mean_zcr > 0.15:
            return 1.0, "percussive"
        if rms_var / (rms_mean + 1e-6) > 1.5:
            return 1.0, "percussive"
        
        return 100.0, "vocal_detected"

    def _compute_similarity(self, user_mfcc: np.ndarray, ref_mfcc: np.ndarray, 
                           vocal_confidence: float) -> float:
        cosine_sim = max(0, 1 - cosine(user_mfcc, ref_mfcc)) * 100
        confidence_penalty = 1.0
        if vocal_confidence < 10:
            confidence_penalty = vocal_confidence / 100
        elif vocal_confidence < 50:
            confidence_penalty = vocal_confidence / 50
        final_score = cosine_sim * confidence_penalty
        return round(final_score, 1)

    def _get_feedback(self, score: float, item_id: int, vocal_reason: str) -> str:
        if vocal_reason != "vocal_detected":
            return "No clear vocal detected. Please sing or hum into the microphone more clearly."
        if score >= 80:
            return "Excellent! Your singing closely matches the traditional style's fluidity and character."
        elif score >= 65:
            return "Good! Your voice shows strong resemblance to the traditional style."
        elif score >= 50:
            return "Fair. Try matching the melodic contour and rhythm more closely."
        elif score >= 30:
            return "Needs improvement. Listen carefully to the reference and try to emulate the vocal style."
        else:
            return "Keep practicing! Focus on the phrasing and tonal characteristics of the tradition."

    def analyze(self, user_audio_bytes: bytes, item_id: int) -> AudioScoreResponse:
        start_time = time.time()
        try:
            user_y, user_sr = librosa.load(io.BytesIO(user_audio_bytes), sr=22050, mono=True)
        except Exception as e:
            raise ValueError(f"Failed to load user audio: {e}")
        
        vocal_confidence, vocal_reason = self._compute_vocal_confidence(user_y, user_sr)
        ref_path = REFERENCE_AUDIO_PATHS.get(item_id)
        if not ref_path:
            raise ValueError(f"No reference audio available for item ID {item_id}")
        try:
            ref_y, ref_sr = librosa.load(ref_path, sr=22050, mono=True)
        except Exception as e:
            raise ValueError(f"Failed to load reference audio: {e}")
        
        user_mfcc = self._extract_mfcc(user_y, user_sr)
        ref_mfcc = self._extract_mfcc(ref_y, ref_sr)
        similarity = self._compute_similarity(user_mfcc, ref_mfcc, vocal_confidence)
        processing_time = int((time.time() - start_time) * 1000)
        
        return AudioScoreResponse(
            score=similarity,
            feedback=self._get_feedback(similarity, item_id, vocal_reason),
            processing_time_ms=processing_time,
        )