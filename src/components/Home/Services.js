import React from "react";

class Services extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-default">
        <div className="container">
          <div className="row row-20 row-xl-50 box-services-wrapper justify-content-center">
            <div className="col-12">
              <h2
                className="text-uppercase text-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                Services
              </h2>
            </div>
            <div
              className="col-md-6 col-xl-4 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="box-services">
                <div className="box-services-media">
                  <span className="icon text-primary icon-lg linearicons-eye-plus" />
                </div>
                <div className="box-services-text">
                  <h3>
                    <a className="link-secondary" href="#">
                      Contact Lens Exams
                    </a>
                  </h3>
                  <p className="lh-1 opacity-80">
                    Our eye examinations are expanded during a contact lens exam
                    to include additional testing.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="box-services">
                <div className="box-services-media">
                  <span className="icon text-primary icon-lg linearicons-diamond" />
                </div>
                <div className="box-services-text">
                  <h3>
                    <a className="link-secondary" href="#">
                      Laser Eye Surgery
                    </a>
                  </h3>
                  <p className="lh-1 opacity-80">
                    We also provide high-quality laser eye surgery services
                    using the latest equipment and technology.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow fadeInRight"
              data-wow-delay=".4s"
            >
              <div className="box-services">
                <div className="box-services-media">
                  <span className="icon text-primary icon-lg linearicons-focus" />
                </div>
                <div className="box-services-text">
                  <h3>
                    <a className="link-secondary" href="#">
                      Disease Management
                    </a>
                  </h3>
                  <p className="lh-1v opacity-80">
                    We diagnose and manage ocular diseases such as Glaucoma,
                    Macular Degeneration etc.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow fadeInRight"
              data-wow-delay=".5s"
            >
              <div className="box-services">
                <div className="box-services-media">
                  <span className="icon text-primary icon-lg linearicons-first-aid" />
                </div>
                <div className="box-services-text">
                  <h3>
                    <a className="link-secondary" href="#">
                      Eye Exams
                    </a>
                  </h3>
                  <p className="lh-1 opacity-80">
                    Learn more about what problems can be spotted with an eye
                    exam and what’s involved in it.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow fadeInRight"
              data-wow-delay=".6s"
            >
              <div className="box-services">
                <div className="box-services-media">
                  <span className="icon text-primary icon-lg linearicons-sun" />
                </div>
                <div className="box-services-text">
                  <h3>
                    <a className="link-secondary" href="#">
                      Advanced Eye Care
                    </a>
                  </h3>
                  <p className="lh-1 opacity-80">
                    We use the most up-to-date technology to offer the best eye
                    care solutions possible.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-4 wow fadeInRight"
              data-wow-delay=".7s"
            >
              <div className="box-services">
                <div className="box-services-media">
                  <span className="icon text-primary icon-lg linearicons-bubble-dots" />
                </div>
                <div className="box-services-text">
                  <h3>
                    <a className="link-secondary" href="#">
                      Low Optometrist Treatment
                    </a>
                  </h3>
                  <p className="lh-1 opacity-80">
                    This service involves the evaluation of residual vision and
                    the possible benefit from magnification.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="button button button-lg button-primary wow fadeInRight"
              href="#"
              data-wow-delay=".7s"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
