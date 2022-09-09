import React from "react";

import Header from "../components/Header";
import OurGallery from "../components/Gallery/OurGallery";
import VisionCare from "../components/Gallery/VisionCare";
import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <div className="page animated">
      <Header />
      <OurGallery />
      <VisionCare />
      <Footer />
    </div>
  );
};

export default Gallery;
