"use client";

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { experience, personalInfo } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { HiLightningBolt, HiSun, HiGlobe, HiOfficeBuilding } from 'react-icons/hi';

// Iconos personalizados para cada empresa
const companyIcons: { [key: string]: React.ReactNode } = {
  "GESTAR INNOVACIÓN": (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  "S.O.L": <HiSun className="w-6 h-6" />,
  "GEATIC": <HiGlobe className="w-6 h-6" />,
};

// Colores de fondo para cada empresa
const companyColors: { [key: string]: string } = {
  "GESTAR INNOVACIÓN": "from-emerald-500 to-teal-600",
  "S.O.L": "from-amber-500 to-orange-600",
  "GEATIC": "from-blue-500 to-indigo-600",
};

export default function Experience() {
  const { language, t } = useLanguage();
  const [selectedCompany, setSelectedCompany] = useState(0);

  // Verificación de seguridad
  if (!experience || experience.length === 0) {
    return null;
  }

  const selectedExp = experience[selectedCompany];

  // Verificación adicional
  if (!selectedExp) {
    return null;
  }

  const getCompanyIcon = (companyName: string) => {
    return companyIcons[companyName] || <HiOfficeBuilding className="w-6 h-6" />;
  };

  const getCompanyColor = (companyName: string) => {
    return companyColors[companyName] || "from-gray-500 to-gray-600";
  };

  return (
    <section id="resume" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card p-8"
      >
        {/* Section Header */}
        <div className="mb-10">
          <span className="section-label">{t.experience.title}</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono">
            <span className="gradient-text-lime">+{personalInfo.yearsExperience}</span>
            <span className="text-[rgb(var(--color-text-secondary))]">
              {language === 'es' ? ' años de ' : ' years of '}
            </span>
            <span className="gradient-text-lime">{t.experience.passion}</span>
            <span className="text-[rgb(var(--color-text-secondary))]">
              {language === 'es' ? ' por' : ' for'}
            </span>
            <br />
            <span className="text-[rgb(var(--color-text-secondary))]">
              {t.experience.programming}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-6">
          {/* Left side - Company List */}
          <div className="space-y-3">
            {experience.map((exp, index) => {
              const isSelected = selectedCompany === index;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => setSelectedCompany(index)}
                  className={`w-full p-4 rounded-lg flex items-center gap-4 text-left transition-all duration-300 border ${
                    isSelected 
                      ? 'border-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary))]/10' 
                      : 'border-[rgb(var(--color-border))] bg-[rgb(var(--color-background))]/50 hover:border-[rgb(var(--color-primary))]/50'
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Company Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${getCompanyColor(exp.company)} text-white shadow-lg`}>
                    {getCompanyIcon(exp.company)}
                  </div>
                  
                  {/* Company Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold font-mono text-[rgb(var(--color-text))] text-sm">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-[rgb(var(--color-text-secondary))] font-mono">
                      {exp.period}
                    </p>
                  </div>

                  {/* Selection indicator */}
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-primary))]"></div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right side - Experience Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCompany}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-lg bg-[rgb(var(--color-background))]/50 border border-[rgb(var(--color-border))] space-y-6"
            >
              {/* Position Title */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold gradient-text-lime font-mono">
                  {language === 'es' ? selectedExp.position?.es : selectedExp.position?.en}
                </h3>
                <p className="text-sm text-[rgb(var(--color-text-secondary))] font-mono mt-1">
                  {selectedExp.location}
                </p>
              </div>

              {/* Description */}
              <ul className="space-y-3">
                {(language === 'es' ? selectedExp.description?.es : selectedExp.description?.en)?.map((desc, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3 text-[rgb(var(--color-text-secondary))] font-mono text-sm"
                  >
                    <span className="text-[rgb(var(--color-primary))] mt-1">•</span>
                    <span>{desc}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="pt-4 border-t border-[rgb(var(--color-border))]">
                <div className="flex flex-wrap gap-2">
                  {selectedExp.technologies?.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="tech-badge"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
