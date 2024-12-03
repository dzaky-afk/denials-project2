import React, { useState, useContext } from 'react';
import './Profil.css';
import { UserContext } from './App';  // Import context

function Profil({ setAlamat }) {
  const { alamat } = useContext(UserContext);  // Mengambil alamat dari context
  const [newAlamat, setNewAlamat] = useState(alamat);  // State untuk input alamat baru

  const handleSave = () => {
    setAlamat(newAlamat);  // Update alamat di context
    alert('Alamat berhasil disimpan');
  };

  return (
    <div className="profil-container">
      <h1>Profil Pengguna</h1>
      <div className="profil-data">
        <p><strong>Alamat:</strong> {alamat || 'Belum diisi'}</p>
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

      <button onClick={handleSave}>Simpan Alamat</button>
    </div>
  );
}

export default Profil;
