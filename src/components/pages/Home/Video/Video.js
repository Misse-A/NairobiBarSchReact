import React, { useState } from "react";
import Iframe from "react-iframe";
import { Container } from "react-bootstrap";
import video from "../../../../assets/Video/VideoImg.png";
import { Modal } from "react-bootstrap";

export const Video = () => {
  const [show1, setShow1] = useState(false);
  return (
    <>
      <div className="Title">
        <Container>
          <div className="VideoImg ">
            <div className="video">
              <img src={video} className="mx-auto img-fluid" alt="video-img" />
              <div className="Playbtn" onClick={() => setShow1(true)}>
                <i></i>
              </div>
              <Modal
                show={show1}
                onHide={() => setShow1(false)}
                centered
                className="NewsEventModel"
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <Iframe
                    src="https://player.vimeo.com/video/45998585?color=afddd2&title=0&byline=0"
                    width={470}
                    height={275}
                  ></Iframe>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
