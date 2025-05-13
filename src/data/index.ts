import { VipPackage, Faction, ServerStat, GalleryImage } from "../types";

export const vipPackages: VipPackage[] = [
  {
    id: "basic",
    name: "Básico",
    price: 15,
    benefits: [
      "Tag VIP no servidor e Discord",
      "Acesso a 1 veículo exclusivo",
      "10% mais dinheiro em trabalhos",
      "Acesso a eventos VIP"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: 30,
    popular: true,
    benefits: [
      "Tag Premium no servidor e Discord",
      "Acesso a 3 veículos exclusivos",
      "25% mais dinheiro em trabalhos",
      "Acesso a eventos VIP",
      "Kit inicial com $50,000",
      "Acesso a áreas exclusivas"
    ]
  },
  {
    id: "elite",
    name: "Elite",
    price: 50,
    benefits: [
      "Tag Elite no servidor e Discord",
      "Acesso a 5 veículos exclusivos",
      "40% mais dinheiro em trabalhos",
      "Acesso a eventos VIP",
      "Kit inicial com $100,000",
      "Acesso a áreas exclusivas",
      "Armas exclusivas",
      "Propriedade gratuita"
    ]
  }
];

export const factions: Faction[] = [
  {
    id: "police",
    name: "Polícia de Los Santos",
    price: 100,
    description: "Mantenha a lei e a ordem em Los Santos. Acesso a veículos, armas e equipamentos policiais exclusivos.",
    benefits: [
      "Sede completa da polícia",
      "Frota de veículos policiais",
      "Arsenal de armas exclusivas",
      "Sistema de promoção interno",
      "Acesso a operações especiais"
    ],
    image: "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "mafia",
    name: "Máfia Italiana",
    price: 120,
    description: "Controle o submundo do crime organizado. Acesso a operações de contrabando e proteção.",
    benefits: [
      "Mansão exclusiva como sede",
      "Veículos de luxo blindados",
      "Negócios ilegais exclusivos",
      "Acesso a armas raras",
      "Território no centro da cidade"
    ],
    image: "https://images.pexels.com/photos/3510303/pexels-photo-3510303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "gang",
    name: "Grove Street Families",
    price: 80,
    description: "Domine as ruas com sua gangue. Território em Grove Street com operações de drogas e armas.",
    benefits: [
      "Território em Grove Street",
      "Arsenal de armas de gangue",
      "Veículos customizados",
      "Operações de drogas",
      "Sistema de recrutamento"
    ],
    image: "https://images.pexels.com/photos/1426516/pexels-photo-1426516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "medic",
    name: "Serviço Médico de Emergência",
    price: 90,
    description: "Salve vidas em Los Santos como parte do SME. Acesso a ambulâncias e equipamento médico.",
    benefits: [
      "Hospital como sede",
      "Frota de ambulâncias",
      "Equipamento médico exclusivo",
      "Capacidade de ressuscitação",
      "Salário adicional por atendimento"
    ],
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const serverStats: ServerStat[] = [
  {
    label: "Jogadores Online",
    value: "87/150",
    icon: "users"
  },
  {
    label: "Veículos",
    value: 250,
    icon: "car"
  },
  {
    label: "Propriedades",
    value: 120,
    icon: "home"
  },
  {
    label: "Facções",
    value: 10,
    icon: "shield"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Veículos customizados no servidor"
  },
  {
    id: "2",
    src: "https://images.pexels.com/photos/3874405/pexels-photo-3874405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Perseguição policial em Los Santos"
  },
  {
    id: "3",
    src: "https://images.pexels.com/photos/290470/pexels-photo-290470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Cassino de Los Santos"
  },
  {
    id: "4",
    src: "https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mansão de luxo à venda"
  },
  {
    id: "5",
    src: "https://images.pexels.com/photos/3259924/pexels-photo-3259924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Área de criminosos"
  },
  {
    id: "6",
    src: "https://images.pexels.com/photos/1104365/pexels-photo-1104365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Vista aérea de Los Santos"
  }
];