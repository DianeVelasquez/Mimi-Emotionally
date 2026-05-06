# Mimi-Emotionally

Mimi-Emotionally is a bilingual voice emotion analysis demo that combines a cinematic React frontend with a Flask backend that classifies short audio samples into four emotional states: `Relax`, `Happy`, `Sad`, and `Angry`.

The project is designed as a portfolio-ready product prototype: it presents a polished marketing flow, a guided analysis experience, and a backend API that validates uploads, runs inference, and exposes stable JSON responses.

## Highlights

- Bilingual product experience with persistent `ES / EN` language switching.
- Emotion analysis flow for uploaded audio samples.
- Flask backend with app factory structure, upload validation, and stable error responses.
- Lightweight backend contract tests using stdlib `unittest` and Flask test client.
- Portfolio-friendly product positioning with a marketing homepage, analysis flow, and about page.

## Tech Stack

- Frontend: React 19, Vite, Material UI, React Router.
- Backend: Flask, flask-cors, librosa, numpy, scipy, tensorflow.
- Testing: Python `unittest` with Flask test client.

## Repository Structure

```text
.
|- package/               # Active Vite + React frontend
|- Backend/               # Flask API, inference services, tests, model assets
|- landingpage/           # Legacy static landing assets kept for reference
|- README.md
|- LICENSE
```

## Product Flow

1. The user lands on a polished homepage that frames the value proposition.
2. The user uploads a supported audio file from the analysis page.
3. The frontend posts the file to `POST /upload-audio`.
4. The backend validates the upload, stores it temporarily, runs inference, and returns `{ "emotion": "..." }`.
5. The UI renders a guided interpretation panel for the detected emotion.

## Frontend Setup

The active frontend lives in `package/`.

```bash
cd package
npm install
npm run dev
```

The frontend expects the backend base URL from `VITE_API_BASE_URL` and falls back to `http://127.0.0.1:5000` for local development.

Example:

```bash
cd package
VITE_API_BASE_URL=http://127.0.0.1:5000 npm run dev
```

## Backend Setup

This repository uses the root virtual environment at `/.venv` as the single official Python environment.

```bash
python3 -m venv .venv
".venv/bin/python" -m pip install -r Backend/requirements.txt
```

Run the Flask backend:

```bash
cd Backend
"../.venv/bin/python" app.py
```

## Environment Variables

The backend can be configured with these optional variables:

- `FLASK_HOST` default: `127.0.0.1`
- `FLASK_PORT` default: `5000`
- `FLASK_DEBUG` default: `false`
- `MAX_UPLOAD_SIZE_BYTES` default: `16777216`
- `UPLOAD_FOLDER` default: `Backend/uploads`
- `MODEL_PATH` default: `Backend/model/emotion_model.h5`
- `ALLOWED_AUDIO_EXTENSIONS` default: `wav,mp3,ogg,m4a,flac,webm`

## API Contract

### `POST /upload-audio`

- Content type: `multipart/form-data`
- File field: `file`
- Success response:

```json
{ "emotion": "Happy" }
```

- Error response:

```json
{ "error": "No se pudo procesar el archivo de audio" }
```

### `GET /get_last_prediction`

Returns the latest inferred emotion or `null` when nothing has been analyzed yet.

```json
{ "emotion": null }
```

## Running Tests

Backend tests:

```bash
cd Backend
"../.venv/bin/python" -m unittest discover -s tests -v
```

Validated locally: `8/8` backend contract tests passing.

## Architecture Notes

- `Backend/app.py` is a thin entrypoint.
- `Backend/backend_app/` contains app creation, configuration, routes, services, validation, and file helpers.
- Heavy ML/audio imports are deferred inside the inference service so the app can be imported for testing without loading TensorFlow/librosa at module import time.
- `package/src/shared/api/audio.js` centralizes the frontend upload contract.

## Open Source Status

This repository is ready to be shared as a public portfolio project and open source reference implementation. The current focus is clarity, product presentation, and backend contract stability rather than production-scale MLOps.

## Roadmap

- Add confidence scores and richer model output metadata.
- Introduce frontend automated tests for the upload flow.
- Add deployment instructions for a public demo environment.
- Replace placeholder template leftovers with project-specific modules as the product evolves.

## License

Released under the MIT License. See `LICENSE`.
