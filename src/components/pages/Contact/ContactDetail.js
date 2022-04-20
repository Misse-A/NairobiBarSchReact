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
                      Get in touch and experience the best bar school
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
                          info@nairobibarschool.com
                          </span>
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
                          +254 725 476 258
                          </span>
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
                              8am - 7pm
                            </span>
                          </div>
                          <div>
                            <span className="Contact-Social-text">
                              Weekend & Holidays :
                            </span>
                            <span className="Contact-Social-text">
                              Closed
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4477.301352684653!2d36.81591033267521!3d-1.2801651139958254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d49404dc2b%3A0xac00abc77c213d5b!2sGhale%20House!5e0!3m2!1sen!2ske!4v1626603901780!5m2!1sen!2ske"
            frameBorder="0"
            height="450"
          />
        </div>
      </div>
    </>
  );
};
