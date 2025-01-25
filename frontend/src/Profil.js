import React, { useState, useContext } from 'react';
import './Profil.css';
import { UserContext } from './App'; // Mengambil data dari context

function Profil({ setNama, setAlamat }) {
  const { nama, alamat } = useContext(UserContext); // Mengambil nama dan alamat dari context
  const [newNama, setNewNama] = useState(nama); // State untuk nama baru
  const [newAlamat, setNewAlamat] = useState(alamat); // State untuk alamat baru

  const handleSave = () => {
    setNama(newNama); // Update nama di context
    setAlamat(newAlamat); // Update alamat di context
    alert('Profil berhasil diperbarui');
  };

  return (
    <div className="profil-container">
      <div className="profil-card">
        {/* Avatar */}
        <div className="profil-avatar">
          <img
            src="https://via.placeholder.com/100"
            alt="Avatar"
            className="avatar-image"
          />
        </div>
        {/* Informasi Profil */}
        <div className="profil-data">
          <p><strong>Nama:</strong> {nama || 'Belum diisi'}</p>
          <p><strong>Alamat:</strong> {alamat || 'Belum diisi'}</p>
        </div>
        {/* Form Update */}
        <div className="form-group">
          <label>Update Nama:</label>
          <input
            type="text"
            value={newNama}
            onChange={(e) => setNewNama(e.target.value)}
            placeholder="Masukkan nama baru"
          />
        </div>
        <div className="form-group">
          <label>Update Alamat:</label>
          <input
            type="text"
            value={newAlamat}
            onChange={(e) => setNewAlamat(e.target.value)}
            placeholder="Masukkan alamat baru"
          />
        </div>
        {/* Tombol Simpan */}
        <button className="btn-save" onClick={handleSave}>Simpan Perubahan</button>
      </div>
    </div>
  );
}

export default Profil;
