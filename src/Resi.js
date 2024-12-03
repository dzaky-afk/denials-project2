import React from 'react';
import { useLocation } from 'react-router-dom';

function Resi() {
  const location = useLocation();
  const { resi } = location.state || {};

  return (
    <div className="resi">
      <h2>Nomor Resi Pengiriman</h2>
      <p>Nomor Resi Anda: <strong>{resi}</strong></p>
    </div>
  );
}

export default Resi;
