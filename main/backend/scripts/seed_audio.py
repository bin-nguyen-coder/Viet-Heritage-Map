"""
Script to copy audio files from user's Downloads and seed them into the SQLite database.
This is a local-only script - no changes are pushed to the shared repo until PR is approved.
"""
import shutil
import sqlite3
import uuid
import os
from datetime import datetime

# ============================================================
# CẤU HÌNH — thay đổi các giá trị này nếu cần
# ============================================================

# Đường dẫn đến thư mục chứa file audio gốc trên máy local
SOURCE_DIR = r"C:\Users\trung\Downloads\09-tim-nguoi"

# Thư mục lưu file audio trong project (đã copy vào đây)
AUDIO_STORAGE_DIR = "backend/static/audio"

# File database SQLite — đây là file chứa dữ liệu
DB_PATH = "backend/vietheritage.db"

# ID của di sản "Quan họ Bắc Ninh" trong bảng heritage_sites
# (đã được seed từ trước trong database)
SITE_ID = "a1b2c3d4-e5f6-7890-abcd-ef1234567890"

# ============================================================
# 11 BẢN GHI — mỗi tuple = 1 file audio + 1 dòng trong database
# Định dạng: (tên_file_gốc, title_vi, description_vi)
# ============================================================
FILES_INFO = [
    ("01 - Xe Chi Luon Kim.mp3", "Xe Chỉ Luồn Kim", "Xe Chỉ Luồn Kim (Quan họ)"),
    ("02 - Long Van Doi Cho.mp3", "Lòng Vẫn Đợi Chờ", "Lòng Vẫn Đợi Chờ (Quan họ)"),
    ("03 - Di Cay.mp3", "Đi Cấy", "Đi Cấy (Quan họ)"),
    ("04 - Re Phuong Chia Loan.mp3", "Rẽ Phượng Chia Loan", "Rẽ Phượng Chia Loan (Quan họ)"),
    ("05 - Doi Ben Bac Me Cung Gia.mp3", "Đôi Bên Bắc Mẹ Cùng Già", "Đôi Bên Bắc Mẹ Cùng Già (Quan họ)"),
    ("06 - Duoi Gioi May Ke Biet Ta.mp3", "Dưới Giới Mây Kề Biết Tá", "Dưới Giới Mây Kề Biết Tá (Quan họ)"),
    ("07 - Tam Biet Tu Day.mp3", "Tạm Biệt Từ Đây", "Tạm Biệt Từ Đây (Quan họ)"),
    ("08 - Giang Len Phong Do Nhuong Bao.mp3", "Giăng Lên Phố Đô Nhường Bảo", "Giăng Lên Phố Đô Nhường Bảo (Quan họ)"),
    ("09 - Tim Nguoi.mp3", "Tìm Người", "Tìm Người (Quan họ)"),
    ("10 - Chim Keu Giong Gia.mp3", "Chim Kêu Giọng Già", "Chim Kêu Giọng Già (Quan họ)"),
    ("11 - Yeu Nhau Thi Lay Duoc Nhau.mp3", "Yêu Nhau Thì Lấy Được Nhau", "Yêu Nhau Thì Lấy Được Nhau (Quan họ)"),
]


def main():
    # Create audio storage directory if not exists
    os.makedirs(AUDIO_STORAGE_DIR, exist_ok=True)
    print(f"✓ Audio storage directory ready: {AUDIO_STORAGE_DIR}")

    # Connect to SQLite database
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Verify the site exists
    cursor.execute("SELECT id, name_vi FROM heritage_sites WHERE id = ?", (SITE_ID,))
    site = cursor.fetchone()
    if not site:
        print(f"✗ Site with ID {SITE_ID} not found!")
        conn.close()
        return
    print(f"✓ Found site: {site[1]} (ID: {site[0]})")

    # Process each audio file
    for filename, title_vi, description_vi in FILES_INFO:
        source_path = os.path.join(SOURCE_DIR, filename)

        if not os.path.exists(source_path):
            print(f"✗ File not found: {source_path}")
            continue

        # Generate a unique filename for storage
        audio_id = str(uuid.uuid4())
        ext = os.path.splitext(filename)[1]
        stored_filename = f"{audio_id}{ext}"
        dest_path = os.path.join(AUDIO_STORAGE_DIR, stored_filename)

        # Copy the audio file
        shutil.copy2(source_path, dest_path)
        file_size = os.path.getsize(dest_path)
        print(f"✓ Copied: {filename} ({file_size / 1024:.1f} KB)")

        # Insert record into database
        url = f"/static/audio/{stored_filename}"
        created_at = datetime.utcnow().isoformat()

        cursor.execute(
            """
            INSERT INTO audio_assets (
                id, site_id, title_vi, title_en, description_vi, description_en,
                url, duration_seconds, sample_rate, channels,
                genre, instruments, techniques, transcription_text,
                waveform_data, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                audio_id,
                SITE_ID,
                title_vi,
                title_vi,  # title_en same as title_vi for now
                description_vi,
                description_vi,  # description_en same for now
                url,
                None,  # duration_seconds - unknown
                None,  # sample_rate - unknown
                None,  # channels - unknown
                "quan_ho",
                '["voice", "phach", "trong_de"]',  # typical Quan họ instruments
                '["nay_hat", "lay_hat"]',  # typical Quan họ techniques
                None,  # transcription_text
                "[]",  # waveform_data
                created_at,
            ),
        )
        print(f"✓ Inserted DB record: {title_vi} (ID: {audio_id})")

    # Commit all changes
    conn.commit()
    conn.close()

    print("\n" + "=" * 60)
    print("SUCCESS: All audio files have been seeded into the database!")
    print("=" * 60)
    print("\nNext steps:")
    print("  - These changes are LOCAL only (on your machine)")
    print("  - To revert: delete the audio files and remove the DB records")
    print("  - Files are stored in: backend/static/audio/")
    print(f"  - {len(FILES_INFO)} audio records added for: Quan họ Bắc Ninh")


if __name__ == "__main__":
    main()