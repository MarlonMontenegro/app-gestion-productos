import Product from '../models/productModel.js';

// Create a new product
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, initialQuantity } = req.body;

        const product = new Product({
            name,
            description,
            price,
            initialQuantity,
        });

        await product.save();
        res.status(201).json(product);  // Send the created product as a response
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products); // Found products
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, initialQuantity } = req.body;

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { name, description, price, initialQuantity },
            { new: true }  // Return the updated product
        );

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Buy a product
export const buyProduct = async (req, res) => {
    try {
        const { quantity } = req.body;  // Obtén la cantidad del cuerpo de la solicitud
        const productId = req.params.id;  // Obtén el ID del producto de los parámetros de la URL

        // Find the product
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // Check if there is enough stock
        if (product.initialQuantity < quantity) {
            return res.status(400).json({ message: 'Stock insuficiente' });
        }

        // Reduce the stock quantity
        product.initialQuantity -= quantity;
        await product.save();

        res.status(200).json({ message: 'Compra realizada con éxito', product });
    } catch (error) {
        res.status(500).json({ message: 'Error al procesar la compra', error });
    }
};


export default {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    buyProduct
};