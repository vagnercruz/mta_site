import React from 'react';
import { Shield, Car, Users, Map, Home, Briefcase, Cpu, Wifi } from 'lucide-react';
import Card, { CardContent } from '../common/Card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <Card hoverable className="h-full">
      <CardContent className="h-full flex flex-col">
        <div className="mb-4 p-2 rounded-lg bg-purple-600/20 inline-block text-purple-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 flex-grow">{description}</p>
      </CardContent>
    </Card>
  );
};

const features = [
  {
    title: "Sistema de Facções",
    description: "Entre em facções oficiais ou crie a sua própria e dispute território com outras gangues.",
    icon: <Shield size={24} />
  },
  {
    title: "Mais de 250 Veículos",
    description: "Diversos veículos customizáveis, desde carros populares até super esportivos de luxo.",
    icon: <Car size={24} />
  },
  {
    title: "Economia Realista",
    description: "Sistema econômico avançado com empregos, negócios e mercado flutuante.",
    icon: <Briefcase size={24} />
  },
  {
    title: "Propriedades",
    description: "Compre casas, apartamentos e estabelecimentos comerciais em toda Los Santos.",
    icon: <Home size={24} />
  },
  {
    title: "Mapa Expansivo",
    description: "Explore um vasto mapa com áreas exclusivas e locais secretos para descobrir.",
    icon: <Map size={24} />
  },
  {
    title: "Eventos Diários",
    description: "Participe de eventos diários com premiações exclusivas e competições entre jogadores.",
    icon: <Users size={24} />
  },
  {
    title: "Sistemas Exclusivos",
    description: "Recursos exclusivos desenvolvidos especialmente para o nosso servidor.",
    icon: <Cpu size={24} />
  },
  {
    title: "Alta Performance",
    description: "Servidor com hardware de ponta para garantir uma experiência sem lag.",
    icon: <Wifi size={24} />
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Características do Servidor</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nosso servidor oferece uma experiência completa e única para todos os jogadores.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;