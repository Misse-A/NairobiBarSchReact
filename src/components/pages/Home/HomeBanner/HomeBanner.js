import React from "react";
import { Button } from "react-bootstrap";
import img1 from "../../../../assets/Banner/HeaderImg.png";
import { HomeBannerBox } from "./HomeBannerBox";

export const HomeBanner = () => {
  return (
    <>
      <div className="BannerImg Title">
        <div>
          <img src={img1} alt="BannerImg" className="img-fluid mx-auto" />
        </div>
        <div
          className="Banner-Content"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h5>Our Education Academy</h5>
          <h6>Build Skills With Experts Any Time, Anywhere.</h6>
          <p>
            Flexible easy to access learning opportunities can bring a
            significant change in how individuals prefer to learn! The eCademy
            can offer you to enjoy the beauty of eLearning!
          </p>
          <div className="Banner-Content-Button">
            <Button className="btn-box-common">Join for Free</Button>
          </div>
        </div>
        <HomeBannerBox />
      </div>
    </>
  );
};
