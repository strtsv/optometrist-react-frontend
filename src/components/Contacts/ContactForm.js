import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-gray-100 text-center">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12">
              <h2
                className="text-uppercase text-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                Contact Form
              </h2>
              {}
              <form
                className="rd-form rd-mailform wow fadeInLeft"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="bat/rd-mailform.php"
                data-wow-delay=".4s"
              >
                <div className="row row-20 inset-custom-1">
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-name"
                        type="text"
                        name="name"
                        data-constraints="@Required"
                      />
                      <label className="form-label" htmlFor="contact-name">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-phone"
                        type="text"
                        name="phone"
                        data-constraints="@Numeric"
                      />
                      <label className="form-label" htmlFor="contact-phone">
                        Your Phone
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-email"
                        type="email"
                        name="email"
                        data-constraints="@Email @Required"
                      />
                      <label className="form-label" htmlFor="contact-email">
                        Your E-mail
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-city"
                        type="text"
                        name="name"
                        data-constraints="@Required"
                      />
                      <label className="form-label" htmlFor="contact-city">
                        Your City
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="contact-message">
                        Message
                      </label>
                      <textarea
                        className="form-input"
                        id="contact-message"
                        name="message"
                        data-constraints="@Required"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      className="button button button-lg button-primary"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
