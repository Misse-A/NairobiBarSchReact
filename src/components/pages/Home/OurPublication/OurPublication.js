import React from "react";
import { Container } from "react-bootstrap";

import { Head } from "./Head";
import { OurPublicationSlider } from "./OurPublicationSlider";

export const OurPublication = () => {
  return (
    <>
      <div className="Title">
        <Container>
          <div className="OurPublication">
            <Head />
            <OurPublicationSlider />
          </div>
        </Container>
      </div>
    </>
  );
};
