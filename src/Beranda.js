import React, { useState } from 'react';
import './Beranda.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useKategoriAktif from './useKategoriAktif'; // Import hook custom

const produk = {
  Ban: [
    { id: 1, nama: 'Ban Motor', harga: 'Rp 250.000', gambar: 'https://via.placeholder.com/150', deskripsi: 'Ban motor terbaik' },
    { id: 2, nama: 'Ban Belakang', harga: 'Rp 300.000', gambar: 'https://via.placeholder.com/150', deskripsi: 'Ban belakang khusus off-road' },
    // Produk lainnya untuk kategori Ban...
  ],
  Velg: [
    { id: 9, nama: 'Velg Racing', harga: 'Rp 500.000', gambar: 'https://via.placeholder.com/150', deskripsi: 'Velg racing untuk performa terbaik' },
    { id: 10, nama: 'Velg Aluminium', harga: 'Rp 600.000', gambar: 'https://via.placeholder.com/150', deskripsi: 'Velg aluminium kuat dan ringan' },
    // Produk lainnya untuk kategori Velg...
  ],
  Kenalpot: [
    { id: 17, nama: 'Kenalpot Racing', harga: 'Rp 800.000', gambar: 'https://via.placeholder.com/150', deskripsi: 'Kenalpot untuk performa maksimal' },
    { id: 18, nama: 'Kenalpot Standar', harga: 'Rp 500.000', gambar: 'https://via.placeholder.com/150', deskripsi: 'Kenalpot dengan suara halus' },
  ],
  Stoplamp: [
    { id: 19, nama: 'Stoplamp LED', harga: 'Rp 300.000', gambar: 'https://via.placeholder.com/150', deskripsi: 'Stoplamp LED terang dan hemat energi' },
    { id: 20, nama: 'Stoplamp Custom', harga: 'Rp 400.000', gambar: 'https://via.placeholder.com/150', deskripsi: 'Stoplamp dengan desain unik' },
  ],
};

function Beranda() {
  const { kategoriAktif, setAktif } = useKategoriAktif('Ban'); // Gunakan hook custom
  const [isModalOpen, setIsModalOpen] = useState(false);  // State untuk modal
  const [selectedMotorType, setSelectedMotorType] = useState(null);  // State untuk tipe motor yang dipilih
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleKategoriChange = (kategori) => {
    setAktif(kategori); // Perbarui kategori aktif
  };

  const handleBeliSekarangClick = (produk) => {
    navigate('/detail-produk', { state: { produk } }); // Navigasi ke halaman detail produk
  };

  const handleMotorTypeSelect = (motorType) => {
    setSelectedMotorType(motorType);  // Set tipe motor yang dipilih
    setIsModalOpen(false);  // Tutup modal setelah memilih tipe motor
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);  // Tutup modal jika batal
  };

  return (
    <div className="beranda">
      {/* Menampilkan tombol kategori */}
      <div className="kategori-button-container">
        {Object.keys(produk).map((kategori) => (
          <button
            key={kategori}
            className={`kategori-button ${kategori === kategoriAktif ? 'active' : ''}`}
            onClick={() => handleKategoriChange(kategori)}
          >
            {kategori}
          </button>
        ))}
      </div>

      {/* Menampilkan Produk Berdasarkan Kategori yang Dipilih */}
      <TransitionGroup className="produk-container">
        <CSSTransition
          key={kategoriAktif}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="kategori">
            <h2 className="kategori-title">{kategoriAktif}</h2>
            <div className="produk-list">
              {produk[kategoriAktif].map((item) => (
                <div key={item.id} className="produk-item">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="produk-gambar"
                  />
                  <h3 className="produk-nama">{item.nama}</h3>
                  <p className="produk-harga">{item.harga}</p>
                  <button className="produk-button">Tambah ke Keranjang</button>
                  <button
                    className="produk-button beli-sekarang"
                    onClick={() => handleBeliSekarangClick(item)} // Pass produk ke detail
                  >
                    Beli Sekarang
                  </button>
                </div>
              ))}
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>

      {/* Modal Pilihan Tipe Motor */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Pilih Tipe Motor</h2>
            <button onClick={() => handleMotorTypeSelect('Honda')}>Honda</button>
            <button onClick={() => handleMotorTypeSelect('Yamaha')}>Yamaha</button>
            <button onClick={handleCloseModal}>Batal</button>
          </div>
        </div>
      )}

      {/* Menampilkan tipe motor yang dipilih */}
      {selectedMotorType && (
        <div className="selected-motor">
          <p>Anda memilih motor: {selectedMotorType}</p>
        </div>
      )}
    </div>
  );
}

export default Beranda;
