import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchAndAdd from './components/SearchAndAdd';
import ProductList from './components/ProductList'; // Importa tu nuevo componente ProductList
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);

    // Obtener los productos desde la API
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data); // Actualiza el estado con los productos obtenidos
        } catch (error) {
            toast.error('Error al obtener los productos.');
        }
    };

    useEffect(() => {
        fetchProducts(); // Llamar a fetchProducts cuando el componente se monta
    }, []);

    // Función para agregar un producto
    const handleAddProduct = async (productData) => {
        try {
            await axios.post('http://localhost:5000/api/products', productData);
            toast.success('Producto agregado exitosamente!');
            fetchProducts(); // Volver a cargar los productos después de agregar uno nuevo
        } catch (error) {
            toast.error('Error al agregar el producto.');
        }
    };

    // Función para eliminar un producto
    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${productId}`);
            toast.success('Producto eliminado exitosamente!');
            fetchProducts(); // Recargar productos después de eliminar uno
        } catch (error) {
            toast.error('Error al eliminar el producto.');
        }
    };

    // Función para actualizar un producto
    const handleUpdateProduct = (product) => {
        // Aquí puedes agregar lógica para abrir un modal o algo similar para actualizar el producto.
        console.log('Actualizar producto', product);
        // Actualmente solo mostramos el producto en consola.
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Gestor de Productos</a>
                </div>
            </nav>

            <main className="container mt-5 pt-5">
                {/* Componente para agregar producto */}
                <SearchAndAdd onAddProduct={handleAddProduct} />

                {/* Lista de productos */}
                <ProductList
                    products={products}
                    onDeleteProduct={handleDeleteProduct}
                    onUpdateProduct={handleUpdateProduct}
                />
            </main>

            <ToastContainer />
        </>
    );
}

export default App;
