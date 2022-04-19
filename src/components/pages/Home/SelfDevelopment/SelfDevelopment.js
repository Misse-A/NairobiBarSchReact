import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import man from "../../../../assets/SelfBanner/man.png";

export const SelfDevelopment = () => {
  return (
    <>
      <div className="Title">
        <Container>
          <div className="SelfDevelopment">
            <Row>
              <Col xl={8} lg={8} md={8} sm={7} xs={12}>
                <div className="SelfDevelopment-Content">
                  <h5>~ GET INSTANT ACCESS TO THE FREE</h5>
                  <h6>Self Development Course</h6>
                  <p>
                    Our Self Development Course can assist you in bringing the
                    significant changes in personal understanding and reshaping
                    the confidence to achieve the best from your career! We
                    trust that learning should be enjoyable, and only that can
                    make substantial changes to someone!
                  </p>
                  <div className="SBtn ">
                    <Button className="btn-box-common">Start for Free</Button>
                  </div>
                </div>
              </Col>
              <Col xl={4} lg={4} md={4} sm={5} xs={12}>
                <div className="SelfDUserimg">
                  <img
                    src={man}
                    className="mx-auto img-fluid"
                    alt="SelfDevelopment"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};
