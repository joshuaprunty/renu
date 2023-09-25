import React from "react";
import "../styles/Home.css";

function Quaternary() {
  return (
    <div class="container-fluid bg-white py-5 secondary-div" id="secondary-div">
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
                to satisfy, classes already taken, and how many hours a week you
                want to spend on the class.
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
                on class offerings, and considers a range of factors to find the
                ones that will best fit your search.
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
  );
}

export default Quaternary;
