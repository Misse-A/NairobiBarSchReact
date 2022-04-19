import React, { useState } from "react";
import { Card, CardImg, Container, Row } from "react-bootstrap";
import "../../../theme/css/Event.css";
import Masonry from "react-masonry-component";
import { EventGalleryImg } from "./EventGalleryImg";

const masonryOptions = {
  fitWidth: false,
  itemSelector: ".photo-item",
};
export const EventGallery = () => {
  const [items, setItem] = useState(EventGalleryImg);
  const [currentActive, setCuttentActive] = useState(0);
  const filterItem = (categItem, tabIndex) => {
  const updateItem = EventGalleryImg.filter((curElem) => {
      return curElem.category === categItem;
  });
    setItem(updateItem);
    setCuttentActive(tabIndex);
  };
  return (
    <>
      <Container>
        <div className="EventGallery Title">
          <div className="Event-menu">
            <ul className="text-center Event-list list-unstyled">
              <li className={currentActive === 0 ? "active" : ""}>
                <span
                  onClick={() => {
                    setItem(EventGalleryImg);
                    setCuttentActive(0);
                  }}
                >
                  {" "}
                  All
                </span>
              </li>
              <li className={currentActive === 1 ? "active" : ""}>
                <span onClick={() => filterItem("Happening", 1)}>
                  {" "}
                  Happening{" "}
                </span>
              </li>
              <li className={currentActive === 2 ? "active" : ""}>
                <span onClick={() => filterItem("Upcoming", 2)}>
                  {" "}
                  Upcoming{" "}
                </span>
              </li>
              <li className={currentActive === 3 ? "active" : ""}>
                <span onClick={() => filterItem("Expired", 3)}> Expired </span>
              </li>
            </ul>
          </div>
          <div>
            <Masonry
              className={"photo-list  list-unstyled"}
              elementType={"ul"}
              options={masonryOptions}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}
            >
              <Row>
                {items.map((photo) => (
                  <li
                    className={`photo-item col-md-4 col-sm-6 col-xl-4 col-xs-12`}
                    key={photo.id}
                  >
                    <Card>
                      <CardImg
                        src={photo.image}
                        alt="Event"
                        className="img-fluid mx-auto Event-Img-effect"
                      />
                      <Card.Body className="Event-body">
                        <Card.Title className="Event-text">
                          {photo.title}
                        </Card.Title>
                        <p>{photo.content}</p>
                      </Card.Body>
                    </Card>
                  </li>
                ))}
              </Row>
            </Masonry>
          </div>
        </div>
      </Container>
    </>
  );
};
