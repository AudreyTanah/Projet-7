import logo from "../../assets/logo.svg";
import "../Header/index.css";
import Nav from "../Nav/index";

function Header() {
  return (
    <header className="headerWrap">
      <img src={logo} className="logo" alt="logo agence Kasa" />
      <Nav className="headerNav" />
    </header>
  );
}

export default Header;
