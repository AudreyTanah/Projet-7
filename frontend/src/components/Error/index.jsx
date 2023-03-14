import { Link } from "react-router-dom";
import "../Error/index.css";

function Error() {
  return (
    <div className="errorWrap">
      <p className="number404">404</p>
      <p className="textError">Oups ! La page que vous demandez n'existe pas</p>
      <Link to="/" className="returnHome">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
export default Error;
