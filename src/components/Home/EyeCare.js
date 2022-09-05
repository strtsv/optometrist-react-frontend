import React from "react";

class EyeCare extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-default">
        <div className="container">
          <div className="row row-50 row-sm-30">
            <div
              className="col-sm-6 col-lg-4 wow fadeInLeft"
              data-wow-delay=".1s"
            >
              <div className="box-circle">
                <h2 className="text-uppercase">
                  Eye
                  <br />
                  Care
                </h2>
                <div className="box-circle-inner">01</div>
                <h3>
                  <a className="link-secondary" href="#">
                    Full Spectrum of Eye Care
                  </a>
                </h3>
                <p className="box-1 lh-1 opacity-80">
                  The eye care professionals at Optometrist give thorough eye
                  care to patients with a wide range of eye care needs.
                </p>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <div className="box-circle">
                <h2 className="text-uppercase">
                  Eye
                  <br />
                  Wear
                </h2>
                <div className="box-circle-inner">02</div>
                <h3>
                  <a className="link-secondary" href="#">
                    Wide Choice of Eye Wear
                  </a>
                </h3>
                <p className="box-1 lh-1 opacity-80">
                  We offer a variety of sunglasses, sports glasses, ski and swim
                  goggles, and dive masks in addition to your “everyday”
                  glasses.
                </p>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <div className="box-circle">
                <h2 className="text-uppercase">
                  Qualified
                  <br />
                  Team
                </h2>
                <div className="box-circle-inner">03</div>
                <h3>
                  <a className="link-secondary" href="#">
                    20+ Years of Experience
                  </a>
                </h3>
                <p className="box-1 lh-1 opacity-80">
                  Optometrist is a team of ophthalmologists and optometrists who
                  provide the top-notch level of eye care services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EyeCare;
