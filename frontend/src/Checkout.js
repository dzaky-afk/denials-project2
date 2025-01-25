import React from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const location = useLocation();
  const { produk, alamat } = location.state || {};  // Ambil produk dan alamat

  if (!produk) {
    return <div>Data produk tidak ditemukan.</div>;
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="produk-detail">
        <h3>{produk.nama}</h3>
        <p>{produk.deskripsi}</p>
        <p>{produk.harga}</p>
      </div>

      <div className="alamat-detail">
        <h3>Alamat Pengiriman</h3>
        <p>{alamat}</p>
      </div>

      <button className="submit-button">Proses Pembayaran</button>
    </div>
  );
}

export default Checkout;
