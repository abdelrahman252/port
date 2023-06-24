import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const leaveClicked = () => {
    setPop(false);
  };
  const { t } = useTranslation();
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
                <div className="is-yay" style={yayStyle}></div>
                <div className="is-shrugging" style={sadStyles}></div>
              </div>

              <div className="text-wrapper">
                <div className="pop-text">
                  {t("pop_hey")} <div className="tip"></div>
                </div>
                <div className="pop-text ">
                  {t("pop_wou")}
                  <div className="tip"></div>
                </div>
              </div>

              <div className="pop-btn">
                <button
                  type="button"
                  onClick={leaveClicked}
                  className="botn no"
                  onMouseEnter={nhover}
                  onMouseLeave={nhoverLeave}
                >
                  {t("pop_no")}
                </button>
                <a
                  href="https://www.linkedin.com/in/abdalrahman-ahmed-024a29230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botn "
                  onMouseEnter={yhover}
                  onMouseLeave={yhoverLeave}
                >
                  {t("pop_yes")}
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
