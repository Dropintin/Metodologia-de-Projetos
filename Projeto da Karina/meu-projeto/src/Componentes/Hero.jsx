import "./Hero.css";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>
          Transformando vidas,<br />
          construindo um futuro melhor.
        </h1>

        <p>
          Aprenda, inspire e faça a diferença através da tecnologia.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Conheça nosso projeto
          </button>

          <button className="btn-secondary">
            Saiba mais
          </button>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img
          src={hero}
          alt="Mãos unidas com logo azul"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;