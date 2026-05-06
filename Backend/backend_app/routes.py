from flask import jsonify, request

from .services.inference import EmotionInferenceService
from .services.prediction_store import PredictionStore
from .utils.files import remove_file_safely, save_upload_file
from .validation.uploads import validate_upload


prediction_store = PredictionStore()
inference_service = EmotionInferenceService(prediction_store=prediction_store)


def register_routes(app):
    @app.route('/')
    def home():
        return 'API de análisis de emociones desde audio (Flask + Python)'

    @app.route('/upload-audio', methods=['POST'])
    def upload_audio():
        validation_error = validate_upload(
            file_storage=request.files.get('file'),
            allowed_extensions=app.config['ALLOWED_AUDIO_EXTENSIONS'],
            allowed_mime_types=app.config['ALLOWED_AUDIO_MIME_TYPES'],
        )

        if validation_error:
            return jsonify({'error': validation_error}), 400

        uploaded_file = request.files['file']
        saved_path = None

        try:
            saved_path = save_upload_file(uploaded_file, app.config['UPLOAD_FOLDER'])
            emotion = inference_service.predict_emotion(
                audio_path=saved_path,
                model_path=app.config['MODEL_PATH'],
                emotion_labels=app.config['EMOTION_LABELS'],
            )
            return jsonify({'emotion': emotion})
        except OSError:
            app.logger.exception('No se pudo guardar el archivo subido')
            return jsonify({'error': 'No se pudo guardar el archivo'}), 500
        except Exception:
            app.logger.exception('No se pudo procesar el archivo de audio')
            return jsonify({'error': 'No se pudo procesar el archivo de audio'}), 500
        finally:
            remove_file_safely(saved_path)

    @app.route('/get_last_prediction', methods=['GET'])
    def get_last_prediction():
        return jsonify(prediction_store.get_last_prediction())
