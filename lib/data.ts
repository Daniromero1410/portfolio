export const personalInfo = {
  name: "Daniel Alejandro Romero Moreno",
  title: {
    es: "Ingeniero de Software",
    en: "Software Engineer"
  },
  subtitle: {
    es: "Ingeniero de Software Big Data & ML",
    en: "Software Engineer Big Data & ML"
  },
  phone: "+57 310 297 9752",
  email: "danielromero.software@gmail.com",
  location: "Bucaramanga, Colombia",
  linkedin: "linkedin.com/in/daniromerosoftware",
  github: "github.com/Daniromero1410",
  yearsExperience: 2,
  projectsCompleted: 10,
  satisfiedClients: 5,
  technologies: 15
};

export const about = {
  es: "Ingeniero de Software con experiencia en desarrollo de soluciones de Big Data, ETL pipelines y Machine Learning. Especializado en Python, procesamiento de datos y automatización de procesos. Experiencia en diseño de bases de datos SQL optimizadas, desarrollo web con Django y Flask, y proyectos de IoT con microcontroladores. Capacidad demostrada para liderar proyectos tecnológicos y entregar soluciones de alta calidad en entornos ágiles.",
  en: "Software Engineer with experience in developing Big Data solutions, ETL pipelines and Machine Learning. Specialized in Python, data processing and process automation. Experience in optimized SQL database design, web development with Django and Flask, and IoT projects with microcontrollers. Proven ability to lead technology projects and deliver high-quality solutions in agile environments."
};

export const experience = [
  {
    company: "GESTAR INNOVACIÓN",
    position: {
      es: "Ingeniero de Software",
      en: "Software Engineer"
    },
    period: "Ago 2025 - Presente",
    location: "Remoto, Colombia",
    description: {
      es: [
        "Desarrollo del sistema Consolidador T25 para procesamiento ETL de datos de tarifas médicas del sector salud colombiano",
        "Implementación de conexiones SFTP con GoAnywhere para extracción automatizada de archivos Excel de proveedores de salud",
        "Diseño de validación semántica para mejorar la precisión del procesamiento de datos de tarifas de servicios médicos",
        "Optimización de pipelines de datos para consolidación de información de la red de prestadores de POSITIVA Compañía de Seguros"
      ],
      en: [
        "Development of the T25 Consolidator system for ETL processing of medical rate data in the Colombian healthcare sector",
        "Implementation of SFTP connections with GoAnywhere for automated extraction of Excel files from healthcare providers",
        "Semantic validation design to improve accuracy in processing medical service rate data",
        "Data pipeline optimization for consolidating information from POSITIVA Insurance Company's provider network"
      ]
    },
    technologies: ["Python", "Pandas", "OpenPyXL", "SQL Server", "SFTP", "GoAnywhere"]
  },
  {
    company: "S.O.L",
    position: {
      es: "CTD Junior y Desarrollador de Soluciones",
      en: "Junior CTD & Solutions Developer"
    },
    period: "Sep 2023 - Presente",
    location: "Bucaramanga, Colombia",
    description: {
      es: [
        "Liderazgo e implementación de la estrategia tecnológica de la empresa",
        "Desarrollo web y automatización de procesos para optimizar operaciones digitales",
        "Gestión de datos y generación de reportes para toma de decisiones empresariales",
        "Soporte al crecimiento digital y operativo de la organización"
      ],
      en: [
        "Leadership and implementation of the company's technology strategy",
        "Web development and process automation to optimize digital operations",
        "Data management and report generation for business decision-making",
        "Support for the organization's digital and operational growth"
      ]
    },
    technologies: ["Python", "Django", "JavaScript", "SQL", "Tableau", "Git"]
  },
  {
    company: "GEATIC",
    position: {
      es: "Practicante de Desarrollo",
      en: "Development Intern"
    },
    period: "Jun 2024 - Nov 2024",
    location: "Colombia",
    description: {
      es: [
        "Implementación de Python con ArcPy para geoprocesamiento de infraestructura de oleoductos",
        "Gestión avanzada de bases de datos geoespaciales",
        "Supervisión de proyectos utilizando herramientas Esri como Experience Builder"
      ],
      en: [
        "Implementation of Python with ArcPy for geoprocessing of pipeline infrastructure",
        "Advanced management of geospatial databases",
        "Project supervision using Esri tools such as Experience Builder"
      ]
    },
    technologies: ["Python", "ArcPy", "ArcGIS", "PostgreSQL", "Experience Builder"]
  }
];

export const education = [
  {
    institution: "Universidad de Santander (UDES)",
    degree: {
      es: "Ingeniería de Software",
      en: "Software Engineering"
    },
    period: "2021 - 2025",
    location: "Bucaramanga, Colombia",
    graduation: {
      es: "Graduación: Enero 2026",
      en: "Graduation: January 2026"
    }
  },
  {
    institution: "Technical University of Riga",
    degree: {
      es: "Intercambio Académico en Computer Science",
      en: "Academic Exchange in Computer Science"
    },
    period: "Ene 2025 - Jul 2025",
    location: "Riga, Letonia"
  }
];

export const research = [
  {
    title: {
      es: "SIASIC-Santander - Sistema de Análisis Sísmico",
      en: "SIASIC-Santander - Seismic Analysis System"
    },
    description: {
      es: "Sistema inteligente para análisis de datos sísmicos de la región de Santander, enfocado en el fenómeno del Nido Sísmico de Bucaramanga.",
      en: "Intelligent system for seismic data analysis of the Santander region, focused on the Bucaramanga Seismic Nest phenomenon."
    },
    period: "2024"
  },
  {
    title: {
      es: "Predicción de Resistencia del Concreto con PET Reciclado",
      en: "Concrete Strength Prediction with Recycled PET"
    },
    description: {
      es: "Modelo de machine learning para predecir la resistencia del concreto incorporando materiales PET reciclados.",
      en: "Machine learning model to predict concrete strength incorporating recycled PET materials."
    },
    period: "2024"
  },
  {
    title: {
      es: "F1 Race Predictor - Deep Learning",
      en: "F1 Race Predictor - Deep Learning"
    },
    description: {
      es: "Sistema de predicción de resultados de carreras de Fórmula 1 usando redes neuronales profundas.",
      en: "Formula 1 race results prediction system using deep neural networks."
    },
    period: "2024"
  }
];

export const projects = [
  {
    title: {
      es: "Consolidador T25 - Sistema ETL Healthcare",
      en: "T25 Consolidator - Healthcare ETL System"
    },
    image: "/images/projects/consolidador-t25.png",
    description: {
      es: "Sistema de procesamiento de datos para consolidación de tarifas médicas de prestadores de salud en Colombia.",
      en: "Data processing system for consolidation of medical rates from healthcare providers in Colombia."
    },
    details: {
      es: [
        "Implementación de pipelines SFTP para extracción automatizada de archivos Excel",
        "Diseño de validación semántica para mejorar precisión del procesamiento",
        "Optimización de ingesta de datos para la red de prestadores de POSITIVA"
      ],
      en: [
        "Implementation of SFTP pipelines for automated Excel file extraction",
        "Semantic validation design to improve processing accuracy",
        "Data ingestion optimization for POSITIVA's provider network"
      ]
    },
    technologies: ["Python", "Pandas", "OpenPyXL", "SQL Server", "SFTP"],
    client: "POSITIVA Compañía de Seguros",
    completionTime: "En desarrollo",
    liveUrl: "",
    githubUrl: "https://github.com/Daniromero1410/Consolidador-T25-Positiva"
  },
  {
    title: {
      es: "SIASIC-Santander - Sistema de Análisis Sísmico",
      en: "SIASIC-Santander - Seismic Analysis System"
    },
    image: "/images/projects/siasic-santander.png",
    description: {
      es: "Sistema inteligente para análisis de datos sísmicos de la región de Santander, Colombia, enfocado en el Nido Sísmico de Bucaramanga.",
      en: "Intelligent system for seismic data analysis of Santander region, Colombia, focused on the Bucaramanga Seismic Nest."
    },
    details: {
      es: [
        "Análisis de datos sísmicos históricos de la región",
        "Implementación de modelos de Machine Learning para detección de patrones",
        "Visualización interactiva de datos geoespaciales"
      ],
      en: [
        "Historical seismic data analysis of the region",
        "Implementation of Machine Learning models for pattern detection",
        "Interactive visualization of geospatial data"
      ]
    },
    technologies: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
    client: "Proyecto Académico",
    completionTime: "En desarrollo",
    liveUrl: "",
    githubUrl: "https://github.com/Daniromero1410/SIASIC-Santander-Sistema-sismico-integral"
  },
  {
    title: {
      es: "F1 Race Predictor - Deep Learning",
      en: "F1 Race Predictor - Deep Learning"
    },
    image: "/images/projects/f1-predictor.png",
    description: {
      es: "Sistema de predicción de resultados de carreras de Fórmula 1 usando redes neuronales profundas.",
      en: "Formula 1 race results prediction system using deep neural networks."
    },
    details: {
      es: [
        "Recopilación y procesamiento de datos históricos de carreras F1",
        "Entrenamiento de modelos de deep learning para predicción",
        "Interfaz web para visualización de predicciones"
      ],
      en: [
        "Collection and processing of historical F1 race data",
        "Training deep learning models for prediction",
        "Web interface for prediction visualization"
      ]
    },
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    client: "Proyecto Personal",
    completionTime: "1 Mes",
    liveUrl: "",
    githubUrl: "https://github.com/Daniromero1410/f1-predictor"
  }
];

export const skills = {
  languages: ["Python", "SQL", "JavaScript", "C/C++", "HTML/CSS"],
  frameworks: ["Django", "Flask", "Node.js", "Astro", "TensorFlow", "Scikit-learn"],
  dataETL: ["Pandas", "NumPy", "OpenPyXL", "ETL Pipelines", "Tableau", "DBMS"],
  databases: ["SQL Server", "PostgreSQL", "MongoDB", "MySQL"],
  tools: ["Git", "GitHub", "Docker", "ArcGIS", "ArcPy", "SFTP/GoAnywhere", "Kali Linux"],
  methodologies: ["Scrum", "Kanban", "Agile"]
};

export const languages = [
  {
    language: {
      es: "Español",
      en: "Spanish"
    },
    level: {
      es: "Nativo",
      en: "Native"
    }
  },
  {
    language: {
      es: "Inglés",
      en: "English"
    },
    level: {
      es: "B2 (Intermedio-Alto)",
      en: "B2 (Upper-Intermediate)"
    }
  }
];

export const socialLinks = {
  github: "https://github.com/Daniromero1410",
  linkedin: "https://linkedin.com/in/daniromerosoftware",
  twitter: "https://twitter.com/daniromero1410",
  email: "mailto:danielromero.software@gmail.com"
};

// Git Journal entries - proyectos recientes de Daniel
export const gitJournal = [
  { date: "Dic 2024:", project: "Consolidador-T25-Healthcare-ETL" },
  { date: "Nov 2024:", project: "SIASIC-Santander-Seismic-Analysis" },
  { date: "Oct 2024:", project: "F1-Race-Predictor-DeepLearning" },
  { date: "Sep 2024:", project: "ArcGIS-Pipeline-Geoprocessing" },
  { date: "Ago 2024:", project: "Concrete-Strength-ML-Predictor" },
]