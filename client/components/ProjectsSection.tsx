import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  category: 'game' | 'web' | 'mobile' | 'tool';
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'prototype';
  year: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'game': return '#e12e0f';
      case 'web': return '#e95610';
      case 'mobile': return '#ffa207';
      case 'tool': return '#ffec3c';
      default: return '#950e05';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#4ade80';
      case 'in-progress': return '#fbbf24';
      case 'prototype': return '#60a5fa';
      default: return '#6b7280';
    }
  };

  return (
    <div 
      className="group relative h-80 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden pixel-box bg-card/50 border-2 border-primary/30 hover:border-primary transition-all duration-300 overflow-hidden">
          {/* Project Image */}
          <div className="relative h-48 bg-gradient-to-br from-primary/20 to-gamer-orange-500/20 border-b-2 border-primary/30 overflow-hidden">
            {/* Placeholder for project image */}
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-gamer-orange-500/30 flex items-center justify-center">
              <div className="w-24 h-24 border-4 border-primary bg-primary/20 flex items-center justify-center">
                <div className="font-pixel text-xs text-primary">{project.category.toUpperCase()}</div>
              </div>
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <div 
                className="px-3 py-1 font-pixel text-xs text-white border-2 border-white/50"
                style={{ backgroundColor: getCategoryColor(project.category) }}
              >
                {project.category.toUpperCase()}
              </div>
            </div>
            
            {/* Status Badge */}
            <div className="absolute top-3 right-3">
              <div 
                className="w-4 h-4 border-2 border-white animate-pulse"
                style={{ backgroundColor: getStatusColor(project.status) }}
              ></div>
            </div>
            
            {/* Featured Star */}
            {project.featured && (
              <div className="absolute bottom-3 right-3">
                <div className="w-6 h-6 bg-gamer-yellow-400 border-2 border-primary animate-breathe flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary"></div>
                </div>
              </div>
            )}
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="font-pixel text-xs text-white bg-primary/80 px-4 py-2 border-2 border-white">
                  CLIQUE PARA MAIS INFO
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Info */}
          <div className="p-4 space-y-3">
            <h3 className="font-pixel text-sm text-primary medieval-text group-hover:animate-pulse">
              {project.title}
            </h3>
            
            <p className="text-xs text-foreground/70 leading-relaxed line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="font-pixel text-xs text-gamer-orange-500">{project.year}</span>
              <div className="flex space-x-1">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <div key={i} className="w-2 h-2 border border-primary" style={{ backgroundColor: getCategoryColor(project.category) }}></div>
                ))}
                {project.technologies.length > 3 && (
                  <div className="font-pixel text-xs text-foreground/50">+{project.technologies.length - 3}</div>
                )}
              </div>
            </div>
          </div>
          
          {/* Hover pixel effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute top-1 left-1 w-2 h-2 bg-gamer-yellow-400 animate-pulse"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-gamer-orange-500 animate-pulse delay-100"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-gamer-orange-400 animate-pulse delay-200"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 bg-gamer-yellow-400 animate-pulse delay-300"></div>
          </div>
        </div>
        
        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 pixel-box bg-card border-2 border-primary p-4 overflow-hidden">
          <div className="h-full flex flex-col space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="font-pixel text-sm text-primary medieval-text">{project.title}</h3>
              <div className="font-pixel text-xs text-gamer-orange-500">{project.year}</div>
            </div>
            
            {/* Description */}
            <div className="flex-1 overflow-y-auto">
              <p className="text-xs text-foreground/80 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
            
            {/* Technologies */}
            <div className="space-y-2">
              <div className="font-pixel text-xs text-gamer-orange-500">TECNOLOGIAS:</div>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-primary/20 border border-primary font-pixel text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              {project.demoUrl && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.demoUrl, '_blank');
                  }}
                  className="flex-1 px-3 py-2 bg-primary border-2 border-gamer-red-900 font-pixel text-xs text-white hover:bg-gamer-red-600 transition-colors"
                >
                  DEMO
                </button>
              )}
              
              {project.codeUrl && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.codeUrl, '_blank');
                  }}
                  className="flex-1 px-3 py-2 bg-transparent border-2 border-gamer-orange-500 font-pixel text-xs text-gamer-orange-500 hover:bg-gamer-orange-500 hover:text-background transition-colors"
                >
                  CÓDIGO
                </button>
              )}
            </div>
            
            {/* Status */}
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 border border-white animate-pulse" style={{ backgroundColor: getStatusColor(project.status) }}></div>
              <span className="font-pixel text-xs" style={{ color: getStatusColor(project.status) }}>
                {project.status.toUpperCase().replace('-', ' ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'PIXEL QUEST RPG',
      category: 'game',
      description: 'RPG retrô com mecânicas modernas, mundo aberto e sistema de crafting avançado.',
      longDescription: 'Um RPG completo inspirado nos clássicos 8-bit, mas com mecânicas modernas. Inclui sistema de combate por turnos, mundo aberto para explorar, crafting de itens, missões secundárias e história envolvente com múltiplos finais.',
      technologies: ['Unity', 'C#', 'Photoshop', 'FMOD'],
      image: '',
      demoUrl: 'https://example.com/demo',
      codeUrl: 'https://github.com/user/project',
      featured: true,
      status: 'completed',
      year: '2023'
    },
    {
      id: '2',
      title: 'NEON RUNNER',
      category: 'game',
      description: 'Endless runner cyberpunk com elementos de plataforma e coleta de power-ups.',
      longDescription: 'Jogo endless runner ambientado em um futuro cyberpunk. O jogador controla um corredor através de uma cidade neon, coletando power-ups, evitando obstáculos e enfrentando chefões. Sistema de upgrades e diferentes ambientes.',
      technologies: ['Unity', 'C#', 'Shader Graph', 'DOTween'],
      image: '',
      demoUrl: 'https://example.com/demo',
      featured: false,
      status: 'completed',
      year: '2023'
    },
    {
      id: '3',
      title: 'GAME DEV PORTFOLIO',
      category: 'web',
      description: 'Website responsivo para showcase de projetos com tema gamer e animações.',
      longDescription: 'Portfolio interativo criado com React e TypeScript, featuring tema gamer com animações CSS, sistema de filtros para projetos, integração com APIs e design responsivo. Inclui blog para postagens sobre desenvolvimento.',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      image: '',
      demoUrl: 'https://example.com/demo',
      codeUrl: 'https://github.com/user/project',
      featured: true,
      status: 'completed',
      year: '2024'
    },
    {
      id: '4',
      title: 'RETRO PUZZLE',
      category: 'mobile',
      description: 'Jogo de quebra-cabeça para mobile com mais de 100 níveis únicos.',
      longDescription: 'Aplicativo mobile de quebra-cabeças inspirado nos clássicos arcade. Mais de 100 níveis únicos, sistema de conquistas, leaderboards online e modo competitivo multiplayer. Desenvolvido nativamente para iOS e Android.',
      technologies: ['Unity', 'C#', 'Firebase', 'AdMob'],
      image: '',
      demoUrl: 'https://play.google.com/store',
      featured: false,
      status: 'completed',
      year: '2022'
    },
    {
      id: '5',
      title: 'LEVEL EDITOR PRO',
      category: 'tool',
      description: 'Ferramenta visual para criação de níveis de jogos 2D com sistema de tiles.',
      longDescription: 'Editor visual completo para criação de níveis 2D. Inclui sistema de tiles drag-and-drop, layers, animações, sistema de física, preview em tempo real e exportação para múltiplos formatos. Interface intuitiva com atalhos customizáveis.',
      technologies: ['Electron', 'JavaScript', 'Canvas API', 'Node.js'],
      image: '',
      codeUrl: 'https://github.com/user/project',
      featured: true,
      status: 'in-progress',
      year: '2024'
    },
    {
      id: '6',
      title: 'VR SPACE ADVENTURE',
      category: 'game',
      description: 'Experiência VR imersiva de exploração espacial com física realista.',
      longDescription: 'Jogo VR onde o jogador explora o espaço sideral, visita planetas, coleta recursos e constrói bases espaciais. Física realista, interações naturais em VR e sistema de teleporte otimizado para conforto do usuário.',
      technologies: ['Unreal Engine', 'Blueprint', 'OpenXR', 'Wwise'],
      image: '',
      featured: false,
      status: 'prototype',
      year: '2024'
    }
  ];

  const categories = [
    { id: 'all', name: 'TODOS', color: '#e12e0f' },
    { id: 'game', name: 'JOGOS', color: '#e12e0f' },
    { id: 'web', name: 'WEB', color: '#e95610' },
    { id: 'mobile', name: 'MOBILE', color: '#ffa207' },
    { id: 'tool', name: 'FERRAMENTAS', color: '#ffec3c' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-4 bg-primary animate-breathe"></div>
            <h2 className="font-pixel text-3xl md:text-4xl text-primary medieval-text">
              PROJETOS
            </h2>
            <div className="w-16 h-4 bg-primary animate-breathe"></div>
          </div>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Alguns dos meus projetos favoritos que demonstram minhas habilidades em desenvolvimento de jogos e aplicações
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`
                  px-4 py-2 font-pixel text-xs border-2 transition-all duration-300 group relative overflow-hidden
                  ${filter === category.id 
                    ? 'bg-primary text-white border-primary medieval-text' 
                    : 'text-primary border-primary/50 hover:border-primary hover:bg-primary hover:text-white'
                  }
                `}
              >
                <span className="relative z-10">{category.name}</span>
                
                {/* Hover background */}
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Active indicator */}
                {filter === category.id && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gamer-yellow-400 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="pixel-box bg-primary/10 border-4 border-primary p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gamer-yellow-400 border-4 border-primary mx-auto flex items-center justify-center animate-breathe">
                <div className="font-pixel text-xl text-primary">{projects.length}</div>
              </div>
              <div className="font-pixel text-sm text-gamer-yellow-400">PROJETOS CONCLUÍDOS</div>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gamer-orange-500 border-4 border-primary mx-auto flex items-center justify-center animate-breathe">
                <div className="font-pixel text-xl text-primary">3</div>
              </div>
              <div className="font-pixel text-sm text-gamer-orange-500">PROJETOS EM DESTAQUE</div>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gamer-orange-500 border-4 border-primary mx-auto flex items-center justify-center animate-breathe">
                <div className="font-pixel text-xl text-primary">∞</div>
              </div>
              <div className="font-pixel text-sm text-gamer-yellow-400">IDEIAS EM DESENVOLVIMENTO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
