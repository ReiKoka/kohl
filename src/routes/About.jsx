import img1 from "../assets/images/nature-2.webp";
import img2 from "../assets/images/nature-3.webp";
import img3 from "../assets/images/thomas-kohl.webp";
import AnimatedOnScroll from "../components/ui/AnimatedOnScroll";
import Footer from "../components/ui/Footer";

function About() {
  return (
    <>
      <section className="xl:max-w-9xl md:p-8 lg:px-8 lg:py-12">
        <AnimatedOnScroll animationClass="animate-fade-up">
          <h1 className="font-secondary text-secondary pt-4 text-center text-2xl font-normal capitalize md:text-3xl lg:text-4xl">
            KOHL - The company
          </h1>

          <h3 className="font-secondary text-secondary pt-4 text-center text-base font-normal md:text-lg">
            How do apples do so well at a height of almost 1,000 metres?
          </h3>
        </AnimatedOnScroll>

        <p className="font-secondary text-secondary mx-auto max-w-3xl flex-[1] px-5 pt-4 text-center text-xs font-light md:mt-4 md:text-lg lg:my-6 2xl:max-w-5xl">
          <AnimatedOnScroll animationClass="animate-fade-left">
            Apples can do so much! Low carb, detox, superfood, healthy fruit,
            quick snack – apples are wonderfully versatile and highly beneficial
            for the organism.
          </AnimatedOnScroll>
          <br />
          <AnimatedOnScroll animationClass="animate-fade-right">
            Especially our distinctive apples from the mountain, which are three
            times more freshly pressed. As single-variety juices or in one of
            our cuvée.
          </AnimatedOnScroll>
          <br />
          <AnimatedOnScroll animationClass="animate-fade-left">
            Thirty vitamins and trace elements, potassium and minerals such as
            phosphorus, calcium, magnesium and iron, plus the alkaline effect
            and great taste – all this is contained in our juices.
          </AnimatedOnScroll>
        </p>

        <div className="w-full flex-row-reverse items-center gap-8 px-5 xl:flex xl:pt-10">
          <AnimatedOnScroll animationClass="animate-fade-down xl:animate-fade-left">
            <p className="font-secondary text-secondary mx-auto max-w-3xl flex-[1] py-4 text-center text-xs font-light md:mt-4 md:text-lg lg:my-6 2xl:max-w-5xl">
              In Unterinn on the Ritten the official term is{" "}
              <span className="text-primary font-medium">
                “mountain apples”
              </span>
              . They benefit from the more intensive sunshine and the cool
              winds. Every apple is given the time it needs to ripen.
            </p>
          </AnimatedOnScroll>
          <AnimatedOnScroll
            animationClass="animate-fade animate-duration-1000"
            threshold={0.5}
          >
            <div
              className="mx-auto aspect-[4/3] max-h-[500px] w-full flex-[1] rounded-2xl bg-cover bg-bottom bg-no-repeat md:max-w-xl md:min-w-xl xl:mx-0 xl:max-h-[600px] xl:max-w-3xl xl:min-w-3xl xl:px-0"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
          </AnimatedOnScroll>
        </div>

        <div className="w-full items-center gap-8 px-5 xl:flex xl:pt-10">
          <AnimatedOnScroll animationClass="animate-fade-right">
            <p className="font-secondary text-secondary mx-auto max-w-3xl px-3 py-4 text-center text-xs font-light md:mt-4 md:text-lg lg:my-6 2xl:max-w-5xl">
              Two to three passes is all it takes to harvest the apples from a
              tree when they ripen between August and November, depending on the
              variety, the site and the amount of sun they have had. Then they
              are picked by hand.
              <br />
              <br />
              Since{" "}
              <span className="text-primary font-medium">
                each apple variety
              </span>{" "}
              develops its own{" "}
              <span className="text-primary font-medium">
                specific aroma, colour and taste
              </span>{" "}
              on a highly individual basis, it seemed only natural to press them
              separately and bottle them in elegant bottles.
            </p>
          </AnimatedOnScroll>
          <AnimatedOnScroll
            animationClass="animate-fade animate-duration-1000"
            threshold={0.5}
          >
            <div
              className="mx-auto aspect-[4/3] max-h-[500px] w-full flex-[1] rounded-2xl bg-cover bg-bottom bg-no-repeat md:max-w-xl md:min-w-xl xl:mx-0 xl:max-h-[600px] xl:max-w-3xl xl:min-w-3xl xl:px-0"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
          </AnimatedOnScroll>
        </div>

        <AnimatedOnScroll animationClass="animate-fade-up">
          <p className="font-secondary text-secondary mx-auto max-w-3xl px-3 pt-4 text-center text-xs font-light md:mt-4 md:text-lg lg:mt-10 2xl:max-w-5xl">
            As a refreshing drink for any time of day or night or an elegant
            accompaniment to the meal, the mountain apple juice offer a unique
            experience of oncomparable taste.
            <br />
            <br />
            These juices have already won{" "}
            <span className="text-primary font-medium">several awards</span> and
            were highly praised in renowned journals. Good restaurants in Europe
            now even offer tasting menus based on{" "}
            <span className="text-primary font-medium">
              food pairings with Kohl’s
            </span>{" "}
            juices.
            <br />
            <br />
            Gourmets can find them in delis, wine shops or hotels and
            restaurants. Meanwhile, many people want to renounce alcohol”, says
            Thomas Kohl. Apple juice is a good alternative. <br />
            <br />
          </p>
        </AnimatedOnScroll>

        <div className="w-full flex-row-reverse items-center gap-8 px-5 xl:flex xl:pt-10">
          <AnimatedOnScroll animationClass="animate-fade-left">
            <p className="font-secondary text-secondary mx-auto max-w-3xl px-3 pb-4 text-center text-xs font-light md:mt-4 md:text-lg lg:my-6 xl:text-3xl 2xl:max-w-5xl">
              <span className="text-primary font-medium">Thomas Kohl</span> is
              Italy's{" "}
              <strong>
                <span className="text-primary font-medium">first</span>
              </strong>{" "}
              apple juice refiner.
            </p>
          </AnimatedOnScroll>
          <AnimatedOnScroll
            animationClass="animate-fade animate-duration-1000"
            threshold={0.5}
          >
            <div
              className="mx-auto aspect-[4/3] max-h-[500px] w-full flex-[1] rounded-2xl bg-cover bg-bottom bg-no-repeat md:max-w-xl md:min-w-xl xl:mx-0 xl:max-h-[600px] xl:max-w-3xl xl:min-w-3xl xl:px-0"
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
          </AnimatedOnScroll>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
