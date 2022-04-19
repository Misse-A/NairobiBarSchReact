import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BreadCrumb = () => {
  return (
    <>
      <div className="BreadCrumb Title">
        <Container>
          <div className="Bread-Crumb">
            <h1>My Account</h1>
          </div>
          <div className="Bread-Crumb-text">
            <Link to="/home" className="home-page">
              Home
            </Link>
            <h6>/</h6>
            <Link to="/login" className="Current-page">
              My account
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};
