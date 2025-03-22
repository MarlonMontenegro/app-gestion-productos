import { useState } from 'react';
import { toast } from 'react-toastify';

function SearchAndAdd({ onAddProduct }) {
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: ''
    });

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleProductDataChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        });
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleAddProduct = async () => {
        // Verificar que todos los campos requeridos estén completos
        if (!productData.name || !productData.description || !productData.price || !productData.quantity) {
            toast.warn("Por favor, complete todos los campos.");
            return;
        }

        // Verificar que el precio y la cantidad sean números válidos
        if (isNaN(productData.price) || productData.price <= 0) {
            toast.warn("El precio debe ser un número mayor a 0.");
            return;
        }

        if (isNaN(productData.quantity) || productData.quantity < 0) {
            toast.warn("La cantidad debe ser un número mayor o igual a 0.");
            return;
        }

        // Crear el objeto para enviar al backend, asegurándose de que el campo 'quantity' se envíe como 'initialQuantity'
        const productDataToSend = {
            ...productData,
            initialQuantity: productData.quantity, // Aquí asignamos el valor de quantity a initialQuantity
        };

        try {
            await onAddProduct(productDataToSend);
        } catch (error) {
        }
    };

    return (
        <div className="container mt-6">
            {/* Buscador y botón de agregar */}
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar productos..."
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className="col-md-4 text-end">
                    <button
                        className="btn btn-dark"
                        onClick={handleShowModal}
                    >
                        Agregar Producto
                    </button>
                </div>
            </div>

            {/* Modal (Popup) */}
            {showModal && (
                <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Agregar Producto</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                        onClick={handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="name">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={productData.name}
                                        onChange={handleProductDataChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Descripción</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        value={productData.description}
                                        onChange={handleProductDataChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Precio</label>
                                    <input
                                        type="number"
                                        required
                                        min="0"
                                        step="any"
                                        className="form-control"
                                        id="price"
                                        name="price"
                                        value={productData.price}
                                        onChange={handleProductDataChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quantity">Cantidad</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="quantity"
                                        name="quantity"
                                        value={productData.quantity}
                                        onChange={handleProductDataChange}
                                        required
                                        min="0"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar
                                </button>
                                <button type="button" className="btn btn-dark" onClick={handleAddProduct}>Agregar
                                    Producto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchAndAdd;
