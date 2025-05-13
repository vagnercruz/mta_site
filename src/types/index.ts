export interface VipPackage {
  id: string;
  name: string;
  price: number;
  benefits: string[];
  popular?: boolean;
}

export interface Faction {
  id: string;
  name: string;
  price: number;
  description: string;
  benefits: string[];
  image: string;
}

export interface ServerStat {
  label: string;
  value: string | number;
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}