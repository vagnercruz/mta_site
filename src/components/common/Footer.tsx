import React from 'react';
import { Server, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Server className="h-8 w-8 text-purple-500" />
              <span className="text-white font-bold text-xl">MTA Server</span>
            </div>
            <p className="text-gray-400 mb-4">
              O melhor servidor de MTA San Andreas do Brasil. Junte-se a nossa comunidade e viva aventuras incríveis em Los Santos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#vip" className="text-gray-400 hover:text-white transition-colors">VIP</a>
              </li>
              <li>
                <a href="#factions" className="text-gray-400 hover:text-white transition-colors">Facções</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Regras do Servidor</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Como Conectar</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Reportar Bug</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <p className="flex items-center text-gray-400 mb-2">
              <Mail className="mr-2 h-5 w-5" />
              contato@mtaserver.com
            </p>
            <p className="text-gray-400 mb-4">
              Discord: discord.gg/mtaserver
            </p>
            <p className="text-gray-400">
              Horário de atendimento:<br />
              Seg - Sex: 14h às 22h<br />
              Sáb - Dom: 10h às 22h
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} MTA Server. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white mr-4 transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;