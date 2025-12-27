"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg hover:bg-[rgb(var(--color-surface))] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <HiSun className="w-6 h-6 text-yellow-500" />
      ) : (
        <HiMoon className="w-6 h-6 text-slate-700" />
      )}
    </button>
  );
}
