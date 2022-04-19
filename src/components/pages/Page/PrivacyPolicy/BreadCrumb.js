import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BreadCrumb = () => {
  return (
    <>
      <div className="BreadCrumb Title">
        <Container>
          <div className="Bread-Crumb">
            <h1>Privacy Policy </h1>
            <div className="Bread-Crumb-text">
              <Link to="/home" className="home-page">
                Home
              </Link>
              <h6>/</h6>
              <Link to="/policy" className="Current-page">
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
