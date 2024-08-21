import React, { useState, useEffect } from "react";

const getDimensions = () => {
  return {
    height: 4000,
    width: window.innerWidth,
  };
};

const Blob = ({
  color = "linear-gradient(135deg, #FF6F00, #FFB74D)",
  startingPosition = { x: 150, y: 150 },
  size = "1000px",
}) => {
  const { height, width } = getDimensions();
  const [position, setPosition] = useState(startingPosition);

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition((prevPosition) => ({
        x: width * (1 - Math.random()) - 1000, // Adjust -50 based on the size of your element
        y: height * (1 - Math.random()) - 1000, // Adjust -50 based on the size of your element
      }));
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [width, height]);

  return (
    <div
      className="screen"
      style={{ position: "absolute", height: "100vh", width: "100vw" }}
    >
      <div
        className="Animate"
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
          borderRadius: "50%",
          height: size,
          width: size,

          filter: "blur(160px)", // Adjust blur radius as needed
          opacity: "20%",
          background: color, // Use the color prop
          transition: "15s",
        }}
      />
    </div>
  );
};

export default Blob;
