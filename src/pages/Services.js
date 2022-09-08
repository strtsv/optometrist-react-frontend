import React from "react";

import Header from "../components/Header";
import ServicesOverview from "../components/Services/ServicesOverview";
import MainServices from "../components/Services/MainServices";
import Devider from "../components/Services/Devider";
import GettingStarted from "../components/Services/GettingStarted";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="page animated">
      <Header />
      <ServicesOverview />
      <MainServices />
      <Devider />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default Services;
