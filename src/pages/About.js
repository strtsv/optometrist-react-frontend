import React from "react";

import Header from "../components/Header";
import AboutUs from "../components/About/AboutUs";
import WhatWeOffer from "../components/About/WhatWeOffer";
import Divider from "../components/About/Divider";
import OurTeam from "../components/About/OurTeam";
import Testimonials from "../components/About/Testimonials";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page animated">
      <Header />
      <AboutUs />
      <WhatWeOffer />
      <Divider />
      <OurTeam />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default About;
