import React from "react";

import i1 from "../../assets/images/page3_pic1.jpg";
import i2 from "../../assets/images/page3_pic2.jpg";
import i3 from "../../assets/images/page3_pic3.jpg";
import i4 from "../../assets/images/page3_pic4.jpg";

class ServicesOverview extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-gray-100">
        <div className="container">
          <h2
            className="text-uppercase text-center wow fadeInUp"
            data-wow-delay=".2s"
          >
            Services Overview
          </h2>
          <div className="row row-40 offset-top-0 offset-top-60 text-center text-sm-left">
            <div
              className="col-sm-6 col-lg-4 col-xl-3 wow fadeInLeft"
              data-wow-delay=".1s"
            >
              <img src={i1} alt />
              <h3 className="text-primary">Lorem ipsum dolor sita</h3>
              <p className="lh-1">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                Praesent vetie lacus. Aenean ummy heerit mauris. Phasellus
                porta. Fusce suscipit varius mi. Cum sociis natoque penatibus
                magnis diturient ontes nascetur ridiculula. Ut enim ad minima.
              </p>
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={i2} alt />
              <h3 className="text-primary">Vestibulum iaculis lacinia</h3>
              <ul className="services-list">
                <li>
                  <span className="lh-1 icon fl-sympletts-check-mark4 text-primary" />
                  <p className="lh-1">
                    <a href="#">Lorem ipsum dolor sit amet</a>
                  </p>
                </li>
                <li>
                  <span className="lh-1 icon fl-sympletts-check-mark4 text-primary" />
                  <p className="lh-1">
                    <a href="#">Consectetuer adipiscing elit</a>
                  </p>
                </li>
                <li>
                  <span className="lh-1 icon fl-sympletts-check-mark4 text-primary" />
                  <p className="lh-1">
                    <a href="#">Praesent vestm molestie lacus</a>
                  </p>
                </li>
                <li>
                  <span className="lh-1 icon fl-sympletts-check-mark4 text-primary" />
                  <p className="lh-1">
                    <a href="#">Aenean ummy hendrerit mauris</a>
                  </p>
                </li>
                <li>
                  <span className="lh-1 icon fl-sympletts-check-mark4 text-primary" />
                  <p className="lh-1">
                    <a href="#">Phasellus porta fusce supit varius</a>
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <img src={i3} alt />
              <h3 className="text-primary">Sed ut perspiciatis unde</h3>
              <p className="lh-1">
                Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                Praesent vetie lacus. Aenean ummy heerit mauris. Phasellus
                porta. Fusce suscipit varius mi. Cum sociis natoque penatibus
                magnis diturient ontes nascetur ridiculula ut enim ad minima.
              </p>
            </div>
            <div
              className="col-sm-6 col-lg-4 col-xl-3 wow fadeInLeft"
              data-wow-delay=".4s"
            >
              <img src={i4} alt />
              <h3 className="text-primary">Ut enim aminima veniam</h3>
              <ul className="services-list">
                <li>
                  <span className="lh-1 icon fl-sympletts-check-mark4 text-primary" />
                  <p className="lh-1">
                    <a href="#">Consectetuer adipiscing elit</a>
                  </p>
                </li>
                <li>
                  <span className="lh-1 icon fl-sympletts-check-mark4 text-primary" />
                  <p className="lh-1">
                    <a href="#">Praesent vestibulum molie lacus</a>
                  </p>
                </li>
                <li>
                  <span className="lh-1 icon fl-sympletts-check-mark4 text-primary" />
                  <p className="lh-1">
                    <a href="#">Aenean ummy hendrerit mauris</a>
                  </p>
                </li>
                <li>
                  <span className="lh-1 icon fl-sympletts-check-mark4 text-primary" />
                  <p className="lh-1">
                    <a href="#">Phasellus porta fusce suscipit varius</a>
                  </p>
                </li>
                <li>
                  <span className="lh-1 icon fl-sympletts-check-mark4 text-primary" />
                  <p className="lh-1">
                    <a href="#">Cum sociis natoque pens magnis</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicesOverview;
