import React from "react";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Pronto para começar a sua jornada?</h2>
        <p className="cta-subtitle">
          Seu futuro na melhor universidade de Santa Catarina começa aqui.
        </p>
        <a
          href="https://vestibularunificado2025.ufsc.br/inscricao/"
          target="_blank"
          className="cta-button"
        >
          Inscreva-se no Vestibular
        </a>
      </div>
    </section>
  );
}

export default CTA;
