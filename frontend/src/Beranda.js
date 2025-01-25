import React, { useState } from 'react';
import './Beranda.css';
import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useKategoriAktif from './useKategoriAktif';
import banMotor from './images/ban.jpg'; // Impor gambar lokal
import banBelakang from './images/belakang.jpg'; // Impor gambar lokal
import BanTubles from './images/Tubles.jpg'; // Impor gambar lokal
import BanCross from './images/cross.jpg'; // Impor gambar lokal
import Bantrail from './images/trail.jpg'; // Impor gambar lokal
import Banjalanraya from './images/jalan raya.jpg'; // Impor gambar lokal
import Banekonomis from './images/ekonomis.jpg'; // Impor gambar lokal
import Bansport from './images/sport.jpg'; // Impor gambar lokal
import Banhujan from './images/hujan.jpg'; // Impor gambar lokal
import Bantouring from './images/touring.jpg'; // Impor gambar lokal
import VelgRacing from './images/A1.jpg'; // Impor gambar lokal
import VelgAluminium from './images/A2.jpg'; // Impor gambar lokal
import VelgCustom from './images/A3.jpg'; // Impor gambar lokal
import KenalpotRacing from './images/B1.jpg'; // Impor gambar lokal
import KenalpotStandar from './images/B2.jpg'; // Impor gambar lokal
import StoplampLED from './images/C1.jpg'; // Impor gambar lokal
import StoplampCustom from './images/C2.jpg'; // Impor gambar lokal

const produk = {
  Ban: [
    { id: 1, nama: 'Ban Motor', harga: 'Rp 250.000', gambar: banMotor, deskripsi: 'Ban motor terbaik' },
    { id: 2, nama: 'Ban Belakang', harga: 'Rp 300.000', gambar: banBelakang, deskripsi: 'Ban belakang khusus off-road' },
    { id: 3, nama: 'Ban Tubeless', harga: 'Rp 350.000', gambar: BanTubles, deskripsi: 'Ban tubeless berkualitas tinggi' },
    { id: 4, nama: 'Ban Cross', harga: 'Rp 400.000', gambar: BanCross, deskripsi: 'Ban untuk medan cross' },
    { id: 5, nama: 'Ban Trail', harga: 'Rp 450.000', gambar: Bantrail, deskripsi: 'Ban khusus motor trail' },
    { id: 6, nama: 'Ban Jalan Raya', harga: 'Rp 320.000', gambar: Banjalanraya, deskripsi: 'Ban untuk perjalanan jarak jauh' },
    { id: 7, nama: 'Ban Ekonomis', harga: 'Rp 220.000', gambar: Banekonomis, deskripsi: 'Ban dengan harga terjangkau' },
    { id: 8, nama: 'Ban Sport', harga: 'Rp 500.000', gambar: Bansport, deskripsi: 'Ban untuk motor sport' },
    { id: 9, nama: 'Ban Touring', harga: 'Rp 550.000', gambar: Banhujan, deskripsi: 'Ban untuk perjalanan jauh' },
    { id: 10, nama: 'Ban Hujan', harga: 'Rp 600.000', gambar: Bantouring, deskripsi: 'Ban khusus kondisi hujan' },
  ],
  Velg: [
    { id: 11, nama: 'Velg Racing', harga: 'Rp 500.000', gambar: VelgRacing, deskripsi: 'Velg racing untuk performa terbaik' },
    { id: 12, nama: 'Velg Aluminium', harga: 'Rp 600.000', gambar: VelgAluminium, deskripsi: 'Velg aluminium kuat dan ringan' },
    { id: 13, nama: 'Velg Custom', harga: 'Rp 700.000', gambar: VelgCustom, deskripsi: 'Velg custom untuk gaya unik' },
   
  ],
  Kenalpot: [
    { id: 21, nama: 'Kenalpot Racing', harga: 'Rp 800.000', gambar: KenalpotRacing, deskripsi: 'Kenalpot untuk performa maksimal' },
    { id: 22, nama: 'Kenalpot Standar', harga: 'Rp 500.000', gambar: KenalpotStandar, deskripsi: 'Kenalpot dengan suara halus' },
    
  ],
  Stoplamp: [
    { id: 31, nama: 'Stoplamp LED', harga: 'Rp 300.000', gambar: StoplampLED, deskripsi: 'Stoplamp LED terang dan hemat energi' },
    { id: 32, nama: 'Stoplamp Custom', harga: 'Rp 400.000', gambar: StoplampCustom, deskripsi: 'Stoplamp dengan desain unik' },
    
  ],
};

function Beranda() {
  const { kategoriAktif, setAktif } = useKategoriAktif('Ban');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMotorType, setSelectedMotorType] = useState(null);
  const navigate = useNavigate();

  const handleKategoriChange = (kategori) => {
    setAktif(kategori);
  };

  const handleBeliSekarangClick = (produk) => {
    navigate('/detail-produk', { state: { produk } });
  };

  const handleMotorTypeSelect = (motorType) => {
    setSelectedMotorType(motorType);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="beranda">
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
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150'; // Fallback jika gambar gagal dimuat
                    }}
                  />
                  <h3 className="produk-nama">{item.nama}</h3>
                  <p className="produk-harga">{item.harga}</p>
                  <button className="produk-button">Tambah ke Keranjang</button>
                  <button
                    className="produk-button beli-sekarang"
                    onClick={() => handleBeliSekarangClick(item)}
                  >
                    Beli Sekarang
                  </button>
                </div>
              ))}
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>

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

      {selectedMotorType && (
        <div className="selected-motor">
          <p>Anda memilih motor: {selectedMotorType}</p>
        </div>
      )}
    </div>
  );
}

export default Beranda;