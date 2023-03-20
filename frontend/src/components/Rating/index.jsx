import emptyStar from "../../assets/empty-star.png";
import fullStar from "../../assets/full-star.png";
import "./index.css";

function Rating({ rating }) {
  //Props rating dans LodgingPage.js correspondant à la donnée foundLodging.rating
  //rating correspondant au chiffre dans le fichier lodging.json
  //qui est mis ensuite dans la constante ratingNumber
  //dans le return on map le tableau des chiffres stars
  //et si ratingNumber (rating) est sup. ou égal au chiffre du tableau (stars), il renvoie l'image
  //les étoiles pleines ou sinon les vides
  const stars = [1, 2, 3, 4, 5];
  const ratingNumber = Number(rating); //Pour la manipulation dans le ternaire

  return (
    <div className="containerRating">
      {stars.map((star) =>
        ratingNumber >= star ? (
          <img key={star} className="star" src={fullStar} alt="rating star" /> //Key pour pointer l'élément
        ) : (
          <img key={star} className="star" src={emptyStar} alt="rating star" />
        )
      )}
    </div>
  );
}

export default Rating;
