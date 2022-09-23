import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import "./progress.css";

const Progress = ({ endValue, text }) => {
  const [style, setStyle] = useState({});
  const [doneState, setDoneState] = useState(0);
  const [degState, setDegState] = useState(0);
  const [progressStartValue, setProgressStartValue] = useState(0);
  useEffect(() => {
    setDoneState(progressStartValue);
    setDegState(progressStartValue * 3.6);
  }, [progressStartValue]);

  setTimeout(() => {
    let newStyle = {
      background: ` conic-gradient(#AA367C ${degState}deg , #4A2FBD 0deg) `,
    };
    setStyle(newStyle);
    if (progressStartValue < endValue) {
      setProgressStartValue(progressStartValue + 1);
    }
  }, 100);
  return (
    <>
      <Slide triggerOnce="true" direction="up" delay="2000ms">
        <div className="counter">
          <div className="circular-progress" style={style}>
            <span className="progress-value">{doneState}%</span>
          </div>
          <span className="text"> {text} </span>
        </div>
      </Slide>
    </>
  );
};

export default Progress;
