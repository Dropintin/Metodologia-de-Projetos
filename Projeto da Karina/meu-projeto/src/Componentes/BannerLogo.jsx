import "./BannerLogo.css";
import bannerImg from "../assets/Banner.png"; // Use a imagem que tem a parede e o outdoor com o logo

function BannerLogo() {
  return (
    <section className="banner-logo-section">
      <div className="banner-container">
        <img 
          src={bannerImg} 
          alt="Outdoor com logotipo" 
          className="banner-display-img"
        />
      </div>
    </section>
  );
}

export default BannerLogo;