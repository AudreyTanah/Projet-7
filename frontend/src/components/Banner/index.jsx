import img from "../../assets/bannerHome.png"
import "../Banner/index.css"

function Banner() {
	return (
        <section className="banner">
        <div className="cardImg">
            <img src={img} alt="rochers et mer déchainée" className="bannerImg"/>
            <h1 className="textImg">Chez vous, partout et ailleurs</h1>
        </div>
    </section>
       ) }

export default Banner