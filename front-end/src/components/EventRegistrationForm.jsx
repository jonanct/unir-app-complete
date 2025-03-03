import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EventRegistrationForm(props) {
  const { event, onClose } = props;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [registrationDetails, setRegistrationDetails] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const registro = {
      eventId: event.id,
      nombre: formData.name,
      email: formData.email,
    };

    try {
      const response = await fetch("http://localhost:8081/api/registros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registro),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Registro creado:", data);
      setRegistrationDetails(data);
      setShowConfirmation(true);
    } catch (error) {
      console.error("Error creando el registro:", error);
    }
  }

  function handleCloseConfirmation() {
    setShowConfirmation(false);
    onClose();
  }

  return (
    <>
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Registro para {event.name}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Registrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>¡Te esperamos!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {registrationDetails && (
            <>
              <p>Nombre: {registrationDetails.nombre}</p>
              <p>Email: {registrationDetails.email}</p>
              <p>Evento: {event.name}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseConfirmation}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
