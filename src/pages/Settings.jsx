import React from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";

function Settings() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>this is the settings page</h1>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Settings;
