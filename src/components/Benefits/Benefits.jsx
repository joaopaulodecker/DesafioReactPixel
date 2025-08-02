import React from "react";
import "./Benefits.css";

import campusImage from "../../assets/campus.jpg";
import intercambioImage from "../../assets/intercambio.jpg";
import hospitalImage from "../../assets/hospital.jpg";
import projetosImage from "../../assets/projetos.jpg";

function Benefits() {
  return (
    <section className="benefits-section" id="campus">
      <h2 className="benefits-title">Um Universo de Oportunidades</h2>
      <div className="benefits-grid">
        {/* Card 1 */}
        <div className="benefit-card">
          <img src={campusImage} alt="Campus da UFSC em Florianópolis" />
          <div className="benefit-card-content">
            <h3>Campus em Florianópolis</h3>
            <p>
              Estude em um dos mais belos campi do Brasil, cercado pela natureza
              e pela energia da Ilha da Magia.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="benefit-card">
          <img src={intercambioImage} alt="Oportunidades de intercâmbio" />
          <div className="benefit-card-content">
            <h3>Intercâmbio Internacional</h3>
            <p>
              Conecte-se com o mundo através de programas de mobilidade
              acadêmica em dezenas de países.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="benefit-card">
          <img src={hospitalImage} alt="Hospital Universitário da UFSC" />
          <div className="benefit-card-content">
            <h3>Hospital Universitário</h3>
            <p>
              Um centro de referência em saúde, ensino e pesquisa que serve a
              toda a comunidade catarinense.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="benefit-card">
          <img
            src={projetosImage}
            alt="Projetos de extensão e empresas júnior"
          />
          <div className="benefit-card-content">
            <h3>Projetos e Inovação</h3>
            <p>
              Participe de projetos de extensão, empresas juniores e startups
              que transformam a teoria em prática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
