import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Products() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8081/api/productos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  function renderProduct(product) {
    return (
      <div key={product.id} className="col-md-4 mb-4">
        <div className="card">
          <img
            src={product.imageUrl}
            className="card-img-top"
            alt={product.nombre}
          />
          <div className="card-body">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text">{product.descripcion}</p>
            <p className="card-text">${product.precio} MXN</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="products">Productos</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => renderProduct(product))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}
