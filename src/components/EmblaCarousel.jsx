import React from "react";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselPrevButton } from "./ui/CarouselPrevButton";
import { CarouselNextButton } from "./ui/CarouselNextButton";

import Autoplay from "embla-carousel-autoplay";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit: true,
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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

      <CarouselPrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <CarouselNextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
    </section>
  );
};

export default EmblaCarousel;
