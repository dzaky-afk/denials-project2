import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Keranjang.css'; // Import file CSS

function Keranjang() {
  const [keranjang, setKeranjang] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil data keranjang dari localStorage
    const storedKeranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
    setKeranjang(storedKeranjang);
  }, []);

  const handleHapusBarang = (index) => {
    let updatedKeranjang = [...keranjang];
    updatedKeranjang.splice(index, 1);
    localStorage.setItem('keranjang', JSON.stringify(updatedKeranjang)); // Simpan ke localStorage
    setKeranjang(updatedKeranjang);
  };

  // Hitung total harga
  const totalHarga = keranjang.reduce((total, item) => total + item.produk.harga, 0);

  const handleCheckout = () => {
    // Arahkan ke halaman checkout dengan data keranjang
    navigate('/checkout', { state: { keranjang, totalHarga } });
  };

  return (
    <div className="keranjang">
      <h2>Keranjang Belanja Anda</h2>
      {keranjang.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#888' }}>Keranjang Anda kosong.</p>
      ) : (
        <div>
          {keranjang.map((item, index) => (
            <div key={index} className="keranjang-item">
              <img src={item.produk.gambar} alt={item.produk.nama} />
              <div>
                <p><strong>{item.produk.nama}</strong></p>
                <p>Warna: {item.warna}</p>
                <p>Ukuran: {item.ukuran}</p>
                <p>Tipe Motor: {item.tipeMotor}</p>
                <p>Harga: Rp {item.produk.harga.toLocaleString()}</p> {/* Menampilkan harga produk */}
              </div>
              <button onClick={() => handleHapusBarang(index)}>Hapus</button>
            </div>
          ))}
          <div className="total-harga">
            <p><strong>Total Harga: Rp {totalHarga.toLocaleString()}</strong></p>
          </div>
          <button onClick={handleCheckout} className="checkout-button">
            Checkout Semua
          </button>
        </div>
      )}
    </div>
  );
}

export default Keranjang;
