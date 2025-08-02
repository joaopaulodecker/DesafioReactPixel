import React from "react";
import "./Testimonials.css";

import studentPhoto1 from "../../assets/aluno1.jpg";
import studentPhoto2 from "../../assets/aluna2.jpg";

import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="testimonials-section" id="ingresso">
      <h2 className="testimonials-title">O Que Nossos Alunos Dizem</h2>
      <div className="testimonials-container">
        {/* Depoimento 1 */}
        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />
          <p className="testimonial-quote">
            "Estudar Engenharia de Software na UFSC me conectou com empresas de
            tecnologia antes mesmo de me formar. A base que tive aqui foi
            essencial para minha carreira."
          </p>
          <div className="testimonial-author">
            <img
              src={studentPhoto1}
              alt="Foto do aluno João da Silva"
              className="author-photo"
            />
            <div className="author-info">
              <h3 className="author-name">João da Silva</h3>
              <p className="author-course">Engenharia de Software</p>
            </div>
          </div>
        </div>

        {/* Depoimento 2 */}
        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />
          <p className="testimonial-quote">
            "A diversidade de projetos de extensão e a vida cultural no campus
            são incríveis. A UFSC é muito mais do que salas de aula, é uma
            experiência de vida."
          </p>
          <div className="testimonial-author">
            <img
              src={studentPhoto2}
              alt="Foto da aluna Maria Oliveira"
              className="author-photo"
            />
            <div className="author-info">
              <h3 className="author-name">Maria Oliveira</h3>
              <p className="author-course">Design de Produto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
