"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { personalInfo } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiDownload, HiCalendar, HiDesktopComputer, HiUserGroup, HiCode } from 'react-icons/hi';
import {
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiFlask,
  SiTensorflow,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiJavascript,
  SiNumpy,
  SiPandas,
  SiLinux,
  SiGithub,
  SiAstro,
  SiNextdotjs,
  SiFastapi,
  SiSupabase,
} from 'react-icons/si';

// Componente personalizado para Power BI
const PowerBIIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
    <path d="M10 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-9zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5zm10-8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8z" />
  </svg>
);

// Componente personalizado para Tableau
const TableauIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
    <path d="M11.654 5.227h.692v3.337h3.266v.678h-3.266v3.337h-.692V9.242H8.388v-.678h3.266V5.227zM5.227 11.654h.678v2.493h2.493v.692H5.905v2.493h-.678v-2.493H2.734v-.692h2.493v-2.493zm8.306 0h.678v2.493h2.493v.692h-2.493v2.493h-.678v-2.493h-2.493v-.692h2.493v-2.493zM11.654.734h.692v2.493h2.493v.692h-2.493v2.493h-.692V3.919H9.161v-.692h2.493V.734zm0 15.586h.692v2.493h2.493v.692h-2.493v2.493h-.692v-2.493H9.161v-.692h2.493v-2.493z" />
  </svg>
);

// Componente para Scikit-learn
const ScikitLearnIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <circle cx="12" cy="12" r="3" />
    <line x1="8" y1="7.5" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="16" y1="7.5" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="8" y1="16.5" x2="10" y2="14" stroke="currentColor" strokeWidth="1.5" />
    <line x1="16" y1="16.5" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Componente personalizado para ArcGIS
const ArcGISIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

export default function Hero() {
  const { language, t } = useLanguage();
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  // Palabras que rotan en el título
  const rotatingWords = ['Big Data & ML', 'ETL Pipelines', 'Data Science', 'Machine Learn'];

  // Efecto typewriter
  useEffect(() => {
    const currentWord = rotatingWords[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, rotatingWords]);

  // Tecnologías organizadas según el CV
  const allTechnologies = [
    [
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiDjango, name: "Django", color: "#44B78B" },
      { icon: SiFlask, name: "Flask", color: "#61DAFB" },
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
      { icon: ScikitLearnIcon, name: "Scikit-learn", color: "#F7931E" },
    ],
    [
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
      { icon: PowerBIIcon, name: "Power BI", color: "#F2C811" },
      { icon: TableauIcon, name: "Tableau", color: "#E97627" },
    ],
    [
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiAstro, name: "Astro", color: "#FF5D01" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiGit, name: "Git", color: "#F05032" },
    ],
    [
      { icon: SiPandas, name: "Pandas", color: "#E70488" },
      { icon: SiNumpy, name: "NumPy", color: "#4DABCF" },
      { icon: ArcGISIcon, name: "ArcGIS", color: "#2C7AC3" },
      { icon: SiGithub, name: "GitHub", color: "#ffffff" },
      { icon: SiLinux, name: "Linux", color: "#FCC624" },
    ],
  ];

  // Rotar tecnologías cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % allTechnologies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allTechnologies.length]);

  const currentTechnologies = allTechnologies[currentTechIndex];

  const stats = [
    { icon: HiCalendar, value: personalInfo.yearsExperience, label: language === 'es' ? 'Años Experiencia' : 'Year Experience' },
    { icon: HiDesktopComputer, value: personalInfo.projectsCompleted, label: language === 'es' ? 'Proyectos Completados' : 'Projects Completed' },
    { icon: HiUserGroup, value: personalInfo.satisfiedClients, label: language === 'es' ? 'Clientes Satisfechos' : 'Satisfied Clients' },
    { icon: HiCode, value: personalInfo.technologies, label: language === 'es' ? 'Tecnologías' : 'Technologies' },
  ];

  return (
    <section id="about" className="pt-24">
      <div className="section-container !py-0">
        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card p-6 md:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-t-[200px] blur-3xl opacity-30"></div>

                {/* Profile container */}
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-t-[180px] overflow-hidden bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 border-2 border-[rgb(var(--color-border))]">
                  {/* Imagen de perfil */}
                  <Image
                    src="/images/profile.png"
                    alt="Daniel Romero"
                    fill
                    className="object-cover object-top"
                    priority
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                  {/* Code badge */}
                  <motion.div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center shadow-lg z-10"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-slate-900 text-lg font-bold">&lt;/&gt;</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {/* Greeting with code style */}
              <p className="font-mono text-sm">
                <span className="code-tag-red">&lt;span&gt;</span>
                <span className="text-[rgb(var(--color-text))]">{t.hero.greeting} </span>
                <span className="gradient-text-lime font-bold">{personalInfo.name.split(' ')[0]}</span>
                <span className="text-[rgb(var(--color-text))]">!</span>
                <span className="code-tag-red">&lt;/span&gt;</span>
              </p>

              {/* Title with typewriter effect */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight font-mono">
                {language === 'es' ? 'Ingeniero ' : 'Software '}
                <span className="gradient-text-lime">{'{'}</span>
                <span className="gradient-text-lime">{displayText}</span>
                <span className="animate-pulse text-[rgb(var(--color-primary))]">|</span>
                <span className="gradient-text-lime">{'}'}</span>
                <br />
                <span className="text-[rgb(var(--color-text))]">{language === 'es' ? 'de Software' : 'Engineer'}</span>
              </h1>

              {/* Description with code style */}
              <div className="font-mono text-sm text-[rgb(var(--color-text-secondary))]">
                <span className="code-tag-red">&lt;p&gt;</span>
                {language === 'es'
                  ? 'Con experiencia en tecnologías como '
                  : 'With expertise in technologies such as '}
                <span className="text-[rgb(var(--color-primary))]">Python</span>,{' '}
                <span className="text-[rgb(var(--color-primary))]">Django</span>,{' '}
                <span className="text-[rgb(var(--color-primary))]">TensorFlow</span>,{' '}
                {language === 'es' ? 'y' : 'and'}{' '}
                <span className="text-[rgb(var(--color-primary))]">SQL</span>
                ... {language === 'es' ? 'entrego soluciones de datos innovadoras y robustas' : 'I deliver innovative and robust data solutions'}.
                <span className="code-tag-red">&lt;/p&gt;</span>
              </div>

              {/* Tech stack icons with animation */}
              <div className="flex items-center gap-3 flex-wrap">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTechIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    {currentTechnologies.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="tech-icon-box group relative"
                        title={tech.name}
                      >
                        <tech.icon className="w-6 h-6 transition-colors" style={{ color: tech.color }} />
                        {/* Tooltip */}
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[rgb(var(--color-surface))] px-2 py-1 rounded z-10">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
                <span className="text-[rgb(var(--color-text-secondary))] text-sm font-mono">
                  {t.hero.andMore}
                </span>
              </div>

              {/* Download CV Button */}
              <a
                href="/cv/CV_Daniel_Romero.pdf"
                download="CV_Daniel_Romero.pdf"
                className="btn-bracket text-base inline-flex"
              >
                <HiDownload className="w-5 h-5 text-[rgb(var(--color-primary))]" />
                {t.hero.downloadCV}
              </a>
            </motion.div>
          </div>
        </motion.div>
        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card mt-2 py-6 px-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className={`flex items-center justify-center ${index < stats.length - 1 ? 'md:border-r border-[rgb(var(--color-border))]' : ''
                  } ${index === 1 ? 'border-l md:border-l-0 border-[rgb(var(--color-border))]' : ''}
                ${index === 3 ? 'border-l border-[rgb(var(--color-border))]' : ''}
                ${index >= 2 ? 'border-t md:border-t-0 border-[rgb(var(--color-border))] pt-4 md:pt-0 mt-4 md:mt-0' : ''}`}
              >
                <div className="text-center w-full py-2">
                  <stat.icon className="w-4 h-4 text-[rgb(var(--color-primary))] mb-2 mx-auto" />
                  <div className="text-3xl md:text-4xl font-bold font-mono text-[rgb(var(--color-text))]">
                    {stat.value}<span className="text-[rgb(var(--color-primary))]">+</span>
                  </div>
                  <div className="text-xs text-[rgb(var(--color-text-secondary))] font-mono mt-1">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
