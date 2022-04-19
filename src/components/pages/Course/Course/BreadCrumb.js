import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BreadCrumb = () => {
  return (
    <>
      <div className="BreadCrumb Title">
        <Container>
          <div className="Bread-Crumb">
            <h1>Courses</h1>
            <div className="Bread-Crumb-text">
              <Link to="/home" className="home-page">
                Home
              </Link>
              <h6>/</h6>
              <Link to="/course" className="Current-page">
                Courses
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
