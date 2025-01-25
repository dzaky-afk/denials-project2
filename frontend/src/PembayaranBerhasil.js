import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PembayaranBerhasil.css'; // Import file CSS untuk styling

function PembayaranBerhasil() {
  const navigate = useNavigate();

  const handleKembaliKeBeranda = () => {
    navigate('/'); // Arahkan kembali ke halaman beranda setelah pembayaran berhasil
  };

  return (
    <div className="pembayaran-berhasil">
      <div className="container">
        <h1>Pembayaran Berhasil!</h1>
        <p className="message">Terima kasih telah melakukan pembelian. Pembayaran Anda telah diterima dengan sukses.</p>
        
        <div className="detail-pembelian">
          <h2>Detail Pembelian Anda</h2>
          <div className="produk-info">
            <p><strong>Produk:</strong> Nama Produk</p>
            <p><strong>Harga:</strong> Rp 1.000.000</p>
            <p><strong>Metode Pembayaran:</strong> Transfer Bank</p>
            <p><strong>Nomor Virtual Account:</strong> 123456789012</p>
            <p><strong>Status Pengiriman:</strong> Sedang diproses</p>
          </div>
        </div>

        <button className="kembali-button" onClick={handleKembaliKeBeranda}>
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}

export default PembayaranBerhasil;
