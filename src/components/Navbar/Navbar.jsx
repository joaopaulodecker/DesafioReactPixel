import React from "react";
import "./Navbar.css";
import logoUfsc from "../../assets/logo-ufsc.png";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar-container">
      <div className="navbar-logo-wrapper" onClick={scrollToTop}>
        <div className="logo-background">
          <img src={logoUfsc} alt="Logo da UFSC" />
        </div>
      </div>

      <nav className="navbar-links">
        <ul>
          <li>
            <a
              href="https://prograd.ufsc.br/cursos-de-graduacao-da-ufsc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cursos
            </a>
          </li>
          <li>
            <a
              href="https://sinter.ufsc.br/campi-e-cidades/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Campi
            </a>
          </li>
          <li>
            <a href="#benefits">Oportunidades</a>
          </li>
        </ul>
      </nav>

      <div className="navbar-cta-wrapper">
        <a
          href="https://vestibularunificado2025.ufsc.br/inscricao/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta-button"
        >
          Inscreva-se
        </a>
      </div>
    </header>
  );
}

export default Navbar;
