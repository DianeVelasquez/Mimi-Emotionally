class PredictionStore:
    def __init__(self):
        self._last_prediction = {'emotion': None}

    def get_last_prediction(self):
        return dict(self._last_prediction)

    def set_last_prediction(self, emotion):
        self._last_prediction['emotion'] = emotion
