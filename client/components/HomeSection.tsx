import React, { useState, useEffect } from 'react';

const HomeSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [
    'Desenvolvedor de Jogos',
    'Desenvolvedor Full Stack',
    'Diretor de Desenvolvimento',
    'Diretor de Projetos'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length];
      
      if (isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        setTypingSpeed(75);
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-pixel text-secundary medieval-text leading-tight">
              Olá, eu sou
            </h1>
            
            {/* Typing Animation */}
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-pixel text-accent medieval-text mt-4">
                {displayedText}
                <span className="animate-pulse text-primary">|</span>
              </h2>
            </div>
          </div>

          {/* Brief Introduction */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Transformo ideias em experiências digitais interativas. 
              Apaixonado por criar jogos que envolvem e aplicações web que impressionam.
            </p>
            
            <p className="text-base md:text-lg text-foreground/70">
              Com expertise em desenvolvimento de jogos e tecnologias web modernas, 
              construo soluções completas do conceito ao produto final.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center space-x-8 mt-12">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary animate-pulse"></div>
              <span className="font-pixel text-xs text-primary">CRIATIVIDADE</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="font-pixel text-xs text-accent">INOVAÇÃO</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-secondary animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="font-pixel text-xs text-secondary">QUALIDADE</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="medieval-button font-pixel text-sm transform hover:scale-105 active:scale-95 px-8 py-4"
            >
              VER PROJETOS
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-transparent medieval-border font-pixel text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 transform hover:scale-105 active:scale-95 rounded text-sm"
            >
              <span className="relative z-10">ENTRAR EM CONTATO</span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded"></div>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="medieval-box p-6 text-center bg-card/50">
              <div className="font-pixel text-2xl text-primary mb-2">5+</div>
              <div className="font-pixel text-xs text-muted-foreground">ANOS DE EXPERIÊNCIA</div>
            </div>
            
            <div className="medieval-box p-6 text-center bg-card/50">
              <div className="font-pixel text-2xl text-primary mb-2">50+</div>
              <div className="font-pixel text-xs text-muted-foreground">PROJETOS CONCLUÍDOS</div>
            </div>
            
            <div className="medieval-box p-6 text-center bg-card/50">
              <div className="font-pixel text-2xl text-primary mb-2">∞</div>
              <div className="font-pixel text-xs text-muted-foreground">IDEIAS CRIATIVAS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
