import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";
import "./assets/css/style.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Switch>
      <Route exact path="/about.html" component={About} />
      <Route exact path="/contacts.html" component={Contacts} />
      <Route exact path="/services.html" component={Services} />
      <Route exact path="/blog.html" component={Blog} />
      <Route exact path="/gallery.html" component={Gallery} />
      <Route exact path="/" component={Home} />
      <Route exact path="/index.html" component={Home} />
    </Switch>
  );
}

export default App;
