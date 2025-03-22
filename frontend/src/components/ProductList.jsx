import React from 'react';

function ProductList({ products, onDeleteProduct, onUpdateProduct, onBuyProduct }) {
    return (
        <div className="mt-4">
            <h2 className="mb-3">Lista de Productos</h2>
            <ul className="list-group">
                {products.map((product) => (
                    <li key={product._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{product.name}</strong> - {product.description}
                            <br />
                            <span className="text-muted">Precio: ${product.price} | Cantidad: {product.initialQuantity}</span>
                        </div>
                        <div>
                            <button
                                className="btn btn-primary btn-sm me-2"
                                onClick={() => onUpdateProduct(product)}
                            >
                                Editar
                            </button>
                            <button
                                className="btn btn-success btn-sm me-2"
                                onClick={() => onBuyProduct(product)}
                            >
                                Comprar
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => onDeleteProduct(product._id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
