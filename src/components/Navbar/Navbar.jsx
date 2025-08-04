import React from "react";
import "./Navbar.css";
import logoUfsc from "../../assets/logo-ufsc.png";

function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-logo-wrapper">
        <div className="logo-background">
          <img src={logoUfsc} alt="Logo da UFSC" />
        </div>
      </div>

      <nav className="navbar-links">
        <ul>
          <li>
            <a href="#cursos">Cursos</a>
          </li>
          <li>
            <a href="#campus">Vida no Campus</a>
          </li>
          <li>
            <a href="#ingresso">Como Ingressar</a>
          </li>
        </ul>
      </nav>

      <div className="navbar-cta-wrapper">
        <a
          href="https://vestibularunificado2025.ufsc.br/inscricao/"
          target="_blank"
          className="navbar-cta-button"
        >
          Inscreva-se
        </a>
      </div>
    </header>
  );
}

export default Navbar;
