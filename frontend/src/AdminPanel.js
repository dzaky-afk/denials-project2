import React, { useState, useEffect } from "react";

function AdminPanel({ profil, setProfil }) {
  const [editProfil, setEditProfil] = useState(profil); // State for editing profile

  useEffect(() => {
    setEditProfil(profil);  // Sync with the latest profil from the parent
  }, [profil]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProfil((prevProfil) => ({
      ...prevProfil,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProfil(editProfil);  // Save the updated profile in parent
    alert("Profil berhasil diperbarui");
  };

  return (
    <div>
      <h2>Edit Profil Penjual</h2>
      <div>
        <label>Nama:</label>
        <input
          type="text"
          name="nama"
          value={editProfil.nama}
          onChange={handleInputChange}
          placeholder="Masukkan nama lengkap"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={editProfil.email}
          onChange={handleInputChange}
          placeholder="Masukkan email"
        />
      </div>
      <div>
        <label>Alamat:</label>
        <textarea
          name="alamat"
          value={editProfil.alamat}
          onChange={handleInputChange}
          placeholder="Masukkan alamat"
        />
      </div>
      <button onClick={handleSave}>Simpan Profil</button>
    </div>
  );
}

export default AdminPanel;
