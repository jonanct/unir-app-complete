import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const { getCartCount } = useContext(CartContext);

  function handleNavLinkClick() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  }

  useEffect(function () {
    function handleClickOutside(event) {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (
        navbarCollapse &&
        navbarCollapse.classList.contains("show") &&
        !navbarCollapse.contains(event.target)
      ) {
        const navbarToggler = document.querySelector(".navbar-toggler");
        if (navbarToggler) {
          navbarToggler.click();
        }
      }
    }

    document.addEventListener("click", handleClickOutside);

    return function () {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header py-3" style={{ backgroundColor: "#B3C8CF" }}>
      <div className="header__container container d-flex justify-content-between align-items-center">
        <div className="header__logo-container">
          <img
            className="header__logo img-fluid"
            src="/logo.avif"
            alt="Ukiyo-E"
            style={{ maxHeight: "100px" }}
          />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/Home"
                  onClick={handleNavLinkClick}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/Eventos"
                  onClick={handleNavLinkClick}
                >
                  Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/About"
                  onClick={handleNavLinkClick}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/Contact"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/Store"
                  onClick={handleNavLinkClick}
                >
                  Tienda
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="/Cart"
                  onClick={handleNavLinkClick}
                >
                  Carrito ({getCartCount()})
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
