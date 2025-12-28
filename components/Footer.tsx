"use client";

import Logo from './Logo';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { socialLinks, personalInfo } from '@/lib/data';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: language === 'es' ? 'Sobre mí' : 'About', href: '#about' },
    { label: language === 'es' ? 'Resumen' : 'Resume', href: '#resume' },
    { label: language === 'es' ? 'Servicios' : 'Services', href: '#services' },
    { label: language === 'es' ? 'Portafolio' : 'Portfolio', href: '#portfolio' },
    { label: language === 'es' ? 'Contacto' : 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Logo width={140} height={50} />
            <p className="text-[rgb(var(--color-text-secondary))] text-sm leading-relaxed">
              {language === 'es' 
                ? 'Ingeniero de Software entusiasta en Big Data, Machine Learning y desarrollo de soluciones tecnológicas innovadoras.'
                : 'Software Engineer specialized in Big Data, Machine Learning and innovative technology solutions development.'
              }
            </p>
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))]" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))]" />
              </a>
              <a
                href={socialLinks.email}
                className="p-2 rounded-lg bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))] transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))]" />
              </a>
            </div>
          </div>

          {/* Links de navegación */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm font-semibold text-[rgb(var(--color-primary))]">
              {language === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text))] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm font-semibold text-[rgb(var(--color-primary))]">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[rgb(var(--color-text-secondary))]">
                <FaEnvelope className="w-4 h-4 text-[rgb(var(--color-primary))]" />
                <span>{personalInfo.email}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[rgb(var(--color-text-secondary))]">
                <FaMapMarkerAlt className="w-4 h-4 text-[rgb(var(--color-primary))]" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[rgb(var(--color-border))]">
          <p className="text-center text-sm text-[rgb(var(--color-text-secondary))]">
            © {currentYear} Daniel Romero. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
