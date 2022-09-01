import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic">
        <div className="container">
          <ul
            className="social-list text-center wow fadeInUp"
            data-wow-delay=".2s"
          >
            <li>
              <a className="link-secondary" href="#">
                <span className="icon-sm icon fa-google-plus" />
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                <span className="icon-sm icon fa-pinterest" />
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                <span className="icon-sm icon fa-twitter-square" />
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                <span className="icon-sm icon fa-facebook" />
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                <span className="icon-sm icon fa-instagram" />
              </a>
            </li>
          </ul>
          <h2 className="text-center wow fadeInUp" data-wow-delay=".3">
            <a href="tel:#">+1 800 559 6580</a>
          </h2>
          <p className="rights text-center wow fadeInUp" data-wow-delay=".4s">
            <span>Optometrist</span>
            <span> </span>
            <span>© </span>
            <span className="copyright-year" />
            <span> </span>
            <span>. </span>
            <a href="privacy-policy.html">Privacy Policy</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
