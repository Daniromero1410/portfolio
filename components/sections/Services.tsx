"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { HiCode, HiDatabase, HiCog, HiChartBar, HiLocationMarker, HiLightningBolt } from 'react-icons/hi';

const services = [
  {
    icon: HiChartBar,
    title: {
      es: "Big Data & ETL",
      en: "Big Data & ETL"
    },
    description: {
      es: "Desarrollo de pipelines ETL para procesamiento y consolidación de datos usando",
      en: "Development of ETL pipelines for data processing and consolidation using"
    },
    technologies: ["Python", "Pandas", "SQL Server"],
    extra: {
      es: "y automatización de flujos de datos.",
      en: "and data flow automation."
    }
  },
  {
    icon: HiDatabase,
    title: {
      es: "Gestión de Bases de Datos",
      en: "Database Management"
    },
    description: {
      es: "Diseño y gestión de bases de datos SQL optimizadas con",
      en: "Design and management of optimized SQL databases with"
    },
    technologies: ["PostgreSQL", "SQL Server", "MySQL"],
    extra: {
      es: "y MongoDB para soluciones NoSQL.",
      en: "and MongoDB for NoSQL solutions."
    }
  },
  {
    icon: HiLightningBolt,
    title: {
      es: "Machine Learning",
      en: "Machine Learning"
    },
    description: {
      es: "Implementación de modelos de ML para análisis predictivo con",
      en: "Implementation of ML models for predictive analytics with"
    },
    technologies: ["TensorFlow", "Scikit-learn"],
    extra: {
      es: "y procesamiento de datos con Pandas y NumPy.",
      en: "and data processing with Pandas and NumPy."
    }
  },
  {
    icon: HiCode,
    title: {
      es: "Desarrollo Web",
      en: "Web Development"
    },
    description: {
      es: "Creación de aplicaciones web con frameworks modernos como",
      en: "Building web applications with modern frameworks like"
    },
    technologies: ["Django", "Flask", "Node.js"],
    extra: {
      es: "y desarrollo frontend con Astro.",
      en: "and frontend development with Astro."
    }
  },
  {
    icon: HiLocationMarker,
    title: {
      es: "Geoprocesamiento",
      en: "Geoprocessing"
    },
    description: {
      es: "Análisis de datos geoespaciales con herramientas como",
      en: "Geospatial data analysis with tools like"
    },
    technologies: ["ArcGIS", "ArcPy"],
    extra: {
      es: "para proyectos de infraestructura.",
      en: "for infrastructure projects."
    }
  },
  {
    icon: HiCog,
    title: {
      es: "Automatización",
      en: "Automation"
    },
    description: {
      es: "Automatización de procesos empresariales y flujos de trabajo con",
      en: "Business process and workflow automation with"
    },
    technologies: ["Python", "SFTP", "GoAnywhere"],
    extra: {
      es: "para optimización operacional.",
      en: "for operational optimization."
    }
  }
];

export default function Services() {
  const { language } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card p-8"
      >
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="section-label justify-center">
            {language === 'es' ? 'Servicios' : 'Services'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono">
            {language === 'es' ? 'Diseñando ' : 'Designing '}
            <span className="gradient-text-lime">
              {language === 'es' ? 'soluciones' : 'solutions'}
            </span>
            <span className="text-[rgb(var(--color-text-secondary))]">
              {language === 'es' ? ' personalizadas' : ' customized'}
            </span>
            <br />
            <span className="text-[rgb(var(--color-text-secondary))]">
              {language === 'es' ? 'para tus necesidades' : 'for your needs'}
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-5 rounded-lg bg-[rgb(var(--color-background))]/50 border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))]/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <service.icon className="w-8 h-8 text-[rgb(var(--color-primary))] mb-4 group-hover:scale-110 transition-transform" />
              
              {/* Title */}
              <h3 className="font-bold text-base font-mono text-[rgb(var(--color-text))] mb-2">
                {language === 'es' ? service.title.es : service.title.en}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-[rgb(var(--color-text-secondary))] font-mono leading-relaxed">
                {language === 'es' ? service.description.es : service.description.en}{' '}
                {service.technologies.map((tech, i) => (
                  <span key={tech}>
                    <span className="text-[rgb(var(--color-primary))]">{tech}</span>
                    {i < service.technologies.length - 1 && ', '}
                  </span>
                ))}
                {', '}
                {language === 'es' ? service.extra.es : service.extra.en}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
