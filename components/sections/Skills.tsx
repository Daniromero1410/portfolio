"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { skills } from '@/lib/data';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiDjango,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAmazon,
  SiHeroku,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNextdotjs,
  SiFirebase,
  SiLaravel,
  SiGraphql
} from 'react-icons/si';

const iconMap: { [key: string]: any } = {
  Python: SiPython,
  SQL: SiMysql,
  JavaScript: SiJavascript,
  'C++': SiCplusplus,
  'HTML/CSS': SiHtml5,
  Django: SiDjango,
  Flask: SiFlask,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  AWS: SiAmazon,
  Heroku: SiHeroku,
  React: SiReact,
  Angular: SiAngular,
  Vue: SiVuedotjs,
  'Next.js': SiNextdotjs,
  Firebase: SiFirebase,
  Laravel: SiLaravel,
  GraphQL: SiGraphql,
  'RESTful APIs': SiNodedotjs,
  'Agile Methodologies': SiGit
};

export default function Skills() {
  const { t } = useLanguage();

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

  const SkillIcon = ({ skill }: { skill: string }) => {
    const Icon = iconMap[skill] || SiReact;
    return <Icon className="w-10 h-10 sm:w-12 sm:h-12" />;
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
          <p className="text-green-500 dark:text-lime-400 text-sm mb-2">• {t.skills.projects}</p>
          <h2 className="section-title">{t.skills.title}</h2>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Main skill icons */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-6 mb-12"
          >
            {[...skills.languages, ...skills.frameworks.slice(0, 3)].map((skill, index) => (
              <motion.div
                key={skill}
                variants={item}
                className="group relative flex flex-col items-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[rgb(var(--color-surface))] border-2 border-[rgb(var(--color-border))] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[rgb(var(--color-primary))] hover:shadow-lg">
                  <SkillIcon skill={skill} />
                </div>
                <div className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-center whitespace-nowrap">
                  {skill}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card space-y-6"
          >
            {/* Frontend */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-[rgb(var(--color-primary))]">
                {t.skills.frontend}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Angular'].map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-[rgb(var(--color-primary))]">
                {t.skills.backend}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-[rgb(var(--color-primary))]">
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
              <h3 className="font-bold text-lg mb-3 text-[rgb(var(--color-primary))]">
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

            {/* Others */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-[rgb(var(--color-primary))]">
                {t.skills.others}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.others.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
