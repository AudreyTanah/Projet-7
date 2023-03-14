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
    let nextIndex = img.index - 1;//Revient en arrière - nextIndex contient la variable de l'index suivant
    if (nextIndex < 0) {//car en dessous de 0, y'a plus rien et comme on lui a assigné -1 - ça veut dire qu'il est au début         
      nextIndex = pictures.length - 1;//donc dans ce cas de figure nextIndex (variable réassignée)
    }                                 //au -1, à l'image précedente donc comme ça l'index et la length ont la même longueur
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
        {img.index + 1}/{pictures.length}{/*numéro index/longueur du tableau - juste pour l'affichage sur la page web tout simple*/}
      </p>
    </section>
  );
}

export default Carrousel;
