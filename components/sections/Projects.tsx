"use client";

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { projects } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const { language, t } = useLanguage();
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="portfolio" className="section-container bg-[rgb(var(--color-surface))]/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">{t.recentWorks.title}</h2>
        </div>

        {/* Project Showcase */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Project Image */}
              <div className="relative group">
                <div className="aspect-video bg-gradient-to-br from-[rgb(var(--color-primary))]/20 to-[rgb(var(--color-primary))]/5 rounded-lg overflow-hidden border border-[rgb(var(--color-border))] flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-500/10 to-emerald-600/10">
                    <span className="text-6xl">💻</span>
                  </div>
                </div>

                {/* Overlay with links on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[rgb(var(--color-primary))] text-white rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <HiExternalLink className="w-5 h-5" />
                    {t.recentWorks.liveDemo}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <FaGithub className="w-5 h-5" />
                    {t.recentWorks.viewOnGithub}
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold gradient-text mb-3">
                    {language === 'es' ? project.title.es : project.title.en}
                  </h3>
                  <p className="text-[rgb(var(--color-text-secondary))] text-lg">
                    {language === 'es' ? project.description.es : project.description.en}
                  </p>
                </div>

                {/* Project Info */}
                <div className="card space-y-3">
                  <h4 className="font-bold text-[rgb(var(--color-primary))]">{t.recentWorks.projectInfo}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-[rgb(var(--color-text-secondary))]">{t.recentWorks.client}</p>
                      <p className="font-semibold">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-[rgb(var(--color-text-secondary))]">{t.recentWorks.completionTime}</p>
                      <p className="font-semibold">{project.completionTime}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[rgb(var(--color-text-secondary))] mb-2">{t.recentWorks.technologies}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
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
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))] hover:scale-110 transition-all"
              aria-label="Previous project"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>

            {/* Project indicators */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentProject
                      ? 'w-8 bg-[rgb(var(--color-primary))]'
                      : 'w-2 bg-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-primary))]/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))] hover:scale-110 transition-all"
              aria-label="Next project"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
