import React from "react";

import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";

import i1 from "../../assets/images/page2_pic6.jpg";
import i2 from "../../assets/images/page2_pic7.jpg";
import i3 from "../../assets/images/page2_pic8.jpg";


const options = {
  items: 1,
  margin: 30,
  loop: true,
  mouseDrag: true,
  stagePadding: 0,
  nav: true,
  navText: [],
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
};

class Testimonials extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <h2
            className="text-uppercase text-center wow fadeInUp"
            data-wow-delay=".2s"
          >
            Testimonials
          </h2>
          <div className="testimonials-section bg-primary">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  className="owl-carousel-custom"
                  // className="owl-carousel owl-carousel-custom"
                  data-items={1}
                  data-sm-items={1}
                  data-md-items={1}
                  data-lg-items={1}
                  data-xl-items={1}
                  data-xxl-items={1}
                  data-nav="true"
                  data-dots="true"
                  data-autoplay={2000}
                >
                  <OwlCarousel {...options}>
                    <div className="item text-center">
                      <blockquote>
                        <img className="team-figure" src={i1} alt />
                        <h4 className="font-weight-regular">Alan Smith</h4>
                        <p className="box-3">
                          <q>
                            “Lorem ipsum dolor sit amet consectetuer adipiscing
                            elit. Praesent vestibulum molestie lacus. Aenean
                            nonummy hendrerit mauris. Phasellus porta. Fusce
                            suscipit varius mi. Cum sociis natoque penatibus et
                            magnis diem.”
                          </q>
                        </p>
                      </blockquote>
                    </div>
                    <div className="item text-center">
                      <blockquote>
                        <img className="team-figure" src={i2} alt />
                        <h4 className="font-weight-regular">Amanda Smith</h4>
                        <p className="box-3">
                          <q>
                            “Fermentum dui faucibus in ornare quam. Vel orci
                            porta non pulvinar. Sodales ut eu sem integer vitae
                            justo eget magna. Sit amet purus gravida quis
                            blandit turpis cursus in hac. Scelerisque in dictum
                            non consectetur a erat nam.”
                          </q>
                        </p>
                      </blockquote>
                    </div>
                    <div className="item text-center">
                      <blockquote>
                        <img className="team-figure" src={i3} alt />
                        <h4 className="font-weight-regular">John Smith</h4>
                        <p className="box-3">
                          <q>
                            “Tincidunt id aliquet risus feugiat in. Laoreet non
                            curabitur gravida arcu ac tortor dignissim
                            convallis. Eu facilisis sed odio morbi quis commodo
                            odio aenean sed. In hac habitasse platea dictumst
                            quisque sagittis purus sit.”
                          </q>
                        </p>
                      </blockquote>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
              <a className="button button-lg button-third" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
