import React, { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export const Register = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Container>
        <div className="LoginReg-box " data-aos="fade-up">
          <div className="d-flex justify-content-between align-middle align-items-center">
            <div className="Register-text">
              <h1>Register</h1>
            </div>
            <div className="text-muted Loginlink">
              <Link to="/login">Already have an account?</Link>
            </div>
          </div>

          <div>
            <Form className="Login-Reg-form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address *</Form.Label>
                <Form.Control type="Email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Username *</Form.Label>
                <Form.Control type="text" placeholder="Username" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password *</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password *</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Want to become an instructor?"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-box-common">
                Register
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};
