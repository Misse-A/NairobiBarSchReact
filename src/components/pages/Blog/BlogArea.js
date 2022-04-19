import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BlogData } from "./BlogData";

export const BlogArea = () => {
  return (
    <>
      <Container>
        <div className="blog Title">
          <Row>
            {BlogData.map((elm) => (
              <Col xl={4} lg={4} md={4} sm={6} xs={12} key={elm.key}>
                <div className="Blog-card">
                  <Card>
                    <div className="Blog-img ">
                      <div className="Blog-icon ">
                        <Card.Img
                          variant="top"
                          src={elm.image}
                          className="mx-auto img-fluid"
                        />
                        <div className="Blog-hover">
                          <div className="Blog-icon-box">
                            <div className="Bicon ">
                              <a href={elm.image} data-lightbox="example-set">
                                <AiOutlineSearch />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title>{elm.title}</Card.Title>
                      <Card.Text>{elm.text}</Card.Text>
                      <div className="Event-content1">
                        <i>{elm.profileicon}</i>
                        <p>{elm.name}</p>
                      </div>
                      <div className="Event-content2">
                        <i>{elm.calicon}</i>
                        <p>{elm.Date}</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};
