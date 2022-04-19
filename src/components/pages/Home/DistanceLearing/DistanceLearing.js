import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "aos/dist/aos.css";
import { DistanceCounting } from "./DistanceCounting";
import { DistanceLearingSide } from "./DistanceLearingSide";

export const DistanceLearing = () => {

  return (
    <>
      <div className="DistanceLearing Title">
          <Container>
            <div className="DLearing">
              <Row>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <DistanceCounting/>
                </Col>
                <Col  xl={6} lg={6} md={6} sm={12} xs={12}>
                  <DistanceLearingSide/>
                </Col>
              </Row>
            </div>
          </Container>
      </div>
    </>
  );
};
