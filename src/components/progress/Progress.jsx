import React, { useEffect, useState } from "react";
import "./progress.css";

const Progress = ({ endValue, text }) => {
  const [style, setStyle] = useState({});
  const [donestate, setDoneState] = useState(0);
  const [degState, setDegstate] = useState(0);
  const [progressStartValue, setProgressStartValue] = useState(0);
  useEffect(() => {
    let pro = setInterval(() => {
      setDoneState(progressStartValue);
      setDegstate(progressStartValue * 3.6);
      let newStyle = {
        background: ` conic-gradient(#AA367C ${degState}deg , #4A2FBD 0deg) `,
      };
      setStyle(newStyle);
      setProgressStartValue((progressStartValue) => progressStartValue + 1);
    }, 100);
    if (progressStartValue >= endValue) {
      clearInterval(pro);
    }
  });

  return (
    <div className="counter">
      <div className="circular-progress" style={style}>
        <span className="progress-value">{donestate}%</span>
      </div>
      <span className="text"> {text} </span>
    </div>
  );
};

export default Progress;
