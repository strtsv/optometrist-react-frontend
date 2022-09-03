import React from "react";

import i from "../../assets/images/page2_pic1.jpg";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-gray-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
                Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                Praesent vestibulum molestie lacus. Aenean nonummy hendrerit
                mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis
                natoque penatibus et magnis di arturient ontes nascetur
                ridiculus mus. Nulla du.
              </h3>
              <div
                className="text-center offset wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <img src={i} alt />
              </div>
              <p
                className="text-center wow fadeInRight offset-top-30"
                data-wow-delay=".3s"
              >
                Lorem ipsum dolor sit amet consectetuer adipiscing elit.
                Praesent vestibulum molestie lacus. Aeneanummy hendrerit mauris.
                Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque
                penatibus et magnis diturient ontes nascetur ridiculula.
                Praesent vestibulum molestie lacus. Aenean nonummy hendrerit
                mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi
                nunc odio, gravida cursus nec, luctus a, lorem. Maecenas
                tristique orci ac sem. Duis ultricies pharetra magna.
              </p>
              <div
                className="text-center offset-top-40 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <a className="button button-lg button-primary" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
