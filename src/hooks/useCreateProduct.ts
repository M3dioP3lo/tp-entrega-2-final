import { useState } from 'react';
import { productService } from '../MOCKS/ecommerce/service';

interface ProductData {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export function useCreateProduct() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCreate(productData: ProductData) {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await productService.createProduct(productData);
      setSuccess(true);
    } catch (err) {
      setError('No se pudo crear el producto');
    } finally {
      setLoading(false);
    }
  }

  return { handleCreate, loading, success, error };
}
