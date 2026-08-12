"""
Create placeholder audio files and ONNX model for hackathon demo.
Uses raw WAV writing and proper ONNX ops.
"""
import os
import struct
import numpy as np
import onnx
from onnx import helper, TensorProto, numpy_helper

# Create audio directory
AUDIO_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "public", "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

# Audio parameters
SAMPLE_RATE = 22050
DURATION = 3.0  # 3 seconds


def create_wav_file(filename: str, samples: np.ndarray, sr: int = SAMPLE_RATE):
    """Create a WAV file from float samples in range [-1, 1]."""
    samples_int16 = (samples * 32767).astype(np.int16)
    
    n_channels = 1
    sampwidth = 2
    n_frames = len(samples_int16)
    n_bytes = n_frames * n_channels * sampwidth
    
    with open(filename, 'wb') as f:
        f.write(b'RIFF')
        f.write(struct.pack('<I', n_bytes + 36))
        f.write(b'WAVE')
        f.write(b'fmt ')
        f.write(struct.pack('<I', 16))
        f.write(struct.pack('<H', 1))
        f.write(struct.pack('<H', n_channels))
        f.write(struct.pack('<I', sr))
        f.write(struct.pack('<I', sr * n_channels * sampwidth))
        f.write(struct.pack('<H', n_channels * sampwidth))
        f.write(struct.pack('<H', sampwidth * 8))
        f.write(b'data')
        f.write(struct.pack('<I', n_bytes))
        f.write(samples_int16.tobytes())


def create_sine_wave_tone(freq: float, sr: int = SAMPLE_RATE, duration: float = DURATION) -> np.ndarray:
    """Create a simple sine wave tone with harmonics."""
    t = np.linspace(0, duration, int(sr * duration), False)
    tone = (
        np.sin(2 * np.pi * freq * t) * 0.3 +
        np.sin(2 * np.pi * freq * 2 * t) * 0.15 +
        np.sin(2 * np.pi * freq * 3 * t) * 0.08
    )
    return (tone * 0.4).astype(np.float32)


def create_heritage_audio():
    """Create placeholder audio files for each heritage type."""
    frequencies = {
        "quanho-preview": 220.0,
        "quanho-embed": 246.9,
        "catru-preview": 246.9,
        "catru-embed": 261.6,
        "nhuanhac-preview": 261.6,
        "nhuanhac-embed": 293.7,
        "donca-preview": 329.6,
        "donca-embed": 349.2,
        "ho-preview": 196.0,
        "ho-embed": 220.0,
        "ho-nghean-preview": 196.0,  # For the import script
    }
    
    for name, freq in frequencies.items():
        audio = create_sine_wave_tone(freq)
        output_path = os.path.join(AUDIO_DIR, f"{name}.wav")
        create_wav_file(output_path, audio)
        print(f"Created {output_path}")


def create_mock_onnx_model():
    """Create a minimal ONNX model that returns mock predictions."""
    model_dir = os.path.join(os.path.dirname(__file__), "..", "models")
    os.makedirs(model_dir, exist_ok=True)
    
    # Accept dynamic time dimension using global average pooling
    # Input: (1, 1, 128, T) -> GlobalAvgPool -> (1, 1, 128, 1) -> Squeeze -> (1, 128)
    input_tensor = helper.make_tensor_value_info('input', TensorProto.FLOAT, [1, 1, 128, 'T'])
    
    # Outputs
    genre_output = helper.make_tensor_value_info('genre_logits', TensorProto.FLOAT, [1, 5])
    inst_output = helper.make_tensor_value_info('instrument_probs', TensorProto.FLOAT, [1, 12])
    tech_output = helper.make_tensor_value_info('technique_probs', TensorProto.FLOAT, [1, 10])
    conf_output = helper.make_tensor_value_info('confidence', TensorProto.FLOAT, [1, 1])
    
    np.random.seed(42)
    
    # Weights (128, num_outputs) for MatMul after flatten
    genre_weights = np.full((128, 5), 0.05, dtype=np.float32)
    genre_bias = np.zeros(5, dtype=np.float32)
    
    inst_weights = np.full((128, 12), 0.05, dtype=np.float32)
    inst_bias = np.full(12, -1.0, dtype=np.float32)
    
    tech_weights = np.full((128, 10), 0.05, dtype=np.float32)
    tech_bias = np.full(10, -1.0, dtype=np.float32)
    
    conf_weight = np.full((128, 1), 0.08, dtype=np.float32)
    conf_bias = np.array([0.2], dtype=np.float32)
    
    weights = [
        numpy_helper.from_array(genre_weights, name='genre_W'),
        numpy_helper.from_array(genre_bias, name='genre_b'),
        numpy_helper.from_array(inst_weights, name='inst_W'),
        numpy_helper.from_array(inst_bias, name='inst_b'),
        numpy_helper.from_array(tech_weights, name='tech_W'),
        numpy_helper.from_array(tech_bias, name='tech_b'),
        numpy_helper.from_array(conf_weight, name='conf_W'),
        numpy_helper.from_array(conf_bias, name='conf_b'),
    ]
    
    # Nodes - Average over time dimension only, flatten to (1, 128), then linear heads
    pool_node = helper.make_node(
        'ReduceMean',
        inputs=['input'],
        outputs=['pooled'],
        axes=[3],
        keepdims=1,
    )
    
    flatten_node = helper.make_node('Flatten', inputs=['pooled'], outputs=['flat'], axis=1)
    
    gemm_genre = helper.make_node('MatMul', inputs=['flat', 'genre_W'], outputs=['genre_mat'])
    gemm_inst = helper.make_node('MatMul', inputs=['flat', 'inst_W'], outputs=['inst_mat'])
    gemm_tech = helper.make_node('MatMul', inputs=['flat', 'tech_W'], outputs=['tech_mat'])
    gemm_conf = helper.make_node('MatMul', inputs=['flat', 'conf_W'], outputs=['conf_mat'])
    
    add_genre = helper.make_node('Add', inputs=['genre_mat', 'genre_b'], outputs=['genre_logits'])
    add_inst = helper.make_node('Add', inputs=['inst_mat', 'inst_b'], outputs=['inst_pre'])
    add_tech = helper.make_node('Add', inputs=['tech_mat', 'tech_b'], outputs=['tech_pre'])
    add_conf = helper.make_node('Add', inputs=['conf_mat', 'conf_b'], outputs=['confidence'])
    
    sigmoid_inst = helper.make_node('Sigmoid', inputs=['inst_pre'], outputs=['instrument_probs'])
    sigmoid_tech = helper.make_node('Sigmoid', inputs=['tech_pre'], outputs=['technique_probs'])
    
    graph = helper.make_graph(
        nodes=[pool_node, flatten_node, gemm_genre, gemm_inst, gemm_tech, gemm_conf,
               add_genre, add_inst, add_tech, add_conf, sigmoid_inst, sigmoid_tech],
        name='ethnomusic_net',
        inputs=[input_tensor],
        outputs=[genre_output, inst_output, tech_output, conf_output],
        initializer=weights
    )
    
    model = helper.make_model(graph, opset_imports=[helper.make_opsetid('', 13)])
    onnx.checker.check_model(model)
    
    output_path = os.path.join(model_dir, 'ethnomusic_net_int8.onnx')
    onnx.save(model, output_path)
    print(f"Created ONNX model: {output_path}")


if __name__ == "__main__":
    print("Creating placeholder audio files...")
    create_heritage_audio()
    
    print("\nCreating mock ONNX model...")
    create_mock_onnx_model()
    
    print("\nDone! Run: python -m backend.scripts.import_intangible to seed the database.")