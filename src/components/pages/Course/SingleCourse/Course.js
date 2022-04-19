import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { SingleCourseData } from "./SingleCourseData";

export const Course = () => {
  return (
    <>
      <Container>
        <div>
          <h2> More Course You Might Like </h2>
          <div>
            <Row>
              {SingleCourseData.map((elm) => (
                <Col xl={4} lg={4} md={4} sm={6} xs={12} key={elm.key}>
                  <Card className="Course-Card">
                    <div className="course-card-img">
                      <Card.Img
                        className="img-fluid mx-auto"
                        alt="OPC"
                        variant="top"
                        src={elm.image}
                      />
                      <span className="Pricebox">
                        <h1>{elm.price}</h1>
                      </span>
                    </div>
                    <Card.Body className="Courses-body">
                      <Card.Title>
                        <i>{elm.profileicon}</i>
                        <h6>{elm.title}</h6>
                      </Card.Title>
                      <Card.Text className="Courses-text">
                        <h4>{elm.text}</h4>
                        <div>
                          <div className="CourseText1">
                            <i>{elm.lessonicon}</i>
                            <p>{elm.lesson}</p>
                          </div>
                          <div className="CourseText2">
                            <i>{elm.studenticon}</i>
                            <p>{elm.student}</p>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};
