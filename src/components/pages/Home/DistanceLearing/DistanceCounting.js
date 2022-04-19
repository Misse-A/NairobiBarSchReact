import React from "react";
import { Row, Col } from "react-bootstrap";

import "aos/dist/aos.css";

export const DistanceCounting = () => {
  return (
    <>
      <Row>
        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
          <div className="DLMainBox">
            <div className="DLearingBox1 DLBoxtext a-one animate">
              <div className="DLBox1">
                <h6>1,589</h6>
                <p>FINISHED SESSIONS</p>
              </div>
            </div>
            <div className="DLearingBox3 DLBoxtext b-one animate">
              <div className="DLBox2  ">
                <h6>50</h6>
                <p>ONLINE INSTRUCTORS</p>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="last">
          <div className="DLMainBox">
            <div className="DLearingBox2 DLBoxtext a-one animate">
              <div className="DLBox2 ">
                <h6>3,278</h6>
                <p>ENROLLED LEARNERS</p>
              </div>
            </div>
            <div className="DLearingBox4 DLBoxtext b-one animate">
              <div className="DLBox1 ">
                <h6>100</h6>
                <p>SATISFACTION RATE</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
