export type MenuCategoryType =
  | 'starters'
  | 'soups-salads'
  | 'main-course'
  | 'rice-biryani'
  | 'vegetarian'
  | 'non-vegetarian'
  | 'desserts'
  | 'beverages';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryType;
  isVeg: boolean;
  isChefSpecial?: boolean;
  spiceLevel?: 1 | 2 | 3; // 1: Mild, 2: Medium, 3: Fiery
  calories?: number;
  allergens?: string[];
  pairingNote?: string;
  image: string;
  preparationTime?: string;
}

export interface ReservationDetails {
  id: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'main-dining' | 'hearthside-counter' | 'chefs-table' | 'garden-terrace';
  fullName: string;
  phone: string;
  email: string;
  occasion: string;
  specialRequests?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  outlet?: string;
  rating: number;
  quote: string;
  date: string;
  verifiedDiner: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'dishes' | 'ambience' | 'kitchen' | 'bar';
  categoryLabel: string;
  description: string;
  imageUrl: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstruction?: string;
}
