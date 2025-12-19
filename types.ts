export type Category = 'Top' | 'Bottom' | 'Shoes' | 'Outerwear' | 'Accessories';

export interface ClothingItem {
  id: string;
  name: string;
  category: Category;
  imageUrl: string;
  tags: string[];
  color?: string;
}

export interface Outfit {
  top: ClothingItem | null;
  bottom: ClothingItem | null;
  shoes: ClothingItem | null;
}

export interface WeatherData {
  condition: string;
  temp: number;
  icon: string;
}