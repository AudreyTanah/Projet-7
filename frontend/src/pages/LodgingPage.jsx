import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import lodgings from "../data/lodgings.json";
import { useParams } from "react-router-dom";
import Error from "../components/Error";

function LodgingPage() {
  const { id } = useParams(); /*useParams dans l'url*/
  const foundLodging = lodgings.find((lodging) => {
    /*retourne l'information dans foundLodging*/
    return lodging.id === id;
  });

  if (foundLodging === undefined) {
    return <Error />;/*Page d'erreur*/
  }
  return (
    <>
      {foundLodging.pictures.length > 1 ? (
        <div className="wraper">
        <Carrousel pictures={foundLodging.pictures} title={foundLodging.title} location={foundLodging.location}
        hostName={foundLodging.host.name} hostPicture={foundLodging.host.picture} tags={foundLodging.tags}/>
        </div>
      ) : (
        <img src={foundLodging.pictures[0]} alt="logement" />
      )}
    </>
  );
}

export default LodgingPage;
