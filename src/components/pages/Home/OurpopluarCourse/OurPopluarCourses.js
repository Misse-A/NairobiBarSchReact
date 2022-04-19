import React from "react";
import { Container } from "react-bootstrap";
import { Head } from "./Head";
import { OurCourseSlider } from "./OurCourseSlider";

export const OurPopluarCourses = () => {
  return (
    <>
      <div className="Title">
        <Container>
          <div className="OurPCourses">
            <Head />
            <OurCourseSlider />
            <div className="OpCourse-content">
              <p>
                Enjoy the top notch learning methods and achieve next level
                skills! You are the creator of your own career & we will guide
                you through that. <a href="/">Register Free Now!</a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
