import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const carouselImages = ["./carr-1.png", "./carr-2.png", "./carr-3.png"];

export default function Carousel() {
  function renderCarouselItem(image, index) {
    return (
      <div
        key={index}
        className={`carousel-item ${index === 0 ? "active" : ""}`}
      >
        <img
          src={image}
          className="d-block w-100 carousel-image"
          alt={`Slide ${index + 1}`}
        />
      </div>
    );
  }

  return (
    <>
      <h1 className="carrousel__text">Eventos pasados</h1>
      <div
        id="imageCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {carouselImages.map(function (image, index) {
            return renderCarouselItem(image, index);
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
