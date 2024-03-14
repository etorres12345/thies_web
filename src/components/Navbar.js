import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav text-center">
              <a className="nav-link mx-5 active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link mx-5" href="/ubermich">
                Über Mich
              </a>
              <a className="nav-link mx-5" href="/leistungen">
                Leistungen
              </a>
              <a className="nav-link mx-5" href="/projekte">
                Projekte
              </a>
              <a className="nav-link mx-5" href="/kunden">
                Kunden
              </a>
              <a className="nav-link mx-5" href="kontakt">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
