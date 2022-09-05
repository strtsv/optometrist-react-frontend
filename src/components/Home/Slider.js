import React from "react";
import Swiper from "swiper";

import i1 from "../../assets/images/slide-1.jpg";
import i2 from "../../assets/images/slide-2.jpg";
import i3 from "../../assets/images/slide-3.jpg";

class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  render() {
    return (
      <section
        className="section swiper-container swiper-slider swiper-slider-1"
        data-loop="true"
        data-autoplay={400000}
        data-simulate-touch="false"
        data-slide-effect="fade"
      >
        <div className="swiper-wrapper text-center">
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i1}
            style={{
              backgroundImage: "url(" + i1 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md section-first">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-lg-8">
                    <h1 data-caption-animate="fadeIn" data-caption-delay={100}>
                      Solving visual
                      <br /> problems
                    </h1>
                    <div className="button-wrapp">
                      <a
                        className="button button-lg button-primary"
                        href="#"
                        data-caption-animate="fadeIn"
                        data-caption-delay={450}
                      >
                        Read More
                      </a>
                      <a
                        className="button button-lg button-secondary"
                        href="#"
                        data-caption-animate="fadeIn"
                        data-caption-delay={450}
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i2}
            style={{
              backgroundImage: "url(" + i2 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-lg-8">
                    <h1 data-caption-animate="fadeIn" data-caption-delay={100}>
                      Healthy eyes
                      <br /> for a better life
                    </h1>
                    <div className="button-wrapp">
                      <a
                        className="button button-lg button-primary"
                        href="#"
                        data-caption-animate="fadeIn"
                        data-caption-delay={450}
                      >
                        Read More
                      </a>
                      <a
                        className="button button-lg button-secondary"
                        href="#"
                        data-caption-animate="fadeIn"
                        data-caption-delay={450}
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i3}
            style={{
              backgroundImage: "url(" + i3 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row justify-content-lg-center">
                  <div className="col-lg-8">
                    <h1 data-caption-animate="fadeIn" data-caption-delay={100}>
                      Comprehensive
                      <br /> vision care
                    </h1>
                    <div className="button-wrapp">
                      <a
                        className="button button-lg button-primary"
                        href="#"
                        data-caption-animate="fadeIn"
                        data-caption-delay={450}
                      >
                        Read More
                      </a>
                      <a
                        className="button button-lg button-secondary"
                        href="#"
                        data-caption-animate="fadeIn"
                        data-caption-delay={450}
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="swiper-pagination" />
        {}
        <div className="swiper-button-prev fa-arrow-left" />
        <div className="swiper-button-next fa-arrow-right" />
      </section>
    );
  }
}

export default Slider;
