import {
  Champagne,
  ForkKnife,
  GrainsSlash,
  Plant,
  SlidersHorizontal,
  ThermometerCold,
} from "@phosphor-icons/react";
import SingleInfographic from "./SingleInfographic";
import AnimatedOnScroll from "../ui/AnimatedOnScroll";

function InfoSection() {
  return (
    <section className="border-secondary/30 border-t border-b md:p-8 lg:px-8 lg:py-12">
      <AnimatedOnScroll animationClass="animate-fade-right">
        <h1 className="font-secondary text-secondary pt-4 text-center text-2xl font-normal capitalize md:text-3xl lg:text-4xl">
          apple delights
        </h1>
      </AnimatedOnScroll>

      <AnimatedOnScroll animationClass="animate-fade-left">
        <p className="font-secondary text-secondary mx-auto max-w-3xl px-6 py-4 text-center text-xs font-light md:mt-4 md:text-lg lg:mt-6 2xl:max-w-5xl">
          At almost{" "}
          <span className="text-primary">1,000 metres above sea level</span>, on
          the Ritten in South Tyrol, we produce pure natural mountain apple
          juices: single-varietal juices and cuvées made from mountain apple
          juice and suitable partners or with extracts with exciting flavours.
          <br />
          <br />
          Everything the apples give us they take from nature: from the sun,
          water and the power of the earth. With great respect and a commitment
          to uncompromising quality, we accompany them in their development:
          from the bud and the flower to the ripe fruit. The juice is a
          concentrated expression of their essence and thus of the essence of
          South Tyrol.
          <br />
          <br />
          Our apple juices from the mountain – refreshing treats for in-between
          and the modern approach to food pairing. Apple juices such as you have
          never tasted before.
        </p>
      </AnimatedOnScroll>

      <div className="mx-auto flex max-w-3xl flex-wrap items-baseline justify-between px-6 py-4 md:px-0 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
        <SingleInfographic
          icon={Champagne}
          title="Serve in a long-stemmed glass"
          text="We recommand to use a long-stemmed glass for our juices, so 
                that they can develop their complex aromas and flavours."
          animationClass="animate-flip-down"
        />
        <SingleInfographic
          icon={ForkKnife}
          title="Food pairings"
          text="The perfect serving temperature is between 8 and 10°C."
          animationClass="animate-flip-down animate-delay-100"
        />
        <SingleInfographic
          icon={ThermometerCold}
          title="Enjoy it cool"
          text="KOHL mountain apple juices are an elegant accompaniment to 
your meal, for a perfect alcohol-free alternative."
          animationClass="animate-flip-down animate-delay-200"
        />
        <SingleInfographic
          icon={SlidersHorizontal}
          title="Sweet or Sour"
          text="All our juices are divided in a sweet acid beam (etiquette) to create an 
orientation to the customer and to facilitate to him his decision"
          animationClass="animate-flip-down animate-delay-300"
        />
        <SingleInfographic
          icon={Plant}
          title="Vegan"
          text="They do not contain any animal-derived ingredients or genetically modified 
products. Kohl mountain apple juices carry the V-label of the European Vegetarian 
Union."
          animationClass="animate-flip-down animate-delay-400"
        />
        <SingleInfographic
          icon={GrainsSlash}
          title="Gluten Free"
          text="They are free from gluten-containing grain, crustaceans, eggs, fish, earth‘s 
nuts, soy, milk, bowl fruits like almonds and hazelnuts, celery, mustard, sesame seed, 
sulphur dioxide and sulfites, lupins and molluscs and all products produced from it."
          animationClass="animate-flip-down animate-delay-500"
        />
      </div>
    </section>
  );
}

export default InfoSection;
