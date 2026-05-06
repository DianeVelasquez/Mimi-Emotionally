from flask import Flask, jsonify
from flask_cors import CORS

from .config import get_config
from .routes import register_routes


def create_app(config=None):
    app = Flask(__name__)
    app.config.from_mapping(get_config())

    if config:
        app.config.update(config)

    CORS(app)

    register_routes(app)
    register_error_handlers(app)

    return app


def register_error_handlers(app):
    @app.errorhandler(413)
    def payload_too_large(_error):
        return jsonify({'error': 'El archivo excede el tamaño máximo permitido'}), 413
