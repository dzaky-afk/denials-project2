import React from 'react';

function ProdukCard({ produk }) {
  return (
    <div className="produk-card">
      <img src={produk.gambar} alt={produk.nama} />
      <h3>{produk.nama}</h3>
      <p>{produk.deskripsi}</p>
      <p>Harga: Rp {produk.harga.toLocaleString()}</p>
    </div>
  );
}

export default ProdukCard;
