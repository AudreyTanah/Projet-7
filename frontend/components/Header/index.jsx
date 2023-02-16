import logo from "../../assets/logo";
import Nav from "../Nav/index";

function Header() {
	return (
		<header className="headerWrap">
			<figure className="headerWrapFig">
				<img className="logo" src={logo} alt="logo agence Kasa" />
			</figure>
			<Nav className="headerNav" />
		</header>
	);
}

export default Header