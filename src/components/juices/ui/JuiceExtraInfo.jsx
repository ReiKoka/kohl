import { useState } from "react";

function JuiceExtraInfo({ product }) {
  const [tab, setTab] = useState("description");

  return (
    <>
      <div className="bg-base-300 border-secondary mt-4 mb-2 flex w-full items-center justify-between rounded-full border p-1">
        <button
          className={`font-primary btn btn-xs rounded-full p-3 ${tab === "description" ? "btn-primary animate-jump" : "btn-ghost"}`}
          onClick={() => setTab("description")}
        >
          Description
        </button>
        <button
          className={`font-primary btn btn-xs rounded-full p-3 ${tab === "foodPairing" ? "btn-primary animate-jump" : "btn-ghost"}`}
          onClick={() => setTab("foodPairing")}
        >
          Excellent
        </button>
        <button
          className={`font-primary btn btn-xs rounded-full p-3 ${tab === "directionsOfUse" ? "btn-primary animate-jump" : "btn-ghost"}`}
          onClick={() => setTab("directionsOfUse")}
        >
          Directions of Use
        </button>
      </div>

      <div className="text-secondary w-full px-3 py-1 text-xs">
        {tab === "description" && product.descriptionSub}
        {tab === "foodPairing" && product.foodPairing}
        {tab === "directionsOfUse" && product.directionsOfUse}
      </div>
    </>
  );
}

export default JuiceExtraInfo;
