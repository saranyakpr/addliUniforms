export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Navy Suit',
    price: 899,
    originalPrice: 1299,
    category: 'Suits',
    image: 'https://images.unsplash.com/photo-1761522001672-5f1d45ce1b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW4lMjBmYXNoaW9uJTIwbW9kZWwlMjBzdWl0fGVufDF8fHx8MTc3MDgwNTI3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Expertly tailored navy suit crafted from premium Italian wool. Features a modern slim fit design with peak lapels and functional sleeve buttons.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Charcoal', 'Black'],
    rating: 4.8,
    reviews: 124,
    featured: true,
  },
  {
    id: '2',
    name: 'Executive Formal Wear',
    price: 1299,
    category: 'Formal',
    image: 'https://images.unsplash.com/photo-1770582071587-dbbb4b09c2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWFuJTIwZm9ybWFsJTIwd2VhcnxlbnwxfHx8fDE3NzA4MDUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Elegant three-piece formal ensemble perfect for business meetings and special occasions. Made with breathable, wrinkle-resistant fabric.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Charcoal', 'Navy', 'Black'],
    rating: 4.9,
    reviews: 89,
    featured: true,
  },
  {
    id: '3',
    name: 'Designer Blazer',
    price: 699,
    originalPrice: 899,
    category: 'Blazers',
    image: 'https://images.unsplash.com/photo-1630173250799-2813d34ed14b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbWVuJTIwYmxhemVyJTIwb3V0Zml0fGVufDF8fHx8MTc3MDgwNTI3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Contemporary blazer with a refined silhouette. Features notch lapels, two-button closure, and sophisticated texture that elevates any outfit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Navy', 'Grey'],
    rating: 4.7,
    reviews: 156,
    featured: true,
  },
  {
    id: '4',
    name: 'Casual Premium Shirt',
    price: 249,
    category: 'Shirts',
    image: 'https://images.unsplash.com/photo-1768696081821-426e320a387e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwbWFuJTIwY2FzdWFsJTIwc2hpcnR8ZW58MXx8fHwxNzcwODA1Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Versatile casual shirt crafted from premium cotton blend. Perfect balance between comfort and style for everyday sophistication.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Black', 'Grey'],
    rating: 4.6,
    reviews: 203,
    featured: false,
  },
  {
    id: '5',
    name: 'Business Attire Set',
    price: 849,
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1758599543154-7aebd6ef9095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYW4lMjBidXNpbmVzcyUyMGF0dGlyZXxlbnwxfHx8fDE3NzA4MDUyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern business attire designed for the contemporary professional. Includes jacket and trousers with superior construction and fit.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Grey', 'Black'],
    rating: 4.8,
    reviews: 97,
    featured: false,
  },
  {
    id: '6',
    name: 'Winter Collection Suit',
    price: 1499,
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1762232976182-48bf8ce16088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwbWVuJTIwZmFzaGlvbiUyMHdpbnRlcnxlbnwxfHx8fDE3NzA4MDUyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Luxurious winter suit with premium wool blend. Provides warmth without compromising style, perfect for colder seasons.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Charcoal', 'Navy', 'Brown'],
    rating: 4.9,
    reviews: 67,
    featured: false,
  },
  {
    id: '7',
    name: 'Professional Ensemble',
    price: 799,
    originalPrice: 999,
    category: 'Professional',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjB3ZWFyfGVufDF8fHx8MTc3MDgwNTI3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete professional ensemble designed for executives. Features premium construction with attention to every detail.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Grey'],
    rating: 4.7,
    reviews: 143,
    featured: false,
  },
  {
    id: '8',
    name: 'Classic Tuxedo',
    price: 1899,
    category: 'Formal',
    image: 'https://images.unsplash.com/photo-1761522001672-5f1d45ce1b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW4lMjBmYXNoaW9uJTIwbW9kZWwlMjBzdWl0fGVufDF8fHx8MTc3MDgwNTI3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Timeless tuxedo perfect for formal events and galas. Crafted with the finest materials for an impeccable appearance.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy'],
    rating: 5.0,
    reviews: 45,
    featured: true,
  },
];

export const categories = [
  'All',
  'Suits',
  'Blazers',
  'Shirts',
  'Formal',
  'Business',
  'Seasonal',
  'Professional',
];
