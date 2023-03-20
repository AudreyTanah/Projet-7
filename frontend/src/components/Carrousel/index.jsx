import { useState } from "react";
import LeftArrow from "../svg/LeftArrow";
import RightArrow from "../svg/RightArrow";
import "./index.css";

function Carrousel({ pictures }) {
  //Props pictures dans LodgingPage.jsx
  const [img, setImg] = useState({
    //Nommage img - point de départ du useState
    //initialisation du state
    src: pictures[0],
    index: 0, //Commence à 0
  });

  function prevImg() {
    //Précédente image = prevImg
    let nextIndex = img.index - 1; //But de revenir en arrière - nextIndex contient la variable de l'index suivant
    if (nextIndex < 0) {
      //si on passe en dessous de 0
      nextIndex = pictures.length - 1; //revient à la dernière image
    }
    setImg({
      /*méthode pour changer le state*/ src: pictures[nextIndex],
      index: nextIndex,
    });
  }

  function nextImg() {
    let nextIndex = img.index + 1; //même logique qu'avant sauf qu'ici on passe à l'image suivante
    if (nextIndex > pictures.length - 1) {
      //Si on est à la dernière l'image
      nextIndex = 0; //on repart au début du tableau
    }
    setImg({
      //Fonction changeant le state (initial) passe à l'image suivante avec la valeur de nextIndex déclarée avant
      src: pictures[nextIndex],
      index: nextIndex,
    });
  }

  return (
    <section className="containerCarrousel">
      <button className="leftArrow" onClick={prevImg}>
        <LeftArrow />
      </button>
      <button className="rightArrow" onClick={nextImg}>
        <RightArrow />
      </button>
      <img className="imgCarrousel" src={img.src} alt="logement" />
      <p className="index">
        {img.index + 1}/{pictures.length}
        {/*numéro index/longueur du tableau - juste pour l'affichage sur la page web tout simple*/}
      </p>
    </section>
  );
}

export default Carrousel;
