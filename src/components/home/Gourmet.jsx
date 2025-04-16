import gourmet from "../../assets/images/gourmet.webp";
import AnimatedOnScroll from "../ui/AnimatedOnScroll";

function Gourmet() {
  return (
    <section className="border-secondary/30 w-full border-b md:p-8 lg:px-8 lg:py-12">
      <AnimatedOnScroll animationClass="animate-fade-left">
        <h1 className="font-secondary text-secondary pt-4 text-center text-2xl font-normal uppercase md:text-3xl lg:text-4xl">
          Gourmet
        </h1>
      </AnimatedOnScroll>
      <div className="flex flex-col gap-2">
        <AnimatedOnScroll animationClass="animate-fade-right">
          <p className="font-secondary text-secondary mx-auto max-w-3xl px-6 py-4 text-center text-xs font-light md:mt-4 md:text-lg lg:mt-6 2xl:max-w-5xl">
            Single-variety mountain apple juices made from six different apple
            varieties. Aroma, colour, taste, mouthfeel – every variety has its
            own character and pronounced aromas. We protect and preserve this
            profile from the fruit to the bottle. How varied apple juices can
            taste! Pure apple juices, from sweet to slightly acidic – that is
            our GOURMET line.
          </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationClass="animate-fade animate-duration-1000" threshold={0.5}>
          <img
            src={gourmet}
            alt="gourmet-category-picture"
            className="mx-auto mb-8 w-full max-w-3xl"
          />
        </AnimatedOnScroll>
      </div>
    </section>
  );
}

export default Gourmet;
