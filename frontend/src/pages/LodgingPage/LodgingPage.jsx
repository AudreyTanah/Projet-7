import Carrousel from "../../components/Carrousel";
import Tags from "../../components/Tags";
import lodgings from "../../data/lodgings.json";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import "./LodgingPage.css";

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
    <div className="wrapper">
      {foundLodging.pictures.length > 1 ? (
        <Carrousel pictures={foundLodging.pictures} />
       
      ) : (
        <img src={foundLodging.pictures[0]} alt="logement" />
      )}
       <div className="containerInformation"> 
      <div className="wrapTitleLodgingAndLocation">
      <div className="titleLodging">{foundLodging.title}</div> 
      <div className="location">{foundLodging.location}</div> 
      </div>
      <div className="wrapHostNameAndPicture">
      <div className="hostName">{foundLodging.host.name}</div> 
      <img className="hostPicture" src={foundLodging.host.picture} alt="profilPicture" />
      </div> 
      </div>     
  <Tags tags={foundLodging.tags}/>
    </div>
  );
 

}

export default LodgingPage;
