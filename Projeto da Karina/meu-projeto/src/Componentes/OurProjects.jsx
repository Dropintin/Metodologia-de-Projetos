import { useRef, useState } from "react";
import "./OurProjects.css";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// IMPORTAÇÕES CORRIGIDAS (Sem acentos nas variáveis e com .png)
import imgEducacao from "../assets/educacao.png"; 
import imgConteudo from "../assets/conteudo.png";
import imgInteracao from "../assets/interacao.png";

function OurProjects() {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75; // Rola 75% da largura visível
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const projectsData = [
    {
      id: 1,
      title: "Educação para todos",
      description: "Promovemos acesso à educação de qualidade para crianças e jovens.",
      img: imgEducacao, // Variável corrigida aqui
    },
    {
      id: 2,
      title: "Conteúdo para Jovens",
      description: "Vídeos para os jovens aprenderem sobre conteúdos inadequados na internet e participarem de atividades no Kahoot.",
      img: imgConteudo,
    },
    {
      id: 3,
      title: "Interação dos Jovens",
      description: "Momentos para os jovens conversarem melhor do que nunca.",
      img: imgInteracao,
    },
    {
      id: 4,
      title: "Inclusão Digital",
      description: "Capacitação em ferramentas digitais para preparar adolescentes para o futuro.",
      img: imgEducacao, // Variável corrigida aqui
    }
  ];

  return (
    <section 
      className="our-projects-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="projects-header">
        <div className="header-text">
          <h2>Nossos Projetos</h2>
          <p>Conheça algumas das iniciativas que estamos realizando para transformar vidas e construir um futuro melhor.</p>
        </div>
        <a href="#todos" className="view-all-link">
          Ver todos os projetos <FiArrowRight />
        </a>
      </div>

      <div className="carousel-wrapper">
        {/* Seta Esquerda (Aparece no Hover) */}
        <button 
          className={`nav-arrow left ${isHovered ? "visible" : ""}`} 
          onClick={() => scroll("left")}
          aria-label="Rolar para esquerda"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Container Scroller dos Cards */}
        <div className="projects-slider" ref={scrollContainerRef}>
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-image-wrapper">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="card-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#saibamais" className="card-link">
                  Saiba Mais <FiArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Seta Direita (Aparece no Hover) */}
        <button 
          className={`nav-arrow right ${isHovered ? "visible" : ""}`} 
          onClick={() => scroll("right")}
          aria-label="Rolar para direita"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

export default OurProjects;