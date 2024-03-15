// import React from "react";
// import Header from "../../../components/header";

// const DashboardHome = () => {
//   return (
//     <div>
//       <Header />
//       DashboardHome
//     </div>
//   );
// };

// export default DashboardHome;

import React, { useEffect, useRef, useState } from "react";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints } from "./utilities";

const DashboardHome = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [counter, setCounter] = useState(0);
  const [stage, setStage] = useState("");
  const [cooldown, setCooldown] = useState(false);

  const calculateAngle = (a, b, c) => {
    const radians =
      Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
    let angle = Math.abs((radians * 180.0) / Math.PI);

    if (angle > 180.0) {
      angle = 360 - angle;
    }

    return angle;
  };

  const detectWebcamFeed = async () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;

      const net = await posenet.load({
        inputResolution: { width: 640, height: 480 },
        scale: 0.8,
      });

      const pose = await net.estimateSinglePose(video, {
        flipHorizontal: false,
      });

      const { keypoints } = pose;

      // Your pose detection logic goes here
      // For simplicity, let's simulate the angle calculation
      const shoulder = keypoints.find((point) => point.part === "leftShoulder");
      const elbow = keypoints.find((point) => point.part === "leftElbow");
      const wrist = keypoints.find((point) => point.part === "leftWrist");

      const angle = calculateAngle(
        { x: shoulder.position.x, y: shoulder.position.y },
        { x: elbow.position.x, y: elbow.position.y },
        { x: wrist.position.x, y: wrist.position.y }
      );

      // Your curl counter logic goes here
      if (angle > 160) {
        setStage("down");
      }
      if (angle < 30 && stage === "down" && !cooldown) {
        setStage("up");
        setCounter((prevCounter) => prevCounter + 1);
        setCooldown(true);

        // Set a cooldown period of 2 seconds (adjust as needed)
        setTimeout(() => {
          setCooldown(false);
        }, 2000);

        console.log(counter);
      }

      // Render detections
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, video.width, video.height);

        // Draw keypoints
        drawKeypoints(video, keypoints, ctx);
      }
    }

    // Request the next animation frame
    requestAnimationFrame(detectWebcamFeed);
  };

  useEffect(() => {
    detectWebcamFeed(); // Initial call to start animation loop
  }, [stage, counter, cooldown]);

  return (
    <div>
      <Webcam ref={webcamRef} />
      <canvas
        ref={canvasRef}
        width={640}
        height={480}
        style={{ border: "1px solid #000" }}
      />
      <div>
        <p>REPS: {counter}</p>
        <p>STAGE: {stage}</p>
      </div>
    </div>
  );
};

export default DashboardHome;
