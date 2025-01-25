import React from 'react';

const products = [
  {
    id: 1,
    name: 'Ban Motor',
    price: 'Rp 250.000',
    image: 'url_gambar_ban_motor.jpg'
  },
  {
    id: 2,
    name: 'Ban Belakang',
    price: 'Rp 300.000',
    image: 'url_gambar_ban_belakang.jpg'
  },
  {
    id: 3,
    name: 'Ban Tubeless',
    price: 'Rp 350.000',
    image: 'url_gambar_ban_tubeless.jpg'
  },
  {
    id: 4,
    name: 'Ban Cross',
    price: 'Rp 400.000',
    image: 'url_gambar_ban_cross.jpg'
  }
];

const ProductItem = ({ product }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', textAlign: 'center' }}>
    <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
    <h3>{product.name}</h3>
    <p>{product.price}</p>
    <button>Tambah ke Keranjang</button>
    <button>Beli Sekarang</button>
  </div>
);

const ProductList = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {products.map(product => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;