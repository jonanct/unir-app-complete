import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Modal, Button } from "react-bootstrap";

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  async function handlePurchase() {
    const total = cart.reduce((sum, product) => sum + product.precio, 0);
    const orden = { productos: cart, total };

    try {
      const response = await fetch("http://localhost:8081/api/ordenes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orden),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Orden creada:", data);
      setOrderDetails(data);
      setShowModal(true);
      clearCart();
    } catch (error) {
      console.error("Error creando la orden:", error);
    }
  }

  function renderCartItem(product, index) {
    return (
      <li key={index}>
        {product.nombre} - ${product.precio}
      </li>
    );
  }

  return (
    <div className="cart">
      <h2 className="cart__text">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>{cart.map((product, index) => renderCartItem(product, index))}</ul>
      )}
      <button onClick={handlePurchase} className="cart__purchase-button">
        Comprar
      </button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Orden Creada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {orderDetails && (
            <>
              <p>ID de la Orden: {orderDetails.id}</p>
              <h5>Productos Comprados:</h5>
              <ul>
                {orderDetails.productos.map((product, index) => (
                  <li key={index}>
                    {product.nombre} - ${product.precio}
                  </li>
                ))}
              </ul>
              <p>Total: ${orderDetails.total} MXN</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
