from pathlib import Path


def validate_upload(file_storage, allowed_extensions, allowed_mime_types):
    if file_storage is None:
        return 'No se envió ningún archivo'

    if not file_storage.filename:
        return 'Nombre de archivo inválido'

    extension = Path(file_storage.filename).suffix.lower().lstrip('.')
    if not extension or extension not in allowed_extensions:
        return 'Tipo de archivo no permitido'

    mime_type = (file_storage.mimetype or '').lower()
    if mime_type and mime_type not in allowed_mime_types and not mime_type.startswith('audio/'):
        return 'Tipo de archivo no permitido'

    return None
