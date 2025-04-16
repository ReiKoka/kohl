import cuvee from "../../assets/images/cuvee.webp";
import AnimatedOnScroll from "../ui/AnimatedOnScroll";

function Cuvee() {
  return (
    <section className="border-secondary/30 mt-8 w-full border-b md:p-8 lg:px-8 lg:py-12">
      <AnimatedOnScroll animationClass="animate-fade-right">
        <h1 className="font-secondary text-secondary text-center text-2xl font-normal uppercase md:text-3xl lg:text-4xl">
          Cuvée
        </h1>
      </AnimatedOnScroll>

      <div className="flex flex-col gap-2">
        <AnimatedOnScroll animationClass="animate-fade-left">
          <p className="font-secondary text-secondary mx-auto max-w-3xl px-6 py-4 text-center text-xs font-light md:mt-4 md:text-lg lg:mt-6 2xl:max-w-5xl">
            Composed of sensitivity, our cuvées offer amazing taste experiences:
            apple juice combined with juices of fruits, berries or vegetables or
            with extracts of herbs and flowers. Heavenly combinations – for
            earthly pleasures.
          </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll
          animationClass="animate-fade animate-duration-1000"
          threshold={0.5}
        >
          <img
            src={cuvee}
            alt="gourmet-category-picture"
            className="mx-auto mb-8 w-full max-w-3xl"
          />
        </AnimatedOnScroll>
      </div>
    </section>
  );
}

export default Cuvee;
