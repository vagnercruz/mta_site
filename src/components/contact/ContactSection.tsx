import React, { useState } from 'react';
import Button from '../common/Button';
import { Mail, MessageSquare, Phone } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve retornaremos seu contato.');
    setFormData(initialFormState);
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dúvidas? Sugestões? Entre em contato conosco e retornaremos o mais breve possível.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-gray-900 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 mb-2">Assunto</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="Dúvida">Dúvida</option>
                  <option value="Suporte">Suporte</option>
                  <option value="Pagamento">Pagamento</option>
                  <option value="Sugestão">Sugestão</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-400">contato@mtaserver.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MessageSquare className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Discord</h4>
                    <p className="text-gray-400">https://discord.gg/8zhaxafh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-purple-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Horário de Atendimento</h4>
                    <p className="text-gray-400">Seg - Sex: 14h às 22h<br />Sáb - Dom: 10h às 22h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Resposta Rápida</h3>
              <p className="text-gray-400 mb-4">
                Geralmente respondemos todas as mensagens em até 24 horas. Para assuntos urgentes, recomendamos utilizar nosso Discord.
              </p>
              <Button 
                variant="outline" 
                fullWidth
                onClick={() => window.open('https://discord.gg/8zhaxafh', '_blank')}
              >
                Acessar Discord
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;