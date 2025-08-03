import React from "react";
import "./Footer.css";
import logoUfsc from "../../assets/logo-ufsc.png";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-about">
          <img src={logoUfsc} alt="Logo UFSC" className="footer-logo" />
          <p>
            Universidade Federal de Santa Catarina, uma das melhores
            instituições de ensino superior da América Latina.
          </p>
        </div>

        <div className="footer-links">
          <h3>Links Rápidos</h3>
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
            <li>
              <a href="#">Site Oficial</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/ufsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/ufsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/ufsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.twitter.com/ufsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2025 UFSC - Universidade Federal de Santa Catarina. Todos os
          direitos reservados.
        </p>
        <p>Este é um projeto conceitual de landing page.</p>
      </div>
    </footer>
  );
}

export default Footer;
