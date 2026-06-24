import Navbar from "../Componentes/Navbar";
import Hero from "../Componentes/Hero";
import OurProjects from "../Componentes/OurProjects";
import BannerLogo from "../Componentes/BannerLogo";
import PartnersAndContact from "../Componentes/PartnersAndContact";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurProjects />
      <BannerLogo />
      <PartnersAndContact />
    </>
  );
}

export default Home;