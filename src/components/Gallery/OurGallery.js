import React from "react";

import i1 from "../../assets/images/page5_gall1_small_img1-512x512.jpg";
import i2 from "../../assets/images/page5_gall1_small_img2-512x512.jpg";
import i3 from "../../assets/images/page5_gall1_small_img3-512x512.jpg";
import i4 from "../../assets/images/page5_gall1_small_img4-512x512.jpg";
import i5 from "../../assets/images/page5_gall1_small_img5-512x512.jpg";
import i6 from "../../assets/images/image-gallery-1-512x512.jpg";
import i7 from "../../assets/images/page5_gall1_small_img7-512x512.jpg";
import i8 from "../../assets/images/page5_gall1_small_img8-512x512.jpg";

const OurGallery = () => {
  return (
    <section className="section section-xl bg-gray-100">
      <div className="container-fluid isotope-custom-2">
        <h2
          className="text-uppercase text-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          Our Gallery
        </h2>
        <div
          className="row row-30 col-hovered offset-top-0 offset-top-60 isotope-wrap isotope"
          data-isotope-layout="masonry"
          data-isotope-group="gallery"
          data-lightgallery="group"
        >
          <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item">
            {}
            <article className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                href="images/page5_gall1_small_img1-1200x800.jpg"
                data-lightgallery="item"
              >
                <img src={i1} alt width={512} height={512} />
              </a>
              <div className="thumbnail-classic-caption context-dark text-center">
                <h4 className="font-weight-regular">Eye Exams</h4>
                <p className="lh-1">
                  Our center provides a wide variety of eye disease diagnostics
                  and treatment services. We provide specialized support and
                  care for a wide array of issues.
                </p>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item">
            {}
            <article className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                href="images/page5_gall1_small_img2-1200x800.jpg"
                data-lightgallery="item"
              >
                <img src={i2} alt width={512} height={512} />
              </a>
              <div className="thumbnail-classic-caption context-dark text-center">
                <h4 className="font-weight-regular">
                  Specialty Eyewear Fitting
                </h4>
                <p className="lh-1">
                  Our center provides a wide variety of eye disease diagnostics
                  and treatment services. We provide specialized support and
                  care for a wide array of issues.
                </p>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item">
            {}
            <article className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                href="images/page5_gall1_small_img3-1200x800.jpg"
                data-lightgallery="item"
              >
                <img src={i3} alt width={512} height={512} />
              </a>
              <div className="thumbnail-classic-caption context-dark text-center">
                <h4 className="font-weight-regular">Astigmatism Treatment</h4>
                <p className="lh-1">
                  Our center provides a wide variety of eye disease diagnostics
                  and treatment services. We provide specialized support and
                  care for a wide array of issues.
                </p>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item">
            {}
            <article className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                href="images/page5_gall1_small_img4-1200x800.jpg"
                data-lightgallery="item"
              >
                <img src={i4} alt width={512} height={512} />
              </a>
              <div className="thumbnail-classic-caption context-dark text-center">
                <h4 className="font-weight-regular">Eye Emergencies</h4>
                <p className="lh-1">
                  Our center provides a wide variety of eye disease diagnostics
                  and treatment services. We provide specialized support and
                  care for a wide array of issues.
                </p>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item">
            {}
            <article className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                href="images/image-gallery-6-1200x800.jpg"
                data-lightgallery="item"
              >
                <img src={i5} alt width={512} height={512} />
              </a>
              <div className="thumbnail-classic-caption context-dark text-center">
                <h4 className="font-weight-regular">Pediatric Eye Exams</h4>
                <p className="lh-1">
                  Our center provides a wide variety of eye disease diagnostics
                  and treatment services. We provide specialized support and
                  care for a wide array of issues.
                </p>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item">
            {}
            <article className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                href="images/image-gallery-1-1200x800.jpg"
                data-lightgallery="item"
              >
                <img src={i6} alt width={512} height={512} />
              </a>
              <div className="thumbnail-classic-caption context-dark text-center">
                <h4 className="font-weight-regular">
                  Dry Eye Disease Treatment
                </h4>
                <p className="lh-1">
                  Our center provides a wide variety of eye disease diagnostics
                  and treatment services. We provide specialized support and
                  care for a wide array of issues.
                </p>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item">
            {}
            <article className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                href="images/image-gallery-2-1200x800.jpg"
                data-lightgallery="item"
              >
                <img src={i7} alt width={512} height={512} />
              </a>
              <div className="thumbnail-classic-caption context-dark text-center">
                <h4 className="font-weight-regular">Presbyopia Treatment</h4>
                <p className="lh-1">
                  Our center provides a wide variety of eye disease diagnostics
                  and treatment services. We provide specialized support and
                  care for a wide array of issues.
                </p>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item">
            {}
            <article className="thumbnail-classic">
              <a
                className="thumbnail-classic-figure"
                href="images/page5_gall1_small_img8-1200x800.jpg"
                data-lightgallery="item"
              >
                <img src={i8} alt width={512} height={512} />
              </a>
              <div className="thumbnail-classic-caption context-dark text-center">
                <h4 className="font-weight-regular">Eye Exams</h4>
                <p className="lh-1">
                  Our center provides a wide variety of eye disease diagnostics
                  and treatment services. We provide specialized support and
                  care for a wide array of issues.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="row row-30 wow fadeInUp" data-wow-delay=".2s">
          <div className="col-12 text-center">
            <a className="button button-lg button-primary" href="#">
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGallery;
