"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { skills } from '@/lib/data';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiDjango,
  SiFlask,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiTensorflow,
  SiPandas,
} from 'react-icons/si';

const iconMap: { [key: string]: any } = {
  Python: SiPython,
  JavaScript: SiJavascript,
  Django: SiDjango,
  Flask: SiFlask,
  'Node.js': SiNodedotjs,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  TensorFlow: SiTensorflow,
  Pandas: SiPandas,
};

const mainSkills = ['Python', 'JavaScript', 'Django', 'TensorFlow', 'PostgreSQL', 'Docker', 'Git', 'Pandas'];

export default function Skills() {
  const { language, t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-label justify-center">{t.skills.projects}</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono">
            {t.skills.title}
          </h2>
        </div>

        {/* Main Skills Icons */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {mainSkills.map((skill) => {
            const Icon = iconMap[skill] || SiPython;
            return (
              <motion.div
                key={skill}
                variants={item}
                className="group relative"
              >
                <div className="tech-icon-box w-16 h-16 sm:w-20 sm:h-20">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[rgb(var(--color-text-secondary))] group-hover:text-[rgb(var(--color-primary))] transition-colors" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono whitespace-nowrap">
                  {skill}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-simple p-8 space-y-6"
        >
          {/* Languages */}
          <div>
            <h3 className="font-bold text-[rgb(var(--color-primary))] font-mono mb-3">
              {language === 'es' ? 'Lenguajes:' : 'Languages:'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="font-bold text-[rgb(var(--color-primary))] font-mono mb-3">
              Frameworks:
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Data & ETL */}
          <div>
            <h3 className="font-bold text-[rgb(var(--color-primary))] font-mono mb-3">
              Data & ETL:
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.dataETL.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="font-bold text-[rgb(var(--color-primary))] font-mono mb-3">
              {t.skills.databases}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-bold text-[rgb(var(--color-primary))] font-mono mb-3">
              {t.skills.tools}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Methodologies */}
          <div>
            <h3 className="font-bold text-[rgb(var(--color-primary))] font-mono mb-3">
              {language === 'es' ? 'Metodologías:' : 'Methodologies:'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.methodologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
