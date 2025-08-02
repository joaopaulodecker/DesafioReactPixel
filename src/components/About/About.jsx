// src/components/About/About.jsx
import React from "react";
import "./About.css";
import { FaGraduationCap, FaFlask, FaUsers } from "react-icons/fa";

function About() {
  return (
    <section className="about-section" id="cursos">
      <div className="about-content">
        <h2 className="about-title">Por que escolher a UFSC?</h2>
        <div className="about-cards-container">
          <div className="about-card">
            <FaGraduationCap className="about-icon" />
            <h3>Ensino de Excelência</h3>
            <p>
              Reconhecida nacional e internacionalmente pela qualidade de seus
              cursos e corpo docente.
            </p>
          </div>

          <div className="about-card">
            <FaFlask className="about-icon" />
            <h3>Pesquisa de Ponta</h3>
            <p>
              Um universo de oportunidades em pesquisa e inovação nos mais
              diversos campos do conhecimento.
            </p>
          </div>

          <div className="about-card">
            <FaUsers className="about-icon" />
            <h3>Comunidade Vibrante</h3>
            <p>
              Uma experiência universitária completa com atividades culturais,
              esportivas e projetos de extensão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
