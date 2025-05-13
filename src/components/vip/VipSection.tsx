import React from 'react';
import VipPackageCard from './VipPackageCard';
import { vipPackages } from '../../data';

const VipSection: React.FC = () => {
  return (
    <section id="vip" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pacotes VIP</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Adquira vantagens exclusivas e melhore sua experiência no servidor com nossos pacotes VIP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {vipPackages.map((vipPackage) => (
            <VipPackageCard key={vipPackage.id} vipPackage={vipPackage} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Perguntas Frequentes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">Quanto tempo dura o VIP?</h4>
              <p className="text-gray-400">Os pacotes VIP são permanentes. Uma vez adquirido, você terá acesso às vantagens para sempre.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">Como faço para comprar?</h4>
              <p className="text-gray-400">Selecione o pacote desejado e você será redirecionado para nossa página de pagamento segura.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">Posso transferir meu VIP?</h4>
              <p className="text-gray-400">Não, os benefícios VIP são vinculados à sua conta e não podem ser transferidos para outros jogadores.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-2">Posso fazer upgrade depois?</h4>
              <p className="text-gray-400">Sim, você pode fazer upgrade pagando apenas a diferença entre seu pacote atual e o desejado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VipSection;