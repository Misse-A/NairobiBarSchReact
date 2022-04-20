import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap-v5";
import img1 from "../../../../assets/OnlineLearing/OLearing.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Learing = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <>
      <div className="Title">
        <Container>
          <div className="Title">
            <Row className="OLearing-section">
              <Col xl={6} lg={6} md={6} sm={6}>
                <div
                  className="Online-learnig-Content text-align-center"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  onScroll="AOS"
                >
                  <h6>~ Get to Know Us</h6>
                  <h2>Who are we</h2>
                  <p>
                  NBS is a training centre certified internationally by City & Guilds of London and locally accredited by The Ministry of Higher Education. We offer Certificate and Diploma in Bartending and Mixology Course, Certificate and Diploma in Barista training and coffee skills, Certificate and Diploma in Pastry and Baking course, Diploma in Food Production and Culinary arts.

                  </p>
                  <p>
                    We are a premier institution specializing in training of hospitality professionals
                    .
                  </p>
                  <div>
                    <Button className="btn-box-common">View All Courses</Button>
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6}>
                <img src={img1} alt="OLearing" className="mx-auto img-fluid" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};
