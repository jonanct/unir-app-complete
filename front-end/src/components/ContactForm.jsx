import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      showConfirmation: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseConfirmation = this.handleCloseConfirmation.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = this.state;
    const contacto = { name, email, message };

    try {
      const response = await fetch("http://localhost:8081/api/contactos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contacto),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Contacto creado:", data);
      this.setState({
        name: "",
        email: "",
        message: "",
        showConfirmation: true,
      });
    } catch (error) {
      console.error("Error creando el contacto:", error);
    }
  }

  handleCloseConfirmation() {
    this.setState({ showConfirmation: false });
  }

  componentDidMount() {
    console.log("El componente ContactForm se ha montado");
  }

  render() {
    return (
      <div className="container mt-4">
        <h2>Contacto</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={this.state.message}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
        <br />

        <Modal
          show={this.state.showConfirmation}
          onHide={this.handleCloseConfirmation}
        >
          <Modal.Header closeButton>
            <Modal.Title>¡Te contactaremos pronto!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Gracias por contactarnos. Nos pondremos en contacto contigo
              pronto.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleCloseConfirmation}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ContactForm;
