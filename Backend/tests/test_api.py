import io
import shutil
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from backend_app import create_app
from backend_app import routes


class ApiContractTestCase(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.mkdtemp(prefix='mimi-backend-tests-')
        self.app = create_app(
            {
                'TESTING': True,
                'UPLOAD_FOLDER': self.temp_dir,
                'MAX_CONTENT_LENGTH': 1024,
            }
        )
        self.client = self.app.test_client()
        routes.prediction_store.set_last_prediction(None)

    def tearDown(self):
        shutil.rmtree(self.temp_dir, ignore_errors=True)

    def test_get_root_returns_status_message(self):
        response = self.client.get('/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.get_data(as_text=True),
            'API de análisis de emociones desde audio (Flask + Python)',
        )

    def test_get_last_prediction_returns_default_payload(self):
        response = self.client.get('/get_last_prediction')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), {'emotion': None})

    def test_upload_audio_requires_file_field(self):
        response = self.client.post('/upload-audio', data={}, content_type='multipart/form-data')

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.get_json(), {'error': 'No se envió ningún archivo'})

    def test_upload_audio_rejects_empty_filename(self):
        response = self.client.post(
            '/upload-audio',
            data={'file': (io.BytesIO(b'audio'), '')},
            content_type='multipart/form-data',
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.get_json(), {'error': 'Nombre de archivo inválido'})

    def test_upload_audio_rejects_invalid_extension(self):
        response = self.client.post(
            '/upload-audio',
            data={'file': (io.BytesIO(b'not-audio'), 'track.txt', 'text/plain')},
            content_type='multipart/form-data',
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.get_json(), {'error': 'Tipo de archivo no permitido'})

    def test_upload_audio_rejects_oversized_payload(self):
        oversized_content = b'a' * 2048

        response = self.client.post(
            '/upload-audio',
            data={'file': (io.BytesIO(oversized_content), 'track.wav', 'audio/wav')},
            content_type='multipart/form-data',
        )

        self.assertEqual(response.status_code, 413)
        self.assertEqual(
            response.get_json(),
            {'error': 'El archivo excede el tamaño máximo permitido'},
        )

    @patch('backend_app.routes.inference_service.predict_emotion', return_value='Happy')
    def test_upload_audio_returns_emotion_on_success(self, predict_emotion):
        response = self.client.post(
            '/upload-audio',
            data={'file': (io.BytesIO(b'audio'), 'track.wav', 'audio/wav')},
            content_type='multipart/form-data',
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.get_json(), {'emotion': 'Happy'})
        saved_files = list(Path(self.temp_dir).iterdir())
        self.assertEqual(saved_files, [])
        predict_emotion.assert_called_once()

    @patch('backend_app.routes.inference_service.predict_emotion', side_effect=RuntimeError('boom'))
    def test_upload_audio_returns_json_error_when_processing_fails(self, _predict_emotion):
        response = self.client.post(
            '/upload-audio',
            data={'file': (io.BytesIO(b'audio'), 'track.wav', 'audio/wav')},
            content_type='multipart/form-data',
        )

        self.assertEqual(response.status_code, 500)
        self.assertEqual(
            response.get_json(),
            {'error': 'No se pudo procesar el archivo de audio'},
        )


if __name__ == '__main__':
    unittest.main()
