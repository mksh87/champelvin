function Ubicacion() {
  return (
    <div class="container-xxl py-5" id="ubicacion">
      <div class="container">
        <div
          class="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 class="mb-3">Donde estamos</h1>
          <p>
            Nos encontramos a pocas cuadras del centro de Icho Cruz a 30 metros
            del rio.
          </p>
        </div>
        <div class="row g-4">
          <div class="col wow fadeInUp" data-wow-delay="0.1s">
            <iframe
              class="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.1398943685418!2d-64.57370702544077!3d-31.478307096746395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d68124b7a0fb1%3A0x7ad14d500a26af25!2sVilla%20Icho%20Cruz%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1703782535681!5m2!1ses-419!2sar"
              frameborder="0"
              style={{ minHeight: "400px", border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="col-12">
            <div class="row gy-4">
              <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div class="bg-light rounded p-3">
                  <div
                    class="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      class="icon me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i class="fa fa-map-marker-alt text-primary"></i>
                    </div>
                    <span>Av. Concordia 949</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div class="bg-light rounded p-3">
                  <div
                    class="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      class="icon me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i class="fa fa-envelope-open text-primary"></i>
                    </div>
                    <span>elcolorado@gmail.com</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div class="bg-light rounded p-3">
                  <div
                    class="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      class="icon me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <i class="fa fa-phone-alt text-primary"></i>
                    </div>
                    <span>+54 351 607 3558</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ubicacion;
