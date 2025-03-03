import React from "react";
import Testimonial from "./Testimonial";

const testimonials = [
  { text: "¡Gran experiencia, remomendado!", author: "Juan Pérez" },
  { text: "Excelente servicio y calidad.", author: "María García" },
  {
    text: "Los materiales son de calidad y la clase es excelente.",
    author: "Carlos López",
  },
];

export default function Testimonials() {
  function renderTestimonial(testimonial, index) {
    return <Testimonial key={index} testimonial={testimonial} />;
  }

  return (
    <div className="testimonials">
      <h2 className="testimonial__h2">Testimonios</h2>
      {testimonials.map(renderTestimonial)}
    </div>
  );
}
