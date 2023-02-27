import { useState } from "react";
import LeftArrow from "../svg/LeftArrow";
import RightArrow from "../svg/RightArrow";
import "./index.css";

function Carrousel({ pictures }) {
  const [img, setImg] = useState({
    src: pictures[0],
    index: 0,
  });

  function prevImg() {
    let nextIndex = img.index - 1;//Pour connaître la fin du tableau -1
    if (nextIndex < 0) {
      nextIndex = pictures.length - 1;
    }

    setImg({
      src: pictures[nextIndex],
      index: nextIndex,
    });
  }

  function nextImg() {
    let nextIndex = img.index + 1;
    if (nextIndex > pictures.length - 1) {
      nextIndex = 0;
    }
    setImg({
      src: pictures[nextIndex],
      index: nextIndex,
    });
  }

  return (
    <section className="containerCarrousel">
      <button className="leftArrow" onClick={prevImg}><LeftArrow /></button>
      <button className="rightArrow" onClick={nextImg}><RightArrow /></button>
      <img className="imgCarrousel" src={img.src} alt="logement" />
      <p className="index">
        {img.index + 1}/{pictures.length}
      </p>
    </section>
  );
}

export default Carrousel;
