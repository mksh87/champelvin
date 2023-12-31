import logo2 from "../img/logo2.png";

function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-white-50 footer pt-5 mt-1 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-4">
          <div className="row g-5">
            <div className="col-lg-5 col-md-5 col-5" style={{ margin: "0" }}>
              <a
                href="index.html"
                className="navbar-brand d-flex align-items-center text-center"
                style={{ justifyContent: "center" }}
              >
                <img
                  className="img-fluid"
                  src={logo2}
                  alt="Icon"
                  style={{ height: "100px" }}
                />
                {/* <h1 className="m-0 text-primary">Champ Elvin</h1> */}
              </a>
            </div>
            <div
              className="col-lg-1 col-md-1 col-1"
              style={{ margin: "0" }}
            ></div>

            <div className="col-lg-5 col-md-5 col-5" style={{ margin: "0" }}>
              <h5 className="text-white mb-4">Seguinos</h5>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        ▲
      </a>
    </>
  );
}

export default Footer;
