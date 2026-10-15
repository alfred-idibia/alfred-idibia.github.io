'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button className="theme-toggle icon-button" onClick={toggleTheme} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`} title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
