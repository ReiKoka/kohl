import Cuvee from "../components/home/Cuvee";
import Gourmet from "../components/home/Gourmet";
import HeroSection from "../components/home/HeroSection";
import HowToUse from "../components/home/HowToUse";
import InfoSection from "../components/home/InfoSection";

function Home() {
  return (
    <div className="font-secondary">
      <HeroSection />
      <InfoSection />
      <Gourmet />
      <Cuvee />
      <HowToUse />
    </div>
  );
}

export default Home;
