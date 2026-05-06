export const LANGUAGE_STORAGE_KEY = 'mimi-language';

export const translations = {
  en: {
    languageLabel: 'Language',
    languages: { en: 'EN', es: 'ES' },
    common: {
      brandTagline: 'Emotional audio classifier',
      emotions: {
        Relax: 'Relax',
        Happy: 'Happy',
        Sad: 'Sad',
        Angry: 'Angry',
      },
    },
    intro: {
      eyebrow: 'A gentler first moment',
      title: 'Mimi listens without judgment, it simply wants to help.',
      description:
        'Did you know music can say a lot about how we feel? Mimi listens to the audio and translates it into emotional language.',
      caption: 'Music, feeling, and machine intuition — held in one quiet breath.',
      skip: 'Skip intro',
    },
    layout: {
      nav: { home: 'Home', analyze: 'Analyze', about: 'About' },
      cta: 'Try the demo',
      footerLead:
        'This project is a refactor of the original work so Mimi can evolve into a real product.',
      footerSupport:
        'Frontend rebuilt with React, Vite and MUI. The backend has also been refactored so Mimi can analyze audio and return an emotional result.',
      footerChip: 'Open Source refactor',
    },
    home: {
      chip: 'Emotions captured in musical notes',
      title: 'Do you know what music reveals about your emotions?',
      description:
        'Mimi turns audio into an emotional reading with a softer interface, calmer pacing and a more human product voice.',
      trustSignals: [
        { label: 'Reduce', value: 'All in one' },
        { label: 'Predict', value: '4 emotions' },
        { label: 'Transform', value: 'Sound → emotion' },
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
          'Find out in 3 easy steps.',
        items: [
          {
            title: 'Upload a short audio sample',
            description: 'Start with a music or audio snippet and send it to Mimi for analysis.',
          },
          {
            title: 'A moment of acoustic magic',
            description: 'Mimi transforms the musical waveform into a numerical representation that it can later interpret with ease.',
          },
          {
            title: 'Receive an emotional reading',
            description: 'Mimi predicts the most fitting emotional label and shows the result along with a few meaningful details.',
          },
        ],
        stepLabel: 'Step',
      },
      useCases: [
        {
          title: 'Music analysis',
          description: 'Mimi tries to perceive the feeling carried by each musical note.',
        },
        {
          title: 'Emotional interpretation',
          description: 'Mimi performs an emotional analysis based on the acoustic characteristics of the song.',
        },
        {
          title: 'What comes next?',
          description: 'Reflect on the result and make decisions with a few recommendations from Mimi.',
        },
      ],
    },
    analyze: {
      chip: 'Live demo',
      title: 'Analyze a music or audio sample',
      description:
        'Here your songs become an emotional reading that helps you understand how you feel in each moment.',
      processTitle: 'How does Mimi work?',
      processSteps: [
        'Upload an audio sample',
        'Extract acoustic features',
        'Explore the feeling held in each note',
        'Translate the result into an emotional reading',
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
        missingFile: 'Choose a WAV file before starting the analysis.',
        unexpectedError: 'An unexpected error occurred while analyzing the audio sample.',
      },
      result: {
        overline: 'Prediction result',
        successChip: 'Model inference complete',
        productChip: 'Emotion-first presentation',
        dominantMood: 'dominant mood',
        productReadout: 'product readout',
        productReadoutValue: 'Readable emotional insight',
        backendGoal: 'what comes next?',
        backendGoalValue: 'You are what matters most',
        panels: {
          interpretation: 'Interpretation',
          nextSteps: 'What comes next?',
          limitations: 'There are limitations, but for Mimi everything is possible',
        },
        infoAlert:
          'We are still working to improve the Mimi experience. For now, this is still a demo.',
        nextSteps:
          'We want Mimi to always be here to help you.',
        limitations:
          'Keep going and never forget that you are not alone.',
      },
      idle: {
        title: 'We want Mimi to always be here to help you',
        description: 'Right now we are still in a stage of development and improvements. For now, this is only a demo.',
        support: 'Our goal is to build a more precise and emotionally expressive model.',
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
        'Mimi is a machine learning demo that estimates emotional labels from audio-derived features. Mimi is NOT a clinical diagnosis, nor a psychological evaluation. Mimi is a demo that tries to interpret the emotions transmitted through audio.',
      heroPanel: {
        badge: 'Emotion-aware flow',
        title: 'Listening, interpreting and returning a gentler emotional readout.',
        description: 'Mimi combines audio processing, emotional classification and calmer product framing in a single experience.',
        pillars: ['Listen', 'Predict', 'Accompany'],
      },
      experienceSection: {
        overline: 'How we do it?',
        title: 'How much does what you hear say about you?',
      },
      foundationSection: {
        overline: 'What shapes Mimi?',
        title: 'The product principles and intentions that support the experience.',
      },
      gradient: {
        overline: 'Why is Mimi different?',
        title: 'This project is designed with the user\'s wellbeing in mind.',
      },
      methodology: [
        'We want to understand how you feel.',
        'While Mimi cannot diagnose with precision, it can help you understand how you feel.',
        'A path of support so you can feel better.',
        'Do not stigmatize, do not judge, just listen and understand.',
      ],
      principles: [
        {
          title: 'Signal first',
          description: 'The project extracts acoustic features from an audio sample before sending them to a trained classifier.',
        },
        {
          title: 'Interpretation matters',
          description: 'For the experience to have quality, the interface needs to explain what the model predicts and where its limitations begin.',
        },
        {
          title: 'Details matter',
          description: 'The value is not only in the model, but also in presenting inference through a clean and intentional experience.',
        },
      ],
      portfolioAngles: [
        {
          title: 'What is the differentiator?',
          description: 'It combines interface design, API integration, ML storytelling and product judgment in an Open Source project.',
        },
        {
          title: 'What are we looking for with this?',
          description: 'We want to build an Open Source project that shows how a machine learning product can be built in an ethical and responsible way.',
        },
        {
          title: 'What comes next?',
          description: 'We keep working to turn Mimi into a tool used at a therapeutic level, capable of detecting patterns early.',
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
      brandTagline: 'Clasificador emocional con audio',
      emotions: {
        Relax: 'Calma',
        Happy: 'Feliz',
        Sad: 'Triste',
        Angry: 'Intenso',
      },
    },
    intro: {
      eyebrow: 'Un primer momento más sensible',
      title: 'Mimi escucha sin juzgar, simplemente desea ayudar.',
      description:
        '¿Sabías que la música puede decir mucho de cómo nos sentimos? Mimi escucha el audio y te lo traduce a un lenguaje emocional.',
      caption: 'Música, emoción e interpretación — sostenidas en un mismo respiro.',
      skip: 'Saltar intro',
    },
    layout: {
      nav: { home: 'Inicio', analyze: 'Analizar audio', about: 'Acerca de' },
      cta: 'Probar demo',
      footerLead:
        'Este proyecto es una refactorización del proyecto original para que Mimi se convierta en un producto real.',
      footerSupport:
        'Frontend reconstruido con React, Vite y MUI. El backend se ha refactorizado para que Mimi pueda analizar el audio y devolver un resultado emocional.',
      footerChip: 'Refactorización Open Source',
    },
    home: {
      chip: 'Emociones encapsuladas en notas musicales',
      title: '¿Sabes lo que la música refleja sobre tus emociones?',
      description:
        'Mimi convierte el audio de tus canciones en una lectura emocional que te permite entender cómo te sientes en cada momento.',
      trustSignals: [
        { label: 'Reducir', value: 'Todo en uno' },
        { label: 'Predecir', value: '4 emociones' },
        { label: 'Convertir', value: 'Sonido → emoción' },
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
          'Averígualo en 3 simples pasos.',
        items: [
          {
            title: 'Sube una muestra corta de audio',
            description: 'Empieza con un fragmento de música o audio y envialo a Mimi para analizarlo.',
          },
          {
            title: 'Momento de la magia acústica',
            description: 'Mimi transforma la onda músical en una representación númerica que luego puede interpretar facilmente.',
          },
          {
            title: 'Recibe una lectura emocional',
            description: 'Mimi predice la etiqueta emocional más acorde y muestra el resultado junto con algunos detalles interesantes.',
          },
        ],
        stepLabel: 'Paso',
      },
      useCases: [
        {
          title: 'Análisis musical',
          description: 'Mimi logra percibir el sentimiento alojado en cada nota musical.',
        },
        {
          title: 'Interpretación emocional',
          description: 'Mimi realiza un análisis emocional de acuerdo a las características acústicas de la canción.',
        },
        {
          title: '¿Qué hacer ahora?',
          description: 'Reflexionar sobre el resultado y tomar decisiones con algunas recomendaciones de Mimi.',
        },
      ],
    },
    analyze: {
      chip: 'Demo',
      title: 'Analiza una muestra de música o audio',
      description:
        'Aquí tus canciones se convierten en una lectura emocional que te permite entender cómo te sientes en cada momento.',
      processTitle: '¿Cómo trabaja Mimi?',
      processSteps: [
        'Sube una muestra audio',
        'Extraé características acústicas',
        'Explora el sentimiento alojado en cada nota',
        'Traduce el resultado en una lectura emocional',
      ],
      uploader: {
        title: 'Sube una muestra audio',
        description: 'Traé un clip WAV corto. Mimi primero escucha y después traduce la señal en una lectura emocional.',
        chooseFile: 'Elegir archivo',
        runAnalysis: 'Ejecutar análisis emocional',
        loadingAction: 'Analizando audio...',
        noFile: 'Todavía no seleccionaste audio',
        processingTitle: 'Procesando tu muestra de audio',
        processingDescription: 'Mimi está escuchando, extrayendo features de audio y preparando una interpretación emocional.',
        missingFile: 'Elege un archivo WAV antes de iniciar el análisis.',
        unexpectedError: 'Ocurrió un error inesperado al analizar la muestra de audio.',
      },
      result: {
        overline: 'Resultado de la predicción',
        successChip: 'Inferencia del modelo completada',
        productChip: 'Presentación centrada en emoción',
        dominantMood: 'estado dominante',
        productReadout: 'lectura de producto',
        productReadoutValue: 'Insight emocional legible',
        backendGoal: '¿Qué sigue?',
        backendGoalValue: 'Tu eres lo más importante',
        panels: {
          interpretation: 'Interpretación',
          nextSteps: '¿Qué sigue?',
          limitations: 'Existen limitaciones, pero para Mimi todo es posible',
        },
        infoAlert:
          'Seguimos trabajando en mejorar la experiencia de Mimi. Por ahora, es solo una demo.',
        nextSteps:
          'Queremos que Mimi siempre esté aquí para ayudarte',
        limitations:
          'Sigue adelante y nunca olvides que no estás solo.',
      },
      idle: {
        title: 'Queremos que Mimi siempre esté aquí para ayudarte',
        description: 'Ahora mismo nos encontramos en una etapa de desarrollo y mejoras. Por ahora, es solo una demo.',
        support: 'Nuestro objetivo es lograr un modelo más preciso y emocionalmente expresivo.',
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
        'Mimi es una demo de machine learning que estima etiquetas emocionales a partir de features derivadas del audio. Mimi NO es un diagnóstico clínico, ni una evaluación psicológica. Mimi es una demo que intenta interpretar las emociones que se transmiten a través del audio.',
      heroPanel: {
        badge: 'Flujo emocional consciente',
        title: 'Escuchar, interpretar y devolver una lectura emocional más amable.',
        description: 'Mimi combina procesamiento de audio, clasificación emocional y una capa de producto más humana en una sola experiencia.',
        pillars: ['Escuchar', 'Predecir', 'Acompañar'],
      },
      experienceSection: {
        overline: '¿Cómo lo hacemos?',
        title: '¿Qué tanto dice lo que escuchas sobre tí?',
      },
      foundationSection: {
        overline: '¿Qué sostiene a Mimi?',
        title: 'Los principios y la intención de producto que sostienen la experiencia.',
      },
      gradient: {
        overline: '¿Por qué Mimi es diferente?',
        title: 'Este proyecto está pensado en pro del bienestar del usuario.',
      },
      methodology: [
        'Queremos entender cómo te sientes.',
        'Si bien Mimi NO puede diagnosticar de manera precisa, puede ayudarte a entender cómo te sientes.',
        'Una ruta de apoyo para que te sientas mejor.',
        'No estigmatizar, no juzgar, solo escuchar y entender.',
      ],
      principles: [
        {
          title: 'Primero la señal',
          description: 'El proyecto extrae features acústicas de una muestra de audio antes de enviarlas a un clasificador entrenado.',
        },
        {
          title: 'La interpretación es clave',
          description: 'Para que tenga calidad, la interfaz tiene que explicar qué predice el modelo y dónde empiezan sus limitaciones.',
        },
        {
          title: 'Los detalles importan',
          description: 'El valor no está solo en el modelo, sino también en presentar la inferencia mediante una experiencia limpia e intencional.',
        },
      ],
      portfolioAngles: [
        {
          title: '¿Cuál es el valor diferencial?',
          description: 'Combina diseño de interfaz, integración con API, storytelling de ML y criterio de producto en un proyecto Open Source.',
        },
        {
          title: '¿Qué buscamos con esto?',
          description: 'Queremos construir un proyecto Open Source que sea un ejemplo de cómo se puede hacer un producto de machine learning de manera ética y responsable.',
        },
        {
          title: '¿Qué sigue?',
          description: 'Seguimos trabajando para convertir a Mimi en una herramienta utilizada a nivel terapeutico, capaz de detectar patrones a tiempo.',
        },
      ],
      roadmap: {
        title: 'Roadmap técnico actual ',
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
