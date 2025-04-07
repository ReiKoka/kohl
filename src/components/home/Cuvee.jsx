import cuvee from "../../assets/images/cuvee.webp";

function Cuvee() {
  return (
    <div className="border-secondary/30 mt-8 w-full border-b md:p-8 lg:px-8 lg:py-12">
      <h1 className="font-secondary text-secondary text-center text-2xl font-normal uppercase md:text-3xl lg:text-4xl">
        Cuvée
      </h1>

      <div className="flex flex-col gap-2">
        <p className="font-secondary text-secondary mx-auto max-w-3xl px-6 py-4 text-center text-xs font-light md:mt-4 md:text-lg lg:mt-6 2xl:max-w-5xl">
          Composed of sensitivity, our cuvées offer amazing taste experiences:
          apple juice combined with juices of fruits, berries or vegetables or
          with extracts of herbs and flowers. Heavenly combinations – for
          earthly pleasures.
        </p>
        <img
          src={cuvee}
          alt="gourmet-category-picture"
          className="mx-auto mb-8 w-full max-w-3xl"
        />
      </div>
    </div>
  );
}

export default Cuvee;
