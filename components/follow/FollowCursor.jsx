// import React, { useRef, useEffect } from "react";

// function FollowCursor() {
//   const canvasRef = useRef(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     console.log(canvasRef);

//     const ctx = canvas.getContext("2d");
//     function draw(e) {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(e.clientX, e.clientY, 20, 0, 2 * Math.PI);
//       ctx.fill();
//       console.log(e.clientX);
//     }

//     console.log(draw);

//     canvas.addEventListener("mousemove", draw);

//     return () => {
//       canvas.removeEventListener("mousemove", draw);
//     };
//   }, []);

//   return <canvas ref={canvasRef} width={300} height={300} />;
// }

// export default FollowCursor;

import React from "react";
import AnimatedCursor from "react-animated-cursor";

function FollowCursor() {
  return (
    <div>
      <AnimatedCursor
        innerSize={20}
        outerSize={8}

      />
    </div>
  );
}
export default FollowCursor;
