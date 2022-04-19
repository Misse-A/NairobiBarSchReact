import React, { useState } from "react";
import { Row, Col, Collapse, Container, Button } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import logo from "../../../src/assets/Logo/White-Logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [Useopen, UsesetOpen] = useState(false);
  const [Sopen, SsetOpen] = useState(false);
  const [Copen, CsetOpen] = useState(false);
  return (
    <>
      <div className="Footer">
        <Container>
          <Row className="Footerbox">
            <Col xl={4} lg={4} md={4}>
              <div className="F-col-1 footer-text">
                <div>
                  <h2>
                    {" "}
                    <img
                      src={logo}
                      alt="logo"
                      className="mx-auto img-fluid"
                    />{" "}
                  </h2>
                </div>

                <p>
                  Axacus Consultancy is a one-stop shop offering accounting,
                  financial and advisory services. Beneficial experienced
                  finance professionals.
                </p>
                <ul className="list-unstyled social-icon">
                  <li className="d-inline-block ">
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
            </Col>
            <Col xl={2} lg={2} md={2}>
              <div className="F-col-2 footer-text FooterVertical">
                <h2 className="footerLinkHeading">
                  Our Links
                  <Button
                    className="Footer-button"
                    onClick={() => UsesetOpen(!Useopen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Useopen}
                  ></Button>
                </h2>
                <Collapse in={Useopen}>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/course">Course</Link>
                    </li>
                    <li>
                      <Link to="/event">Events</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
                </Collapse>
              </div>
            </Col>
            <Col xl={2} lg={2} md={2}>
              <div className="F-col-3 footer-text FooterVertical">
                <h2 className="footerLinkHeading">
                  Services
                  <Button
                    className="Footer-button"
                    onClick={() => SsetOpen(!Sopen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Sopen}
                  ></Button>
                </h2>
                <Collapse in={Sopen}>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/course">Course</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/terms">Trem & Condition</Link>
                    </li>
                    <li>
                      <Link to="/policy ">Privacy Policy</Link>
                    </li>
                  </ul>
                </Collapse>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="F-col-4 footer-text FooterVertical">
                <h2 className="footerLinkHeading">
                  Contact Us
                  <Button
                    className="Footer-button"
                    onClick={() => CsetOpen(!Copen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Copen}
                  ></Button>{" "}
                </h2>
                <Collapse in={Copen}>
                  <ul className="list-unstyled">
                    <li>
                      <h4>Address :</h4>
                      <span>6701 Democracy Blvd,Suite 300, USA</span>
                    </li>
                    <li>
                      <h4>Call :</h4>
                      <span>+91-1234567890</span>
                    </li>
                    <li>
                      <h4>Fax :</h4>
                      <span>+91 -251 541 2548</span>
                    </li>
                    <li>
                      <h4>Email :</h4>
                      <span>info@example.com</span>
                    </li>
                    <li>
                      <h4>Website :</h4>
                      <span>infoexample.com</span>
                    </li>
                  </ul>
                </Collapse>
              </div>
            </Col>
          </Row>
          <div className="Footer-bottom">
            <h6 className="F-policy">Privacy Policy / Terms & Condition </h6>
            <h6 className="F-copywrite">
              Copyright © 2021 . All Rights Reserved
            </h6>
          </div>
        </Container>
      </div>
    </>
  );
};
