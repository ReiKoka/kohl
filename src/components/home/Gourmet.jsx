import gourmet from "../../assets/images/gourmet.webp";

function Gourmet() {
  return (
    <div className="border-secondary/30 w-full border-b md:p-8 lg:px-8 lg:py-12">
      <h1 className="font-secondary text-secondary pt-4 text-center text-2xl font-normal uppercase md:text-3xl lg:text-4xl">
        Gourmet
      </h1>
      <div className="flex flex-col gap-2">
        <p className="font-secondary text-secondary mx-auto max-w-3xl px-6 py-4 text-center text-xs font-light md:mt-4 md:text-lg lg:mt-6 2xl:max-w-5xl">
          Single-variety mountain apple juices made from six different apple
          varieties. Aroma, colour, taste, mouthfeel – every variety has its own
          character and pronounced aromas. We protect and preserve this profile
          from the fruit to the bottle. How varied apple juices can taste! Pure
          apple juices, from sweet to slightly acidic – that is our GOURMET
          line.
        </p>
        <img
          src={gourmet}
          alt="gourmet-category-picture"
          className="mx-auto mb-8 w-full max-w-3xl"
        />
      </div>
    </div>
  );
}

export default Gourmet;
