import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
                    {}
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src="images/logo-default-255x47.png"
                        alt
                        width={127}
                        height={23}
                      />
                      <img
                        className="brand-logo-light"
                        src="images/logo-inverse-255x47.png"
                        alt
                        width={127}
                        height={23}
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about.html">
                          About
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Volutpat lacus
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Ultrices in
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Sed egestas
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              At consectetur
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              In metus
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="services.html">
                          Services
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="gallery.html">
                          Gallery
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contacts.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                  {}
                  <div className="rd-navbar-search rd-navbar-custom">
                    <button
                      className="rd-navbar-search-toggle rd-navbar-fixed-element-2"
                      data-rd-navbar-toggle=".rd-navbar-search"
                    >
                      <span />
                    </button>
                    <form
                      className="rd-search"
                      action="search-results.html"
                      data-search-live="rd-search-results-live"
                      method="GET"
                    >
                      <div className="form-wrap">
                        <label
                          className="form-label"
                          htmlFor="rd-navbar-search-form-input"
                        >
                          Search
                        </label>
                        <input
                          className="rd-navbar-search-form-input form-input"
                          id="rd-navbar-search-form-input"
                          type="text"
                          name="s"
                          autoComplete="off"
                        />
                        <div
                          className="rd-search-results-live"
                          id="rd-search-results-live"
                        />
                      </div>
                      <button
                        className="rd-search-form-submit fa-search"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
