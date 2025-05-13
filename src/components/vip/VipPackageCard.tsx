import React from 'react';
import { Check } from 'lucide-react';
import Card, { CardHeader, CardContent, CardFooter } from '../common/Card';
import Button from '../common/Button';
import { VipPackage } from '../../types';

interface VipPackageCardProps {
  vipPackage: VipPackage;
}

const VipPackageCard: React.FC<VipPackageCardProps> = ({ vipPackage }) => {
  const { name, price, benefits, popular } = vipPackage;

  return (
    <Card 
      hoverable
      className={`relative h-full flex flex-col ${popular ? 'border-2 border-amber-500 transform scale-105' : ''} transition-all duration-300`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-amber-500 text-white py-1 px-3 uppercase text-xs font-bold tracking-wider transform translate-x-2 -translate-y-2 rounded">
          Popular
        </div>
      )}
      
      <CardHeader className={`text-center ${popular ? 'bg-gradient-to-r from-purple-700 to-amber-500' : 'bg-purple-700'}`}>
        <h3 className="text-2xl font-bold text-white">{name}</h3>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">Preço</p>
          <p className="text-3xl font-bold text-white">R$ {price},<span className="text-xl">00</span></p>
          <p className="text-gray-400 text-sm">pagamento único</p>
        </div>
        
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 mr-2 text-green-400">
                <Check size={20} />
              </span>
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="text-center">
        <Button 
          variant={popular ? "secondary" : "primary"}
          fullWidth
          onClick={() => window.alert(`Compra do pacote ${name} será processada em breve!`)}
        >
          Escolher {name}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VipPackageCard;