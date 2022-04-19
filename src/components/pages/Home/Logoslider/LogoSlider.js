import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import logo1 from "../../../../assets/Logo/brand-1.png";
import logo2 from "../../../../assets/Logo/brand-2.png";
import logo3 from "../../../../assets/Logo/brand-3.png";
import logo4 from "../../../../assets/Logo/brand-4.png";
import logo5 from "../../../../assets/Logo/brand-5.png";
const settings = {
  slidesToShow: 5,
  arrows: false,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 1000,
  infinite: true,
  gallary: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
export const LogoSlider = () => {
  return (
    <>
      <div className="LogoSlider Title">
        <Container>
          <Slider {...settings}>
            <div>
              <img src={logo1} className="mx-auto img-fluid" alt="LogoSlider" />
            </div>
            <div>
              <img src={logo2} className="mx-auto img-fluid" alt="LogoSlider" />
            </div>
            <div>
              <img src={logo3} className="mx-auto img-fluid" alt="LogoSlider" />
            </div>
            <div>
              <img src={logo4} className="mx-auto img-fluid" alt="LogoSlider" />
            </div>
            <div>
              <img src={logo5} className="mx-auto img-fluid" alt="LogoSlider" />
            </div>
            <div>
              <img src={logo1} className="mx-auto img-fluid" alt="LogoSlider" />
            </div>
            <div>
              <img src={logo2} className="mx-auto img-fluid" alt="LogoSlider" />
            </div>
            <div>
              <img src={logo3} className="mx-auto img-fluid" alt="LogoSlider" />
            </div>
            <div>
              <img src={logo4} className="mx-auto img-fluid" alt="LogoSlider" />
            </div>
            <div>
              <img src={logo5} className="mx-auto img-fluid" alt="LogoSlider" />
            </div>
          </Slider>
        </Container>
      </div>
    </>
  );
};
