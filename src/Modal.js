import React from 'react';
import './Modal.css'; // Pastikan anda membuat file CSS untuk modal

const Modal = ({ visible, onClose, onSelectMotor }) => {
  if (!visible) return null; // Jika modal tidak aktif, tidak akan ditampilkan

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Pilih Tipe Motor</h3>
        <button onClick={() => onSelectMotor('Honda')}>Honda</button>
        <button onClick={() => onSelectMotor('Yamaha')}>Yamaha</button>
        <button className="close-button" onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
};

export default Modal;
