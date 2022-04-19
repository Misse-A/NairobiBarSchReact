import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Col } from "react-bootstrap";
import Slider from "react-slick";
import { OurPublicationData } from "./OurPublicationData";
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
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const OurPublicationSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  
  return (
    <>
     
            <div className="OurPublicationSlider " data-aos="zoom-in-up" data-aos-offset="200"  data-aos-duration="600" onScroll="AOS">
              <Slider {...settings} className="row">
                {OurPublicationData.map((elm)=>(
                    <Col xl={12} key={elm.key}>
                      <Card className="OurPublication-Card">
                    <div className="OurPublication-card-img">
                      <Card.Img
                        className="img-fluid mx-auto"
                        alt="OPC"
                        variant="top"
                        src={elm.image}
                      />
                    </div>
                    <Card.Body className="OurPublication-body">
                      <Card.Title>
                        <h6>{elm.title}</h6>
                      </Card.Title>
                      <Card.Text className="OurPublication-text">
                        <h4>
                         {elm.text}
                        </h4>
                        <p>
                         {elm.subtext}
                        </p>
                        <div>
                          <div className="OurPublicationText">
                            <i>
                             {elm.calicon}
                            </i>
                            <p>{elm.date}</p>
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
