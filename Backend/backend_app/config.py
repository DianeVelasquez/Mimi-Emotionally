import os
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent


def _get_bool(name, default=False):
    value = os.getenv(name)
    if value is None:
        return default
    return value.strip().lower() in {'1', 'true', 'yes', 'on'}


def _get_int(name, default):
    value = os.getenv(name)
    if value is None:
        return default
    return int(value)


def get_config():
    upload_folder = Path(os.getenv('UPLOAD_FOLDER', BASE_DIR / 'uploads'))
    upload_folder.mkdir(parents=True, exist_ok=True)

    return {
        'DEBUG': _get_bool('FLASK_DEBUG', False),
        'HOST': os.getenv('FLASK_HOST', '127.0.0.1'),
        'PORT': _get_int('FLASK_PORT', 5000),
        'MODEL_PATH': str(Path(os.getenv('MODEL_PATH', BASE_DIR / 'model' / 'emotion_model.h5'))),
        'MAX_CONTENT_LENGTH': _get_int('MAX_UPLOAD_SIZE_BYTES', 16 * 1024 * 1024),
        'UPLOAD_FOLDER': str(upload_folder),
        'ALLOWED_AUDIO_EXTENSIONS': {
            extension.strip().lower()
            for extension in os.getenv('ALLOWED_AUDIO_EXTENSIONS', 'wav,mp3,ogg,m4a,flac,webm').split(',')
            if extension.strip()
        },
        'ALLOWED_AUDIO_MIME_TYPES': {
            mime_type.strip().lower()
            for mime_type in os.getenv(
                'ALLOWED_AUDIO_MIME_TYPES',
                'audio/wav,audio/x-wav,audio/wave,audio/mpeg,audio/mp3,audio/ogg,audio/flac,audio/mp4,audio/x-m4a,audio/webm,application/octet-stream',
            ).split(',')
            if mime_type.strip()
        },
        'EMOTION_LABELS': ['Relax', 'Happy', 'Sad', 'Angry'],
    }
