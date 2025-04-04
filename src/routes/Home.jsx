import EmblaCarousel from "./../components/EmblaCarousel";
import img1 from "../assets/images/hero_background.webp";
import img2 from "../assets/images/hero_background_2.webp";
import img3 from "../assets/images/hero_background_3.webp";
import img4 from "../assets/images/hero_background_4.webp";
import img5 from "../assets/images/hero_background_5.webp";
import img6 from "../assets/images/hero_background_6.webp";
import img7 from "../assets/images/hero_background_7.webp";
import img8 from "../assets/images/hero_background_8.webp";
import img9 from "../assets/images/hero_background_9.webp";
import img10 from "../assets/images/hero_background_10.webp";
import InfoSection from "../components/InfoSection";

const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const options = { loop: true };

function Home() {
  return (
    <div className="font-secondary h-2/5 md:portrait:h-1/2 sm:landscape:h-full lg:landscape:h-full">
      <div className="carousel-wrapper h-full">
        <EmblaCarousel slides={slides} options={options} />
        <InfoSection />
      </div>
    </div>
  );
}

export default Home;
