import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 medieval-border bg-card hover:bg-muted transition-all duration-300 flex items-center justify-center group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {/* Sun Icon (Light Theme) */}
      <div className={`absolute transition-all duration-300 ${theme === 'light' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <div className="relative w-6 h-6">
          {/* Sun center */}
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Sun rays */}
          <div className="absolute top-0 left-1/2 w-1 h-2 bg-primary transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-2 bg-primary transform -translate-x-1/2"></div>
          <div className="absolute left-0 top-1/2 w-2 h-1 bg-primary transform -translate-y-1/2"></div>
          <div className="absolute right-0 top-1/2 w-2 h-1 bg-primary transform -translate-y-1/2"></div>
          
          {/* Diagonal rays */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-primary"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-primary"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-primary"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-primary"></div>
        </div>
      </div>

      {/* Moon Icon (Dark Theme) */}
      <div className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <div className="relative w-6 h-6">
          {/* Moon crescent */}
          <div className="w-6 h-6 bg-accent"></div>
          <div className="absolute top-1 right-1 w-4 h-4 bg-card"></div>
          
          {/* Moon craters */}
          <div className="absolute top-2 left-1 w-1 h-1 bg-primary"></div>
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary"></div>
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Status indicator */}
      <div className="absolute -bottom-1 -right-1 w-3 h-3 medieval-border bg-background flex items-center justify-center">
        <div className={`w-1 h-1 ${theme === 'light' ? 'bg-accent' : 'bg-primary'}`}></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
