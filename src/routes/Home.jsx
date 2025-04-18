import Cuvee from "../components/home/Cuvee";
import Gourmet from "../components/home/Gourmet";
import HeroSection from "../components/home/HeroSection";
import HowToUse from "../components/home/HowToUse";
import InfoSection from "../components/home/InfoSection";
import Footer from "./../components/ui/Footer";

function Home() {
  return (
    <section className="font-secondary">
      <HeroSection />
      <InfoSection />
      <Gourmet />
      <Cuvee />
      <HowToUse />
      <Footer />
    </section>
  );
}

export default Home;
