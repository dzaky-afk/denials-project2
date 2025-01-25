import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    nama_produk: '',
    deskripsi: '',
    harga: '',
    stok: '',
    gambar: null,
  });
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/produk');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      gambar: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('nama_produk', formData.nama_produk);
    formDataToSend.append('deskripsi', formData.deskripsi);
    formDataToSend.append('harga', formData.harga);
    formDataToSend.append('stok', formData.stok);
    if (formData.gambar) {
      formDataToSend.append('gambar', formData.gambar);
    }

    const url = formData.id
      ? `http://localhost:3000/produk/${formData.id}`
      : 'http://localhost:3000/produk';
    const method = formData.id ? 'put' : 'post';

    try {
      const response = await axios[method](url, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200 || response.status === 201) {
        fetchData();
        setFormData({
          id: null,
          nama_produk: '',
          deskripsi: '',
          harga: '',
          stok: '',
          gambar: null,
        });
        setShowForm(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/produk/${id}`);
      if (response.status === 200) {
        fetchData();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Admin">
      <button onClick={() => navigate('/')}>Kembali ke Beranda</button>

      <h1>Admin CRUD</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Batal' : 'Tambah Produk'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nama_produk"
            placeholder="Nama Produk"
            value={formData.nama_produk}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="deskripsi"
            placeholder="Deskripsi"
            value={formData.deskripsi}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="harga"
            placeholder="Harga"
            value={formData.harga}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="stok"
            placeholder="Stok"
            value={formData.stok}
            onChange={handleInputChange}
            required
          />
          <input
            type="file"
            name="gambar"
            onChange={handleFileChange}
            accept="image/*"
          />
          <button type="submit">
            {formData.id ? 'Update Produk' : 'Tambah Produk'}
          </button>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Gambar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.nama_produk}</td>
              <td>{item.deskripsi}</td>
              <td>{item.harga}</td>
              <td>{item.stok}</td>
              <td>
                <img
                  src={`http://localhost:3000/uploads/${item.gambar}`}
                  alt={item.nama_produk}
                  width="50"
                />
              </td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;