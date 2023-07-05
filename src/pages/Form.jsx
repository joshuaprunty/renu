import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../components/Footer";

function Form() {
  return (
    <>
      <Container fluid className="vh-100">
        <Row className="h-100 align-items-center justify-content-center ">
          <Col className="col-7">
            <h1 className="mb-4">Start Here.</h1>
            <Card
              className="mb-4"
              style={{
                height: "250px",
              }}
            >
              <Card.Body style={{ fontFamily: "Armin N", paddingTop: "2rem" }}>
                <h4 className="card-title mb-6">Card Title.</h4>
                <p className="card-text mb-6">
                  Example Text. Get personalized class recommendations in under
                  ten minutes.
                </p>
                <a className="btn btn-primary">Get Started</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Form;
