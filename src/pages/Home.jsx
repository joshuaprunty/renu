import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/App.css";
import "../styles/LandingCard.css";
import Footer from "../components/Footer";
import HomeSecondary from "../components/HomeSecondary";

function Home() {
  return (
    <>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url(src/assets/DeeringLibBG.jpg)",
          height: 550,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-2" style={{ fontSize: "4em" }}>
              Take the guesswork out of finding your next class.
            </h1>
            <h5
              className="mb-4"
              style={{ fontSize: "1.5em", fontFamily: "Armin N" }}
            >
              Get tailored recommendations for distros, major requirements, and
              any other classes.
            </h5>
            <a
              className="btn btn-outline-light btn-lg"
              href="/form"
              role="button"
              style={{ fontSize: "24px", padding: "14px 36px" }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <HomeSecondary />

      <Footer />
    </>
  );
}

export default Home;
