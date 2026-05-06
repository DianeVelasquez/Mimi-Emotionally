# Mimi-Emotionally

Mimi-Emotionally es una demo bilingüe de análisis de emociones en la voz que combina un frontend en React con estilo cinematográfico y un backend en Flask que clasifica muestras cortas de audio en cuatro estados emocionales: `Relax`, `Happy`, `Sad` y `Angry`.

El proyecto está diseñado como un prototipo de producto listo para portafolio: presenta una experiencia visual cuidada, un flujo guiado de análisis y una API backend que valida archivos, ejecuta inferencia y expone respuestas JSON consistentes.

## ✨ Características principales

- Experiencia de producto bilingüe con cambio persistente de idioma `ES / EN`.
- Flujo de análisis de emociones a partir de archivos de audio.
- Backend en Flask con estructura basada en *app factory*, validación de archivos y manejo consistente de errores.
- Pruebas ligeras del contrato backend usando `unittest` y el cliente de pruebas de Flask.
- Enfoque orientado a portafolio con página de inicio tipo marketing, flujo de análisis y sección "about".

## 🛠 Stack tecnológico

- Frontend: React 19, Vite, Material UI, React Router.
- Backend: Flask, flask-cors, librosa, numpy, scipy, tensorflow.
- Testing: `unittest` de Python con cliente de pruebas de Flask.

## 📂 Estructura del repositorio

```text
.
|- package/               # Frontend activo en Vite + React
|- Backend/               # API Flask, servicios de inferencia, pruebas y modelo
|- landingpage/           # Landing estática antigua (referencia)
|- README.md
|- LICENSE

## Licencia

Publicado bajo la licencia MIT. Ver `LICENSE`.