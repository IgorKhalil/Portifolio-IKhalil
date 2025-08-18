import React from 'react';

interface Technology {
  name: string;
  logo: string;
  category: 'language' | 'framework' | 'engine' | 'tool' | 'database';
  color: string;
  experience: string;
  description: string;
}

const TechLogo: React.FC<{ tech: Technology }> = ({ tech }) => {
  const renderLogo = () => {
    switch (tech.logo) {
      case 'javascript':
        return (
          <div className="relative w-full h-full bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center">
            <div className="font-pixel text-xs text-black">JS</div>
          </div>
        );
      case 'typescript':
        return (
          <div className="relative w-full h-full bg-blue-500 border-2 border-blue-700 flex items-center justify-center">
            <div className="font-pixel text-xs text-white">TS</div>
          </div>
        );
      case 'react':
        return (
          <div className="relative w-full h-full bg-cyan-400 border-2 border-cyan-600 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded-full relative">
              <div className="absolute inset-0 border border-white rounded-full transform rotate-45"></div>
              <div className="absolute inset-0 border border-white rounded-full transform -rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        );
      case 'godot':
        return (
          <div className="relative w-full h-full bg-blue-600 border-2 border-blue-800 flex items-center justify-center">
            <div className="w-4 h-4 bg-white border border-blue-300"></div>
          </div>
        );
      case 'git':
        return (
          <div className="relative w-full h-full bg-orange-600 border-2 border-orange-800 flex items-center justify-center">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-none"></div>
              <div className="absolute top-0 left-1/2 w-1 h-2 bg-white transform -translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-1 h-2 bg-white transform -translate-x-1/2"></div>
            </div>
          </div>
        );
      case 'node':
        return (
          <div className="relative w-full h-full bg-green-600 border-2 border-green-800 flex items-center justify-center">
            <div className="font-pixel text-xs text-white">NODE</div>
          </div>
        );
      case 'python':
        return (
          <div className="relative w-full h-full bg-blue-500 border-2 border-yellow-500 flex items-center justify-center">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-300 rounded-full ml-1"></div>
          </div>
        );
      case 'mysql':
        return (
          <div className="relative w-full h-full bg-blue-700 border-2 border-orange-500 flex items-center justify-center">
            <div className="relative w-6 h-4">
              <div className="w-full h-full bg-orange-400 border border-white"></div>
              <div className="absolute top-0 left-0 w-2 h-2 bg-blue-600"></div>
            </div>
          </div>
        );
      case 'mongodb':
        return (
          <div className="relative w-full h-full bg-green-700 border-2 border-green-900 flex items-center justify-center">
            <div className="w-4 h-6 bg-white border border-green-500 rounded-t-lg"></div>
          </div>
        );
      case 'figma':
        return (
          <div className="relative w-full h-full bg-purple-500 border-2 border-purple-700 flex items-center justify-center">
            <div className="relative w-6 h-6">
              <div className="absolute top-0 left-0 w-3 h-3 bg-red-400 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-purple-300 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-green-400 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-400 rounded-br-lg"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-gray-600 border-2 border-gray-800 flex items-center justify-center">
            <div className="font-pixel text-xs text-white">{tech.name.slice(0, 2)}</div>
          </div>
        );
    }
  };

  return (
    <div className="relative group">
      <div 
        className="w-16 h-16 transition-all duration-300 hover:scale-110 hover:animate-bounce cursor-pointer"
        style={{ filter: 'drop-shadow(0 0 10px rgba(225, 46, 15, 0.3))' }}
      >
        {renderLogo()}
      </div>
      
      {/* Hover tooltip */}
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
      color: '#ffec3c',
      experience: '5+ ANOS',
      description: 'Linguagem versátil para web e desenvolvimento de jogos HTML5'
    },
    {
      name: 'TYPESCRIPT',
      logo: 'typescript',
      category: 'language',
      color: '#e95610',
      experience: '4+ ANOS',
      description: 'Desenvolvimento tipado para projetos escaláveis e robustos'
    },
    {
      name: 'PYTHON',
      logo: 'python',
      category: 'language',
      color: '#ffa207',
      experience: '3+ ANOS',
      description: 'Automação, IA e desenvolvimento de ferramentas para jogos'
    },
    {
      name: 'REACT',
      logo: 'react',
      category: 'framework',
      color: '#ff9210',
      experience: '4+ ANOS',
      description: 'Criação de interfaces interativas e aplicações web modernas'
    },
    {
      name: 'NODE.JS',
      logo: 'node',
      category: 'framework',
      color: '#e12e0f',
      experience: '4+ ANOS',
      description: 'Backend APIs e serviços para jogos multiplayer'
    },
    {
      name: 'GODOT',
      logo: 'godot',
      category: 'engine',
      color: '#ffa207',
      experience: '2+ ANOS',
      description: 'Engine open source para jogos indie e experimentais'
    },
    {
      name: 'GIT',
      logo: 'git',
      category: 'tool',
      color: '#e12e0f',
      experience: '5+ ANOS',
      description: 'Controle de versão essencial para projetos colaborativos'
    }
  ];

  const categories = [
    { id: 'language', name: 'LINGUAGENS', color: '#ffec3c' },
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
