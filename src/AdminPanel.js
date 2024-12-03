import React, { useState } from "react";
import AdminPanel from "./AdminPanel";

function App() {
  const [produk, setProduk] = useState([]);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {produk.map((p, index) => (
          <li key={index}>
            <h3>{p.nama}</h3>
            <p>{p.deskripsi}</p>
            <p>Harga: Rp{p.harga}</p>
            <img src={p.gambar} alt={p.nama} style={{ width: "100px" }} />
          </li>
        ))}
      </ul>
      <AdminPanel setProduk={setProduk} />
    </div>
  );
}

export default App;
