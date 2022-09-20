import React from "react";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="section section-xl">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h2
                className="text-uppercase wow fadeInDown"
                data-wow-delay=".3s"
              >
                About Us
              </h2>
              <p
                className="big-text opacity-80 wow fadeInUp"
                data-wow-delay=".4s"
              >
                Since 1999, Optometrist Eye Care Center has been the leader and
                preferred provider of quality vision care productsand
                personalized optometric services to our patients. Our
                experienced doctors and staff offer effective treatment of a
                wide array of eye diseases, conditions, and problems.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
