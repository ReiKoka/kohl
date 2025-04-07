import Footer from "../components/Footer";
import Cuvee from "../components/home/Cuvee";
import Gourmet from "../components/home/Gourmet";
import HeroSection from "../components/home/HeroSection";
import HowToUse from "../components/home/HowToUse";
import InfoSection from "../components/home/InfoSection";

function Home() {
  return (
    <div className="font-secondary h-2/5 md:portrait:h-1/2 sm:landscape:h-full lg:landscape:h-full">
      <div className="h-full">
        <HeroSection />
        <InfoSection />
        <Gourmet />
        <Cuvee />
        <HowToUse />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
