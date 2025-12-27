"use client";

import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="px-3 py-2 rounded-lg hover:bg-[rgb(var(--color-surface))] transition-colors font-medium text-sm"
      aria-label="Toggle language"
    >
      {language === 'es' ? '🇬🇧 EN' : '🇪🇸 ES'}
    </button>
  );
}
