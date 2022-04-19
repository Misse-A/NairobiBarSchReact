import React from "react";
import { Form, Button, Container } from "react-bootstrap";

export const Forgotbox = () => {
  return (
    <>
      <Container>
        <div className="Forgot">
          <Form className="Login-Reg-form LoginReg-box">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username or Email</Form.Label>
              <Form.Control
                type="Email"
                placeholder="Email or Username"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-box-common">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};
