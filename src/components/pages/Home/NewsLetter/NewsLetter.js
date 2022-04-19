import React from "react";
import { Button, Container } from "react-bootstrap";

export const NewsLetter = () => {
  return (
    <>
      <div className="NewsLetterBox">
        <Container>
          <div className="NewsLetter">
            <div className="NewsLetterTitle">
              <h6>GO AT YOUR OWN PACE</h6>
              <h2>Subscribe to Our Newsletter</h2>
              <p>
                Explore all of our courses and pick your suitable ones to enroll
                and start learning with us! We ensure that you will never regret
                it!
              </p>
              <div className="NewsEmail">
                <input type="email" placeholder="Enter Your Email Address..." />
                <div className="NewsBtn">
                  <Button className="btn-box-common">Subscribe Now</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
