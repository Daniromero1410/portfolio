"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { personalInfo, socialLinks } from '@/lib/data';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgb(var(--color-surface))] border-t border-[rgb(var(--color-border))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="text-2xl font-bold text-[rgb(var(--color-primary))]">&lt;/&gt;</span>
              <span className="font-bold text-lg">
                <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
                <span className="text-[rgb(var(--color-text-secondary))]">.dev</span>
              </span>
            </div>
            <p className="text-sm text-[rgb(var(--color-text-secondary))]">
              © {new Date().getFullYear()} {personalInfo.name.split(' ')[0]}. {t.footer.rights}
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))] rounded-lg flex items-center justify-center hover:border-[rgb(var(--color-primary))] hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))] rounded-lg flex items-center justify-center hover:border-[rgb(var(--color-primary))] hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[rgb(var(--color-background))] border border-[rgb(var(--color-border))] rounded-lg flex items-center justify-center hover:border-[rgb(var(--color-primary))] hover:scale-110 transition-all"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>

          {/* Right - Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(var(--color-primary))] text-white rounded-lg hover:opacity-90 hover:scale-105 transition-all"
              aria-label="Back to top"
            >
              <HiArrowUp className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom - Made with love */}
        <div className="mt-8 pt-8 border-t border-[rgb(var(--color-border))] text-center">
          <p className="text-sm text-[rgb(var(--color-text-secondary))] flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
