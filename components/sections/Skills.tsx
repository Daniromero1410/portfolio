"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { useTheme } from 'next-themes';
import { skills } from '@/lib/data';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
  SiNumpy,
  SiLinux,
  SiGithub,
  SiAstro,
  SiScikitlearn,
  SiTableau,
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { FaDatabase } from 'react-icons/fa';

// Fila 1 - Lenguajes y Frameworks principales
const row1Icons = [
  { icon: SiPython, name: "Python", darkColor: "#3776AB", lightColor: "#3776AB" },
  { icon: SiJavascript, name: "JavaScript", darkColor: "#F7DF1E", lightColor: "#F0DB4F" },
  { icon: TbBrandCpp, name: "C/C++", darkColor: "#00599C", lightColor: "#00599C" },
  { icon: SiDjango, name: "Django", darkColor: "#44B78B", lightColor: "#092E20" },
  { icon: SiFlask, name: "Flask", darkColor: "#ffffff", lightColor: "#000000" },
  { icon: SiNodedotjs, name: "Node.js", darkColor: "#339933", lightColor: "#339933" },
  { icon: SiAstro, name: "Astro", darkColor: "#FF5D01", lightColor: "#FF5D01" },
  { icon: SiTensorflow, name: "TensorFlow", darkColor: "#FF6F00", lightColor: "#FF6F00" },
  { icon: SiScikitlearn, name: "Scikit-learn", darkColor: "#F7931E", lightColor: "#F7931E" },
];

// Fila 2 - Data, Databases y Tools
const row2Icons = [
  { icon: SiPandas, name: "Pandas", darkColor: "#E70488", lightColor: "#150458" },
  { icon: SiNumpy, name: "NumPy", darkColor: "#4DABCF", lightColor: "#013243" },
  { icon: SiPostgresql, name: "PostgreSQL", darkColor: "#4169E1", lightColor: "#336791" },
  { icon: SiMysql, name: "MySQL", darkColor: "#4479A1", lightColor: "#4479A1" },
  { icon: SiMongodb, name: "MongoDB", darkColor: "#47A248", lightColor: "#47A248" },
  { icon: FaDatabase, name: "SQL Server", darkColor: "#CC2927", lightColor: "#CC2927" },
  { icon: SiDocker, name: "Docker", darkColor: "#2496ED", lightColor: "#2496ED" },
  { icon: SiGit, name: "Git", darkColor: "#F05032", lightColor: "#F05032" },
  { icon: SiGithub, name: "GitHub", darkColor: "#ffffff", lightColor: "#181717" },
  { icon: SiLinux, name: "Linux", darkColor: "#FCC624", lightColor: "#000000" },
  { icon: SiTableau, name: "Tableau", darkColor: "#E97627", lightColor: "#E97627" },
];

export default function Skills() {
  const { language, t } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark') : true;

  const skillCategories = [
    {
      title: language === 'es' ? 'Lenguajes' : 'Languages',
      items: skills.languages.join(', ')
    },
    {
      title: 'Frameworks',
      items: skills.frameworks.join(', ')
    },
    {
      title: 'Data & ETL',
      items: skills.dataETL.join(', ')
    },
    {
      title: language === 'es' ? 'Bases de Datos' : 'Databases',
      items: skills.databases.join(', ')
    },
    {
      title: language === 'es' ? 'Herramientas' : 'Tools',
      items: skills.tools.join(', ')
    },
    {
      title: language === 'es' ? 'Metodologías' : 'Methodologies',
      items: skills.methodologies.join(', ')
    }
  ];

  const getIconColor = (tech: typeof row1Icons[0]) => {
    return isDark ? tech.darkColor : tech.lightColor;
  };

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card p-8"
      >
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="section-label justify-center">{t.skills.projects}</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono">
            {t.skills.title}
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left side - Animated Icons */}
          <div className="space-y-4 overflow-hidden py-4">
            {/* Row 1 - Moving left */}
            <div className="relative">
              <div className="flex marquee-left">
                {[...row1Icons, ...row1Icons].map((tech, index) => (
                  <div key={`row1-${index}`} className="flex-shrink-0 mx-2 group">
                    <div className="w-16 h-16 bg-[rgb(var(--color-background))]/50 border border-[rgb(var(--color-border))] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[rgb(var(--color-primary))]">
                      <tech.icon 
                        className="w-8 h-8"
                        style={{ color: getIconColor(tech) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Moving right */}
            <div className="relative">
              <div className="flex marquee-right">
                {[...row2Icons, ...row2Icons].map((tech, index) => (
                  <div key={`row2-${index}`} className="flex-shrink-0 mx-2 group">
                    <div className="w-16 h-16 bg-[rgb(var(--color-background))]/50 border border-[rgb(var(--color-border))] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[rgb(var(--color-primary))]">
                      <tech.icon 
                        className="w-8 h-8"
                        style={{ color: getIconColor(tech) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Skills List */}
          <div className="space-y-4 lg:pl-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-2"
              >
                <span className="text-[rgb(var(--color-primary))] mt-0.5">•</span>
                <div>
                  <span className="text-[rgb(var(--color-primary))] font-bold font-mono text-sm">
                    {category.title}:
                  </span>
                  <span className="text-[rgb(var(--color-text-secondary))] font-mono text-sm ml-2">
                    {category.items}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CSS for marquee animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .marquee-left {
          animation: scroll-left 20s linear infinite;
        }
        
        .marquee-right {
          animation: scroll-right 20s linear infinite;
        }
        
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
