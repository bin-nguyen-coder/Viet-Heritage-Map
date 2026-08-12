"""
Train a 2-genre EthnoMusicNet classifier and export to ONNX.
Genres: quan_ho, ho
Uses librosa for mel-spectrograms, PyTorch for training, ONNX for export.
"""
import os
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader
import librosa
import numpy as np
from pathlib import Path
import onnx


# Configuration
AUDIO_DIR = Path(__file__).resolve().parents[2] / "frontend" / "public" / "audio"
MODEL_DIR = Path(__file__).resolve().parents[1] / "models"
MODEL_DIR.mkdir(exist_ok=True)

SAMPLE_RATE = 22050
N_MELS = 128
N_FFT = 2048
HOP_LENGTH = 512
TARGET_DURATION = 30.0  # seconds

GENRE_LABELS = ["quan_ho", "ho"]
NUM_GENRES = len(GENRE_LABELS)
NUM_INSTRUMENTS = 12
NUM_TECHNIQUES = 10


class AudioPreprocessor:
    """Extract mel-spectrograms from audio files."""
    
    def __init__(self, sr=SAMPLE_RATE, n_mels=N_MELS, n_fft=N_FFT, hop_length=HOP_LENGTH):
        self.sr = sr
        self.n_mels = n_mels
        self.n_fft = n_fft
        self.hop_length = hop_length
    
    def load_audio(self, path: Path) -> np.ndarray:
        """Load audio and ensure mono."""
        y, sr = librosa.load(path, sr=self.sr, mono=True)
        return y
    
    def to_mel(self, y: np.ndarray) -> np.ndarray:
        """Convert waveform to log-mel spectrogram (n_mels, time)."""
        mel = librosa.feature.melspectrogram(
            y=y, sr=self.sr, n_mels=self.n_mels, n_fft=self.n_fft, hop_length=self.hop_length
        )
        log_mel = librosa.power_to_db(mel, ref=np.max)
        return log_mel.astype(np.float32)
    
    def pad_or_truncate(self, mel: np.ndarray, target_frames: int) -> np.ndarray:
        """Pad or truncate to target time frames."""
        if mel.shape[1] < target_frames:
            pad = target_frames - mel.shape[1]
            mel = np.pad(mel, ((0, 0), (0, pad)), mode="constant")
        else:
            mel = mel[:, :target_frames]
        return mel


class HeritageDataset(Dataset):
    """Dataset for genre classification."""
    
    def __init__(self, preprocessor: AudioPreprocessor, max_samples_per_genre: int = 50):
        self.preprocessor = preprocessor
        self.samples = []
        self.target_frames = int(TARGET_DURATION * SAMPLE_RATE / HOP_LENGTH)
        
        # Collect samples
        for genre_idx, genre in enumerate(GENRE_LABELS):
            # Find all embed and preview files for this genre
            files = list(AUDIO_DIR.glob(f"{genre}-*.wav"))
            for f in files:
                try:
                    y = preprocessor.load_audio(f)
                    mel = preprocessor.to_mel(y)
                    mel = preprocessor.pad_or_truncate(mel, self.target_frames)
                    self.samples.append((mel, genre_idx))
                except Exception as e:
                    print(f"Warning: failed to process {f}: {e}")
            
            print(f"Genre {genre}: {len([s for s in self.samples if s[1] == genre_idx])} samples")
    
    def __len__(self):
        return len(self.samples)
    
    def __getitem__(self, idx):
        mel, label = self.samples[idx]
        # Add channel dimension: (1, n_mels, time)
        mel = torch.from_numpy(mel).unsqueeze(0)
        return mel, torch.tensor(label, dtype=torch.long)


class EthnoMusicNet(nn.Module):
    """CNN for genre, instrument, technique, and confidence prediction."""
    
    def __init__(self, n_mels=N_MELS, num_genres=NUM_GENRES, 
                 num_instruments=NUM_INSTRUMENTS, num_techniques=NUM_TECHNIQUES):
        super().__init__()
        
        self.features = nn.Sequential(
            # Block 1
            nn.Conv2d(1, 32, kernel_size=3, padding=1),
            nn.BatchNorm2d(32),
            nn.ReLU(inplace=True),
            nn.MaxPool2d((2, 2)),
            # Block 2
            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.MaxPool2d((2, 2)),
            # Block 3
            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            # Global average pooling over both mel and time dimensions
            nn.AdaptiveAvgPool2d((1, 1)),
        )
        
        # Heads
        self.genre_head = nn.Linear(128, num_genres)
        self.instrument_head = nn.Linear(128, num_instruments)
        self.technique_head = nn.Linear(128, num_techniques)
        self.confidence_head = nn.Linear(128, 1)
    
    def forward(self, x):
        # x: (B, 1, 128, T)
        feat = self.features(x)  # (B, 128, 1, 1)
        feat = feat.flatten(1)  # (B, 128)
        
        genre_logits = self.genre_head(feat)
        instrument_probs = torch.sigmoid(self.instrument_head(feat))
        technique_probs = torch.sigmoid(self.technique_head(feat))
        confidence = torch.sigmoid(self.confidence_head(feat))
        
        return genre_logits, instrument_probs, technique_probs, confidence


def train():
    """Train the model."""
    print("Preparing data...")
    preprocessor = AudioPreprocessor()
    dataset = HeritageDataset(preprocessor)
    
    if len(dataset) == 0:
        raise RuntimeError("No training samples found!")
    
    # Split train/val
    train_size = int(0.8 * len(dataset))
    val_size = len(dataset) - train_size
    train_dataset, val_dataset = torch.utils.data.random_split(dataset, [train_size, val_size])
    
    train_loader = DataLoader(train_dataset, batch_size=4, shuffle=True)
    val_loader = DataLoader(val_dataset, batch_size=4, shuffle=False)
    
    print(f"Train: {len(train_dataset)}, Val: {len(val_dataset)}")
    
    # Model
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"Using device: {device}")
    
    model = EthnoMusicNet().to(device)
    criterion_genre = nn.CrossEntropyLoss()
    criterion_bce = nn.BCELoss()
    
    optimizer = optim.Adam(model.parameters(), lr=1e-3, weight_decay=1e-4)
    scheduler = optim.lr_scheduler.ReduceLROnPlateau(optimizer, patience=3, factor=0.5)
    
    best_val_loss = float('inf')
    patience = 10
    patience_counter = 0
    
    for epoch in range(1, 51):
        # Train
        model.train()
        train_loss = 0.0
        for mel, labels in train_loader:
            mel = mel.to(device)
            labels = labels.to(device)
            
            optimizer.zero_grad()
            genre_logits, inst_probs, tech_probs, conf = model(mel)
            
            # Only genre has labels for now (multi-class)
            loss = criterion_genre(genre_logits, labels)
            loss.backward()
            optimizer.step()
            train_loss += loss.item()
        
        # Validate
        model.eval()
        val_loss = 0.0
        correct = 0
        total = 0
        with torch.no_grad():
            for mel, labels in val_loader:
                mel = mel.to(device)
                labels = labels.to(device)
                
                genre_logits, inst_probs, tech_probs, conf = model(mel)
                loss = criterion_genre(genre_logits, labels)
                val_loss += loss.item()
                
                _, predicted = genre_logits.max(1)
                total += labels.size(0)
                correct += predicted.eq(labels).sum().item()
        
        val_loss /= max(1, len(val_loader))
        acc = 100. * correct / max(1, total)
        scheduler.step(val_loss)
        
        print(f"Epoch {epoch:2d}: train_loss={train_loss/len(train_loader):.4f}, "
              f"val_loss={val_loss:.4f}, acc={acc:.1f}%")
        
        if val_loss < best_val_loss:
            best_val_loss = val_loss
            patience_counter = 0
            torch.save(model.state_dict(), MODEL_DIR / "best_model.pth")
        else:
            patience_counter += 1
            if patience_counter >= patience:
                print(f"Early stopping at epoch {epoch}")
                break
    
    # Load best model
    model.load_state_dict(torch.load(MODEL_DIR / "best_model.pth", map_location=device))
    return model


def export_onnx(model, output_path: Path):
    """Export model to ONNX with dynamic time dimension."""
    model.eval()
    
    # Dummy input with dynamic time dimension
    dummy_input = torch.randn(1, 1, N_MELS, 1292)  # ~30s at 22050Hz
    
    # Export
    torch.onnx.export(
        model,
        dummy_input,
        output_path,
        export_params=True,
        opset_version=13,
        do_constant_folding=True,
        input_names=['input'],
        output_names=['genre_logits', 'instrument_probs', 'technique_probs', 'confidence'],
        dynamic_axes={
            'input': {3: 'time'},
            'genre_logits': {0: 'batch'},
            'instrument_probs': {0: 'batch'},
            'technique_probs': {0: 'batch'},
            'confidence': {0: 'batch'},
        }
    )
    
    # Verify
    onnx_model = onnx.load(output_path)
    onnx.checker.check_model(onnx_model)
    print(f"ONNX model saved to {output_path}")
    print(f"Input: {onnx_model.graph.input[0]}")
    print(f"Outputs: {[o.name for o in onnx_model.graph.output]}")


if __name__ == "__main__":
    print("=" * 60)
    print("Training 2-genre EthnoMusicNet (quan_ho, ho)")
    print("=" * 60)
    
    model = train()
    
    print("\nExporting to ONNX...")
    export_onnx(model, MODEL_DIR / "ethnomusic_net_int8.onnx")
    
    print("\nDone! Model ready for inference.")