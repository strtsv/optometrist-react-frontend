import React from "react";

import Header from "../components/Header";
import OurBlog from "../components/Blog/OurBlog";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="page animated">
      <Header />
      <OurBlog />
      <Footer />
    </div>
  );
};

export default Blog;
