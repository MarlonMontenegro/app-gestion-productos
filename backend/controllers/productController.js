import Product from '../models/productModel.js';


// Crear un nuevo producto

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
        res.status(201).json(product);  // Enviar el producto creado como respuesta
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Obtener Productos
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products); // productos encontrados
    } catch (error) {
        res.status(400).json({ message: error.message }); //
    }
};

// Obtener un producto por ID
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


// Actualizar un producto por ID
export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, initialQuantity } = req.body;

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { name, description, price, initialQuantity },
            { new: true }  // Retornamos el producto actualizado
        );

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



// Eliminar un producto por ID

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

