import React from 'react';
import { Users, Car, Home, Shield } from 'lucide-react';
import { serverStats } from '../../data';

const ServerStats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'users': return <Users size={28} />;
      case 'car': return <Car size={28} />;
      case 'home': return <Home size={28} />;
      case 'shield': return <Shield size={28} />;
      default: return <Users size={28} />;
    }
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serverStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg p-6 text-center border-t-4 border-purple-500 shadow-lg transition-transform hover:transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/20 text-purple-500 mb-4 mx-auto">
                {getIcon(stat.icon)}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerStats;