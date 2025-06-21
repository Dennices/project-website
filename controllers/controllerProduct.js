// controllers/productController.js
const db = require('../db');

// Get semua produk
exports.getAllProducts = (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving products', error: err });
    }
    res.status(200).json(results);
  });
};

// Get produk berdasarkan ID
exports.getProductById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM products WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving product', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(results[0]);
  });
};
