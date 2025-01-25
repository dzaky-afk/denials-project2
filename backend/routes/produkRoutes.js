const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');
const upload = require('../config/multer');

router.get('/', produkController.getAllProduk);
router.get('/:id', produkController.getProdukById);
router.post('/', upload.single('gambar'), produkController.addProduk);
router.put('/:id', upload.single('gambar'), produkController.updateProduk);
router.delete('/:id', produkController.deleteProduk);

module.exports = router;