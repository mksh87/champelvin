import villa from "../img/icon-villa.png";
import building from "../img/icon-building.png";

function Servicios() {
  return (
    <div className="container-xxl py-5" id="servicios">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-3">Servicios brindados</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={building} alt="Icon" />
                </div>
                <h6>Parque amplio</h6>
                <span>123 Properties</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={villa} alt="Icon" />
                </div>
                <h6>Pileta</h6>
                <span>123 Properties</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={building} alt="Icon" />
                </div>
                <h6>Cochera</h6>
                <span>123 Properties</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={building} alt="Icon" />
                </div>
                <h6>Asador</h6>
                <span>123 Properties</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={building} alt="Icon" />
                </div>
                <h6>Galería</h6>
                <span>123 Properties</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={building} alt="Icon" />
                </div>
                <h6>Wi-Fi</h6>
                <span>123 Properties</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={building} alt="Icon" />
                </div>
                <h6>TV con Chromecast</h6>
                <span>123 Properties</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={building} alt="Icon" />
                </div>
                <h6>Juegos</h6>
                <span>123 Properties</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
