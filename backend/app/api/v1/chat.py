"""
Unified Chat API — routes between grounded retrieval and small talk.

- Heritage questions → GroundedChatService (cites treasures.json only)
- Off-topic messages → SmallTalkService (OpenRouter, steers to survey)
- Voice input → transcribe then forward to text chat
"""
from typing import List, Optional
from fastapi import APIRouter, HTTPException, UploadFile, File
from pydantic import BaseModel
import tempfile
import os
import logging

from app.services.grounded_chat import grounded_chat_service
from app.services.small_talk import small_talk_service

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/chat", tags=["chat"])


class ChatRequest(BaseModel):
    message: str
    lang: str = "vi"  # "vi" or "en"


class ChatResponse(BaseModel):
    response: str
    confidence: float = 1.0
    sources: List[str] = []
    is_small_talk: bool = False
    steer_to_survey: bool = False
    matched_treasures: List[dict] = []


def _transcribe_audio_faster_whisper(audio_bytes: bytes) -> str:
    """Transcribe audio using faster-whisper (CPU-optimized)."""
    try:
        from faster_whisper import WhisperModel
        from app.core.config import settings

        model_path = settings.WHISPER_MODEL_PATH
        if model_path.startswith("openai/"):
            model_name = model_path.replace("openai/", "")
        else:
            model_name = "base"

        model = WhisperModel(model_name, device="cpu", compute_type="int8")

        with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp:
            tmp.write(audio_bytes)
            tmp_path = tmp.name

        try:
            segments, _ = model.transcribe(tmp_path, language="vi")
            transcript = " ".join([s.text for s in segments])
            return transcript
        finally:
            os.unlink(tmp_path)
    except Exception:
        return ""


@router.post("/voice", response_model=ChatResponse)
async def transcribe_and_chat(file: UploadFile = File(...)):
    """Accept voice input, transcribe, then chat."""
    if not file.content_type or not file.content_type.startswith("audio/"):
        raise HTTPException(status_code=400, detail="Audio file required")

    audio_bytes = await file.read()
    transcript = _transcribe_audio_faster_whisper(audio_bytes)

    if transcript:
        return await chat(ChatRequest(message=transcript, lang="vi"))

    return ChatResponse(
        response="Xin lỗi, tôi chưa thể xử lý âm thanh. Vui lòng viết tin nhắn.",
        confidence=0.0,
    )


@router.post("", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Chat endpoint with intent routing:
    - Heritage questions → grounded retrieval (cites treasures.json)
    - Off-topic → small talk (steers to MCQ survey)
    """
    message = request.message.strip()
    if not message:
        raise HTTPException(status_code=400, detail="Message is required")

    lang = request.lang if request.lang in ("vi", "en") else "vi"

    # Route: check if off-topic
    if small_talk_service.is_off_topic(message):
        # Small talk path
        result = await small_talk_service.respond(message, lang)
        return ChatResponse(
            response=result["text"],
            confidence=result["confidence"],
            sources=[],
            is_small_talk=True,
            steer_to_survey=result.get("steer_to_survey", True),
            matched_treasures=[],
        )

    # Grounded retrieval path (heritage questions)
    result = grounded_chat_service.ask(message, lang)
    return ChatResponse(
        response=result["text"],
        confidence=result["confidence"],
        sources=[c.get("source", "treasures.json") for c in result.get("citations", [])],
        is_small_talk=False,
        steer_to_survey=False,
        matched_treasures=result.get("matched_treasures", []),
    )


# Voice grading endpoint (preserved from original)
class VoiceGradeRequest(BaseModel):
    genre: str
    lat: float
    lng: float


class VoiceGradeResponse(BaseModel):
    grade: float
    feedback_vi: str
    feedback_en: str
    detected_techniques: List[str] = []


@router.post("/grade", response_model=VoiceGradeResponse)
async def grade_voice_recording(
    request: VoiceGradeRequest,
    file: UploadFile = File(...),
):
    """Grade user's singing attempt against reference sample."""
    import numpy as np
    import librosa

    if not file.content_type or not file.content_type.startswith("audio/"):
        raise HTTPException(status_code=400, detail="Audio file required")

    audio_bytes = await file.read()

    try:
        with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp:
            tmp.write(audio_bytes)
            tmp_path = tmp.name

        y_user, sr_user = librosa.load(tmp_path, sr=None)
        os.unlink(tmp_path)

        f0_user, voiced_flag, _ = librosa.pyin(
            y_user,
            fmin=float(librosa.note_to_hz("C2")),
            fmax=float(librosa.note_to_hz("C7")),
            sr=sr_user,
        )

        voiced_ratio = float(voiced_flag.mean()) if len(voiced_flag) > 0 else 0.0
        pitch_variance = float(np.var(f0_user[voiced_flag])) if np.any(voiced_flag) else 0.0

        grade = min(1.0, voiced_ratio * 0.5 + min(pitch_variance / 1000, 0.5))

        if grade > 0.7:
            feedback_vi = "Giọng hát tốt! Bạn đã bắt đầu nắm bắt được bản sắc ca trù."
            feedback_en = "Good singing! You're beginning to grasp the essence of ca trù."
        elif grade > 0.4:
            feedback_vi = "Cần luyện tập thêm. Hãy chú ý vào hòa âm và ngữ cảnh."
            feedback_en = "Needs practice. Pay attention to ornamentation and context."
        else:
            feedback_vi = "Hãy học từ nghệ nhân và luyện tập kỹ hơn. Tôi có thể giúp gì?"
            feedback_en = "Learn from the artisan and practice more. How can I help?"

        return VoiceGradeResponse(
            grade=round(grade, 2),
            feedback_vi=feedback_vi,
            feedback_en=feedback_en,
            detected_techniques=["lay_hat"] if grade > 0.5 else [],
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Grading failed: {str(e)}")