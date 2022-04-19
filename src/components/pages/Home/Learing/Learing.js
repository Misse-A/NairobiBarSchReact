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
                  <h6>~ online learning</h6>
                  <h2>Build Your Skills Learn online,Anytime</h2>
                  <p>
                    Want to learn and earn PDUs or CEUs on your schedule —
                    anytime, anywhere? Or, pick up a new skill quickly like,
                    project team leadership or agile? Browse our most popular
                    online courses
                  </p>
                  <p>
                    Grow your knowledge and your opportunities with thought
                    leadership, training and tools.
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
