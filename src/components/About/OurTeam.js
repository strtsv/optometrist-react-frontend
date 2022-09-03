import React from "react";

import i1 from "../../assets/images/page2_pic2.jpg";
import i2 from "../../assets/images/page2_pic3.jpg";
import i3 from "../../assets/images/page2_pic4.jpg";
import i4 from "../../assets/images/page2_pic5.jpg";

class OurTeam extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-gray-100">
        <div className="container">
          <h2
            className="text-uppercase text-center wow fadeInUp"
            data-wow-delay=".2s"
          >
            Our Team
          </h2>
          <div className="row row-40 offset-top-0 offset-top-60">
            <div
              className="col-sm-6 col-xl-3 text-center wow fadeInRight"
              data-wow-delay=".1s"
            >
              <img className="team-figure" src={i1} alt />
              <h3 className="text-primary">Mark Johnson</h3>
              <p className="lh-1">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                Praesent vestibulum molestie lacus. Aenean ummy hendrerit
                mauris. Phasellus porta. Fusce suscipit varius mi.
              </p>
              <ul
                className="social-list-2 text-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <li>
                  <a href="#">
                    <span className="icon-sm icon fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-pinterest" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-twitter-square" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-facebook" />
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-sm-6 col-xl-3 text-center wow fadeInRight"
              data-wow-delay=".2s"
            >
              <img className="team-figure" src={i2} alt />
              <h3 className="text-primary">Jessica Priston</h3>
              <p className="lh-1">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                Praesent vestibulum molestie lacus. Aenean ummy hendrerit
                mauris. Phasellus porta. Fusce suscipit varius mi.
              </p>
              <ul
                className="social-list-2 text-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <li>
                  <a href="#">
                    <span className="icon-sm icon fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-pinterest" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-twitter-square" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-facebook" />
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-sm-6 col-xl-3 text-center wow fadeInRight"
              data-wow-delay=".3s"
            >
              <img className="team-figure" src={i3} alt />
              <h3 className="text-primary">Bradley Grosh</h3>
              <p className="lh-1">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                Praesent vestibulum molestie lacus. Aenean ummy hendrerit
                mauris. Phasellus porta. Fusce suscipit varius mi.
              </p>
              <ul
                className="social-list-2 text-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <li>
                  <a href="#">
                    <span className="icon-sm icon fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-pinterest" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-twitter-square" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-facebook" />
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-sm-6 col-xl-3 text-center wow fadeInRight"
              data-wow-delay=".4s"
            >
              <img className="team-figure" src={i4} alt />
              <h3 className="text-primary">Olivia Pool</h3>
              <p className="lh-1">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                Praesent vestibulum molestie lacus. Aenean ummy hendrerit
                mauris. Phasellus porta. Fusce suscipit varius mi.
              </p>
              <ul
                className="social-list-2 text-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <li>
                  <a href="#">
                    <span className="icon-sm icon fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-pinterest" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-twitter-square" />
                  </a>
                </li>
                <li>
                  <a className="link-secondary" href="#">
                    <span className="icon-sm icon fa-facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurTeam;
