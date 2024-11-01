import { useRef, useState } from "react";

const MapModal = () => {
  const mapModalRef = useRef(null);
  const [activeButton, setActiveButton] = useState("Details");

  const handleMapModal = () => {
    mapModalRef.current.classList.toggle("hidden");
  };
  return (
    <div
      ref={mapModalRef}
      className="relative w-1/2 h-[95vh] bg-cyan-600 px-6 py-10 rounded-2xl  "
    >
      <button
        onClick={handleMapModal}
        className="absolute top-2 right-4 text-xl"
      >
        ✕
      </button>
      <div className="flex justify-between">
        <div>
          <div className="flex gap-5">
            <p className="text-lg font-medium">#10045</p>
            <span>&#8942;</span>
          </div>
          <small>Active</small>
        </div>
        <div className="button-group w-52 h-12 bg-borderColor rounded-xl p-2">
          <button
            className={`button ${activeButton === "Details" ? "active" : ""}`}
            onClick={() => setActiveButton("Details")}
          >
            Details
          </button>
          <button
            className={`button ${activeButton === "Tracking" ? "active" : ""}`}
            onClick={() => setActiveButton("Tracking")}
          >
            Tracking
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
