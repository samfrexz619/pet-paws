export interface CardItems {
  variant: string;
  id: number;
  img: string;
  path: string;
  alt: string;
}

export interface CatList {
  id: string;
  url: string;
}

export interface Reaction {
  id: string;
  icon: string;
}

interface weight {
  imperial: string;
  metric: string;
}

interface Image {
  url: string;
  id: string;
}

export interface Breed {
  id: string;
  name: string;
  temperament: string;
  description: string;
  origin: string;
  weight: weight;
  life_span: string;
  image: Image;
}