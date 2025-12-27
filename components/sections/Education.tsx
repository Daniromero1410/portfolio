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
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <HiAcademicCap className="w-8 h-8 text-[rgb(var(--color-primary))]" />
            <h2 className="text-3xl font-bold">{t.education.title}</h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={item} className="card group">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[rgb(var(--color-primary))] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm text-[rgb(var(--color-text-secondary))]">{edu.period}</p>
                    <h3 className="font-bold text-lg gradient-text">{edu.institution}</h3>
                    <p className="text-[rgb(var(--color-text-secondary))]">
                      {language === 'es' ? edu.degree.es : edu.degree.en}
                    </p>
                    {edu.location && (
                      <p className="text-sm text-[rgb(var(--color-text-secondary))] italic">
                        📍 {edu.location}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Research */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <HiLightBulb className="w-8 h-8 text-[rgb(var(--color-primary))]" />
            <h2 className="text-3xl font-bold">{t.research.title}</h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {research.map((item, index) => (
              <motion.div key={index} variants={item} className="card group">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[rgb(var(--color-primary))] rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm text-[rgb(var(--color-text-secondary))]">{item.period}</p>
                    <h3 className="font-bold text-lg gradient-text">
                      {language === 'es' ? item.title.es : item.title.en}
                    </h3>
                    <p className="text-[rgb(var(--color-text-secondary))]">
                      {language === 'es' ? item.description.es : item.description.en}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
