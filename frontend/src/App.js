import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Beranda from './Beranda';
import DetailProduk from './DetailProduk'; 
import Login from './Login'; 
import Profil from './Profil'; 
import Keranjang from './Keranjang'; 
import Pesan from './Pesan'; 
import Resi from './Resi'; 
import PembayaranBerhasil from './PembayaranBerhasil'; 
import Checkout from './Checkout'; 
import AdminPanel from './AdminPanel'; // Import AdminPanel
import Admin from './admin';

export const UserContext = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alamat, setAlamat] = useState('');  // Menyimpan alamat pengguna

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <UserContext.Provider value={{ alamat, setAlamat }}>  {/* Provider untuk alamat */}
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/detail-produk" element={<DetailProduk />} />
            <Route path="/login" element={<Login loginHandler={loginHandler} />} />
            <Route path="/profil" element={<Profil setAlamat={setAlamat} />} /> {/* Pass setAlamat to Profil */}
            <Route path="/keranjang" element={<Keranjang />} />
            <Route path="/pesan" element={<Pesan />} />
            <Route path="/resi" element={<Resi />} />
            <Route path="/pembayaran-berhasil" element={<PembayaranBerhasil />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/admin" element={<AdminPanel />} /> Tambahkan AdminPanel */}
            <Route path="/admin" element={<Admin />} />

          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
