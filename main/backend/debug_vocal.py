#!/usr/bin/env python3
"""Debug script for vocal detection features."""
import struct
import io
import numpy as np
import librosa

def generate_percussive_wav(duration_sec: float = 5.0, sr: int = 22050) -> bytes:
    """Generate percussive audio (table knocking) as WAV bytes."""
    t = np.linspace(0, duration_sec, int(sr * duration_sec), endpoint=False)
    
    # Simulate table knocking - short bursts of noise with high ZCR
    waveform = np.zeros_like(t)
    knock_interval = 0.5
    knock_duration = 0.05
    knock_freq = 1000
    
    for i in range(int(duration_sec / knock_interval)):
        start = int(i * knock_interval * sr)
        end = min(int((i * knock_interval + knock_duration) * sr), len(t))
        knock_t = np.linspace(0, 1, end - start)
        knock_wave = np.sin(2 * np.pi * knock_freq * knock_t) * np.exp(-knock_t * 10) * 0.5
        waveform[start:end] += knock_wave
    
    waveform += 0.05 * np.random.randn(len(waveform))
    waveform = np.clip(waveform, -1, 1)
    
    samples_int16 = (waveform * 32767).astype(np.int16)
    n_frames = len(samples_int16)
    n_bytes = n_frames * 2
    
    buf = io.BytesIO()
    buf.write(b'RIFF')
    buf.write(struct.pack('<I', n_bytes + 36))
    buf.write(b'WAVE')
    buf.write(b'fmt ')
    buf.write(struct.pack('<I', 16))
    buf.write(struct.pack('<H', 1))
    buf.write(struct.pack('<H', 1))
    buf.write(struct.pack('<I', sr))
    buf.write(struct.pack('<I', sr * 2))
    buf.write(struct.pack('<H', 2))
    buf.write(struct.pack('<H', 16))
    buf.write(b'data')
    buf.write(struct.pack('<I', n_bytes))
    buf.write(samples_int16.tobytes())
    return buf.getvalue()

# Load and analyze
audio_bytes = generate_percussive_wav()
y, sr = librosa.load(io.BytesIO(audio_bytes), sr=22050, mono=True)

# HPSS
y_harmonic, y_percussive = librosa.effects.hpss(y)
harmonic_energy = np.mean(y_harmonic ** 2)
percussive_energy = np.mean(y_percussive ** 2)
hpss_ratio = harmonic_energy / (percussive_energy + 1e-10)

# Pitch
f0, voiced_flag, _ = librosa.pyin(y, fmin=80, fmax=400, sr=sr)
pitches = f0[~np.isnan(f0)]
pitch_activity = len(pitches) / len(f0) if len(f0) > 0 else 0

# Spectral flatness
spectral_flatness = librosa.feature.spectral_flatness(y=y)
mean_flatness = np.mean(spectral_flatness)

# ZCR
zcr = librosa.feature.zero_crossing_rate(y)
mean_zcr = np.mean(zcr)

# RMS variance
rms = librosa.feature.rms(y=y)
rms_var = np.var(rms)
rms_mean = np.mean(rms)
energy_ratio = rms_var / (rms_mean + 1e-6)

print(f"HPSS ratio: {hpss_ratio:.2f}")
print(f"Pitch activity: {pitch_activity:.3f}")
print(f"Mean flatness: {mean_flatness:.3f}")
print(f"Mean ZCR: {mean_zcr:.3f}")
print(f"RMS variance/mean: {energy_ratio:.2f}")

# Check which conditions would trigger
print(f"\nCondition checks:")
print(f"HPSS < 5.0: {hpss_ratio < 5.0}")
print(f"Pitch < 0.7: {pitch_activity < 0.7}")
print(f"Flatness > 0.2: {mean_flatness > 0.2}")
print(f"ZCR > 0.15: {mean_zcr > 0.15}")
print(f"Energy ratio > 1.5: {energy_ratio > 1.5}")