
import { useState } from "react";
import { images } from './donnets';


function Temoignages() {
  const [index, setIndex] = useState(0);
  const [afficher, setAfficher] = useState(true);

  function handleClick() {
    setIndex(index + 1);
    console.log(index);
  }

  function handleAfficher() {
    setAfficher(!afficher);
  }

  const image = images[index];

  return (
    <div>
      <button
        className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setIndex(index - 1)}
      >
        precedent
      </button>

      <button
        className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleClick}
      >
        Suivant
      </button>
      
      <h3>
        ({index + 1} sur {images.length})
      </h3>
      <img src={image.url}  />

      <button
        className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleAfficher}
      >
        afficher
      </button>

      {afficher ? (
        <p>{image.tèmoignage}</p>
      ) : (
        <p>description non disponible</p>
      )}
    </div>
  );
}


export default Temoignages


