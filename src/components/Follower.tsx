import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY }); // Use clientX and clientY for viewport-relative positioning
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="z-1 pointer-events-none sticky h-96 w-96 rounded-full bg-blue-500"
      style={{
        transform: `translate(-50, -50)`, // Center the circle exactly on the cursor
        top: position.y,
        left: position.x,
      }}
      animate={{ top: position.y, left: position.x }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default MouseFollower;
