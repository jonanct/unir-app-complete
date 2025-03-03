import React, { useState, useEffect } from "react";
import EventRegistrationForm from "./EventRegistrationForm";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("http://localhost:8081/api/eventos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);

  function handleRegisterClick(event) {
    setSelectedEvent(event);
  }

  function handleCloseForm() {
    setSelectedEvent(null);
  }

  function renderEventCard(event) {
    return (
      <div key={event.id} className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <img
              src={event.imageUrl}
              className="events__item-image"
              alt={event.name}
            />
            <h5 className="card-title">{event.name}</h5>
            <p className="card-text">{event.description}</p>
            <p className="card-text">{event.date}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleRegisterClick(event)}
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="events">Próximos Eventos</h2>
      <div className="row">
        {events.length > 0 ? (
          events.map((event) => renderEventCard(event))
        ) : (
          <p>No hay eventos disponibles.</p>
        )}
      </div>
      {selectedEvent && (
        <EventRegistrationForm
          event={selectedEvent}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
}
