"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { personalInfo, gitJournal } from '@/lib/data';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { HiPhone, HiMail } from 'react-icons/hi';

const companies = [
  { name: "GESTAR", display: "GESTAR INNOVACIÓN" },
  { name: "positiva", display: "POSITIVA" },
  { name: "sol", display: "S.O.L" },
  { name: "geatic", display: "GEATIC" },
  { name: "udes", display: "UDES" },
  { name: "rtu", display: "RTU Riga" },
];

export default function Cooperation() {
  const { language, t } = useLanguage();

  // Duplicar empresas para el efecto infinito
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="section-container">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left - Cooperation Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 card p-8"
        >
          {/* Header */}
          <div className="mb-8">
            <span className="section-label">{t.cooperation?.title || 'Cooperation'}</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono">
              {language === 'es' ? 'Trabajando con ' : 'Working with '}{' '}
              <span className="gradient-text-lime">+6</span>{' '}
              {language === 'es' ? 'organizaciones' : 'organizations'}
              <br />
              <span className="text-[rgb(var(--color-text-secondary))]">
                {language === 'es' ? 'en proyectos de ' : 'on '}
              </span>{' '}
              <span className="gradient-text-lime">
                {language === 'es' ? 'tecnología' : 'technology projects'}
              </span>
              <span className="animate-pulse">_</span>
            </h2>
          </div>

          {/* Company logos - Marquee animation */}
          <div className="mb-8 py-6 border-y border-[rgb(var(--color-border))] overflow-hidden">
            <div className="relative">
              {/* Gradient overlays para fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[rgb(var(--color-surface))] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[rgb(var(--color-surface))] to-transparent z-10"></div>
              
              {/* Marquee container */}
              <div className="flex animate-marquee">
                {duplicatedCompanies.map((company, index) => (
                  <div
                    key={`${company.name}-${index}`}
                    className="flex-shrink-0 px-8 text-[rgb(var(--color-text-secondary))] font-mono text-sm hover:text-[rgb(var(--color-primary))] transition-colors cursor-pointer"
                  >
                    {company.display}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact info row */}
          <div className="flex flex-wrap items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 p-0.5">
                <div className="w-full h-full rounded-full bg-[rgb(var(--color-surface))] flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[rgb(var(--color-primary))] rounded-full border-2 border-[rgb(var(--color-surface))]"></div>
            </div>

            {/* Contact details */}
            <div className="space-y-2 font-mono text-sm">
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors"
              >
                <FaLinkedin className="w-4 h-4 text-cyan-400" />
                <span className="text-[rgb(var(--color-text-secondary))]">[linkedin]</span>
                <span className="text-[rgb(var(--color-primary))]">daniromerosoftware</span>
              </a>
              <div className="flex items-center gap-2 text-[rgb(var(--color-text-secondary))]">
                <HiPhone className="w-4 h-4 text-cyan-400" />
                <span className="text-[rgb(var(--color-text-secondary))]">[phone]</span>
                <span className="text-[rgb(var(--color-primary))]">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-[rgb(var(--color-text-secondary))]">
                <HiMail className="w-4 h-4 text-cyan-400" />
                <span className="text-[rgb(var(--color-text-secondary))]">[email]</span>
                <span className="text-[rgb(var(--color-primary))]">{personalInfo.email}</span>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="hidden lg:block ml-auto">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border border-[rgb(var(--color-border))]"></div>
                <div className="absolute inset-4 rounded-full border border-[rgb(var(--color-border))]"></div>
                <div className="absolute inset-8 rounded-full border border-[rgb(var(--color-border))]"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Git Journaling Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-simple p-6"
        >
          <span className="section-label">{t.journal?.title || 'Git Journaling'}</span>
          
          <div className="space-y-4 mt-6">
            {gitJournal.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="timeline-dot group-hover:scale-150 transition-transform"></div>
                <div className="font-mono text-sm">
                  <span className="text-[rgb(var(--color-text-secondary))]">{entry.date}</span>
                  <p className="text-[rgb(var(--color-text))] group-hover:text-[rgb(var(--color-primary))] transition-colors">
                    {entry.project}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
