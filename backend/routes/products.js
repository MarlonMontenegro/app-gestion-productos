import express from 'express';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

// Ruta para crear un nuevo producto
router.post('/products', createProduct);

// Ruta para obtener todos los productos
router.get('/products', getProducts);

// Ruta para obtener un producto por ID
router.get('/products/:id', getProductById);

// Ruta para actualizar un producto por ID
router.put('/products/:id', updateProduct);

// Ruta para eliminar un producto por ID
router.delete('/products/:id', deleteProduct);

export default router;