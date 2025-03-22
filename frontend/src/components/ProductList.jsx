import React from 'react';

function ProductList({ products, onDeleteProduct, onUpdateProduct }) {
    return (
        <div className="mt-4">
            <h3>Lista de Productos</h3>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {products.length === 0 ? (
                    <tr>
                        <td colSpan="5" className="text-center">No hay productos disponibles.</td>
                    </tr>
                ) : (
                    products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.initialQuantity}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm mr-2"
                                    onClick={() => onUpdateProduct(product)}
                                >
                                    Actualizar
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDeleteProduct(product._id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;