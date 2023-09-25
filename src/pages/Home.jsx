import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/App.css";
import "../styles/Home.css";
import "../styles/LandingCard.css";
import Footer from "../components/Footer";
import HomeSecondary from "../components/HomeSecondary";

function Home() {
  return (
    <>
      {/* <div className="hero-div container-fluid" id="hero-div">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-white text-center m-auto">
            <h1>Find your next class without the guesswork.</h1>
            <p className="fw-light">
              Get tailored recommendations for major requirements, distros, and
              any other classes.
            </p>
            <a
              href="./form-start.html"
              className="btn btn-outline-light btn-lg"
            >
              Get Started
            </a>
          </div>
          <div className="col-12 col-md-6 fw-light text-center">
            <img
              src="./assets/HeroCard.png"
              className="img-fluid align-self-center"
              id="hero-img"
            />
          </div>
        </div>
      </div> */}

      <div className="hero-div container-fluid" id="hero-div">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-white text-center m-auto">
            <h1>Find your next class without the guesswork.</h1>
            <p className="fw-light">
              Get tailored recommendations for major requirements, distros, and
              any other classes.
            </p>
            <a
              href="./form-start.html"
              className="btn btn-outline-light btn-lg"
            >
              Get Started
            </a>
          </div>
          <div className="col-12 col-md-6 fw-light text-center">
            <img
              src="src/assets/HeroCard.png"
              className="hero-img align-self-center"
            />
          </div>
        </div>
      </div>

      <div
        class="container-fluid bg-white py-5 secondary-div"
        id="secondary-div"
      >
        <p class="fs-1 text-center">How Renu Works</p>
        <hr class="secondary-hr text-black" />
        <div class="row justify-content-center text-center px-2">
          <div class="col-9 col-md-4 my-2">
            <div class="card h-100 py-3">
              <div class="card-body">
                <h5 class="card-title">
                  Tell us about your current class search
                </h5>
                <p class="card-text fw-light mb-md-5">
                  Fill out info like what distro and major requirements you want
                  to satisfy, classes already taken, and how many hours a week
                  you want to spend on the class.
                </p>
              </div>
            </div>
          </div>
          <div class="col-9 col-md-4 my-2">
            <div class="card h-100 py-3">
              <div class="card-body">
                <h5 class="card-title">
                  Get class recommendations selected by our algorithm
                </h5>
                <p class="card-text fw-light mb-md-5">
                  Renu uses Northwestern course data APIs to get up to date info
                  on class offerings, and considers a range of factors to find
                  the ones that will best fit your search.
                </p>
              </div>
            </div>
          </div>
          <div class="col-9 col-md-4 my-2">
            <div class="card h-100 py-3">
              <div class="card-body">
                <h5 class="card-title">
                  Like or dislike recommendations to improve future searches
                </h5>
                <p class="card-text fw-light mb-md-5">
                  Machine Learning allows Renu to constantly improve its
                  recommendations based on student input.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ternary-div container-fluid py-5" id="ternary-div">
        <p class="fs-1 text-white text-center">Built for every student</p>
        <div class="row mt-4 text-center justify-content-center">
          <div class="col-lg-6 g-0 g-md-3">
            <div class="ternary-card">
              <img class="tc-img" src="src/assets/WCWelcome.png" />
              <div class="tc-text">
                <p class="tc-head">Incoming First-Years</p>
                <p class="tc-body">
                  Get a head-start on class selections for your first quarter at
                  Northwestern.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 g-0 g-md-3">
            <div class="ternary-card">
              <img class="tc-img" src="src/assets/Undergrads.png" />
              <div class="tc-text">
                <p class="tc-head">Current Undergrads</p>
                <p class="tc-body">
                  Find the best courses for you based on your favorite (and
                  least favorite) past classes.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 g-0 g-md-3">
            <div class="ternary-card">
              <img class="tc-img" src="src/assets/Kellogg.png" />
              <div class="tc-text">
                <p class="tc-head">Graduate Students</p>
                <p class="tc-body">
                  Continue on your journey with specialized recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="quaternary-div container-fluid" id="quaternary-div">
        <img
          className="quat-background-img"
          src="src/assets/NorthwesternN.png"
        />
        <div class="position-relative z-2 w-100">
          <div class="row h-100 align-content-center">
            <div class="col-sm-2"></div>
            <div class="col-sm-8 justify-content-center text-center ms-auto">
              <h2 class="text-white text-center mb-4">
                Find your next class now
              </h2>
              <a href="./form-start.html" class="btn btn-light btn-lg">
                Get Started
              </a>
            </div>
            <div class="col-sm-2"></div>
          </div>
        </div>
      </div>

      <div class="container-fluid footer-div">
        <div class="row justify-content-center">
          <div class="col-md-3 text-white justify-content-center">
            <div class="ms-auto">
              <ul class="footer-list">
                <li class="footer-list-item fl-top">Renu</li>
                <li class="footer-list-item fw-light">v0.0.1</li>
                <li class="footer-list-item fw-light">
                  Created by <br />
                  Joshua Prunty
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 text-white justify-content-center">
            <div class="ms-auto">
              <ul class="footer-list">
                <li class="footer-list-item fl-top">Links</li>
                <li class="footer-list-item fw-light">
                  <a class="footer-link" href="/">
                    Home
                  </a>
                </li>
                <li class="footer-list-item fw-light">
                  <a class="footer-link" href="#secondary-div">
                    How it Works
                  </a>
                </li>
                <li class="footer-list-item fw-light">
                  <a class="footer-link" href="#ternary-div">
                    Students
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 text-white justify-content-center">
            <div class="ms-auto">
              <ul class="footer-list">
                <li class="footer-list-item fl-top">Pages</li>
                <li class="footer-list-item fw-light">
                  <a class="footer-link" href="/">
                    Home
                  </a>
                </li>
                <li class="footer-list-item fw-light">
                  <a class="footer-link" href="">
                    Login
                  </a>
                </li>
                <li class="footer-list-item fw-light">
                  <a class="footer-link" href="./form-start.html">
                    Take the Assessment
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 text-white justify-content-center">
            <div class="ms-auto">
              <ul class="footer-list">
                <li class="footer-list-item fw-light">© Joshua Prunty, 2023</li>
                <li class="footer-list-item fw-light">
                  <button
                    type="button"
                    class="btn nav-link footer-link"
                    data-bs-toggle="modal"
                    data-bs-target="#about-modal"
                  >
                    About Renu
                  </button>
                </li>
                <li class="footer-list-item fw-light">
                  <a class="footer-link" href="">
                    Contact
                  </a>
                </li>
                <li class="footer-list-item fw-light">
                  <a class="footer-link" href="">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <HomeSecondary />

      <Footer /> */}
    </>
  );
}

export default Home;
