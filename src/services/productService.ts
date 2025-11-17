export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  sizes?: string[];
  colors?: string[];
}

// Mock product data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    category: 'Electronics',
    rating: 4.8,
    reviews: 245,
    inStock: true,
    colors: ['Black', 'Silver', 'Blue']
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 399.99,
    description: 'Advanced fitness tracking with heart rate monitor and GPS.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    category: 'Electronics',
    rating: 4.6,
    reviews: 189,
    inStock: true,
    colors: ['Black', 'White', 'Rose Gold']
  },
  {
    id: '3',
    name: 'Designer Backpack',
    price: 89.99,
    description: 'Stylish and functional backpack with laptop compartment.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    category: 'Accessories',
    rating: 4.5,
    reviews: 156,
    inStock: true,
    colors: ['Navy', 'Gray', 'Black']
  },
  {
    id: '4',
    name: 'Minimalist Sneakers',
    price: 129.99,
    description: 'Comfortable all-day wear with premium materials.',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&q=80',
    category: 'Footwear',
    rating: 4.7,
    reviews: 312,
    inStock: true,
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Gray']
  },
  {
    id: '5',
    name: 'Classic Sunglasses',
    price: 159.99,
    description: 'UV protection with timeless style.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
    category: 'Accessories',
    rating: 4.4,
    reviews: 98,
    inStock: true,
    colors: ['Black', 'Tortoise', 'Gold']
  },
  {
    id: '6',
    name: 'Leather Wallet',
    price: 79.99,
    description: 'Handcrafted genuine leather with RFID protection.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80',
    category: 'Accessories',
    rating: 4.9,
    reviews: 421,
    inStock: true,
    colors: ['Brown', 'Black', 'Tan']
  },
  {
    id: '7',
    name: 'Wireless Earbuds',
    price: 179.99,
    description: 'True wireless with active noise cancellation.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',
    category: 'Electronics',
    rating: 4.6,
    reviews: 267,
    inStock: true,
    colors: ['White', 'Black']
  },
  {
    id: '8',
    name: 'Cotton T-Shirt',
    price: 29.99,
    description: 'Premium organic cotton, comfortable fit.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    category: 'Clothing',
    rating: 4.3,
    reviews: 534,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray']
  }
];

export const productService = {
  getAllProducts: async (): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockProducts;
  },

  getProductById: async (id: string): Promise<Product | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockProducts.find(p => p.id === id);
  },

  getProductsByCategory: async (category: string): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockProducts.filter(p => p.category === category);
  },

  searchProducts: async (query: string): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockProducts.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }
};
