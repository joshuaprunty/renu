// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";
import "../styles/Home.css";
import "../styles/util.css";

// MAIN
//-------------------------------------------------------------------------------------------------------
function MobileFooter() {
  return (
    <div class="footer-div bg-body-tertiary hide-lg">
      <div class="container-lg">
        <div class="row justify-content-start justify-content-md-center">
          <div className="d-flex justify-content-start flex-row">
            <div class="col-md-3 me-5 justify-content-center">
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
            <div class="col-md-3 justify-content-center">
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
                      About
                    </a>
                  </li>
                  <li class="footer-list-item fw-light">
                    <a class="footer-link" href="#ternary-div">
                      Assessment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div class="col-md-3 justify-content-center">
            <div class="ms-auto">
              <ul class="footer-list">
                <li class="footer-list-item fw-light">© Joshua Prunty, 2023</li>
                <div className="d-flex flex-row justify-content-start">
                  <li class="footer-list-item fw-light me-3">
                    <a class="footer-link" href="">
                      Contact
                    </a>
                  </li>
                  <li class="footer-list-item fw-light">
                    <a class="footer-link" href="">
                      Privacy
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export
export default MobileFooter;
