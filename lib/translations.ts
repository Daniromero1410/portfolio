export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      resume: "Resumen",
      services: "Servicios",
      portfolio: "Portafolio",
      blog: "Blog",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, Soy",
      expertise: "Con experiencia en tecnologías de vanguardia como",
      deliver: "... entrego soluciones web innovadoras y robustas.",
      downloadCV: "Descargar mi CV",
      andMore: "...y más"
    },
    stats: {
      experience: "Años de Experiencia",
      projects: "Proyectos Completados",
      clients: "Clientes Satisfechos",
      awards: "Premios Ganados"
    },
    cooperation: {
      title: "Cooperación",
      subtitle: "Más de",
      companies: "empresas",
      trusted: "confían",
      worldwide: "en todo el mundo"
    },
    journal: {
      title: "Git Journaling"
    },
    experience: {
      title: "Experiencia",
      subtitle: "años de",
      passion: "pasión",
      for: "por",
      programming: "técnicas de programación"
    },
    education: {
      title: "Educación"
    },
    research: {
      title: "Investigación"
    },
    recentWorks: {
      title: "Mis Trabajos Recientes",
      projectInfo: "Información del Proyecto",
      client: "Cliente",
      completionTime: "Tiempo de Finalización",
      technologies: "Tecnologías",
      liveDemo: "Demo en Vivo",
      viewOnGithub: "Ver en Github"
    },
    skills: {
      title: "Mis Habilidades",
      projects: "Proyectos",
      frontend: "Front-End:",
      backend: "Back-End:",
      databases: "Bases de Datos:",
      tools: "Herramientas & Plataformas:",
      others: "Otros:"
    },
    blog: {
      title: "Últimas Publicaciones del Blog",
      readMore: "Leer más"
    },
    contact: {
      title: "Conectemos",
      name: "Tu nombre",
      phone: "Teléfono",
      email: "Email",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar Mensaje",
      phoneNumber: "Número de Teléfono",
      skype: "Skype",
      address: "Dirección"
    },
    footer: {
      rights: "Todos los derechos reservados"
    }
  },
  en: {
    nav: {
      about: "About me",
      resume: "Resume",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact"
    },
    hero: {
      greeting: "Hey, I'm",
      expertise: "With expertise in cutting-edge technologies such as",
      deliver: "... I deliver web solutions that are both innovative and robust.",
      downloadCV: "Download my CV",
      andMore: "...and more"
    },
    stats: {
      experience: "Year Experience",
      projects: "Projects Completed",
      clients: "Satisfied Clients",
      awards: "Awards Winner"
    },
    cooperation: {
      title: "Cooperation",
      subtitle: "More than",
      companies: "companies",
      trusted: "trusted",
      worldwide: "worldwide"
    },
    journal: {
      title: "Git Journaling"
    },
    experience: {
      title: "Experience",
      subtitle: "years of",
      passion: "passion",
      for: "for",
      programming: "programming techniques"
    },
    education: {
      title: "Education"
    },
    research: {
      title: "Researched"
    },
    recentWorks: {
      title: "My Recent Works",
      projectInfo: "Project Info",
      client: "Client",
      completionTime: "Completion Time",
      technologies: "Technologies",
      liveDemo: "Live Demo",
      viewOnGithub: "View on Github"
    },
    skills: {
      title: "My Skills",
      projects: "Projects",
      frontend: "Front-End:",
      backend: "Back-End:",
      databases: "Databases:",
      tools: "Tools & Platforms:",
      others: "Others:"
    },
    blog: {
      title: "Latest Blog Posts",
      readMore: "Read more"
    },
    contact: {
      title: "Let's connect",
      name: "Your name",
      phone: "Phone",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      phoneNumber: "Phone Number",
      skype: "Skype",
      address: "Address"
    },
    footer: {
      rights: "All rights reserved"
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.es;
