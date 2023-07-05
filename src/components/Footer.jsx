import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bd-footer py-1 py-md-1 mt-2 bg-dark">
      <Container className="py-2 py-md-4 px-4 px-md-3 text-light">
        <Row>
          <Col className="col-lg-3 mb-3">
            <a
              className="d-inline-flex align-items-center mb-2 text-decoration-none text-white-50"
              href="/"
              aria-label="Renu"
            >
              <span className="fs-4">renu.</span>
            </a>

            <ul className="list-unstyled small">
              <li className="mb-2">Ver. 0.0.1</li>
              <li className="mb-2">
                © 2023 Joshua Prunty. All rights reserved.
              </li>
            </ul>
          </Col>

          <Col className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5 className="text-white-50">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about">About</a>
              </li>
              <li className="mb-2">
                <a href="/settings">Settings</a>
              </li>
              <li className="mb-2">
                <a href="/form">Get Started</a>
              </li>
            </ul>
          </Col>

          <Col className="col-6 col-lg-2 mb-3">
            <h5 className="text-white-50">Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://stackoverflow.com/questions/tagged/bootstrap-5">
                  Github
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
