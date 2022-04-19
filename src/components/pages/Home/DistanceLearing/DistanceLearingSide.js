import React from "react";
import Slider from "react-slick";
import img1 from "../../../../assets/DistantLearing/user1.png";
import "aos/dist/aos.css";
const settings = {
  dots: true,
  Button: false,
  slidesToShow: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 1000,
  infinite: true,
  arrows: false,
  gallary: true,
  focusOnSelect: true,
};
export const DistanceLearingSide = () => {
  return (
    <>
      <div className="DLearing-left-Content">
        <h6>~DISTANCE LEARNING</h6>
        <h1>Flexible Study at Own Pace, According to Your Own Needs</h1>
        <p>
          With the eCademy, you can study whenever and wherever you choose. We
          have students in over 175 countries and a global reputation as a
          pioneer in the field of flexible learning. Our teaching also means, if
          you travel often or need to relocate, you can continue to study
          wherever you go.
        </p>
      </div>

      <div className="DLearing-Slider-Img">
        <Slider className="profile" {...settings}>
          <div>
            <div className="DLearing-user-box">
              <div className="Dlearing-img">
                <img alt="DLearing" className="img-fluid mx-auto" src={img1} />
              </div>
              <div className="Dlearing-user">
                <h6>Sahar Warner</h6>
                <p>PHP Developer</p>
              </div>
            </div>
            <div className="DLearingSlider">
              <p className="DLSlider-Content">
                Lorem Ipsum is simply dummy text of the when an unknown printer
                took a galley of type and scrambled it to make a type specimen
                book. It has surviv with the release of Letraset sheets
                containing Lorem Ipsum and more recently with desktop publishing
                software like PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div>
            <div className="DLearing-user-box">
              <div className="Dlearing-img">
                <img alt="DLearing" className="img-fluid mx-auto" src={img1} />
              </div>
              <div className="Dlearing-user">
                <h6>Sahar Warner</h6>
                <p>PHP Developer</p>
              </div>
            </div>
            <div className="DLearingSlider">
              <p className="DLSlider-Content">
                Lorem Ipsum is simply dummy text of the when an unknown printer
                took a galley of type and scrambled it to make a type specimen
                book. It has surviv with the release of Letraset sheets
                containing Lorem Ipsum and more recently with desktop publishing
                software like PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div>
            <div className="DLearing-user-box">
              <div className="Dlearing-img">
                <img alt="DLearing" className="img-fluid mx-auto" src={img1} />
              </div>
              <div className="Dlearing-user">
                <h6>Sahar Warner</h6>
                <p>PHP Developer</p>
              </div>
            </div>
            <div className="DLearingSlider">
              <p className="DLSlider-Content">
                Lorem Ipsum is simply dummy text of the when an unknown printer
                took a galley of type and scrambled it to make a type specimen
                book. It has surviv with the release of Letraset sheets
                containing Lorem Ipsum and more recently with desktop publishing
                software like PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};
