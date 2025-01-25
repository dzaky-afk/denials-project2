const db = require('../config/database');

// Ambil semua produk
exports.getAllProduk = (req, res) => {
  const query = 'SELECT * FROM produk';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Ambil produk berdasarkan ID
exports.getProdukById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM produk WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
    res.json(results[0]);
  });
};

// Tambah produk
exports.addProduk = (req, res) => {
  const { nama_produk, deskripsi, harga, stok } = req.body;
  const gambar = req.file ? req.file.filename : null;

  const query = `
    INSERT INTO produk (nama_produk, deskripsi, harga, stok, gambar)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(query, [nama_produk, deskripsi, harga, stok, gambar], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Produk berhasil ditambahkan', id: results.insertId });
  });
};

// Update produk
exports.updateProduk = (req, res) => {
  const { id } = req.params;
  const { nama_produk, deskripsi, harga, stok } = req.body;
  const gambar = req.file ? req.file.filename : null;

  const query = `
    UPDATE produk
    SET nama_produk = ?, deskripsi = ?, harga = ?, stok = ?, gambar = ?
    WHERE id = ?
  `;
  db.query(query, [nama_produk, deskripsi, harga, stok, gambar, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Produk berhasil diperbarui' });
  });
};

// Hapus produk
exports.deleteProduk = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM produk WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Produk berhasil dihapus' });
  });
};