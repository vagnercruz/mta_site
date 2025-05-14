import React from 'react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'url(https://imgs.search.brave.com/gyUhrSZn0wQuqCZhqQaH57H3BhtF7GXapUBt_jwevSI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC8yLzUv/MS8yMTUxMjg5LTE5/MjB4MTIwMC1kZXNr/dG9wLWhkLWd0YS1z/YW4tYW5kcmVhcy1i/YWNrZ3JvdW5kLXBo/b3RvLmpwZw)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          O <span className="text-purple-500">Melhor</span> Servidor de MTA San Andreas
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Explore um mundo cheio de possibilidades, com economia realista, facções, propriedades e muito mais. Venha viver sua história em Los Santos!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg" 
            variant="primary"
            onClick={() => window.open('mtasa://multiplayer.mtasa.com:22003', '_blank')}
          >
            Conectar Agora
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => {
              const vipSection = document.getElementById('vip');
              vipSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Pacotes VIP
          </Button>
        </div>
        
        {/* Server IP */}
        <div className="mt-12 bg-gray-900/80 backdrop-blur-sm inline-block px-6 py-3 rounded-lg">
          <p className="text-gray-400 text-sm">Endereço do servidor:</p>
          <p className="text-white font-mono text-xl">mtasa://200.9.154.104:24715</p>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;