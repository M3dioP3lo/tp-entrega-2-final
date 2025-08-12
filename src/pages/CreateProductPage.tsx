import React, { useState } from 'react';
import { useCreateProduct } from '../hooks/useCreateProduct';
import styles from '../components/Navbar.module.css';

function CreateProductPage() {
  const { handleCreate, loading, success, error } = useCreateProduct();

  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.title ||
      !form.description ||
      !form.price ||
      !form.image ||
      !form.category
    ) {
      alert('Por favor completá todos los campos');
      return;
    }

    await handleCreate({
      title: form.title,
      description: form.description,
      price: parseFloat(form.price),
      image: form.image,
      category: form.category,
    });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Crear nuevo producto</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="image"
          placeholder="URL de imagen"
          value={form.image}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={form.category}
          onChange={handleChange}
          className={styles.input}
        />

        <button type="submit" className={styles.buttonLink} disabled={loading}>
          {loading ? 'Creando...' : 'Crear producto'}
        </button>
      </form>

      {success && (
        <p style={{ color: 'green', marginTop: '1rem' }}>
          Producto creado con éxito ✅
        </p>
      )}
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}

export default CreateProductPage;
