import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import img1 from "../../../../assets/CourseInstrucation/instructor-img1.png";
import img2 from "../../../../assets/CourseInstrucation/instructor-img2.png";
import img3 from "../../../../assets/CourseInstrucation/instructor-img3.png";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Head } from "./Head";

export const CourseInstrucation = () => {
  return (
    <>
      <div className="Title">
        <Container>
          <div className="CourseInstrucation">
            <Head />
            <div
              className="CInstrucation beffect"
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-duration="600"
              onScroll="AOS"
            >
              <Row>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <div className="CInstrucation-box ">
                    <Card className="CInstrucation-card">
                      <div className="CInstrucation-card-img">
                        <div className="instructore_beffect">
                          <Card.Img src={img1} className="img-fluid mx-auto" />
                        </div>
                        <div className="CInstrucation-social">
                          <ul className="list-unstyled CInstrucation-social-icon">
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i><GrFacebookOption /></i>
                              </a>
                            </li>
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i><FaLinkedinIn /></i>
                              </a>
                            </li>
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i><FaPinterestP /></i>
                              </a>
                            </li>
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i><BsTwitter /></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Card.Body className="CInstrucation-body">
                        <Card.Title className="CInstrucation-title">
                          <h1>James Andereson</h1>
                          <h2>UI/UX Designer</h2>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <div className="CInstrucation-box">
                    <Card className="CInstrucation-card">
                      <div className="CInstrucation-card-img">
                        <div className="instructore_beffect">
                          <Card.Img src={img2} className="img-fluid mx-auto" />
                        </div>
                        <div className="CInstrucation-social">
                          <ul className="list-unstyled CInstrucation-social-icon">
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i>
                                  <GrFacebookOption />
                                </i>
                              </a>
                            </li>
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i>
                                  <FaLinkedinIn />
                                </i>
                              </a>
                            </li>
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i>
                                  <FaPinterestP />
                                </i>
                              </a>
                            </li>
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i>
                                  <BsTwitter />
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Card.Body className="CInstrucation-body">
                        <Card.Title className="CInstrucation-title">
                          <h1>James Andereson</h1>
                          <h2>UI/UX Designer</h2>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <div className="CInstrucation-box">
                    <Card className="CInstrucation-card">
                      <div className="CInstrucation-card-img">
                        <div className="instructore_beffect">
                          <Card.Img src={img3} className="img-fluid mx-auto" />
                        </div>
                        <div className="CInstrucation-social">
                          <ul className="list-unstyled CInstrucation-social-icon">
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i>
                                  <GrFacebookOption />
                                </i>
                              </a>
                            </li>
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i>
                                  <FaLinkedinIn />
                                </i>
                              </a>
                            </li>
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i>
                                  <FaPinterestP />
                                </i>
                              </a>
                            </li>
                            <li className="d-inline-block">
                              <a href="/" className="d-block">
                                <i>
                                  <BsTwitter />
                                </i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Card.Body className="CInstrucation-body">
                        <Card.Title className="CInstrucation-title">
                          <h1>James Andereson</h1>
                          <h2>UI/UX Designer</h2>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
