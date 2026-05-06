from functools import lru_cache

import numpy as np


class EmotionInferenceService:
    def __init__(self, prediction_store):
        self.prediction_store = prediction_store

    def predict_emotion(self, audio_path, model_path, emotion_labels):
        from audio_processing.extract_features import extract_features_from_audio

        features = extract_features_from_audio(audio_path)
        prediction = self._load_model(model_path).predict(features, verbose=0)
        predicted_class = int(np.argmax(prediction))
        emotion = emotion_labels[predicted_class]
        self.prediction_store.set_last_prediction(emotion)
        return emotion

    @staticmethod
    @lru_cache(maxsize=1)
    def _load_model(model_path):
        import tensorflow as tf

        return tf.keras.models.load_model(model_path)
