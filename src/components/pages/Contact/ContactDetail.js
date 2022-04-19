import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Iframe from "react-iframe";
import Aos from "aos";
import "aos/dist/aos.css";

export const ContactDetail = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div>
        <Container>
          <div className="Title">
            <Row>
              <Col xl={6} lg={6} md={6} sm={12}>
                <div className="contact" data-aos="fade-up">
                  <div className="Contact-title">
                    <h6>Contact</h6>
                    <h2>Get in Touch</h2>
                    <p>
                      Want to learn and earn PDUs or CEUs on your schedule —
                      anytime, anywhere? Or, pick up a new skill quickly like,
                      project team leadership or agile? Browse our most popular
                      online courses
                    </p>
                  </div>
                  <div className="Contact-Social">
                    <div className="Contact-Social-box">
                      <div className="Contact-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="Conact-icon-detail">
                        <h3>E-Mail</h3>
                        <div>
                          <span className="Contact-Social-text">Mail :</span>
                          <span className="Contact-no-mail">
                            info@example.com
                          </span>

                          <div>
                            <span className="Contact-Social-text">Gmail :</span>
                            <span className="Contact-no-mail">
                              info@example@gmail.com
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="Contact-Social-box">
                      <div className="Contact-icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="Conact-icon-detail">
                        <h3>Contact</h3>
                        <div>
                          <span className="Contact-Social-text">Mobile :</span>
                          <span className="Contact-no-mail">
                            +91-1234567890
                          </span>

                          <div>
                            <span className="Contact-Social-text">Fex :</span>
                            <span className="Contact-no-mail">
                              +91 -251 541 2548
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="Contact-Social-box">
                      <div className="Contact-icon">
                        <i className="far fa-clock"></i>
                      </div>
                      <div className="Conact-icon-detail">
                        <h3>Hours of Operation</h3>
                        <div>
                          <div>
                            <span className="Contact-Social-text">
                              Monday - Friday :
                            </span>
                            <span className="Contact-Social-text">
                              09.00 - 20.00
                            </span>
                          </div>
                          <div>
                            <span className="Contact-Social-text">
                              Sunday & Saturday :
                            </span>
                            <span className="Contact-Social-text">
                              10.30 - 22.30
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xl={6} lg={6} md={6} sm={12}>
                <div className="form-box" data-aos="fade-up">
                  <div className="Contact-form">
                    <h2>Ready to Get Started?</h2>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <Row>
                      <Col xl={6} lg={6} sm={6}>
                        <div className="Form-group">
                          <span>
                            <input
                              type="text"
                              name="Your Name"
                              placeholder="Your Name"
                            />
                          </span>
                        </div>
                      </Col>
                      <Col xl={6} lg={6} sm={6}>
                        <div className="Form-group">
                          <span>
                            <input
                              type="email"
                              placeholder="Your Email Address"
                            />
                          </span>
                        </div>
                      </Col>
                      <Col xl={12} lg={12} sm={12}>
                        <div className="Form-group">
                          <span>
                            <input type="text" placeholder="Your Subject" />
                          </span>
                        </div>
                      </Col>
                      <Col xl={12} lg={12} sm={12}>
                        <div className="Form-group Contact-textarea">
                          <span>
                            <textarea
                              type="text"
                              placeholder="Write Your Message...."
                            />
                          </span>
                        </div>
                      </Col>
                      <Col xl={12} lg={12} sm={12}>
                        <div className="Conatct-checkbox">
                          <span>
                            <input type="checkbox" />
                            <p>
                              Accept <a href="/">term</a> and{" "}
                              <a href="/">privacy policy</a>
                            </p>
                          </span>
                        </div>
                      </Col>
                      <Col xl={12} lg={12} sm={12}>
                        <div>
                          <Button className="btn-box-common">
                            Send Message
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="Map">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            frameBorder="0"
            height="450"
          />
        </div>
      </div>
    </>
  );
};
