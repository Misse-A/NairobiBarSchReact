import React, { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export const Login = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Container>
        <div className="LoginReg-box " data-aos="fade-up">
          <div>
            <h1>Login</h1>
          </div>
          <div>
            <Form className="Login-Reg-form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username or Email</Form.Label>
                <Form.Control
                  type="Email"
                  placeholder="Email or Username"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-box-common login">
                <Link to="/home">Submit </Link>
              </Button>
              <Link to="/forgotpwd">
                <p className="Lostpwd"> Lost your Password ?</p>
              </Link>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};
