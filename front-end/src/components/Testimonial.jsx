import React from "react";

function Testimonial(props) {
  return (
    <div className="testimonial">
      <p className="testimonial__text">"{props.testimonial.text}"</p>
      <p className="testimonial__author">- {props.testimonial.author}</p>
    </div>
  );
}

export default Testimonial;
