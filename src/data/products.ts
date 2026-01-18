export type CategoryId = 'case' | 'switches' | 'keycaps' | 'cable';

export interface ProductOption {
  id: string;
  name: string;
  price: number;
  color?: string;
  image?: string;
  description?: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  options: ProductOption[];
}

export const KEYBOARD_DATA: Category[] = [
  {
    id: 'case',
    name: 'Estructura',
    options: [
      { id: 'case-black', name: 'Negro mate', price: 0, color: '#1a1a1a' },
      { id: 'case-white', name: 'Blanco nieve', price: 0, color: '#f5f5f5' },
      { id: 'case-blue', name: 'Azul electrico', price: 25, color: '#3b82f6' },
      { id: 'case-pink', name: 'Rosa sakura', price: 25, color: '#f9a8d4' },
    ],
  },
  {
    id: 'switches',
    name: 'Switches',
    options: [
      { id: 'sw-red', name: 'Rojo lineal', price: 0, description: 'Smooth and quiet', color: '#ef4444' },
      { id: 'sw-blue', name: 'Azul clicky', price: 0, description: 'Tactile and loud', color: '#3b82f6' },
      { id: 'sw-brown', name: 'Marron tactil', price: 10, description: 'Best of both worlds', color: '#a855f7' },
    ],
  },
  {
    id: 'keycaps',
    name: 'Keycaps',
    options: [
      { id: 'caps-classic', name: 'Gris clasico', price: 0, color: '#4b5563' },
      { id: 'caps-retro', name: 'Beige retro', price: 15, color: '#d6d3d1' },
      { id: 'caps-neon', name: 'Cyber neon', price: 35, color: '#22d3ee' },
    ],
  },
];

export const BASE_PRICE = 99;