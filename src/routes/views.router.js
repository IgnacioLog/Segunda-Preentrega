const express = require('express');
const router = express.Router();
const ProductManager = require('../classes/ProductManager');

const productManager = new ProductManager();

router.get('/', async (req, res) => {
  const products = await productManager.getProducts();
  res.render('home', { products });
});

router.get('/realtimeproducts', async (req, res) => {
  const products = await productManager.getProducts();
  res.render('realTimeProducts', { products });
});

module.exports = router;

// Vista para visualizar productos con paginación
app.get('/products', async (req, res) => {
  const products = await productManager.getProducts();
  res.render('products', { products: products });
});

// Vista para visualizar un carrito específico
app.get('/carts/:cid', async (req, res) => {
  const cart = await cartManager.getCartById(req.params.cid);
  res.render('cart', { cart: cart });
});

