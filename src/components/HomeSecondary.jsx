import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/App.css";
import "../styles/LandingCard.css";

function HomeSecondary() {
  return (
    <section className="py-5" style={{ backgroundColor: "white" }}>
      <Container className="px-md-0">
        <Row className="justify-content-md-center">
          <Col md={11.1} className="text-center">
            <h2
              style={{ fontFamily: "Armin BL", fontSize: "3rem" }}
              className="mb-5"
            >
              How this site works.
            </h2>
            <Row className="g-5" style={{ fontFamily: "Armin SB, sans-serif" }}>
              <Col md={4}>
                <Card
                  className="mb-4 land-card"
                  style={{
                    height: "400px",
                  }}
                >
                  <Card.Title
                    style={{
                      paddingTop: "1.5rem",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                    }}
                  >
                    Input your current class search.
                  </Card.Title>
                  <Card.Body
                    style={{ fontFamily: "Armin N", paddingTop: "2rem" }}
                  >
                    Fill out info like what distro and major requirements you
                    want to satisfy, classes already taken, and how many hours a
                    week you want to spend on the class.
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="mb-4 land-card" style={{ height: "400px" }}>
                  <Card.Title
                    style={{
                      paddingTop: "1rem",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                    }}
                  >
                    Get class recommendations selected by our algorithm.
                  </Card.Title>
                  <Card.Body style={{ fontFamily: "Armin N" }}>
                    Renu uses Northwestern course data APIs to get up to date
                    info on class offerings, and considers a range of factors to
                    find the ones that will best fit your search.
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="mb-4 land-card" style={{ height: "400px" }}>
                  <Card.Title
                    style={{
                      paddingTop: "1rem",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                    }}
                  >
                    Like or dislike recommendations to improve future searches.
                  </Card.Title>
                  <Card.Body
                    style={{ fontFamily: "Armin N", paddingTop: "2rem" }}
                  >
                    Machine Learning concepts allow Renu to constantly improve
                    its recommendations.
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeSecondary;
