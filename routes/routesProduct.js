// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const controllerProduct = require('../controllers/controllerProduct');

// Rute GET semua produk
router.get('/', controllerProduct.getAllProducts);

// Rute GET produk berdasarkan ID
router.get('/:id', controllerProduct.getProductById);

module.exports = router;
