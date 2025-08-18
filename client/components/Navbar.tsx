import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from './assets/LogoIK.png'
import InteractiveAvatar from './GrandpaComputer';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'about', label: 'SOBRE MIM', href: '#about' },
    { id: 'skills', label: 'HABILIDADES', href: '#skills' },
    { id: 'technologies', label: 'TECNOLOGIAS', href: '#technologies' },
    { id: 'projects', label: 'PROJETOS', href: '#projects' },
    { id: 'contact', label: 'CONTATO', href: '#contact' },
  ];

  const handleClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b medieval-border">
      <div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-primary pixel-border flex items-center justify-center">
              <div className="w-8 h-8 bg-primary pixel-border animate-breathe">
                <div className="w-full h-full bg-gradient-to-br from-accent to-accent pt-2 pl-0.5"><p className="font-pixel text-sm text-secundary">IK</p></div>
              </div>
            </div>
            <span className="font-pixel text-xl text-primary medieval-text">
              DEV.IKHALIL
            </span>
          </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 mr-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`
                    px-3 py-2 font-pixel text-xs transition-all duration-200
                    rounded hover:bg-primary hover:text-primary-foreground
                    relative group
                    ${activeSection === item.id
                      ? 'bg-primary text-primary-foreground medieval-text'
                      : 'text-primary hover:medieval-text'
                    }
                  `}
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  
                  {/* Button text */}
                  <span className="relative z-10">{item.label}</span>
                  
                </button>
              ))}
            </div>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <div className="md:hidden">
                <MobileMenuButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MobileMenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'SOBRE MIM' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'technologies', label: 'TECNOLOGIAS' },
    { id: 'projects', label: 'PROJETOS' },
    { id: 'contact', label: 'CONTATO' },
  ];

  const handleClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 medieval-border bg-primary rounded flex flex-col items-center justify-center space-y-1 group hover:bg-primary/80 transition-colors"
      >
        <div className={`w-6 h-1 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-1 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-1 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 medieval-box bg-background shadow-lg">
          <div className="py-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`
                  w-full px-3 py-2 text-left font-pixel text-xs text-primary
                  hover:bg-primary hover:text-primary-foreground transition-all duration-200
                  border-b border-border last:border-b-0 rounded-sm
                  relative group
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Button text */}
                <span className="relative z-10">{item.label}</span>
                
                {/* Status indicator */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
