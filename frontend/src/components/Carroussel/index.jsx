import { useState } from "react";
import "../Carroussel/index.css";

function Carroussel({ pictures }) {
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
    <section className="imgCarroussel">
      <button onClick={prevImg}>précédent</button>
      <img src={img.src} alt="logement" />
      <button onClick={nextImg}>suivant</button>
      <p>
        {img.index + 1}/{pictures.length}
      </p>
    </section>
  );
}

export default Carroussel;
