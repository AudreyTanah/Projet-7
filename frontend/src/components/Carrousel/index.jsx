import { useState } from "react";
import LeftArrow from "../svg/LeftArrow";
import RightArrow from "../svg/RightArrow";
import "./index.css";

function Carrousel({ pictures }) {//Props pictures dans LodgingPage.jsx
  const [img, setImg] = useState({//Nommage img - point de départ du useState
    //initialisation du state
    src: pictures[0],
    index: 0, //Commence à 0, si je veux le dernier index, il faut que je fasse -1
  });         //à la longueur du tableau

  function prevImg() {//Précédente image = prevImg
    let nextIndex = img.index - 1;//Revient en arrière
    if (nextIndex < 0) {          
      nextIndex = pictures.length - 1;//donc le bon index du tableau
    }
    setImg({/*méthode pour changer le state*/
      src: pictures[nextIndex],
      index: nextIndex,
    });
  }

  function nextImg() {
    let nextIndex = img.index + 1;
    if (nextIndex > pictures.length - 1) {
      /*Si on est à la dernière l'image, on repart à zéro*/
      nextIndex = 0;
    }
    setImg({
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
      </p>
    </section>
  );
}

export default Carrousel;
