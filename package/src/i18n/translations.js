export const LANGUAGE_STORAGE_KEY = 'mimi-language';

export const translations = {
  en: {
    languageLabel: 'Language',
    languages: { en: 'EN', es: 'ES' },
    common: {
      brandTagline: 'Emotional Audio Intelligence',
      emotions: {
        Relax: 'Relax',
        Happy: 'Happy',
        Sad: 'Sad',
        Angry: 'Angry',
      },
    },
    intro: {
      eyebrow: 'A gentler first moment',
      title: 'Mimi listens like a memory before it reads like a model.',
      description:
        'An emotional opening built around Mimi\'s new video presence, so the product begins with atmosphere, not noise.',
      caption: 'Music, feeling, and machine intuition — held in one quiet breath.',
      skip: 'Skip intro',
    },
    layout: {
      nav: { home: 'Home', analyze: 'Analyze', about: 'About' },
      cta: 'Try the demo',
      footerLead:
        'Built to turn an academic ML demo into a warmer, more emotionally expressive product story.',
      footerSupport:
        'Frontend rebuilt with React, Vite and MUI around a softer audio journey with feeling, trust and clarity.',
      footerChip: 'Portfolio iteration',
    },
    home: {
      chip: 'Portfolio rebuild in progress',
      title: 'Let sound feel personal before it feels technical.',
      description:
        'Mimi turns audio into an emotional reading with a softer interface, calmer pacing and a more human product voice.',
      trustSignals: [
        { label: 'Emotional identity', value: 'Reframed' },
        { label: 'Core ML classes', value: '4 emotions' },
        { label: 'Product focus', value: 'Sound → feeling' },
      ],
      primaryCta: 'Analyze audio',
      secondaryCta: 'Explore methodology',
      highlights: [
        'Modern React + Vite frontend rebuilt around a real product journey.',
        'Audio upload flow designed to showcase ML inference clearly.',
        'Transparent product narrative that explains both value and limitations.',
      ],
      hero: {
        overline: 'audio → features → model → insight',
        title: 'A more emotive demo surface',
        description:
          'Instead of reading like a cold dashboard, the experience now tries to feel a little closer to the emotional subject it is analyzing.',
        metricLabel: 'Emotional resonance',
        metricValue: '91%',
        footer:
          'The visual system now leans warmer, more expressive and more aligned with the emotional promise of the product.',
        goals: [
          {
            label: 'experience goal',
            text: 'Replace dashboard clutter with atmosphere, softness and a more memorable first impression.',
          },
          {
            label: 'current focus',
            text: 'Make the ML demo feel emotionally legible, not just technically functional.',
          },
        ],
      },
      stepsSection: {
        title: 'How the experience works',
        description:
          'The goal is to showcase the complete journey: a user uploads audio, the backend extracts features, the model predicts an emotional class and the interface explains the result in a way that is easy to understand.',
        items: [
          {
            title: 'Upload a short audio sample',
            description: 'Start with a music snippet or audio clip and send it to Mimi for analysis.',
          },
          {
            title: 'Extract acoustic features',
            description: 'The backend transforms the waveform into a numerical representation the model can interpret.',
          },
          {
            title: 'Receive an emotional insight',
            description: 'Mimi predicts the most likely emotional label and presents the result in a clearer, portfolio-ready UI.',
          },
        ],
        stepLabel: 'Step',
      },
      useCases: [
        {
          title: 'Portfolio storytelling',
          description: 'Show how an ML inference flow becomes a designed product experience instead of a classroom demo.',
        },
        {
          title: 'Audio intelligence demo',
          description: 'Use Mimi to explain how features, prediction and interpretation can live together in a single UX.',
        },
        {
          title: 'Product thinking + ML',
          description: 'Demonstrate that model output alone is not enough; framing, trust and clarity matter too.',
        },
      ],
    },
    analyze: {
      chip: 'Live demo',
      title: 'Analyze a music or audio sample',
      description:
        'This screen turns a raw inference endpoint into a more intimate product moment: a guided upload flow, an emotional visual tone and a more human interpretation layer.',
      processTitle: 'what happens behind the scenes',
      processSteps: [
        'Upload a WAV sample',
        'Extract handcrafted audio features',
        'Run model inference',
        'Translate prediction into a readable insight',
      ],
      uploader: {
        title: 'Upload an audio sample',
        description: 'Bring a short WAV clip. Mimi will listen first, then translate the signal into an emotional readout.',
        chooseFile: 'Choose file',
        runAnalysis: 'Run emotional analysis',
        loadingAction: 'Analyzing audio...',
        noFile: 'No audio selected yet',
        processingTitle: 'Processing your audio sample',
        processingDescription: 'Mimi is listening, extracting audio features and preparing an emotional interpretation.',
        missingFile: 'Please choose a WAV audio file before starting the analysis.',
        unexpectedError: 'Unexpected error while analyzing the audio sample.',
      },
      result: {
        overline: 'Prediction result',
        successChip: 'Model inference complete',
        productChip: 'Emotion-first presentation',
        dominantMood: 'dominant mood',
        productReadout: 'product readout',
        productReadoutValue: 'Readable emotional insight',
        backendGoal: 'next backend goal',
        backendGoalValue: 'Confidence + metadata',
        panels: {
          interpretation: 'Interpretation',
          nextSteps: 'Next step in the product',
          limitations: 'Context and limitations',
        },
        infoAlert:
          'Current API returns only the predicted emotion label. In the backend iteration we should return confidence, probabilities and model metadata so this screen becomes even stronger.',
        nextSteps:
          'In the backend iteration we can enrich this card with confidence scores, timing, probabilities and model metadata.',
        limitations:
          'This is still a demo classifier, not a clinical or psychological assessment. The UI intentionally communicates that boundary.',
      },
      idle: {
        title: 'Ready for a cleaner inference demo',
        description: 'Choose a WAV file and run the analysis to preview the new emotional layer.',
        support: 'This UI is ready to become even more expressive once the backend starts returning confidence and richer metadata.',
      },
      emotions: {
        Relax: {
          label: 'Relax',
          tone: 'Calm, smooth and low-tension signal.',
          recommendation: 'Present this as a soothing profile that may fit focus or unwind playlists.',
          interpretation: 'The sample likely carries a softer and more stable energy, which the model interprets as low-arousal emotion.',
        },
        Happy: {
          label: 'Happy',
          tone: 'Energetic, bright and positively charged signal.',
          recommendation: 'Highlight that this pattern could support uplifting or feel-good listening.',
          interpretation: 'The acoustic profile suggests a more lively and positive mood signature with stronger perceived brightness or motion.',
        },
        Sad: {
          label: 'Sad',
          tone: 'Lower-energy and more introspective emotional profile.',
          recommendation: 'Explain that emotional tone in audio can also lean reflective rather than purely negative.',
          interpretation: 'The model associates this sample with a more restrained, inward and emotionally reflective sound pattern.',
        },
        Angry: {
          label: 'Angry',
          tone: 'High-intensity and high-arousal emotional profile.',
          recommendation: 'Frame this as forceful or tension-heavy energy detected in the sample.',
          interpretation: 'The extracted features point to higher arousal and stronger tension, leading the classifier toward an intense emotional label.',
        },
      },
    },
    about: {
      chip: 'Methodology',
      title: 'What Mimi does and what it does not do',
      description:
        'Mimi is a machine learning demo that estimates emotional labels from audio-derived features. It is not a clinical system, and the right portfolio framing is to present it honestly as an experimental emotional-audio classifier with a polished, emotionally aware product layer.',
      gradient: {
        overline: 'portfolio angle',
        title: 'This project is strongest when it treats emotion as both a model output and a design responsibility.',
      },
      methodology: [
        'Audio sample upload from the frontend demo.',
        'Feature extraction on the Python backend.',
        'Emotion prediction from a trained classifier.',
        'Product layer that explains the result with clearer UX and honest framing.',
      ],
      principles: [
        {
          title: 'Signal first',
          description: 'The project extracts acoustic features from an audio sample before sending them to a trained classifier.',
        },
        {
          title: 'Explainability matters',
          description: 'For portfolio quality, the interface must explain what the model predicts and where the limitations begin.',
        },
        {
          title: 'Product framing matters too',
          description: 'The value is not only in the model, but also in presenting inference through a clean and intentional user experience.',
        },
      ],
      portfolioAngles: [
        {
          title: 'Why this belongs in a portfolio',
          description: 'It combines interface design, API integration, ML storytelling and product judgment in one compact project.',
        },
        {
          title: 'What this rebuild improves',
          description: 'It removes template noise, clarifies the user journey and makes room for stronger backend credibility.',
        },
        {
          title: 'What still needs backend work',
          description: 'Confidence scores, scaler-aware inference, cleaner API contracts and more trustworthy model metadata.',
        },
      ],
      roadmap: {
        title: 'Current technical roadmap',
        first:
          'The next backend iteration should load preprocessing artifacts correctly, remove shared global state, return richer metadata and document the model pipeline with more credibility.',
        second:
          'After that, the README and project narrative can align with the rebuilt experience so the repository tells the same story the UI now starts to tell.',
      },
    },
    notFound: {
      title: 'This page does not exist in the new product flow.',
      description: 'We removed most of the old template routes so Mimi can focus on the actual emotional audio experience.',
      action: 'Back to home',
    },
  },
  es: {
    languageLabel: 'Idioma',
    languages: { en: 'EN', es: 'ES' },
    common: {
      brandTagline: 'Inteligencia Emocional de Audio',
      emotions: {
        Relax: 'Calma',
        Happy: 'Feliz',
        Sad: 'Triste',
        Angry: 'Intenso',
      },
    },
    intro: {
      eyebrow: 'Un primer momento más sensible',
      title: 'Mimi escucha como un recuerdo antes de leerse como un modelo.',
      description:
        'Una apertura emocional construida alrededor del nuevo video de Mimi, para que el producto empiece con atmósfera y no con ruido.',
      caption: 'Música, emoción e intuición de máquina — sostenidas en un mismo respiro.',
      skip: 'Saltar intro',
    },
    layout: {
      nav: { home: 'Inicio', analyze: 'Analizar', about: 'Acerca de' },
      cta: 'Probar demo',
      footerLead:
        'Pensado para transformar una demo académica de ML en una historia de producto más cálida y expresiva.',
      footerSupport:
        'Frontend reconstruido con React, Vite y MUI alrededor de un recorrido de audio más suave, con emoción, confianza y claridad.',
      footerChip: 'Iteración de portfolio',
    },
    home: {
      chip: 'Reconstrucción de portfolio en progreso',
      title: 'Que el sonido se sienta personal antes de sentirse técnico.',
      description:
        'Mimi convierte audio en una lectura emocional con una interfaz más suave, un ritmo más calmo y una voz de producto más humana.',
      trustSignals: [
        { label: 'Identidad emocional', value: 'Reencuadrada' },
        { label: 'Clases ML base', value: '4 emociones' },
        { label: 'Foco del producto', value: 'Sonido → emoción' },
      ],
      primaryCta: 'Analizar audio',
      secondaryCta: 'Explorar metodología',
      highlights: [
        'Frontend moderno con React + Vite reconstruido alrededor de un recorrido de producto real.',
        'Flujo de carga de audio diseñado para mostrar la inferencia de ML con claridad.',
        'Narrativa transparente que explica tanto el valor como las limitaciones.',
      ],
      hero: {
        overline: 'audio → features → modelo → insight',
        title: 'Una superficie demo más emotiva',
        description:
          'En vez de leerse como un dashboard frío, la experiencia ahora intenta sentirse un poco más cerca del sujeto emocional que analiza.',
        metricLabel: 'Resonancia emocional',
        metricValue: '91%',
        footer:
          'El sistema visual ahora se inclina a algo más cálido, más expresivo y más alineado con la promesa emocional del producto.',
        goals: [
          {
            label: 'objetivo de experiencia',
            text: 'Reemplazar el ruido de dashboard por atmósfera, suavidad y una primera impresión más memorable.',
          },
          {
            label: 'foco actual',
            text: 'Hacer que la demo de ML sea emocionalmente legible, no solo técnicamente funcional.',
          },
        ],
      },
      stepsSection: {
        title: 'Cómo funciona la experiencia',
        description:
          'La idea es mostrar el recorrido completo: una persona sube audio, el backend extrae features, el modelo predice una clase emocional y la interfaz explica el resultado de una forma fácil de entender.',
        items: [
          {
            title: 'Subí una muestra corta de audio',
            description: 'Empezá con un fragmento de música o audio y envialo a Mimi para analizarlo.',
          },
          {
            title: 'Extraé features acústicas',
            description: 'El backend transforma la onda en una representación numérica que el modelo puede interpretar.',
          },
          {
            title: 'Recibí una lectura emocional',
            description: 'Mimi predice la etiqueta emocional más probable y muestra el resultado en una UI más clara y lista para portfolio.',
          },
        ],
        stepLabel: 'Paso',
      },
      useCases: [
        {
          title: 'Storytelling para portfolio',
          description: 'Mostrá cómo un flujo de inferencia de ML se convierte en una experiencia de producto diseñada, en lugar de una demo de aula.',
        },
        {
          title: 'Demo de inteligencia de audio',
          description: 'Usá Mimi para explicar cómo features, predicción e interpretación pueden convivir en una sola UX.',
        },
        {
          title: 'Pensamiento de producto + ML',
          description: 'Demostrá que la salida del modelo sola no alcanza; también importan el encuadre, la confianza y la claridad.',
        },
      ],
    },
    analyze: {
      chip: 'Demo en vivo',
      title: 'Analizá una muestra de música o audio',
      description:
        'Esta pantalla convierte un endpoint crudo de inferencia en un momento de producto más íntimo: un flujo guiado de carga, un tono visual emocional y una capa de interpretación más humana.',
      processTitle: 'qué pasa detrás de escena',
      processSteps: [
        'Subí una muestra WAV',
        'Extraé features de audio artesanales',
        'Ejecutá la inferencia del modelo',
        'Traducí la predicción en un insight legible',
      ],
      uploader: {
        title: 'Subí una muestra de audio',
        description: 'Traé un clip WAV corto. Mimi primero escucha y después traduce la señal en una lectura emocional.',
        chooseFile: 'Elegir archivo',
        runAnalysis: 'Ejecutar análisis emocional',
        loadingAction: 'Analizando audio...',
        noFile: 'Todavía no seleccionaste audio',
        processingTitle: 'Procesando tu muestra de audio',
        processingDescription: 'Mimi está escuchando, extrayendo features de audio y preparando una interpretación emocional.',
        missingFile: 'Elegí un archivo WAV antes de iniciar el análisis.',
        unexpectedError: 'Ocurrió un error inesperado al analizar la muestra de audio.',
      },
      result: {
        overline: 'Resultado de la predicción',
        successChip: 'Inferencia del modelo completada',
        productChip: 'Presentación centrada en emoción',
        dominantMood: 'estado dominante',
        productReadout: 'lectura de producto',
        productReadoutValue: 'Insight emocional legible',
        backendGoal: 'siguiente meta backend',
        backendGoalValue: 'Confianza + metadata',
        panels: {
          interpretation: 'Interpretación',
          nextSteps: 'Siguiente paso del producto',
          limitations: 'Contexto y limitaciones',
        },
        infoAlert:
          'La API actual solo devuelve la etiqueta emocional predicha. En la próxima iteración backend deberíamos devolver confianza, probabilidades y metadata del modelo para fortalecer esta pantalla.',
        nextSteps:
          'En la próxima iteración backend podemos enriquecer esta tarjeta con puntajes de confianza, timing, probabilidades y metadata del modelo.',
        limitations:
          'Sigue siendo un clasificador demo, no una evaluación clínica ni psicológica. La UI comunica ese límite de forma intencional.',
      },
      idle: {
        title: 'Listo para una demo de inferencia más limpia',
        description: 'Elegí un archivo WAV y ejecutá el análisis para previsualizar la nueva capa emocional.',
        support: 'Esta UI está lista para volverse todavía más expresiva cuando el backend empiece a devolver confianza y metadata más rica.',
      },
      emotions: {
        Relax: {
          label: 'Calma',
          tone: 'Señal calma, suave y de baja tensión.',
          recommendation: 'Presentalo como un perfil sereno que puede encajar con playlists de foco o descanso.',
          interpretation: 'La muestra probablemente trae una energía más suave y estable, que el modelo interpreta como una emoción de baja activación.',
        },
        Happy: {
          label: 'Feliz',
          tone: 'Señal energética, luminosa y positivamente cargada.',
          recommendation: 'Destacá que este patrón puede acompañar escuchas más alegres o estimulantes.',
          interpretation: 'El perfil acústico sugiere un estado más vivo y positivo, con mayor percepción de brillo o movimiento.',
        },
        Sad: {
          label: 'Triste',
          tone: 'Perfil emocional de menor energía y más introspectivo.',
          recommendation: 'Explicá que el tono emocional del audio también puede inclinarse a lo reflexivo y no solo a lo negativo.',
          interpretation: 'El modelo asocia esta muestra con un patrón sonoro más contenido, interior y emocionalmente reflexivo.',
        },
        Angry: {
          label: 'Intenso',
          tone: 'Perfil emocional de alta intensidad y alta activación.',
          recommendation: 'Enmarcalo como una energía más fuerte o cargada de tensión detectada en la muestra.',
          interpretation: 'Las features extraídas apuntan a mayor activación y tensión, por eso el clasificador se inclina por una etiqueta emocional intensa.',
        },
      },
    },
    about: {
      chip: 'Metodología',
      title: 'Qué hace Mimi y qué no hace',
      description:
        'Mimi es una demo de machine learning que estima etiquetas emocionales a partir de features derivadas del audio. No es un sistema clínico, y el encuadre correcto para portfolio es presentarlo con honestidad como un clasificador experimental de audio emocional con una capa de producto pulida y consciente de esa dimensión emocional.',
      gradient: {
        overline: 'ángulo de portfolio',
        title: 'Este proyecto se vuelve más fuerte cuando trata a la emoción como salida del modelo y también como responsabilidad de diseño.',
      },
      methodology: [
        'Carga de muestras de audio desde la demo frontend.',
        'Extracción de features en el backend de Python.',
        'Predicción emocional desde un clasificador entrenado.',
        'Capa de producto que explica el resultado con una UX más clara y un encuadre honesto.',
      ],
      principles: [
        {
          title: 'Primero la señal',
          description: 'El proyecto extrae features acústicas de una muestra de audio antes de enviarlas a un clasificador entrenado.',
        },
        {
          title: 'La explicabilidad importa',
          description: 'Para que tenga calidad de portfolio, la interfaz tiene que explicar qué predice el modelo y dónde empiezan sus limitaciones.',
        },
        {
          title: 'El encuadre de producto también',
          description: 'El valor no está solo en el modelo, sino también en presentar la inferencia mediante una experiencia limpia e intencional.',
        },
      ],
      portfolioAngles: [
        {
          title: 'Por qué esto pertenece a un portfolio',
          description: 'Combina diseño de interfaz, integración con API, storytelling de ML y criterio de producto en un proyecto compacto.',
        },
        {
          title: 'Qué mejora esta reconstrucción',
          description: 'Elimina ruido de template, aclara el recorrido de usuario y deja espacio para una mayor credibilidad backend.',
        },
        {
          title: 'Qué sigue faltando en backend',
          description: 'Puntajes de confianza, inferencia consciente del scaler, contratos de API más limpios y metadata del modelo más confiable.',
        },
      ],
      roadmap: {
        title: 'Roadmap técnico actual',
        first:
          'La próxima iteración backend debería cargar bien los artefactos de preprocesamiento, eliminar estado global compartido, devolver metadata más rica y documentar el pipeline del modelo con mayor credibilidad.',
        second:
          'Después de eso, el README y la narrativa del proyecto pueden alinearse con la experiencia reconstruida para que el repositorio cuente la misma historia que la UI ya empieza a contar.',
      },
    },
    notFound: {
      title: 'Esta página no existe dentro del nuevo flujo de producto.',
      description: 'Sacamos la mayor parte de las rutas viejas del template para que Mimi se enfoque en la experiencia real de audio emocional.',
      action: 'Volver al inicio',
    },
  },
};
