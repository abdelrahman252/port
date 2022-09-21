import React, { useState } from "react";
import TrackVisibility from "react-on-screen";
import "./popup.css";

const PopUp = ({ setPop }) => {
  const [ishi, setIsHi] = useState("translateY(0)");
  const [issad, setIsSad] = useState("translateY(100%)");
  const [isyay, setIsYay] = useState("translateY(100%)");

  const boyStyles = {
    transform: `${ishi}`,
  };
  const yayStyle = {
    transform: `${isyay}`,
  };
  const sadStyles = {
    transform: `${issad}`,
  };
  console.log(boyStyles);

  const yhover = () => {
    setIsYay("translateY(0)");
    setIsHi("translateY(100%)");
  };

  const yhoverLeave = () => {
    setIsHi("translateY(0)");
    setIsYay("translateY(100%)");
  };
  const nhover = () => {
    setIsSad("translateY(0)");
    setIsHi("translateY(100%)");
  };

  const nhoverLeave = () => {
    setIsHi("translateY(0)");
    setIsSad("translateY(100%)");
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
                <div className="variant" style={boyStyles}>
                  <div className="body"></div>
                  <div className="arm "></div>
                </div>
                <div className="is-yay" style={yayStyle}></div>;
                <div className="is-shrugging" style={sadStyles}></div>;
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
                  className="botn "
                  onMouseEnter={nhover}
                  onMouseLeave={nhoverLeave}
                >
                  NO
                </button>
                <a
                  href="https://www.linkedin.com/in/abdalrahman-ahmed-024a29230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botn "
                  onMouseEnter={yhover}
                  onMouseLeave={yhoverLeave}
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
