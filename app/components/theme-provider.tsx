'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
type ThemeContextValue = { theme: Theme; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('alfred-portfolio-theme');
    const initial: Theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    setReady(true);
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('alfred-portfolio-theme', next);
  }

  return <ThemeContext.Provider value={{ theme: ready ? theme : 'dark', toggleTheme }}>{children}</ThemeContext.Provider>;
}
