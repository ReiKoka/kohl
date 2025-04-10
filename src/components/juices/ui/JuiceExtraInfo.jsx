import { useState } from "react";

function JuiceExtraInfo({ product }) {
  const [tab, setTab] = useState("description");

  return (
    <div className="md:flex-2/3">
      <div className="bg-base-300 shadow-custom mt-4 mb-2 flex w-full items-center justify-between gap-2 rounded-full p-1 md:w-fit lg:mt-0">
        <button
          className={`font-primary btn btn-xs lg:btn-sm rounded-full p-3 lg:text-sm ${tab === "description" ? "btn-primary animate-jump" : "btn-ghost"}`}
          onClick={() => setTab("description")}
        >
          Description
        </button>
        <button
          className={`font-primary btn btn-xs lg:btn-sm rounded-full p-3 lg:text-sm ${tab === "foodPairing" ? "btn-primary animate-jump" : "btn-ghost"}`}
          onClick={() => setTab("foodPairing")}
        >
          Excellent
        </button>
        <button
          className={`font-primary btn btn-xs lg:btn-sm rounded-full p-3 lg:text-sm ${tab === "directionsOfUse" ? "btn-primary animate-jump" : "btn-ghost"}`}
          onClick={() => setTab("directionsOfUse")}
        >
          Directions of Use
        </button>
      </div>

      <div className="text-secondary font-primary w-full px-3 py-1 text-xs md:text-sm lg:text-base">
        {tab === "description" && product.descriptionSub}
        {tab === "foodPairing" && product.foodPairing}
        {tab === "directionsOfUse" && product.directionsOfUse}
      </div>
    </div>
  );
}

export default JuiceExtraInfo;
