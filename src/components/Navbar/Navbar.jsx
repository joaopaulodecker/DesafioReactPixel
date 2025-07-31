import React from "react";
import "./Navbar.css";
import logoUfsc from "../../assets/logo-ufsc.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoUfsc} alt="Logo da UFSC" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#about">Cursos</a>
        </li>
        <li>
          <a href="#benefits">Vida no Campus</a>
        </li>
        <li>
          <a href="#testimonials">Como Ingressar</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <button className="navbar-cta">Inscreva-se</button>
    </nav>
  );
}

export default Navbar;
