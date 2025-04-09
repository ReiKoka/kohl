import clsx from "clsx";

function JuiceAcidityRatio({ product }) {
  const totalCircles = 5;
  const positions = Array.from({ length: totalCircles }, (_, i) => i + 1);
  const ratingValue = Math.max(
    1,
    Math.min(product.aciditySweetnessRatio || 1, totalCircles),
  );
  return (
    <>
      <div className="font-primary text-base-content mt-2 flex justify-center gap-2 text-xs font-medium capitalize md:text-sm">
        <p>acidity</p>
        <div className="flex items-center gap-0.5">
          {positions.map((position) => {
            const isSelected = position === ratingValue;
            return (
              <span
                key={position}
                className={clsx(
                  "border-base-content inline-block h-3 w-3 rounded-full border leading-0 md:h-4 md:w-4",
                  {
                    "bg-primary border-primary": isSelected,
                  },
                )}
              ></span>
            );
          })}
        </div>
        <p>sweetness</p>
      </div>
    </>
  );
}

export default JuiceAcidityRatio;
