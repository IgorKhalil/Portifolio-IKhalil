import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
  description: string;
  category: 'liderança e gestao' | 'comunicação e colaboração' | 'produtividade e resiliência';
}

const SkillIcon: React.FC<{ icon: string; color: string; name: string }> = ({ icon, color, name }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'code':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-1">
              <div className="w-2 h-2 bg-current"></div>
              <div className="w-2 h-1 bg-current"></div>
              <div className="w-2 h-2 bg-current"></div>
              <div className="w-1 h-2 bg-current"></div>
              <div className="w-2 h-2 bg-current"></div>
              <div className="w-1 h-2 bg-current"></div>
              <div className="w-2 h-2 bg-current"></div>
              <div className="w-2 h-1 bg-current"></div>
              <div className="w-2 h-2 bg-current"></div>
            </div>
          </div>
        );
      case 'liderança e gestao':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-12 h-8 border-2 border-current rounded-none relative">
              <div className="absolute top-1 left-2 w-1 h-1 bg-current"></div>
              <div className="absolute top-1 right-2 w-1 h-1 bg-current"></div>
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-current"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-current"></div>
              <div className="absolute -left-2 top-2 w-3 h-4 bg-current"></div>
              <div className="absolute -right-2 top-2 w-3 h-4 bg-current"></div>
            </div>
          </div>
        );
      case 'gestao':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-10 h-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-current"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-current"></div>
              <div className="absolute top-2 left-0 w-2 h-2 bg-current"></div>
              <div className="absolute top-2 right-0 w-2 h-2 bg-current"></div>
            </div>
          </div>
        );
      case 'tools':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-10 h-10">
              <div className="absolute top-1 left-2 w-6 h-2 bg-current transform rotate-12"></div>
              <div className="absolute bottom-2 left-1 w-2 h-6 bg-current transform -rotate-12"></div>
              <div className="absolute top-3 right-1 w-1 h-1 bg-current"></div>
              <div className="absolute bottom-1 right-2 w-1 h-1 bg-current"></div>
            </div>
          </div>
        );
      case 'unity':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 border-2 border-current"></div>
              <div className="absolute top-1 left-1 w-2 h-2 bg-current"></div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-current"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-current"></div>
            </div>
          </div>
        );
      case 'web':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-10 h-8">
              <div className="absolute inset-0 border-2 border-current"></div>
              <div className="absolute top-0 left-0 right-0 h-2 border-b-2 border-current"></div>
              <div className="absolute top-3 left-1 w-1 h-1 bg-current"></div>
              <div className="absolute top-3 left-3 w-3 h-1 bg-current"></div>
              <div className="absolute bottom-2 left-1 w-2 h-1 bg-current"></div>
              <div className="absolute bottom-2 right-1 w-2 h-1 bg-current"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 bg-current"></div>
        );
    }
  };

  return (
    <div 
      className={`w-16 h-16 border-2 border-current flex items-center justify-center hover:animate-bounce transition-all duration-300 group-hover:scale-110`}
      style={{ color }}
    >
      {renderIcon()}
    </div>
  );
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="group relative medieval-box bg-card/50 border-2 border-primary/30 hover:border-primary transition-all duration-300 p-6 hover:transform hover:scale-105">
      {/* Skill Icon */}
      <div className="flex justify-center mb-4">
        <SkillIcon icon={skill.icon} color={skill.color} name={skill.name} />
      </div>
      
      {/* Skill Name */}
      <h3 className="font-pixel text-sm text-center text-primary mb-3 medieval-text group-hover:animate-pulse">
        {skill.name}
      </h3>
      
      {/* Skill Level Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-pixel text-xs text-foreground/70">LVL</span>
          <span className="font-pixel text-xs" style={{ color: skill.color }}>
            {skill.level}%
          </span>
        </div>
        
        <div className="h-4 bg-background border-2 border-primary/50 relative overflow-hidden">
          <div 
            className="h-full transition-all duration-1000 ease-out relative"
            style={{ 
              width: `${skill.level}%`,
              backgroundColor: skill.color,
              boxShadow: `0 0 10px ${skill.color}50`
            }}
          >
            {/* Animated pixel effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-fast"></div>
          </div>
          
          {/* Level segments */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-primary/30 last:border-r-0"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-xs text-foreground/70 text-center leading-relaxed">
        {skill.description}
      </p>
      
      {/* Hover effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-1 left-1 w-2 h-2 bg-gamer-yellow-400 animate-pulse"></div>
        <div className="absolute top-1 right-1 w-2 h-2 bg-gamer-orange-500 animate-pulse delay-100"></div>
        <div className="absolute bottom-1 left-1 w-2 h-2 bg-gamer-orange-400 animate-pulse delay-200"></div>
        <div className="absolute bottom-1 right-1 w-2 h-2 bg-gamer-yellow-400 animate-pulse delay-300"></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'METODOLOGIAS ÁGEIS',
      level: 100,
      icon: 'unity',
      color: '#e12e0f',
      description: 'Utilizador de metodologias ágeis como SCRUMM',
      category: 'liderança e gestao'
    },
    {
      name: 'COMUNICAÇÃO EFICAZ',
      level: 98,
      icon: 'unity',
      color: '#ffa207',
      description: 'Habilidade de explicar ideias complexas de forma clara e concisa, tanto para outros desenvolvedores quanto para pessoas sem conhecimento técnico.',
      category: 'comunicação e colaboração'
    },
    {
      name: 'RESOLUÇÃO DE PROBLEMAS',
      level: 95,
      icon: 'code',
      color: '#ffec3c',
      description: ' Capacidade de identificar, analisar e solucionar problemas de forma eficiente e criativa, seja em código ou em situações do dia a dia do projeto.',
      category: 'produtividade e resiliência'
    },
    {
      name: 'TRABALHO EM EQUIPE',
      level: 95,
      icon: 'unity',
      color: '#e12e0f',
      description: 'Habilidade de colaborar com outros membros da equipe, compartilhar conhecimentos, receber feedback e contribuir para um ambiente de trabalho positivo.',
      category: 'comunicação e colaboração'
    },
    {
      name: 'ADAPTABILIDADE E FLEXIBILIDADE',
      level: 93,
      icon: 'web',
      color: '#ff9210',
      description: 'Capacidade de se ajustar a novas tecnologias, metodologias e mudanças no projeto, mantendo a produtividade.',
      category: 'produtividade e resiliência'
    },
    {
      name: 'RESILIÊNCIA',
      level: 90,
      icon: 'unity',
      color: '#950e05',
      description: 'Capacidade de lidar com a pressão, frustrações e falhas, aprendendo com os erros e mantendo a motivação.',
      category: 'produtividade e resiliência'
    },
    {
      name: 'INTELIGÊNCIA EMOCIONAL',
      level: 90,
      icon: 'code',
      color: '#e95610',
      description: 'Compreender e gerenciar as próprias emoções e as dos outros, especialmente em situações de pressão.',
      category: 'comunicação e colaboração'
    },
    {
      name: 'ORGANIZAÇÃO',
      level: 90,
      icon: 'code',
      color: '#ffa207',
      description: 'Gerenciar o tempo, priorizar tarefas e manter o código organizado.',
      category: 'produtividade e resiliência'
    },
    {
      name: 'GOVERNAÇA',
      level: 90,
      icon: 'tools',
      color: '#e95610',
      description: 'Mecanismos de liderança, estratégia e controle',
      category: 'liderança e gestao'
    },
    {
      name: 'PENSAMENTO CRÍTICO',
      level: 90,
      icon: 'gestao',
      color: '#950e05',
      description: 'A habilidade de avaliar informações, identificar padrões e tomar decisões informadas é crucial para liderar projetos e garantir a qualidade do trabalho.',
      category: 'liderança e gestao'
    }
  ];

  const categories = [
    { id: 'liderança e gestao', name: 'LIDERANÇA E GESTÃO', color: '#ff9210' },
    { id: 'comunicação e colaboração', name: 'COMUNICAÇÃO E COLABORAÇÃO', color: '#e12e0f' },
    { id: 'produtividade e resiliência', name: 'PRODUTIVIDADE E RESILIÊNCIA', color: '#e95610' }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSkills = selectedCategory
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills; // Se nada estiver selecionado, mostra todas
    
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-4 bg-primary animate-breathe"></div>
            <h2 className="font-pixel text-3xl md:text-4xl text-primary medieval-text">
              HABILIDADES
            </h2>
            <div className="w-16 h-4 bg-primary animate-breathe"></div>
          </div>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Minhas habilidades desenvolvidas através de anos criando jogos e experiências digitais
          </p>
        </div>

         {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 medieval-border font-pixel text-xs text-primary cursor-pointer transition-colors duration-200 ${
              selectedCategory === null ? 'bg-primary/20' : ''
            }`}
            
          >
            TODAS
          </div>

          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 medieval-border font-pixel text-xs cursor-pointer transition-colors duration-200 ${
                selectedCategory === category.id ? 'bg-primary/20' : ''
              }`}
              style={{ borderColor: category.color, color: category.color }}
            >
              <span>{category.name}</span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Achievement Box */}
        <div className="mt-16 medieval-box bg-primary/10 border-4 border-primary p-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-8 bg-gamer-yellow-400 border-2 border-primary animate-rotate-slow flex items-center justify-center">
              <div className="w-4 h-4 bg-primary"></div>
            </div>
            <h3 className="font-pixel text-xl text-primary medieval-text">
              CONQUISTAS DESBLOQUEADAS
            </h3>
            <div className="w-8 h-8 bg-gamer-yellow-400 border-2 border-primary animate-rotate-slow flex items-center justify-center">
              <div className="w-4 h-4 bg-primary"></div>
            </div>
          </div>
          <div className='p-4'>
              <p className="font-pixel text-m text-gamer-orange-500 mb-2">
              "Cientista da Computação"
            </p>
            
            <p className="text-foreground/80">
              Graduando em Ciências da Computação pela UFMA
            </p>
            <p className="text-foreground/60">
              2023-2027
            </p>
          </div>
          <div className='p-4'>
              <p className="font-pixel text-m text-gamer-orange-500 mb-2">
              "Vice-Presidente GameAnalysis"
            </p>
            
            <p className="text-foreground/80">
              Vice-Presidente e Diretor de desenvolvimento e projetos do GameAnalysis<br/>
              Laborátorio de jogos educacionais da UFMA
            </p>
            <p className="text-foreground/60">
              2024
            </p>
          </div>
          <div className='p-4'>
              <p className="font-pixel text-m text-gamer-orange-500 mb-2">
              "Startup CódigoLúdico"
            </p>
            
            <p className="text-foreground/80">
              Fundador da Startup CódigoLúdico<br/> 
              plataforma de criação de jogos educacionais.
            </p>
            <p className="text-foreground/60">
              2025
            </p>
          </div>
          <div className='p-4'>
              <p className="font-pixel text-sm text-gamer-orange-500 mb-2">
              "JOVEM TECH"
            </p>
            
            <p className="text-foreground/80">
              Integrante do elemenco jovem Tech
            </p>
            <p className="text-foreground/60">
              2025
            </p>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
