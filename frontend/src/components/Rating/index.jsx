import emptyStar from "../../assets/empty-star.png";
import fullStar from "../../assets/full-star.png";
import "./index.css";

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];
  const ratingNumber = Number(rating);

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
