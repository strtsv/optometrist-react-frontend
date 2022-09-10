import React from "react";

import Header from "../components/Header";
import Slider from "../components/Home/Slider";
import AboutUs from "../components/Home/AboutUs";
import Divider1 from "../components/Home/Divider1";
import Gallery from "../components/Home/Gallery";
import EyeCare from "../components/Home/EyeCare";
import Divider2 from "../components/Home/Divider2";
import GetInTouch from "../components/Home/GetInTouch";
import Services from "../components/Home/Services";
import Map from "../components/Home/Map";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Slider />
      <AboutUs />
      <Divider1 />
      <Gallery />
      <EyeCare />
      <Divider2 />
      <GetInTouch />
      <Services />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
