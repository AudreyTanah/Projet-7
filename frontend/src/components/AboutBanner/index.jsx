import img from "../../assets/backgroundAbout.png";
import "../AboutBanner/index.css";

function Banner() {
  return (
    <section className="aboutBanner">
      <div className="cardBannerImg">
        <img src={img} alt="montagne" className="aboutBannerImg" />
      </div>
    </section>
  );
}

export default Banner;
