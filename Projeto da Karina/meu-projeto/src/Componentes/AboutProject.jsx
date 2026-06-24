import "./AboutProject.css";
import projetoImg from "../assets/projeto.png"; 
import { FiUsers, FiHeart, FiAward } from "react-icons/fi"; 

function AboutProject() {
  return (
    <div className="main-content-wrapper">
      
      {/* SEÇÃO PROJETO (Mantida intacta) */}
      <section className="project-section">
        <div className="project-image-container">
          <img src={projetoImg} alt="Mockup do Projeto" className="project-img" />
        </div>
        
        <div className="project-text-container">
          <h2>Projeto</h2>
          <p>
            Nosso objetivo é desenvolver recursos educativos digitais voltados à prevenção da 
            exposição de crianças e adolescentes a conteúdos inapropriados ou violentos na internet, 
            promovendo o uso seguro, consciente e ético das redes sociais entre os atendidos pelo 
            COMOSG, além de capacitar colaboradores para orientação preventiva no ambiente digital.
          </p>
          <p>
            O acesso precoce à internet expõe crianças e adolescentes a conteúdos inadequados, 
            exigindo ações educativas que fortaleçam a proteção digital, considerada um direito fundamental. 
            Para o COMOSG e para a sociedade, esta solução é crucial para colmatar a carência de orientação segura. 
            Como estudantes de tecnologia, o nosso interesse reside em aplicar conhecimentos práticos numa causa de impacto social. 
            O projeto é totalmente viável, uma vez que a equipa possui os equipamentos necessários, computadores e internet, 
            e o apoio direto do COMOSG para aceder a informações e realizar os testes com o público.
          </p>
        </div>
      </section>

      {/* FAIXA DE BENEFÍCIOS AZUL (Igual ao protótipo enviado) */}
      <section className="features-bar">
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <FiUsers size={32} />
          </div>
          <div className="feature-info">
            <h3>Impacto real</h3>
            <p>Nossos projetos geram impacto positivo e duradouro nas comunidades.</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <FiHeart size={32} />
          </div>
          <div className="feature-info">
            <h3>Transparência</h3>
            <p>Atuamos com transparência e responsabilidade em todas as nossas ações.</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <FiAward size={32} />
          </div>
          <div className="feature-info">
            <h3>Juntos somos mais fortes</h3>
            <p>A união de pessoas e empresas faz a diferença na vida de muitas pessoas.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutProject;