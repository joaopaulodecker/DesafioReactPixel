import React from "react";
import "./Hero.css";
import heroBgImage from "../../assets/campus-ufsc.jpg";

function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBgImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>UFSC: Construa seu Futuro na Melhor Federal de Santa Catarina.</h1>
        <p>
          Ensino gratuito, excelência em pesquisa e uma experiência
          universitária inesquecível na Ilha da Magia.
        </p>

        <a
          href="https://prograd.ufsc.br/cursos-de-graduacao-da-ufsc/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta-button"
        >
          Conheça os Cursos
        </a>
      </div>
    </section>
  );
}

export default Hero;
