import React from 'react';
import InteractiveAvatar from './GrandpaComputer';
import GithubIcon from './assets/icons8-github.svg';
import LinkedinIcon from './assets/icons8-linkedin1.svg';
import EmailIcon from './assets/icons8-gmail.svg';


interface SocialLink {
  name: string;
  url: string;
  icon: string; // nome da rede social: 'github', 'linkedin', 'email'
  color: string;
  hoverColor: string;
}

// Map de ícones usando os imports
const socialLogos: Record<string, string> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: EmailIcon,
};

const RetroIcon: React.FC<{ icon: string; color: string; hoverColor: string; isHovered: boolean }> = ({
  icon,
  color,
  hoverColor,
  isHovered,
}) => {
  const currentColor = isHovered ? hoverColor : color;

  // Map dos SVGs importados
  const socialLogos: Record<string, string> = {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    email: EmailIcon,
  };

  const logoSrc = socialLogos[icon];

  return (
    <div
      className="relative w-10 h-10 transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center"
      style={{ filter: `drop-shadow(0 0 10px ${currentColor})` }}
    >
      {logoSrc ? (
        <img src={logoSrc} alt={icon} className="object-contain w-full h-full" />
      ) : (
        <div className="w-full h-full bg-gray-600 border-2 border-gray-800 flex items-center justify-center">
          <div className="font-pixel text-xs text-white">{icon.slice(0, 2)}</div>
        </div>
      )}
    </div>
  );
};

const SocialButton: React.FC<{ social: SocialLink }> = ({ social }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block transition-all duration-300 hover:scale-110 active:scale-95"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <RetroIcon 
          icon={social.icon} 
          color={social.color} 
          hoverColor={social.hoverColor}
          isHovered={isHovered}
        />
        
        {/* Glow effect on hover */}
        <div 
          className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            boxShadow: `0 0 20px ${social.hoverColor}, 0 0 40px ${social.hoverColor}50` 
          }}
        ></div>
        
        {/* Pixel sparkles on hover */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute -top-1 -left-1 w-1 h-1 bg-accent animate-pulse"></div>
          <div className="absolute -top-1 -right-1 w-1 h-1 bg-accent animate-pulse delay-100"></div>
          <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-gamer-orange-400 animate-pulse delay-200"></div>
          <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-accent animate-pulse delay-300"></div>
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="pixel-box bg-background border-2 border-primary px-3 py-1">
          <div className="font-pixel text-xs text-primary whitespace-nowrap">
            {social.name}
          </div>
        </div>
      </div>
    </a>
  );
};

const ContactSection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'EMAIL',
      url: 'https://mailto:igorfros@gmail.com', // Confirme se este é o email correto
      icon: 'email',
      color: '#7cbba2',
      hoverColor: '#E53935'
    },
    {
      name: 'GITHUB',
      url: 'https://github.com/IgorKhalil',
      icon: 'github',
      color: '#7cbba2',
      hoverColor: '#000000'
    },
    {
      name: 'LINKEDIN',
      url: 'https://linkedin.com/in/igor-khalil',
      icon: 'linkedin',
      color: '#7cbba2',
      hoverColor: '#0288D1'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Header */}
      <div className="text-center">
        <h3 className="font-pixel text-xl text-primary medieval-text mb-4">
          VAMOS CRIAR ALGO INCRÍVEL!
        </h3>
        <p className="text-foreground/80 mb-6">
          Sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de colaboração.
        </p>
        
        {/* Main Contact Button */}
        <a
          href="mailto:dev@example.com"
          className="inline-block group relative px-8 py-4 bg-primary border-4 border-gamer-red-900 font-pixel text-white hover:bg-gamer-red-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">ENTRAR EM CONTATO</span>
          
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 animate-breathe transition-opacity"></div>
          
          {/* Pixel sparkles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-1 left-1 w-1 h-1 bg-accent animate-pulse"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-accent animate-pulse delay-100"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-gamer-orange-400 animate-pulse delay-200"></div>
            <div className="absolute bottom-1 right-1 w-1 h-1 bg-accent animate-pulse delay-300"></div>
          </div>
        </a>
      </div>
      
      {/* Social Links */}
      <div className="flex justify-center items-center space-x-8">
        {socialLinks.map((social, index) => (
          <div
            key={social.name}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <SocialButton social={social} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 border-t-4 border-primary relative">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <ContactSection />
        
        {/* Divider */}
        <div className="my-16 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-4 bg-primary animate-breathe"></div>
            <div className="w-8 h-8 bg-accent border-4 border-primary animate-rotate-slow flex items-center justify-center">
              <div className="w-4 h-4 bg-primary"></div>
            </div>
            <div className="w-16 h-4 bg-primary animate-breathe"></div>
          </div>
        </div>
        
        {/* Footer Info */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-primary pixel-border flex items-center justify-center">
              <div className="w-8 h-8 bg-secundary pixel-border animate-breathe">
                <div className="w-full h-full bg-gradient-to-br from-accent to-accent pt-2 pl-0.2"><p className="font-pixel text-sm text-secundary">IK</p></div>
              </div>
            </div>
            <span className="font-pixel text-xl text-primary medieval-text">
              DEV.IKHALIL
            </span>
            <div className='flex items-start'>
            <InteractiveAvatar/>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="space-y-2 text-sm text-foreground/80">
            <p>
              © {currentYear} Game Developer Portfolio. Feito com{' '}
              <span className="text-primary">♥</span> e muitos{' '}
              <span className="text-primary">pixels</span>.
            </p>
            <p className="font-pixel text-xs text-primary">
              POWERED BY REACT • TAILWIND • TYPESCRIPT
            </p>
          </div>
          
          {/* Fun Stats */}
          <div className="flex justify-center items-center space-x-8 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
              <span className="font-pixel text-green-400">SERVER ONLINE</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary animate-pulse"></div>
              <span className="font-pixel text-primary al-center">COFFEE: INFINITY</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary animate-pulse"></div>
              <span className="font-pixel text-primary">BUGS: 0</span>
            </div>
          </div>
        </div>
        
        {/* Retro Game Elements */}
        <div className="absolute bottom-4 left-4 opacity-30">
          <div className="w-6 h-6 bg-accent border-2 border-primary animate-float"></div>
        </div>
        
        <div className="absolute bottom-4 right-4 opacity-30">
          <div className="w-6 h-6 bg-accent border-2 border-primary animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
