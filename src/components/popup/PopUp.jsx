import React from "react";
import TrackVisibility from "react-on-screen";
import "./popup.css";

const PopUp = ({ setPop }) => {
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div
          className={
            isVisible ? "pop animate__animated animate__slideInUp" : "pop"
          }
        >
          <div className="pop-wrapper">
            <div class="boy">
              <div class="variant is-hi">
                <div class="body"></div>
                <div class="arm js-boy-arm"></div>
              </div>
              <div class="variant is-yay"></div>
              <div class="variant is-shrugging"></div>
            </div>

            <div className="text-wrapper">
              <div className="pop-text">
                Hey! You seem to really like my portfolio{" "}
                <div class="tip"></div>
              </div>
              <div className="pop-text ">
                Would you like to HIRE me ?<div class="tip"></div>
              </div>
            </div>

            <div className="pop-btn">
              <button
                type="button"
                onClick={() => setPop(false)}
                className="botn no"
              >
                NO
              </button>
              <a
                href="https://www.linkedin.com/in/abdalrahman-ahmed-024a29230/"
                target="_blank"
                rel="noopener noreferrer"
                className="botn yes"
              >
                yes, Hire Me!
              </a>
            </div>
          </div>
        </div>
      )}
    </TrackVisibility>
  );
};

export default PopUp;
