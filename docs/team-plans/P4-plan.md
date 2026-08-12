# P4 (AI1) - EthnoMusic Model + Training

**Status**: 📋 Ready to start. GPU access required.

## What P1 Built for You
- `backend/app/services/audio_analysis.py` — `EthnoMusicAnalyzer` class expects ONNX model at `models/ethnomusic_net_int8.onnx`
- `backend/app/services/audio_analysis.py` — `AudioPreprocessor` class (mel-spectrogram: 128 mel, 22050 Hz, 30s)
- Response schema: `GenreScore`, `InstrumentScore`, `TechniqueScore`, `OrnamentEvent`
- ONNX input: `(B, 1, 128, T)` mel-spectrogram
- ONNX outputs: genre_logits (5), instrument_probs (12), technique_probs (10), confidence (1)

## Model Architecture (from SPEC.md §5.1)

```
EthnoMusicNet:
  CNN Frontend: 4 ConvBlocks (pool(2,2)) → AdaptiveAvgPool2d(4,4)
  BiLSTM: 2 layers, 256 hidden, bidirectional
  Genre head: Linear(512→256→5)
  Instrument head: Linear(512→256→12) + Sigmoid
  Technique head: Linear(512→256→10) + Sigmoid
  Confidence head: Linear(512→128→1) + Sigmoid
```

Labels:
- **Genre** (5): quan_ho, ca_tru, nha_nhac, don_ca_tai_tu, ho
- **Instruments** (12): dan_bau, dan_tranh, dan_nhi, dan_ty_ba, sao, ken, tieu, phach, trong_de, trong_chat, mo, voice
- **Techniques** (10): nay_hat, run_hat, lay_hat, so_hat, nhap_hat, chuyen_hat, vuot_hat, dam_hat, roi_hat, kep_hat

## Tasks (48h timeline)

### Hours 0-2: Audio Preprocessing Module
1. Review `backend/app/services/audio_analysis.py` to understand data pipeline
2. Create `ai/scripts/preprocess.py`:
   - Load audio files (wav/mp3)
   - Convert to mono, resample to 22050 Hz
   - Slice to 30s segments (pad if shorter)
   - Compute mel-spectrogram (128 mel, 2048 n_fft, 512 hop)
   - Save as `.npy` files in `ai/data/processed/`
3. Create `ai/data/annotations.csv` with columns:
   - `file_id, genre, instruments, techniques, file_path`

### Hours 2-10: 🚀 GPU Training (8h)
Access FPT AI Factory GPU:
1. Set up SSH to GPU server
2. Clone repo on GPU
3. Create `ai/models/ethnomusic_net.py` per SPEC §5.1:
   - 4 ConvBlocks with BatchNorm + ReLU
   - 2-layer BiLSTM
   - Multi-task heads (genre CE, instruments BCE, techniques BCE, confidence MSE)
4. Create `ai/scripts/train.py`:
   - Adam optimizer, LR scheduler
   - Batch size 32
   - Loss: CrossEntropy(genre) + BCE(instruments) + BCE(techniques) + MSE(confidence)
   - Validation split 80/20
   - Early stopping patience 10
   - Log to TensorBoard
5. Start training, monitor loss curves
6. If overfitting: increase augmentation, reduce model size
7. If underfitting: reduce augmentation, increase learning rate

### Hours 10-14: Data Augmentation
1. Time stretching (±10%)
2. Pitch shifting (±2 semitones)
3. Additive noise (Gaussian, SNR 20dB)
4. SpecAugment (frequency masking, time masking)
5. Regenerate training data with augmentation

### Hours 14-18: ONNX Export & Quantization
1. Create `ai/scripts/export_onnx.py`:
   - Load best PyTorch checkpoint
   - Export to ONNX with opset 18
   - Dynamic batch dimension
2. Create `ai/scripts/quantize_int8.py`:
   - INT8 quantization with ONNX Runtime
   - Calibrate on validation set
   - Benchmark: inference <500ms on CPU
3. Place quantized model: `backend/models/ethnomusic_net_int8.onnx`

### Hours 18-24: Validation & Integration
1. Create `ai/scripts/evaluate.py`:
   - Accuracy per genre
   - F1 per instrument (multi-label)
   - F1 per technique
   - Confusion matrix
2. Test with `POST /api/v1/audio/analyze` and 5 test clips
3. Verify ornament detection (rule-based via librosa.pyin)

### Day 2: Polish
1. Model card at `docs/model-cards/ethnomusic-net.md`
2. Edge cases: silence, noise, very short files
3. Confidence threshold tuning for "I don't know" on unknown genres
4. Inference benchmark results in model card

## Key Files
- `ai/models/ethnomusic_net.py` — PyTorch model
- `ai/scripts/train.py` — training pipeline
- `ai/scripts/export_onnx.py` — ONNX export
- `ai/scripts/quantize_int8.py` — INT8 quantization
- `backend/models/ethnomusic_net_int8.onnx` — final output

## Needs from Team
- FPT AI Factory SSH credentials from P1
- Test audio clips (30s each per genre) from P5