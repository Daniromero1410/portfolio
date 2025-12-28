"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { projects } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  const { language, t } = useLanguage();
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageError, setImageError] = useState<{[key: number]: boolean}>({});

  // Auto-play cada 5 segundos
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextProject = () => {
    setIsAutoPlaying(false);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIsAutoPlaying(false);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentProject(index);
  };

  const project = projects[currentProject];

  return (
    <section id="portfolio" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card p-8"
      >
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="section-label justify-center">Portfolio</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono">
            {t.recentWorks.title}
          </h2>
        </div>

        {/* Project Showcase */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-8 items-start"
            >
              {/* Project Image */}
              <div className="relative group">
                <div className="rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-background))] aspect-[4/3] flex items-center justify-center overflow-hidden relative">
                  
                  {/* Si el proyecto tiene imagen configurada, mostrarla */}
                  {project.image && !imageError[currentProject] ? (
                    <Image
                      src={project.image}
                      alt={language === 'es' ? project.title.es : project.title.en}
                      fill
                      className="object-cover"
                      onError={() => setImageError(prev => ({...prev, [currentProject]: true}))}
                    />
                  ) : (
                    /* Placeholder cuando no hay imagen - puedes cambiar este diseño */
                    <div className="flex flex-col items-center justify-center text-[rgb(var(--color-text-secondary))]">
                      <svg className="w-24 h-24 mb-3 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                        <path d="M7 8l3 3-3 3M13 14h4" strokeLinecap="round" />
                      </svg>
                      <span className="text-xs font-mono opacity-40">
                        {/* Puedes cambiar este texto */}
                        Sin preview
                      </span>
                    </div>
                  )}
                  
                  {/* Overlay on hover con botones */}
                  <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 rounded-xl">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[rgb(var(--color-primary))] text-slate-900 rounded-lg flex items-center gap-2 font-mono text-sm font-bold hover:opacity-90 transition-opacity"
                      >
                        <HiExternalLink className="w-4 h-4" />
                        {t.recentWorks.liveDemo}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-700 text-white rounded-lg flex items-center gap-2 font-mono text-sm hover:bg-slate-600 transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold gradient-text-lime font-mono mb-3">
                    {language === 'es' ? project.title.es : project.title.en}
                  </h3>
                  <p className="text-[rgb(var(--color-text-secondary))] font-mono text-sm leading-relaxed">
                    {language === 'es' ? project.description.es : project.description.en}
                  </p>
                </div>

                {/* Project Info Card */}
                <div className="p-5 rounded-lg bg-[rgb(var(--color-background))]/50 border border-[rgb(var(--color-border))] space-y-4">
                  <h4 className="font-bold text-[rgb(var(--color-primary))] font-mono text-sm">
                    {t.recentWorks.projectInfo}
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                    <div>
                      <p className="text-[rgb(var(--color-text-secondary))] text-xs mb-1">{t.recentWorks.client}</p>
                      <p className="text-[rgb(var(--color-text))]">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-[rgb(var(--color-text-secondary))] text-xs mb-1">{t.recentWorks.completionTime}</p>
                      <p className="text-[rgb(var(--color-text))]">{project.completionTime}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[rgb(var(--color-text-secondary))] text-xs font-mono mb-2">
                      {t.recentWorks.technologies}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevProject}
              className="p-3 rounded-lg bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary))]/10 transition-all"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2 items-center">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'w-8 bg-[rgb(var(--color-primary))]'
                      : 'w-2 bg-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-primary))]/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 rounded-lg bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary))]/10 transition-all"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Auto-play indicator */}
          {isAutoPlaying && (
            <div className="flex justify-center mt-4">
              <div className="h-0.5 w-16 bg-[rgb(var(--color-border))] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[rgb(var(--color-primary))]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  key={currentProject}
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
