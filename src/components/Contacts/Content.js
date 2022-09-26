import React from "react";

class Content extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <h2
            className="text-uppercase text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            Contacts
          </h2>
          <div className="row row-30 offset-top-0 offset-top-60 box-contact">
            <div
              className="col-sm-6 col-md-4 text-center wow fadeInRight"
              data-wow-delay=".2s"
            >
              <span className="icon fl-budicons-free-notebook47 icon-xl text-primary" />
              <h4 className="font-weight-regular">
                <a href="tel:#">+1 800 559 6580</a>
              </h4>
              <h4 className="font-weight-regular">
                <a href="tel:#">+1 800 603 6035</a>
              </h4>
            </div>
            <div
              className="col-sm-6 col-md-4 text-center wow fadeInRight"
              data-wow-delay=".3s"
            >
              <span className="icon fl-budicons-free-location37 icon-xl text-primary" />
              <h4 className="font-weight-regular">
                <a href="#">
                  9870 St Vincent Place,
                  <br /> Glasgow, DC 45 Fr 45.
                </a>
              </h4>
            </div>
            <div
              className="col-sm-6 col-md-4 text-center wow fadeInRight"
              data-wow-delay=".4s"
            >
              <span className="icon fl-budicons-free-email75 icon-xl text-primary" />
              <h4 className="font-weight-regular">
                <a className="link-hover-underline" href="mailto:#">
                  mail@demolink.org
                </a>
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
