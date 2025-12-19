import { ClothingItem } from './types';

export const INITIAL_WARDROBE: ClothingItem[] = [
  {
    id: '1',
    name: 'Classic White Linen Shirt',
    category: 'Top',
    imageUrl: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=500&q=80',
    tags: ['formal', 'summer', 'white', 'linen'],
    color: 'White',
  },
  {
    id: '2',
    name: 'Beige Pleated Trousers',
    category: 'Bottom',
    imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80',
    tags: ['casual', 'work', 'beige'],
    color: 'Beige',
  },
  {
    id: '3',
    name: 'Minimalist White Sneakers',
    category: 'Shoes',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80',
    tags: ['casual', 'comfortable', 'white'],
    color: 'White',
  },
  {
    id: '4',
    name: 'Silk Blouse',
    category: 'Top',
    imageUrl: 'https://images.unsplash.com/photo-1604085792782-8d92f276d7d8?auto=format&fit=crop&w=500&q=80',
    tags: ['formal', 'evening', 'silk'],
    color: 'Cream',
  },
  {
    id: '5',
    name: 'Denim Jeans',
    category: 'Bottom',
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80',
    tags: ['casual', 'denim', 'blue'],
    color: 'Blue',
  },
  {
    id: '6',
    name: 'Leather Loafers',
    category: 'Shoes',
    imageUrl: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=500&q=80',
    tags: ['formal', 'work', 'leather'],
    color: 'Brown',
  },
  {
    id: '7',
    name: 'Black Turtleneck',
    category: 'Top',
    imageUrl: 'https://images.unsplash.com/photo-1624225205260-2522e8697193?auto=format&fit=crop&w=500&q=80',
    tags: ['winter', 'minimalist', 'black'],
    color: 'Black',
  },
  {
    id: '8',
    name: 'Grey Wool Skirt',
    category: 'Bottom',
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=500&q=80',
    tags: ['winter', 'work', 'grey'],
    color: 'Grey',
  },
  {
    id: '9',
    name: 'Oversized Blazer',
    category: 'Top',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80',
    tags: ['work', 'layering', 'beige'],
    color: 'Beige',
  },
  {
    id: '10',
    name: 'Chelsea Boots',
    category: 'Shoes',
    imageUrl: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=500&q=80',
    tags: ['winter', 'leather', 'black'],
    color: 'Black',
  },
];

export const MOCK_NEW_ITEM: ClothingItem = {
  id: 'new-scan-1',
  name: 'Blue Denim Jacket',
  category: 'Outerwear', // Treating as top for simplicity in outfit gen or separate
  imageUrl: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=500&q=80',
  tags: ['casual', 'denim', 'blue', 'new'],
  color: 'Blue',
};