import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { GalleryData } from "./GalleryData";

export const GalleryImg = () => {
  return (
    <>
      <Container>
        <div className="Title">
          <Row>
            {GalleryData.map((elm) => (
              <Col xl={4} lg={4} md={4} sm={6} xs={12} key={elm.key}>
                <div className="Gallery-img ">
                  <div className="Gallery-icon ">
                    <img
                      src={elm.image}
                      alt="gallery"
                      className="img-fluid mx-auto"
                    />
                    <div className="Gallery-hover">
                      <div className="Gallery-icon-box">
                        <div className="Gicon ">
                          <a href={elm.image} data-lightbox="example-set">
                            <AiOutlineSearch />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};
