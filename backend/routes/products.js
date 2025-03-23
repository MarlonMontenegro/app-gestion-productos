import express from 'express';
import { createProduct, getProductsByQuantity, getProducts, getProductById, updateProduct, deleteProduct, buyProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/quantity', getProductsByQuantity);

router.post('/products', createProduct);

router.get('/products', getProducts);

router.get('/products/:id', getProductById);

router.put('/products/:id', updateProduct);

router.delete('/products/:id', deleteProduct);

router.put('/products/buy/:id', buyProduct);

export default router;