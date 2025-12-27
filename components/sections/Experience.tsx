"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { experience, personalInfo } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Experience() {
  const { language, t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="resume" className="section-container bg-[rgb(var(--color-surface))]/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-green-500 dark:text-lime-400 text-sm mb-2">• {t.experience.title}</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-[rgb(var(--color-primary))]">+{personalInfo.yearsExperience}</span>
            {t.experience.subtitle} <span className="gradient-text">{t.experience.passion}</span> {t.experience.for}
            <br />
            {t.experience.programming}
          </h2>
        </div>

        {/* Experience Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="grid md:grid-cols-[300px_1fr] gap-6 items-start"
            >
              {/* Left side - Company card */}
              <div className="card flex items-center gap-4">
                {/* Company Logo placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(var(--color-primary))]/20 to-[rgb(var(--color-primary))]/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-[rgb(var(--color-border))]">
                  <span className="text-2xl font-bold text-[rgb(var(--color-primary))]">
                    {exp.company.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-lg text-[rgb(var(--color-text))]">{exp.company}</h3>
                  <p className="text-sm text-[rgb(var(--color-text-secondary))]">{exp.period}</p>
                </div>
              </div>

              {/* Right side - Details */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold gradient-text">
                  {language === 'es' ? exp.position.es : exp.position.en}
                </h4>

                <ul className="space-y-2">
                  {(language === 'es' ? exp.description.es : exp.description.en).map((desc, idx) => (
                    <li key={idx} className="flex gap-3 text-[rgb(var(--color-text-secondary))]">
                      <span className="text-[rgb(var(--color-primary))] mt-1.5 flex-shrink-0">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
