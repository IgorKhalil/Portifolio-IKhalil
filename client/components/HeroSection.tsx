import React from 'react';
import AboutPhoto from './assets/AboutMePhoto.jpeg'

const HeroSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative pt-16 pb-16">
      <div className="container mx-auto px-4 pt-1">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Developer Photo with Game Character Frame */}
          <div className="flex justify-center">
            <div className="relative mx-auto">
              {/* Main character frame */}
              <div className="relative w-72 h-96 medieval-box bg-gradient-to-b from-primary/5 to-accent/10 overflow-hidden">
                {/* Health/Energy bar at top */}
                <div className="h-4 absolute top-4 left-4 right-4  bg-muted medieval-border rounded">
                  <div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: '85%' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-pixel text-xs text-white">DEV LVL 22</span>
                  </div>
                </div>

                {/* Character portrait placeholder */}
                <div className="p-3 absolute top-12 left-8 right-8 bottom-20 bg-gradient-to-b from-accent/20 to-primary/20 medieval-border rounded flex items-center justify-center">
                  {/* Placeholder avatar - you can replace this with actual photo */}
                  <div className="p-2 w-full h-full bg-primary medieval-border rounded-lg flex items-center justify-center">
                    <div className="px-2 w-48 h-48 bg-gradient-to-br from-accent to-primary rounded">
                      <div className=" w-full h-full flex items-center justify-center font-pixel text-xs text-background">
                        <img className="rounded-lg object-contain" src={AboutPhoto} alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Character stats at bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-muted medieval-border rounded p-1">
                      <div className="font-pixel text-xs text-accent">STR</div>
                      <div className="font-pixel text-xs text-primary">70</div>
                    </div>
                    <div className="bg-muted medieval-border rounded p-1">
                      <div className="font-pixel text-xs text-accent">INT</div>
                      <div className="font-pixel text-xs text-primary">99</div>
                    </div>
                    <div className="bg-muted medieval-border rounded p-1">
                      <div className="font-pixel text-xs text-accent">AGI</div>
                      <div className="font-pixel text-xs text-primary">90</div>
                    </div>
                </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-accent rounded"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-accent rounded"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-accent rounded"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-accent rounded"></div>
              </div>

              {/* Floating elements around the frame */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-accent medieval-border rounded animate-float">
                <div className="w-full h-full bg-accent flex items-center justify-center">
                  <div className="w-1 h-1 bg-primary"></div>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary medieval-border rounded animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-full h-full bg-primary flex items-center justify-center">
                  <div className="w-1 h-1 bg-accent"></div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary medieval-border rounded animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <div className="w-1 h-1 bg-primary"></div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-accent medieval-border rounded animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-full h-full bg-accent flex items-center justify-center">
                  <div className="w-1 h-1 bg-primary"></div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-3 bg-primary rounded"></div>
                <h1 className="font-pixel text-2xl md:text-3xl text-primary medieval-text">
                  Igor Khalil
                </h1>
                <div className="w-8 h-3 bg-primary rounded"></div>
              </div>
              
              <h2 className="font-pixel text-lg md:text-xl text-accent">
                CRIANDO MUNDOS DIGITAIS
              </h2>
            </div>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                Olá! Sou um <span className="text-primary font-bold medieval-text">desenvolvedor de jogos</span> apaixonado 
                por criar experiências interativas únicas. Com anos de experiência no desenvolvimento de games, 
                combino criatividade com código para dar vida a mundos digitais incríveis.
              </p>
              
              <p>
                Minha jornada começou com os clássicos <span className="text-accent font-bold">8-bit</span> que 
                moldaram minha paixão por jogos. Hoje, uso tecnologias modernas para criar desde jogos indie 
                inovadores até experiências AAA complexas.
              </p>
              
              <p>
                Especializado em <span className="text-accent font-bold">Unity</span>,
                <span className="text-accent font-bold"> Unreal Engine</span> e
                <span className="text-accent font-bold"> desenvolvimento web</span>, 
                estou sempre explorando novas formas de inovar no mundo dos games.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center ">
              <a 
                href="/CurriculoIgor.pdf" 
                download="Curriculo-Igor-Khalil.pdf"
                className="medieval-button border-r-2 font-pixel text-sm transform hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">CURRÍCULO</span>
              </a>
            </div>

            {/* Status indicators */}
            <div className="flex items-center space-x-6 pt-1">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 border border-green-400 animate-pulse"></div>
                <span className="font-pixel text-xs text-green-500">ONLINE</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent border border-primary animate-pulse"></div>
                <span className="font-pixel text-xs text-accent">DISPONÍVEL PARA PROJETOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
