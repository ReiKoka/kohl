
import InfoSection from "../components/InfoSection";
import Footer from "./../components/Footer";
import Gourmet from "../components/Gourmet";
import Cuvee from "../components/Cuvee";
import HowToUse from "../components/HowToUse";
import HeroSection from "../components/HeroSection";


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
