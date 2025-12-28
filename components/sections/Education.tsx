"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { education, research } from '@/lib/data';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiLightBulb } from 'react-icons/hi';

export default function Education() {
  const { language, t } = useLanguage();

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
    <section className="section-container">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-simple p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <HiAcademicCap className="w-8 h-8 text-[rgb(var(--color-primary))]" />
            <h2 className="text-2xl font-bold font-mono">{t.education.title}</h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                variants={item} 
                className="flex items-start gap-4 group"
              >
                <div className="timeline-dot group-hover:scale-150 transition-transform"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-[rgb(var(--color-text-secondary))] font-mono">
                    {edu.period}:
                  </p>
                  <h3 className="font-bold text-[rgb(var(--color-primary))] font-mono group-hover:text-[rgb(var(--color-cyan))] transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-[rgb(var(--color-text-secondary))] font-mono">
                    {language === 'es' ? edu.degree.es : edu.degree.en}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Research */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-simple p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <HiLightBulb className="w-8 h-8 text-[rgb(var(--color-primary))]" />
            <h2 className="text-2xl font-bold font-mono">{t.research.title}</h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {research.map((res, index) => (
              <motion.div 
                key={index} 
                variants={item} 
                className="flex items-start gap-4 group"
              >
                <div className="timeline-dot group-hover:scale-150 transition-transform"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-[rgb(var(--color-text-secondary))] font-mono">
                    {res.period}:
                  </p>
                  <h3 className="font-bold text-[rgb(var(--color-primary))] font-mono group-hover:text-[rgb(var(--color-cyan))] transition-colors">
                    {language === 'es' ? res.title.es : res.title.en}
                  </h3>
                  <p className="text-sm text-[rgb(var(--color-text-secondary))] font-mono">
                    {language === 'es' ? res.description.es : res.description.en}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
