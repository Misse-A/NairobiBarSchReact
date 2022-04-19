import React, { useEffect } from "react";
import { Col, Card, Container, Row } from "react-bootstrap";
import img1 from "../../../../assets/Banner/brain.png";
import img2 from "../../../../assets/Banner/settings.png";
import img3 from "../../../../assets/Banner/team-management.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const HomeBannerBox = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Container>
        <div className="HomeBannerBox">
          <Row>
            <Col xl={4} lg={4} md={4} sm={4}>
              <Card className="HomeBanner-Card">
                <Card.Body>
                  <Card.Title>
                    <img
                      src={img1}
                      alt="HBannerBox"
                      className="img-fluid mx-auto"
                    />
                  </Card.Title>
                  <Card.Subtitle>
                    <h4>Learn the latest skills Develop</h4>
                  </Card.Subtitle>
                  <Card.Text>
                    <h5>
                      Lorem ipsum dolor sit amet, consecteur adipiscing elit,
                      sed do eiusmod tempor.
                    </h5>
                    <h6>Start Now !</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={12}>
              <Card className="HomeBanner-Card">
                <Card.Body>
                  <Card.Title className="HBtitle-img">
                    <img
                      src={img2}
                      alt="HBannerBox"
                      className="img-fluid mx-auto HBtitle-img"
                    />
                  </Card.Title>
                  <Card.Subtitle className="cardtitle ">
                    <h4>Go at Your Own Pace Academy</h4>
                  </Card.Subtitle>
                  <Card.Text className="service-text">
                    <h5>
                      Lorem ipsum dolor sit amet, consecteur adipiscing elit,
                      sed do eiusmod tempor.
                    </h5>
                    <h6>Start Now !</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={12}>
              <Card className="HomeBanner-Card">
                <Card.Body>
                  <Card.Title>
                    <img
                      src={img3}
                      alt="HBannerBox"
                      className="img-fluid mx-auto"
                    />
                  </Card.Title>
                  <Card.Subtitle className="cardtitle ">
                    <h4>Learn From Industry Experts</h4>
                  </Card.Subtitle>
                  <Card.Text className="service-text">
                    <h5>
                      Lorem ipsum dolor sit amet, consecteur adipiscing elit,
                      sed do eiusmod tempor.
                    </h5>
                    <h6>Start Now !</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
