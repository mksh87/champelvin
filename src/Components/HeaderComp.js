import champ1 from "../img/champ1.jpeg";
import champ2 from "../img/champ2.jpeg";
import champ3 from "../img/champ3.jpeg";
import champ4 from "../img/champ4.jpeg";
import champ5 from "../img/champ5.jpeg";
import champ6 from "../img/champ6.jpeg";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../css/style.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../css/owl.css";

function Header() {
  return (
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">
            El lugar <span className="text-primary">Ideal</span> en las Sierras
            de Córdoba para tus vacaciones!
          </h1>
          <p className="animated fadeIn mb-4 pb-2">
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
          </p>
          <a
            href="#reserva"
            className="btn btn-primary py-3 px-5 me-3 animated fadeIn"
          >
            Contactanos
          </a>
        </div>
        <div className="col-md-6 animated fadeIn">
          <OwlCarousel
            items={1}
            className="header-carousel"
            autoplay={true}
            loop
            nav
            margin={8}
          >
            <div>
              <img className="img" src={champ1} />
            </div>
            <div>
              <img className="img" src={champ2} />
            </div>
            <div>
              <img className="img" src={champ5} />
            </div>
            <div>
              <img className="img" src={champ3} />
            </div>
            <div>
              <img className="img" src={champ4} />
            </div>
            <div>
              <img className="img" src={champ6} />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Header;
