"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import ThemeToggle from './ThemeToggle';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '@/lib/data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.resume, href: '#resume' },
    { label: 'Services', href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.blog, href: '#blog' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="section-container !py-4">
        {/* Card container para el navbar */}
        <div className={`rounded-xl border border-[rgb(var(--color-border))] transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgb(var(--color-surface))]/95 backdrop-blur-lg shadow-lg'
            : 'bg-[rgb(var(--color-surface))]/80 backdrop-blur-sm'
        }`}>
          <div className="flex items-center justify-between h-14 px-4 sm:px-6">
            {/* Left - Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-xl font-bold text-[rgb(var(--color-primary))]">&lt;/&gt;</span>
              <span className="font-bold font-mono text-sm">
                <span className="gradient-text-lime">Daniel</span>
                <span className="text-[rgb(var(--color-text-secondary))]">.dev</span>
              </span>
            </a>

            {/* Center - Navigation (Desktop) */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-mono transition-colors ${
                    index === 0 
                      ? 'text-[rgb(var(--color-text))]' 
                      : 'text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text))]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right - Social Icons + Language + Theme Toggle */}
            <div className="flex items-center gap-2">
              {/* Social Links */}
              <div className="hidden sm:flex items-center">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-[rgb(var(--color-background))] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text))]" />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-[rgb(var(--color-background))] transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-4 h-4 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text))]" />
                </a>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Language Selector */}
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))] transition-all font-mono text-sm"
              >
                <span className="text-base">{language === 'es' ? '🇪🇸' : '🇬🇧'}</span>
                <span className="text-[rgb(var(--color-text-secondary))] uppercase">{language === 'es' ? 'ES' : 'EN'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
