// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";

// MAIN
//-------------------------------------------------------------------------------------------------------
function Modal() {
  return (
    <div
      class="modal fade"
      id="about-modal"
      tabindex="-1"
      aria-labelledby="about-modal-heading"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0">
            <div class="modal-heading-div text-center">
              <h1 class="modal-title modal-brand" id="about-modal-heading">
                renu.
              </h1>
              <p class="modal-version">Version 0.0.1</p>
            </div>
            <button
              type="button"
              class="btn-close position-absolute end-0 me-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-grid gap-3 px-5">
            <button class="btn btn-outline-dark fw-light mx-4">
              Learn More
            </button>
            <button class="btn btn-outline-dark fw-light mx-4">
              Source Code
            </button>
            <button class="btn btn-outline-dark fw-light mx-4">
              Changelog
            </button>
          </div>
          <div class="modal-footer text-center border-0">
            <a href="#" class="text-body fw-light modal-footer-link">
              Designed and built by Joshua Prunty
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export
export default Modal;
