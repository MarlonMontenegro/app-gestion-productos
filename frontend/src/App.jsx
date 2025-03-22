import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchAndAdd from './components/SearchAndAdd';
import ProductList from './components/ProductList';
import UpdateProductModal from './components/UpdateProductModal';
import BuyProductModal from './components/BuyProductModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showBuyModal, setShowBuyModal] = useState(false);

    // Obtener productos
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            toast.error('Error al obtener los productos.');
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Agregar producto
    const handleAddProduct = async (productData) => {
        try {
            await axios.post('http://localhost:5000/api/products', productData);
            toast.success('Producto agregado exitosamente!');
            fetchProducts();
        } catch (error) {
            toast.error('Error al agregar el producto.');
        }
    };

    // Eliminar producto
    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${productId}`);
            toast.success('Producto eliminado!');
            fetchProducts();
        } catch (error) {
            toast.error('Error al eliminar el producto.');
        }
    };

    // Actualizar producto
    const handleUpdateProduct = async (productId, updatedData) => {
        try {
            await axios.put(`http://localhost:5000/api/products/${productId}`, updatedData);
            toast.success('Producto actualizado!');
            fetchProducts();
        } catch (error) {
            toast.error('Error al actualizar el producto.');
        }
    };

// Comprar producto
    const handleBuyProduct = async (productId, quantity) => {
        try {
            const product = products.find(p => p._id === productId);
            const updatedData = { quantity: product.quantity - quantity };

            await axios.put(`http://localhost:5000/api/products/${productId}`, updatedData);
            toast.success('Compra realizada con éxito!');
            fetchProducts();
        } catch (error) {
            toast.error('Error al realizar la compra.');
        }
    };

    // Mostrar modal de actualización
    const handleShowUpdateModal = (product) => {
        setSelectedProduct(product);
        setShowUpdateModal(true);
    };

    // Cerrar modal de actualización
    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
        setSelectedProduct(null);
    };

    // Mostrar modal de compra
    const handleShowBuyModal = (product) => {
        setSelectedProduct(product);
        setShowBuyModal(true);
    };

    // Cerrar modal de compra
    const handleCloseBuyModal = () => {
        setShowBuyModal(false);
        setSelectedProduct(null);
    };

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Gestor de Productos</a>
                </div>
            </nav>

            <main className="container mt-4">
                <SearchAndAdd onAddProduct={handleAddProduct} />
                <ProductList
                    products={products}
                    onDeleteProduct={handleDeleteProduct}
                    onUpdateProduct={handleShowUpdateModal}
                    onBuyProduct={handleShowBuyModal}
                />
            </main>

            {showUpdateModal && selectedProduct && (
                <UpdateProductModal showModal={showUpdateModal} product={selectedProduct} onClose={handleCloseUpdateModal} onUpdateProduct={handleUpdateProduct} />
            )}

            {showBuyModal && selectedProduct && (
                <BuyProductModal showModal={showBuyModal} product={selectedProduct} onClose={handleCloseBuyModal} onBuySuccess={fetchProducts} />
            )}

            <ToastContainer />
        </>
    );
}

export default App;
