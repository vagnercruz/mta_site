import React from 'react';
import Card, { CardContent, CardFooter } from '../common/Card';
import Button from '../common/Button';
import { Faction } from '../../types';

interface FactionCardProps {
  faction: Faction;
}

const FactionCard: React.FC<FactionCardProps> = ({ faction }) => {
  const { name, price, description, benefits, image } = faction;

  return (
    <Card hoverable className="h-full flex flex-col overflow-hidden transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      
      <CardContent className="flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-amber-500 font-semibold text-lg">R$ {price},00</span>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <h4 className="text-lg font-semibold text-white mb-3">Benefícios:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              {benefit}
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant="primary"
          fullWidth
          onClick={() => window.alert(`Compra da facção ${name} será processada em breve!`)}
        >
          Comprar Facção
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FactionCard;