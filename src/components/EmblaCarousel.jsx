import React from "react";
import { useDotButton } from "./EmblaCarouselDotButton";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselPrevButton } from "./ui/CarouselPrevButton";
import { CarouselNextButton } from "./ui/CarouselNextButton";
import { CarouselDotButton } from "./ui/CarouselDotButton";
import Autoplay from "embla-carousel-autoplay";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
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

      <div className="embla__controls">
        <div className="embla__buttons">
          <CarouselPrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <CarouselNextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <CarouselDotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
