import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BreadCrumb = () => {
  return (
    <>
      <div className="BreadCrumb Title">
        <Container>
          <div className="Bread-Crumb">
            <h1>Events</h1>
          </div>
          <div className="Bread-Crumb-text">
            <Link to="/home" className="home-page">
              Home
            </Link>
            <h6>/</h6>
            <Link to="/event" className="Current-page">
              Event
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};
