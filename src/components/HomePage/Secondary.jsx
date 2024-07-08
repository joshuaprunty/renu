// IMPORTS
//-------------------------------------------------------------------------------------------------------
import React from "react";
import "/src/styles/LandingCard.css";
import "/src/styles/Home.css";
import "/src/styles/debug.css";

// MAIN
//-------------------------------------------------------------------------------------------------------
function Secondary() {
  const cardData = [
    {
      title: "Tell us about your current class search",
      text: "Fill out info like what distro and major requirements you want to satisfy, classes already taken, and how many hours a week you want to spend on the class.",
    },
    {
      title: "Get class recommendations selected by our algorithm",
      text: "Renu uses Northwestern course data APIs to get up to date info on class offerings, and considers a range of factors to find the ones that will best fit your search.",
    },
    {
      title: "Like or dislike recommendations to improve future searches",
      text: "Machine Learning allows Renu to constantly improve its recommendations based on student input.",
    },
  ];

  return (
    <>
      <div class="bg-white secondary-div" id="secondary-div">
        <div class="container-lg">
          <p class="second-header text-center">How Renu Works</p>
          <hr class="secondary-hr text-black" />
          <div class="row justify-content-center text-center px-2">
            {cardData.map((data, index) => (
              <div key={index} className="col-9 col-md-4 my-2">
                <div className="card h-100 py-3">
                  <div className="card-body">
                    <h5 className="fs-3 mb-4">{data.title}</h5>
                    <p className="fs-4 fw-light mb-md-5">{data.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}

// Export
export default Secondary;
