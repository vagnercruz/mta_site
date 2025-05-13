import React from 'react';
import FactionCard from './FactionCard';
import { factions } from '../../data';

const FactionsSection: React.FC = () => {
  return (
    <section id="factions" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Facções Disponíveis</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Adquira uma facção exclusiva e comande seu próprio império em Los Santos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {factions.map((faction) => (
            <FactionCard key={faction.id} faction={faction} />
          ))}
        </div>

        <div className="mt-16 bg-gray-800 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">Por que comprar uma facção?</h3>
            <p className="text-gray-400">
              Liderar uma facção oferece benefícios exclusivos e uma experiência de jogo única em nosso servidor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-700 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">Território Exclusivo</h4>
              <p className="text-gray-400">
                Sua facção terá um território exclusivo em Los Santos, incluindo áreas especiais de operação.
              </p>
            </div>
            
            <div className="p-4 border border-gray-700 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">Sistema de Recrutamento</h4>
              <p className="text-gray-400">
                Construa sua equipe recrutando outros jogadores para sua facção e expandindo sua influência.
              </p>
            </div>
            
            <div className="p-4 border border-gray-700 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">Economia Própria</h4>
              <p className="text-gray-400">
                Desenvolva a economia da sua facção com negócios exclusivos e operações especiais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactionsSection;