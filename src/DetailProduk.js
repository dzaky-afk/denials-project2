import React, { useState } from 'react';
import './DetailProduk.css'; // Import file CSS untuk styling
import { useLocation, useNavigate } from 'react-router-dom';

function DetailProduk() {
  const location = useLocation();
  const { produk } = location.state || {}; // Mengambil produk dari state
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false); // Untuk menangani tampilnya form
  const [alamat, setAlamat] = useState('');
  const [jasaPengiriman, setJasaPengiriman] = useState('');
  const [metodePembayaran, setMetodePembayaran] = useState('');
  const [warna, setWarna] = useState('');
  const [ukuran, setUkuran] = useState('');
  const [tipeMotor, setTipeMotor] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Menyimpan status pembayaran berhasil

  if (!produk) {
    return <div>Produk tidak ditemukan.</div>;
  }

  const handleBeliSekarangClick = () => {
    setShowForm(true); // Tampilkan form untuk memilih warna, ukuran, dan tipe motor
  };

  const handleTambahKeKeranjang = () => {
    const item = { produk, warna, ukuran, tipeMotor };
    let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
    keranjang.push(item);
    localStorage.setItem('keranjang', JSON.stringify(keranjang)); // Simpan ke localStorage
    alert('Produk berhasil ditambahkan ke keranjang!');
  };

  const handlePembayaranSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess(true); // Pembayaran berhasil
    navigate('/pembayaran-berhasil');
  };

  return (
    <div className="detail-produk">
      <div className="detail-container">
        <div className="produk-gambar-container">
          <img src={produk.gambar} alt={produk.nama} className="produk-gambar" />
        </div>
        <div className="produk-info">
          <h1 className="produk-nama">{produk.nama}</h1>
          <p className="produk-harga">{produk.harga}</p>
          <p className="produk-deskripsi">
            Deskripsi: {produk.deskripsi || 'Tidak ada deskripsi.'}
          </p>
          <div className="action-buttons">
            <button
              className="produk-button beli-sekarang"
              onClick={handleBeliSekarangClick}
            >
              Beli Sekarang
            </button>
            <button className="produk-button tambah-keranjang" onClick={handleTambahKeKeranjang}>
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>

      {/* Form Pilihan Warna, Ukuran, dan Tipe Motor */}
      {showForm && !paymentSuccess && (
        <div className="pilihan-form">
          <h2>Pilih Opsi Produk</h2>
          <form>
            <div className="form-group">
              <label>Pilih Warna</label>
              <select
                value={warna}
                onChange={(e) => setWarna(e.target.value)}
                required
              >
                <option value="">Pilih Warna</option>
                <option value="Merah">Merah</option>
                <option value="Hitam">Hitam</option>
                <option value="Putih">Putih</option>
              </select>
            </div>

            <div className="form-group">
              <label>Pilih Ukuran</label>
              <select
                value={ukuran}
                onChange={(e) => setUkuran(e.target.value)}
                required
              >
                <option value="">Pilih Ukuran</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>

            <div className="form-group">
              <label>Pilih Tipe Motor</label>
              <select
                value={tipeMotor}
                onChange={(e) => setTipeMotor(e.target.value)}
                required
              >
                <option value="">Pilih Tipe Motor</option>
                <option value="Sport">Sport</option>
                <option value="Cruiser">Cruiser</option>
                <option value="Matic">Matic</option>
              </select>
            </div>

            <button
              type="button"
              className="submit-button"
              onClick={() => setShowForm(false)} // Sembunyikan pilihan dan lanjutkan ke form pembayaran
            >
              Lanjut ke Pembayaran
            </button>
          </form>
        </div>
      )}

      {/* Form Pembelian - Alamat, Jasa Pengiriman, dan Pembayaran */}
      {!paymentSuccess && !showForm && (
        <div className="form-pembelian">
          <h2>Detail Pembelian</h2>
          <form onSubmit={handlePembayaranSubmit}>
            <div className="form-group">
              <label>Alamat Penerima</label>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                required
                placeholder="Masukkan alamat lengkap"
              />
            </div>

            <div className="form-group">
              <label>Jasa Pengiriman</label>
              <select
                value={jasaPengiriman}
                onChange={(e) => setJasaPengiriman(e.target.value)}
                required
              >
                <option value="">Pilih Jasa Pengiriman</option>
                <option value="JNE">JNE</option>
                <option value="TIKI">TIKI</option>
                <option value="Pos Indonesia">Pos Indonesia</option>
              </select>
            </div>

            <div className="form-group">
              <label>Metode Pembayaran</label>
              <select
                value={metodePembayaran}
                onChange={(e) => setMetodePembayaran(e.target.value)}
                required
              >
                <option value="">Pilih Metode Pembayaran</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="Kartu Kredit">Kartu Kredit</option>
                <option value="COD">Cash On Delivery</option>
              </select>
            </div>

            <button type="submit" className="submit-button">
              Konfirmasi Pembelian
            </button>
          </form>
        </div>
      )}

      {/* Ulasan Pembeli */}
      <div className="ulasan">
        <h2>Ulasan Pembeli</h2>
        {/* Menampilkan ulasan produk */}
      </div>
    </div>
  );
}

export default DetailProduk;
