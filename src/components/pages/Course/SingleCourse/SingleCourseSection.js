import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../../assets/Gallery/Gallery01.jpg";
import { Course } from "./Course";
import { Tab } from "./Tab";

export const SingleCourseSection = () => {
  return (
    <>
      <Container>
        <div className="Title">
          <Row className=" Title">
            <Col xl={7} lg={7}>
              <Tab />
            </Col>
            <Col xl={5} lg={5}>
              <div>
                <img
                  src={img1}
                  alt="single-course"
                  className="img-fluid mx-auto"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="Course-m-like Title">
        <Course />
      </div>
    </>
  );
};
