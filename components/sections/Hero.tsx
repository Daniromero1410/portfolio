"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { personalInfo } from '@/lib/data';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import {
  SiFirebase,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiAngular,
  SiVuedotjs,
  SiLaravel
} from 'react-icons/si';

export default function Hero() {
  const { language, t } = useLanguage();

  const technologies = [
    { icon: SiNodedotjs, name: "Node.JS", color: "#68A063" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiAngular, name: "Angular", color: "#DD0031" },
    { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-transparent to-[rgb(var(--color-surface))]/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-lime-500 dark:from-lime-400 dark:to-green-400 rounded-t-full -rotate-6 blur-2xl opacity-20"></div>

              {/* Profile image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-t-full overflow-hidden border-4 border-[rgb(var(--color-primary))] bg-gradient-to-br from-teal-500 to-emerald-600">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-end justify-center bg-gradient-to-br from-teal-600 to-emerald-700">
                  {/* Code icon badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[rgb(var(--color-primary))] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">&lt;/&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-red-500 dark:text-red-400 text-sm sm:text-base">
                <span className="font-mono">&lt;span&gt;</span>
                {t.hero.greeting} <span className="gradient-text font-bold">{personalInfo.name.split(' ')[0]}</span>
                <span className="font-mono">!&lt;/span&gt;</span>
              </p>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {language === 'es' ? personalInfo.subtitle.es.split(' ').slice(0, 2).join(' ') : personalInfo.subtitle.en.split(' ').slice(0, 2).join(' ')}{' '}
                <span className="gradient-text">
                  {language === 'es' ? '{Full Stack}' : '{Full Stack}'}
                </span>
                <br />
                {language === 'es' ? personalInfo.subtitle.es.split(' ').slice(3).join(' ') : personalInfo.subtitle.en.split(' ').slice(3).join(' ')}
              </h1>
            </div>

            {/* Description */}
            <div className="text-[rgb(var(--color-text-secondary))] space-y-2">
              <p className="font-mono text-sm">
                <span className="text-red-500 dark:text-red-400">&lt;p&gt;</span>
                {t.hero.expertise}{' '}
                <span className="text-[rgb(var(--color-primary))]">Node.JS</span>,{' '}
                <span className="text-[rgb(var(--color-primary))]">React</span>,{' '}
                <span className="text-[rgb(var(--color-primary))]">Angular</span>, {language === 'es' ? 'y' : 'and'}{' '}
                <span className="text-[rgb(var(--color-primary))]">Laravel</span>
                {t.hero.deliver}
                <span className="text-red-500 dark:text-red-400">&lt;/p&gt;</span>
              </p>
            </div>

            {/* Tech stack icons */}
            <div className="flex items-center gap-4 flex-wrap">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[rgb(var(--color-primary))]">
                    <tech.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: tech.color }} />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[rgb(var(--color-surface))] px-2 py-1 rounded text-xs whitespace-nowrap border border-[rgb(var(--color-border))]">
                    {tech.name}
                  </div>
                </motion.div>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-[rgb(var(--color-text-secondary))] text-sm"
              >
                {t.hero.andMore}
              </motion.span>
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="/cv/Daniel_Romero_CV.pdf"
                download
                className="btn-primary inline-flex"
              >
                <HiDownload className="w-5 h-5" />
                {t.hero.downloadCV}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { icon: '📅', value: `${personalInfo.yearsExperience}+`, label: t.stats.experience },
            { icon: '📊', value: `${personalInfo.projectsCompleted}+`, label: t.stats.projects },
            { icon: '😊', value: `${personalInfo.satisfiedClients}+`, label: t.stats.clients },
            { icon: '🏆', value: `${personalInfo.awardsWinner}+`, label: t.stats.awards },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              className="card text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-[rgb(var(--color-text-secondary))]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
