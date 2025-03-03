import React from "react";

export default function Home() {
  return (
    <>
      <footer className="footer bg-dark text-white py-3">
        <div className="container">
          <p className="text-center m-0">
            © 2025 Ukiyo-E. Todos los derechos reservados.
          </p>
          <div className="footer__social-icons d-flex justify-content-center mt-2">
            <a href="https://facebook.com" className="text-white mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
