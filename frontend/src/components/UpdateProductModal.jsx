import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function UpdateProductModal({ showModal, product, onClose, onUpdateProduct }) {
    const [updatedProduct, setUpdatedProduct] = useState({
        name: '',
        description: '',
        price: '',
        initialQuantity: ''  // Asegúrate de usar initialQuantity aquí
    });

    useEffect(() => {
        if (product) {
            setUpdatedProduct({
                name: product.name,
                description: product.description,
                price: product.price,
                initialQuantity: product.initialQuantity  // Asegúrate de usar initialQuantity
            });
        }
    }, [product]);

    const handleChange = (e) => {
        setUpdatedProduct({
            ...updatedProduct,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async () => {
        if (!updatedProduct.name || !updatedProduct.description || !updatedProduct.price || !updatedProduct.initialQuantity) {
            toast.warn("Todos los campos son obligatorios");
            return;
        }

        if (updatedProduct.price <= 0 || updatedProduct.initialQuantity < 0) {
            toast.warn("El precio debe ser mayor que 0 y la cantidad no puede ser negativa");
            return;
        }

        try {
            await onUpdateProduct(product._id, updatedProduct);
            onClose();
        } catch (error) {
            toast.error("Error al actualizar el producto");
        }
    };

    return (
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Actualizar Producto</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" className="form-control" name="name" value={updatedProduct.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Descripción</label>
                            <textarea className="form-control" name="description" value={updatedProduct.description} onChange={handleChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Precio</label>
                            <input type="number" className="form-control" name="price" value={updatedProduct.price} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Cantidad</label>
                            <input type="number" className="form-control" name="initialQuantity" value={updatedProduct.initialQuantity} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProductModal;
