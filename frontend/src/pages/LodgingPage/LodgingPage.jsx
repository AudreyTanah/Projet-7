import Carrousel from "../../components/Carrousel";
import Tags from "../../components/Tags";
import Rating from "../../components/Rating";
import lodgings from "../../data/lodgings.json";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import "./LodgingPage.css";
import Collapse from "../../components/Collapse";

function LodgingPage() {
  const { id } = useParams(); /*useParams dans l'url*/
  const foundLodging = lodgings.find((lodging) => {
    /*retourne l'information dans foundLodging*/
    return lodging.id === id;
  });

  if (foundLodging === undefined) {
    return <Error />; /*Page d'erreur*/
  }
  return (
    <div className="wrapper">
      {foundLodging.pictures.length > 1 ? (//Si sup. à 1 (car plusieurs photos dans tableau pictures lodgings.json) me retourne le Carroussel
        <Carrousel pictures={foundLodging.pictures} />//sinon l'image solo pas le composant pour éviter l'index et Arrow
      ) : (
        <div className="containerImageSolo">
          <img
            className="imageWithoutIndex"
            src={foundLodging.pictures[0]}
            alt="logement"
          />
        </div>
      )}
      <div className="containerInformation">
        <div className="wrapTitlePlaceAndTags">
          <div className="wrapTitleLodgingAndLocation">
            <h1 className="titleLodging">{foundLodging.title}</h1>
            <div className="location">{foundLodging.location}</div>
          </div>
          <Tags tags={foundLodging.tags} />
        </div>
        <div className="wrapHostNamePictureAndRating">
          <div className="wrapHostNameAndPicture">
            <div className="hostName">{foundLodging.host.name}</div>
            <img
              className="hostPicture"
              src={foundLodging.host.picture}
              alt="profilPicture"
            />
          </div>
          <Rating rating={foundLodging.rating} />
        </div>
      </div>

      <div className="wrapperCollapses">
        <Collapse title="Description" content={foundLodging.description} />
        <Collapse
          title="Equipements"
          content={foundLodging.equipments.map((info, index) => {
            return <div key={index}>{info}</div>;
          })}
        />
      </div>
    </div>
  );
}

export default LodgingPage;
