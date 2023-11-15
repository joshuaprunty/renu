import React from "react";
import "../styles/Home.css";

function Footer() {
  return (
    <div class="container-fluid footer-div bg-dark">
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
  );
}

export default Footer;
