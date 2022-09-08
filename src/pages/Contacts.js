import React from "react";

import Header from "../components/Header";
import ContactForm from "../components/Contacts/ContactForm";
import Content from "../components/Contacts/Content";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div className="page animated">
      <Header />
      <ContactForm />
      <Content />
      <Footer />
    </div>
  );
};

export default Contacts;
