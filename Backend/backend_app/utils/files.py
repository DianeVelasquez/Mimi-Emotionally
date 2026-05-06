import os
import uuid
from pathlib import Path

from werkzeug.utils import secure_filename


def save_upload_file(file_storage, upload_folder):
    upload_path = Path(upload_folder)
    upload_path.mkdir(parents=True, exist_ok=True)

    original_name = secure_filename(file_storage.filename)
    extension = Path(original_name).suffix.lower()
    target_path = upload_path / f'{uuid.uuid4()}{extension}'
    file_storage.save(target_path)
    return str(target_path)


def remove_file_safely(file_path):
    if file_path and os.path.exists(file_path):
        os.remove(file_path)
