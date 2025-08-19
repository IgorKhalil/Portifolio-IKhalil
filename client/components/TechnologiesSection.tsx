import React from 'react';
import jsLogo from './assets/icons8-javascript.svg';
import tsLogo from './assets/icons8-typescript.svg';
import reactLogo from './assets/icons8-react.svg';
import godotLogo from './assets/icons8-godot.svg';
import gitLogo from './assets/icons8-git.svg';
import nodeLogo from './assets/icons8-node-js.svg';
import pythonLogo from './assets/icons8-python.svg';
import figmaLogo from './assets/icons8-figma.svg';
import cLogo from './assets/icons8-c-programming.svg';
import javaLogo from './assets/icons8-java.svg';
import tailwind from './assets/icons8-tailwind-css.svg'

interface Technology {
  name: string;
  logo: string;
  category: 'language' | 'framework' | 'engine' | 'tool' | 'database';
  color: string;
  experience: string;
  description: string;
}
const logos: Record<string, string> = {
  javascript: jsLogo,
  typescript: tsLogo,
  react: reactLogo,
  godot: godotLogo,
  git: gitLogo,
  node: nodeLogo,
  python: pythonLogo,
  figma: figmaLogo,
  c: cLogo,
  java: javaLogo,
  tailwind:tailwind,
};

const TechLogo: React.FC<{ tech: Technology }> = ({ tech }) => {
  const logoSrc = logos[tech.logo];

  return (
    <div className="relative group">
      <div 
        className="w-16 h-16 transition-all duration-300 hover:scale-110 hover:animate-bounce cursor-pointer flex items-center justify-center"
        style={{ filter: 'drop-shadow(0 0 10px #ACD3A8)' }}
      >
        {logoSrc ? (
          <img src={logoSrc} alt={tech.name} className=" object-contain" />
        ) : (
          <div className="w-full h-full bg-gray-600 border-2 border-gray-800 flex items-center justify-center">
            <div className="font-pixel text-xs text-white">{tech.name.slice(0, 2)}</div>
          </div>
        )}
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
        <div className="pixel-box bg-background border-2 border-primary p-2 min-w-max">
          <div className="font-pixel text-xs text-primary mb-1">{tech.name}</div>
          <div className="text-xs text-foreground/70">{tech.experience}</div>
        </div>
      </div>
    </div>
  );
};

const TechCard: React.FC<{ tech: Technology }> = ({ tech }) => {
  return (
    <div className="group relative pixel-box bg-card/30 border-2 border-primary/30 hover:border-primary transition-all duration-300 p-6 hover:transform hover:scale-105">
      {/* Tech Logo */}
      <div className="flex justify-center mb-4">
        <TechLogo tech={tech} />
      </div>
      
      {/* Tech Name */}
      <h3 className="font-pixel text-sm text-center text-primary mb-2 medieval-text group-hover:animate-pulse">
        {tech.name}
      </h3>
      
      {/* Experience */}
      <div className="text-center mb-3">
        <span className="inline-block px-3 py-1 bg-primary/20 border border-primary font-pixel text-xs" style={{ color: tech.color }}>
          {tech.experience}
        </span>
      </div>
      
      {/* Description */}
      <p className="text-xs text-foreground/70 text-center leading-relaxed">
        {tech.description}
      </p>
      
      {/* Category Badge */}
      <div className="absolute top-2 right-2">
        <div className="w-3 h-3 border border-primary animate-pulse" style={{ backgroundColor: tech.color }}></div>
      </div>
      
      {/* Hover effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-1 left-1 w-2 h-2 bg-gamer-yellow-400 animate-pulse"></div>
        <div className="absolute bottom-1 right-1 w-2 h-2 bg-accent animate-pulse delay-200"></div>
      </div>
    </div>
  );
};

const TechnologiesSection: React.FC = () => {
  const technologies: Technology[] = [
    {
      name: 'JAVASCRIPT',
      logo: 'javascript',
      category: 'language',
      color: '#9058ff',
      experience: '3+ ANOS',
      description: 'Linguagem versátil para web'
    },
    {
      name: 'JAVA',
      logo: 'java',
      category: 'language',
      color: '#9058ff',
      experience: '1+ ANOS',
      description: 'Liguagem usada para desenvolver uma ampla variedade de aplicações'
    },
    {
      name: 'C',
      logo: 'c',
      category: 'language',
      color: '#9058ff',
      experience: '2+ ANOS',
      description: 'Usada para desenvolver sistemas operacionais, sistemas embarcados...'
    },
    {
      name: 'TYPESCRIPT',
      logo: 'typescript',
      category: 'language',
      color: '#9058ff',
      experience: '3+ ANOS',
      description: 'Desenvolvimento tipado para projetos escaláveis e robustos'
    },
    {
      name: 'PYTHON',
      logo: 'python',
      category: 'language',
      color: '#9058ff',
      experience: '2+ ANOS',
      description: 'Automação, IA e desenvolvimento de ferramentas para jogos'
    },
    {
      name: 'REACT',
      logo: 'react',
      category: 'framework',
      color: '#9058ff',
      experience: '2+ ANOS',
      description: 'Criação de interfaces interativas e aplicações web modernas'
    },
    {
      name: 'NODE.JS',
      logo: 'node',
      category: 'framework',
      color: '#9058ff',
      experience: '2+ ANOS',
      description: 'Backend APIs e serviços'
    },
    {
      name: 'TAILWIND',
      logo: 'tailwind',
      category: 'framework',
      color: '#9058ff',
      experience: '2+ ANOS',
      description: 'Permite criar interfaces de usuário de forma rápida e eficiente através de classes utilitárias'
    },
    {
      name: 'GODOT',
      logo: 'godot',
      category: 'engine',
      color: '#9058ff',
      experience: '2+ ANOS',
      description: 'Engine open source para jogos indie e experimentais'
    },
    {
      name: 'GIT',
      logo: 'git',
      category: 'tool',
      color: '#9058ff',
      experience: '2+ ANOS',
      description: 'Controle de versão essencial para projetos colaborativos'
    },
    {
      name: 'FIGMA',
      logo: 'figma',
      category: 'tool',
      color: '#9058ff',
      experience: '3+ ANOS',
      description: 'Usada principalmente para criar interfaces de usuário (UI) e experiências de usuário (UX)'
    }
  ];

  const categories = [
    { id: 'language', name: 'LINGUAGENS', color: '#ffa207' },
    { id: 'framework', name: 'FRAMEWORKS', color: '#e12e0f' },
    { id: 'engine', name: 'ENGINES', color: '#e95610' },
    { id: 'tool', name: 'FERRAMENTAS', color: '#ffa207' }
  ];

  return (
    <section id="technologies" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-4 bg-accent animate-breathe"></div>
            <h2 className="font-pixel text-3xl md:text-4xl text-accent medieval-text">
              TECNOLOGIAS
            </h2>
            <div className="w-16 h-4 bg-accent animate-breathe"></div>
          </div>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Ferramentas e tecnologias que uso no dia a dia para criar experiências incríveis
          </p>
        </div>

        {/* Carousel Tech Icons Animation */}
        <div className="relative h-32 mb-16 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="flex animate-slide-slow">
              {/* First set of technologies */}
              {technologies.slice(0, 8).map((tech, index) => (
                <div
                  key={`first-${tech.name}`}
                  className="flex-shrink-0 mx-8"
                  style={{
                    animationDelay: `${index }s`,
                  }}
                >
                  <TechLogo tech={tech} />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {technologies.slice(0, 8).map((tech, index) => (
                <div
                  key={`second-${tech.name}`}
                  className="flex-shrink-0 mx-8"
                  style={{
                    animationDelay: `${index }s`,
                  }}
                >
                  <TechLogo tech={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Sections */}
        {categories.map((category) => {
          const categoryTechs = technologies.filter(tech => tech.category === category.id);
          
          return (
            <div key={category.id} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-12 h-3 animate-breathe" style={{ backgroundColor: category.color }}></div>
                <h3 className="font-pixel text-xl medieval-text" style={{ color: category.color }}>
                  {category.name}
                </h3>
                <div className="w-12 h-3 animate-breathe" style={{ backgroundColor: category.color }}></div>
              </div>
              
              {/* Category Technologies Grid - Centered */}
              <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                {categoryTechs.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="animate-fade-in"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      minWidth: '250px',
                      maxWidth: '280px'
                    }}
                  >
                    <TechCard tech={tech} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Stats Box */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="pixel-box bg-primary/10 border-4 border-primary p-6 text-center">
            <div className="font-pixel text-2xl text-gamer-yellow-400 medieval-text mb-2">10+</div>
            <div className="font-pixel text-sm text-primary mb-2">TECNOLOGIAS</div>
            <div className="text-xs text-foreground/70">Dominadas e em uso ativo</div>
          </div>
          
          <div className="pixel-box bg-primary/10 border-4 border-primary p-6 text-center">
            <div className="font-pixel text-2xl text-gamer-yellow-400 medieval-text mb-2">10+</div>
            <div className="font-pixel text-sm text-primary mb-2">PROJETOS</div>
            <div className="text-xs text-foreground/70">Concluídos com essas tecnologias</div>
          </div>
          
          <div className="pixel-box bg-primary/10 border-4 border-primary p-6 text-center">
            <div className="font-pixel text-2xl text-gamer-yellow-400 medieval-text mb-2">2+</div>
            <div className="font-pixel text-sm text-primary mb-2">ANOS</div>
            <div className="text-xs text-foreground/70">De experiência profissional</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
