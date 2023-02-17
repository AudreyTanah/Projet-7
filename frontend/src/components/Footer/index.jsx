import "../Footer/index.css"
import KasaLogo from "../svg/KasaLogo";

function Footer() {
	return (
		<footer className="footerContainer">
			{/* <img src={logo} alt="logo de kasa" className="kasaLogo" /> */}
			<KasaLogo />
			<p className="textFooterContainer">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer
