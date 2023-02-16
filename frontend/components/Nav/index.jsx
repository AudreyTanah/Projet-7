import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav className="headerNav">
			<Link to="/" className="headerNavLinkHome">
				Accueil
			</Link>
			<Link to="/about" className="headerNavLinkAbout">
				A Propos
			</Link>
		</nav>
	);
}

export default Nav