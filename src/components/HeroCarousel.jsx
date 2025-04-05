import React from "react";
import useEmblaCarousel from "embla-carousel-react";


import Autoplay from "embla-carousel-autoplay";

const HeroCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      autoplay: true,
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  return (
    <section className="embla">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gray-900/20"></div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((imageUrl, index) => (
            <div className="embla__slide" key={index}>
              <div
                className="embla__slide__number"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
