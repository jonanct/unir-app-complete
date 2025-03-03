import Carousel from "../components/Carousel";
import React from "react";
import Testimonials from "../components/Testimonials";
export default function Home() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      </style>
      <div className="block__container">
        <h1 className="block__container-title">
          Ven Y descubre la mágia de pintar
        </h1>
        <h4 className="block__container-text">
          Experiencias únicas en cada trazo
        </h4>
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Testimonials />
      </div>
    </>
  );
}
