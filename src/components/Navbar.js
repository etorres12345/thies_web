import React from "react";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/ubermich">
                Über Mich
              </a>
              <a className="nav-link" href="/leistungen">
                Leistungen
              </a>
              <a className="nav-link" href="/projekte">
                Projekte
              </a>
              <a className="nav-link" href="/kunden">
                Kunden
              </a>
              <a className="nav-link" href="kontakt">
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
