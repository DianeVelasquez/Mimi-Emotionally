from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import uuid
import numpy as np
import tensorflow as tf

from audio_processing.extract_features import extract_features_from_audio

# Cargar el modelo
MODEL_PATH = 'model/emotion_model.h5'
model = tf.keras.models.load_model(MODEL_PATH)
last_prediction = {"emotion": None}

# Inicializar Flask
app = Flask(__name__)
CORS(app)

# Carpeta para archivos subidos
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload-audio', methods=['POST'])
def upload_audio():
    if 'file' not in request.files:
        return jsonify({'error': 'No se envió ningún archivo'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'Nombre de archivo inválido'}), 400

    # Guardar archivo
    filename = f"{uuid.uuid4()}.wav"
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    try:
        # Extraer características desde el audio
        features = extract_features_from_audio(filepath)

        # Hacer predicción
        prediction = model.predict(features)
        predicted_class = np.argmax(prediction)

        # Convertir a etiqueta
        emotion_labels = ['Relax', 'Happy', 'Sad', 'Angry']
        emotion = emotion_labels[predicted_class]

        last_prediction["emotion"] = emotion

        return jsonify({'emotion': emotion})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/')
def home():
    return "API de análisis de emociones desde audio (Flask + Python)"

@app.route('/get_last_prediction', methods=['GET'])
def get_last_prediction():
    return jsonify(last_prediction)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
