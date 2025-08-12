// Mock product database
let productsDB = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max 256GB',
    price: 1199.99,
    originalPrice: 1299.99,
    discount: 8,
    description:
      'El iPhone 15 Pro Max más avanzado hasta la fecha. Con chip A17 Pro, cámara de 48MP y pantalla Super Retina XDR de 6.7 pulgadas.',
    category: 'electronics',
    brand: 'Apple',
    colors: ['Negro', 'Blanco', 'Azul', 'Gris'],
    image:
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.8,
      count: 2847,
    },
    prime: true,
    inStock: true,
  },
  {
    id: 2,
    title: 'MacBook Air M2 13 pulgadas',
    price: 1199.0,
    originalPrice: 1349.0,
    discount: 11,
    description:
      'MacBook Air con chip M2, pantalla Liquid Retina de 13.6 pulgadas, 8GB de memoria unificada y SSD de 256GB.',
    category: 'electronics',
    brand: 'Apple',
    colors: ['Gris', 'Blanco'],
    image:
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.9,
      count: 1523,
    },
    prime: true,
    inStock: true,
  },
  {
    id: 3,
    title: 'Samsung Galaxy S24 Ultra',
    price: 1099.99,
    description:
      'Smartphone Samsung Galaxy S24 Ultra con S Pen integrado, cámara de 200MP y pantalla Dynamic AMOLED 2X de 6.8 pulgadas.',
    category: 'electronics',
    brand: 'Samsung',
    colors: ['Negro', 'Gris', 'Verde'],
    image:
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.7,
      count: 3241,
    },
    prime: true,
    inStock: true,
  },
  {
    id: 4,
    title: 'Sony WH-1000XM5 Auriculares',
    price: 349.99,
    originalPrice: 399.99,
    discount: 13,
    description:
      'Auriculares inalámbricos con cancelación de ruido líder en la industria, sonido de alta resolución y hasta 30 horas de batería.',
    category: 'electronics',
    brand: 'Sony',
    colors: ['Negro', 'Blanco'],
    image:
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.6,
      count: 1876,
    },
    prime: true,
    inStock: true,
  },
  {
    id: 5,
    title: 'Camiseta Básica de Algodón',
    price: 19.99,
    description:
      'Camiseta básica de algodón 100% orgánico, disponible en varios colores. Perfecta para el día a día.',
    category: 'clothing',
    brand: 'H&M',
    colors: ['Negro', 'Blanco', 'Azul', 'Rojo', 'Verde'],
    image:
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.3,
      count: 892,
    },
    inStock: true,
  },
  {
    id: 6,
    title: 'Jeans Slim Fit Hombre',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    description:
      'Jeans de corte slim fit para hombre, fabricados con denim de alta calidad y acabado premium.',
    category: 'clothing',
    brand: "Levi's",
    colors: ['Azul', 'Negro', 'Gris'],
    image:
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.4,
      count: 567,
    },
    inStock: true,
  },
  {
    id: 7,
    title: 'Vestido Elegante Mujer',
    price: 129.99,
    description:
      'Vestido elegante para ocasiones especiales, confeccionado en tejido de alta calidad con diseño atemporal.',
    category: 'clothing',
    brand: 'Zara',
    colors: ['Negro', 'Azul', 'Rojo'],
    image:
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.5,
      count: 234,
    },
    inStock: true,
  },
  {
    id: 8,
    title: 'Zapatillas Deportivas Running',
    price: 159.99,
    originalPrice: 189.99,
    discount: 16,
    description:
      'Zapatillas de running con tecnología de amortiguación avanzada y suela antideslizante para máximo rendimiento.',
    category: 'clothing',
    brand: 'Nike',
    colors: ['Negro', 'Blanco', 'Azul', 'Rojo'],
    image:
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.7,
      count: 1432,
    },
    prime: true,
    inStock: true,
  },
  {
    id: 9,
    title: 'Sofá Modular 3 Plazas',
    price: 899.99,
    originalPrice: 1199.99,
    discount: 25,
    description:
      'Sofá modular de 3 plazas tapizado en tela de alta calidad, diseño moderno y estructura resistente.',
    category: 'home',
    brand: 'IKEA',
    colors: ['Gris', 'Azul', 'Marrón'],
    image:
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.2,
      count: 156,
    },
    inStock: true,
  },
  {
    id: 10,
    title: 'Mesa de Comedor Extensible',
    price: 549.99,
    description:
      'Mesa de comedor extensible de madera maciza, perfecta para 6-8 personas. Diseño elegante y funcional.',
    category: 'home',
    brand: 'IKEA',
    colors: ['Marrón', 'Negro'],
    image:
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.6,
      count: 89,
    },
    inStock: true,
  },
  {
    id: 11,
    title: 'Lámpara de Pie LED',
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    description:
      'Lámpara de pie LED con regulador de intensidad, diseño minimalista y bajo consumo energético.',
    category: 'home',
    brand: 'Philips',
    colors: ['Blanco', 'Negro'],
    image:
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.4,
      count: 267,
    },
    inStock: true,
  },
  {
    id: 12,
    title: 'Set de Sartenes Antiadherentes',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    description:
      'Set de 3 sartenes antiadherentes de diferentes tamaños, aptas para todo tipo de cocinas incluyendo inducción.',
    category: 'home',
    brand: 'Tefal',
    colors: ['Negro', 'Rojo'],
    image:
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.3,
      count: 445,
    },
    prime: true,
    inStock: true,
  },
  {
    id: 13,
    title: 'Tablet iPad Air 10.9 pulgadas',
    price: 649.99,
    description:
      'iPad Air con chip M1, pantalla Liquid Retina de 10.9 pulgadas y compatibilidad con Apple Pencil de 2ª generación.',
    category: 'electronics',
    brand: 'Apple',
    colors: ['Gris', 'Rosa', 'Azul'],
    image:
      'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.8,
      count: 1234,
    },
    prime: true,
    inStock: true,
  },
  {
    id: 14,
    title: 'Chaqueta de Cuero Hombre',
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    description:
      'Chaqueta de cuero genuino para hombre, diseño clásico con forro interior y múltiples bolsillos.',
    category: 'clothing',
    brand: 'Zara',
    colors: ['Negro', 'Marrón'],
    image:
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.5,
      count: 178,
    },
    inStock: true,
  },
  {
    id: 15,
    title: 'Aspiradora Robot Inteligente',
    price: 399.99,
    originalPrice: 499.99,
    discount: 20,
    description:
      'Aspiradora robot con navegación inteligente, control por app y función de fregado. Ideal para todo tipo de suelos.',
    category: 'home',
    brand: 'Roomba',
    colors: ['Negro', 'Blanco'],
    image:
      'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.1,
      count: 892,
    },
    prime: true,
    inStock: true,
  },
  {
    id: 16,
    title: 'Monitor Gaming 27 pulgadas 144Hz',
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    description:
      'Monitor gaming de 27 pulgadas con resolución QHD, 144Hz de frecuencia de actualización y tecnología FreeSync.',
    category: 'electronics',
    brand: 'ASUS',
    colors: ['Negro'],
    image:
      'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.6,
      count: 567,
    },
    prime: true,
    inStock: true,
  },
  {
    id: 17,
    title: 'Sudadera con Capucha Unisex',
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    description:
      'Sudadera con capucha de algodón premium, diseño unisex con bolsillo frontal tipo canguro.',
    category: 'clothing',
    brand: 'Adidas',
    colors: ['Negro', 'Gris', 'Azul', 'Verde'],
    image:
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.4,
      count: 789,
    },
    inStock: true,
  },
  {
    id: 18,
    title: 'Cafetera Espresso Automática',
    price: 799.99,
    originalPrice: 999.99,
    discount: 20,
    description:
      'Cafetera espresso automática con molinillo integrado, pantalla táctil y múltiples opciones de personalización.',
    category: 'home',
    brand: "De'Longhi",
    colors: ['Negro', 'Gris'],
    image:
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: {
      rate: 4.7,
      count: 234,
    },
    prime: true,
    inStock: true,
  },
];

// Categories
const categories = [
  { id: 'electronics', name: 'Electrónicos' },
  { id: 'clothing', name: 'Ropa y Accesorios' },
  { id: 'home', name: 'Hogar y Cocina' },
];

export { productsDB, categories };
