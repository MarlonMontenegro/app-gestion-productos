import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const BuyProductModal = ({ product, onClose, onBuySuccess }) => {
    const [quantity, setQuantity] = useState(1);

    const handleBuy = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/products/buy/${product._id}`, { quantity });
            toast.success(response.data.message);
            onBuySuccess(); // Llama a la función de callback
            onClose();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error al comprar el producto');
        }
    };

    if (!product) return null;

    return (
        <div className="modal show d-block">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Comprar {product.name}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>Stock disponible: {product.initialQuantity}</p>
                        <input
                            type="number"
                            className="form-control"
                            value={quantity}
                            min="1"
                            max={product.initialQuantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                        <button className="btn btn-success" onClick={handleBuy}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyProductModal;