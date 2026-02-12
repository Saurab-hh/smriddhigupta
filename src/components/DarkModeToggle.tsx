import React from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle: React.FC = () => {
  const [dark, setDark] = React.useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    setDark((d) => !d);
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 left-4 z-50 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary hover:scale-110 active:scale-95 transition-all shadow-md"
      aria-label="Toggle dark mode"
    >
      {dark ? <Sun className="w-4 h-4 text-book-gold" /> : <Moon className="w-4 h-4 text-foreground" />}
    </button>
  );
};

export default DarkModeToggle;
