import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

import { CourseData } from "./OurCourseData";
const settings = {
  slidesToShow: 3,
  arrows: true,
  speed: 500,
  infinite: true,
  gallary: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export const OurCourseSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <div
        className="OpCourseSlider"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-duration="700"
        onScroll="AOS"
      >
        <Slider {...settings} className="row">
          {CourseData.map((elm) => (
            <Col xl={12} key={elm.key}>
              <Card className="OpCourse-Card">
                <div className="Opcourse-card-img">
                  <Card.Img
                    className="img-fluid mx-auto"
                    alt="OPC"
                    variant="top"
                    src={elm.image}
                  />
                  <span className="OpPricebox">
                    <h1>{elm.price}</h1>
                  </span>
                </div>
                <Card.Body className="OpCourses-body">
                  <Card.Title>
                    <i>{elm.profileicon}</i>
                    <h6>{elm.title}</h6>
                  </Card.Title>
                  <Card.Text className="OpCourses-text">
                    <h4>{elm.text}</h4>
                    <div>
                      <div className="OpCourseText1">
                        <i>{elm.lessonicon}</i>
                        <p>{elm.lesson}</p>
                      </div>
                      <div className="OpCourseText2">
                        <i>{elm.studenticon}</i>
                        <p>{elm.student}</p>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Slider>
      </div>
    </>
  );
};
