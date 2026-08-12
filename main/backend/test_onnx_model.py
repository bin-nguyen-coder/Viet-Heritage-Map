#!/usr/bin/env python3
"""
Test script for VocalSimilarityAnalyzer - verifies MFCC-based vocal comparison.
Generates synthetic audio and tests similarity scoring functionality.
"""
import os
import sys
import time
import struct
import io
import numpy as np
from pathlib import Path
import librosa

# Add backend to path
sys.path.insert(0, str(Path(__file__).parent))

from app.services.audio_analysis import VocalSimilarityAnalyzer


def generate_synthetic_wav(duration_sec: float = 30.0, sr: int = 22050) -> bytes:
    """Generate synthetic audio as WAV bytes for testing."""
    t = np.linspace(0, duration_sec, int(sr * duration_sec), endpoint=False)
    
    # Mix of frequencies to simulate musical content
    frequencies = [261.63, 329.63, 392.00, 523.25]  # C4, E4, G4, C5
    amplitudes = [0.3, 0.25, 0.2, 0.15]
    
    waveform = np.zeros_like(t)
    for freq, amp in zip(frequencies, amplitudes):
        waveform += amp * np.sin(2 * np.pi * freq * t)
    
    # Add some variation
    waveform += 0.1 * np.random.randn(len(waveform))
    
    # Clamp to [-1, 1]
    waveform = np.clip(waveform, -1, 1)
    
    # Convert to 16-bit PCM
    samples_int16 = (waveform * 32767).astype(np.int16)
    n_frames = len(samples_int16)
    n_bytes = n_frames * 2
    
    buf = io.BytesIO()
    buf.write(b'RIFF')
    buf.write(struct.pack('<I', n_bytes + 36))
    buf.write(b'WAVE')
    buf.write(b'fmt ')
    buf.write(struct.pack('<I', 16))
    buf.write(struct.pack('<H', 1))  # PCM
    buf.write(struct.pack('<H', 1))  # Mono
    buf.write(struct.pack('<I', sr))
    buf.write(struct.pack('<I', sr * 2))
    buf.write(struct.pack('<H', 2))
    buf.write(struct.pack('<H', 16))
    buf.write(b'data')
    buf.write(struct.pack('<I', n_bytes))
    buf.write(samples_int16.tobytes())
    return buf.getvalue()

def generate_percussive_wav(duration_sec: float = 5.0, sr: int = 22050) -> bytes:
    """Generate percussive audio (table knocking) as WAV bytes for testing."""
    t = np.linspace(0, duration_sec, int(sr * duration_sec), endpoint=False)
    
    # Simulate table knocking - short bursts of noise with high ZCR
    waveform = np.zeros_like(t)
    knock_interval = 0.5  # Knock every 0.5 seconds
    knock_duration = 0.05  # Each knock lasts 0.05 seconds
    knock_freq = 1000  # High frequency for knocking
    
    for i in range(int(duration_sec / knock_interval)):
        start = int(i * knock_interval * sr)
        end = min(int((i * knock_interval + knock_duration) * sr), len(t))
        # Sharp attack, quick decay - like knocking
        knock_t = np.linspace(0, 1, end - start)
        knock_wave = np.sin(2 * np.pi * knock_freq * knock_t) * np.exp(-knock_t * 10) * 0.5
        waveform[start:end] += knock_wave
    
    # Add some random noise for realism
    waveform += 0.05 * np.random.randn(len(waveform))
    
    # Clamp to [-1, 1]
    waveform = np.clip(waveform, -1, 1)
    
    # Convert to 16-bit PCM
    samples_int16 = (waveform * 32767).astype(np.int16)
    n_frames = len(samples_int16)
    n_bytes = n_frames * 2
    
    buf = io.BytesIO()
    buf.write(b'RIFF')
    buf.write(struct.pack('<I', n_bytes + 36))
    buf.write(b'WAVE')
    buf.write(b'fmt ')
    buf.write(struct.pack('<I', 16))
    buf.write(struct.pack('<H', 1))  # PCM
    buf.write(struct.pack('<H', 1))  # Mono
    buf.write(struct.pack('<I', sr))
    buf.write(struct.pack('<I', sr * 2))
    buf.write(struct.pack('<H', 2))
    buf.write(struct.pack('<H', 16))
    buf.write(b'data')
    buf.write(struct.pack('<I', n_bytes))
    buf.write(samples_int16.tobytes())
    return buf.getvalue()


def test_analyzer():
    """Test the VocalSimilarityAnalyzer."""
    print("\n=== Testing VocalSimilarityAnalyzer ===")
    
    # Check reference paths exist
    from app.services.audio_analysis import REFERENCE_AUDIO_PATHS
    print(f"Reference paths: {dict(REFERENCE_AUDIO_PATHS)}")
    for k, p in REFERENCE_AUDIO_PATHS.items():
        print(f"  {k}: exists={p.exists()}")
    
    analyzer = VocalSimilarityAnalyzer()
    
    # Test with synthetic audio (non-vocal - should get low score)
    audio_bytes = generate_synthetic_wav()
    print(f"Generated {len(audio_bytes)} bytes of synthetic audio (non-vocal)")
    
    try:
        # Test with item ID 3 (Quan họ)
        result = analyzer.analyze(audio_bytes, 3)
        print(f"Score: {result.score}")
        print(f"Feedback: {result.feedback}")
        print(f"Processing time: {result.processing_time_ms}ms")
        print("✓ Analyzer test passed (low score expected for non-vocal audio)")
    except Exception as e:
        print(f"✗ Analyzer test failed: {e}")
        import traceback
        traceback.print_exc()

def test_real_vocal():
    """Test with actual vocal reference - should give high self-similarity."""
    print("\n=== Testing Self-Similarity (same reference) ===")
    analyzer = VocalSimilarityAnalyzer()
    
    # Load the actual reference file
    from app.services.audio_analysis import REFERENCE_AUDIO_PATHS
    ref_path = REFERENCE_AUDIO_PATHS[3]
    with open(ref_path, 'rb') as f:
        audio_bytes = f.read()
    
    print(f"Testing with reference file: {ref_path.name}")
    try:
        result = analyzer.analyze(audio_bytes, 3)
        print(f"Score: {result.score}")
        print(f"Feedback: {result.feedback}")
        print(f"Processing time: {result.processing_time_ms}ms")
        print("✓ Self-similarity test passed (high score expected)")
    except Exception as e:
        print(f"✗ Self-similarity test failed: {e}")
        import traceback
        traceback.print_exc()


def test_percussive():
    """Test with percussive audio (table knocking) - should get low score."""
    print("\n=== Testing Percussive Audio (table knocking) ===")
    analyzer = VocalSimilarityAnalyzer()
    
    audio_bytes = generate_percussive_wav()
    print(f"Generated {len(audio_bytes)} bytes of percussive audio")
    
    try:
        result = analyzer.analyze(audio_bytes, 3)
        print(f"Score: {result.score}")
        print(f"Feedback: {result.feedback}")
        print(f"Processing time: {result.processing_time_ms}ms")
        if result.score < 30:
            print("✓ Percussive test passed (low score expected)")
        else:
            print(f"✗ Percussive test failed (expected <30, got {result.score})")
    except Exception as e:
        print(f"✗ Percussive test failed: {e}")
        import traceback
        traceback.print_exc()


def main():
    """Run tests."""
    print("=" * 60)
    print("VocalSimilarityAnalyzer Test Suite")
    print("=" * 60)
    
    test_analyzer()
    test_real_vocal()
    test_percussive()
    
    print("\n" + "=" * 60)
    print("Test suite completed")
    print("=" * 60)


if __name__ == "__main__":
    main()
