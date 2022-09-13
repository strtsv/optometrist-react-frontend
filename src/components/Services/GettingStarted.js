import React from "react";

class GettingStarted extends React.Component {
  render() {
    return (
      <section className="section section-first section-xl bg-gray-100">
        <div className="container">
          <h2
            className="text-uppercase text-center wow fadeInUp"
            data-wow-delay=".2s"
          >
            A few words about us
          </h2>
          <h3
            className="lh-2 text-primary text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            Lorem ipsum dolor sit amet consectetuer adipiscing elit. Praesent
            vestibulum molestie lacus. Aenean nonummy hendrerit mauris.
            Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque
            penatibus et magnis di arturient ontes nascetur ridiculus mus. Nulla
            du.
          </h3>
          <div className="row row-50 row-sm-30 offset-top-0 offset-top-60">
            <div
              className="col-sm-6 col-lg-4 wow fadeInLeft"
              data-wow-delay=".1s"
            >
              <div className="box-circle decorative-line">
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
              <div className="box-circle decorative-line">
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
              <div className="box-circle decorative-line-2">
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

export default GettingStarted;
