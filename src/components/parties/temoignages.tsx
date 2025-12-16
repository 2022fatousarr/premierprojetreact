
import { useState } from "react";
import { images } from './donnets';
import { GiFastBackwardButton, GiFastForwardButton } from "react-icons/gi";

function Temoignages() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((i) => (i + 1) % images.length);
  }

  function handlePrev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  const current = images[index];

  return (
    <div className="relative w-full flex items-center gap-6">
      <button
        className="text-3xl text-gray-700"
        onClick={handlePrev}
        aria-label="Précédent"
      >
        <GiFastBackwardButton />
      </button>

      <div className="relative">
        <img
          src={current.url}
          alt={current.alt}
          className="w-64 h-64 object-cover rounded-lg shadow-md"
        />

        <div className="absolute left-6 -bottom-8 px-10 py-6 rounded-lg bg-white shadow-lg shadow-gray-400 w-80">
          <span className="bg-orange-800 rounded-sm w-3 h-26 absolute -top-1 -left-1 block" />
          <p className="text-gray-700">{current.temoignage}</p>
        </div>
      </div>

      <button
        className="text-3xl text-gray-700"
        onClick={handleNext}
        aria-label="Suivant"
      >
        <GiFastForwardButton />
      </button>
    </div>
  );
}


export default Temoignages


