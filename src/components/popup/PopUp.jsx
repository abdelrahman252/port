import React, { useState } from "react";
import TrackVisibility from "react-on-screen";
import "./popup.css";

const PopUp = ({ setPop }) => {
  const [isyay, setIsYay] = useState(false);
  let isHi = (
    <div className="variant is-hi">
      <div className="body"></div>
      <div className="arm js-boy-arm"></div>
    </div>
  );
  let isYay = <div className="variant is-yay"></div>;
  let isSad = <div className="variant is-shrugging"></div>;

  const hover = () => {
    setIsYay(true);
  };
  return (
    <div className="big-pop">
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible ? "pop animate__animated animate__slideInUp" : "pop"
            }
          >
            <div className="pop-wrapper">
              <div className="boy">
                {isHi}
                {isYay}
                {isSad}
              </div>

              <div className="text-wrapper">
                <div className="pop-text">
                  Hey! You seem to really like my portfolio{" "}
                  <div className="tip"></div>
                </div>
                <div className="pop-text ">
                  Would you like to HIRE me ?<div className="tip"></div>
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
                  onMouseOver={hover}
                >
                  yes, Hire Me!
                </a>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  );
};

export default PopUp;
