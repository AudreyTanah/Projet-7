import emptyStar from "../../assets/empty-star.png";
import fullStar from "../../assets/full-star.png";
import "./index.css";

function Ratings({ratings}) {
	const stars = [1,2,3,4,5]

	return (
		<div className="containerRating">
			{stars.map((star) =>
			ratings >= star 
			? (
<img key={ratings.toString()} className="star" src={fullStar} alt="rating star"/>
) 
: ( 
<img key={ratings.toString()} className="star" src={emptyStar} alt="rating star"/>
)
	)}
</div>
);
}

export default Ratings