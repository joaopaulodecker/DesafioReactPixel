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
                href="https://ufsc.br/a-ufsc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vida no Campus
              </a>
            </li>
            <li>
              <a
                href="https://coperve.ufsc.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Como Ingressar
              </a>
            </li>
            <li>
              <a
                href="https://ufsc.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site Oficial
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/UniversidadeUFSC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/universidadeufsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@tvufsc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com/ufsc"
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
        <p>
          Este é um projeto conceitual de landing page produzido por João Paulo
          Decker Oleinik.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
