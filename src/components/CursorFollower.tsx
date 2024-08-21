import React, { useEffect, useState } from "react";

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="sticky top-96 h-0 w-full bg-blue-50">
      <div
        className="pointer-events-none absolute left-0 top-0 h-[60em] w-[60em] rounded-full transition-transform duration-100 ease-out"
        style={{
          filter: "blur(100px)", // Adjust blur radius as needed
          opacity: "50%",
          background: "linear-gradient(135deg, #FF6F00, #FFB74D)",
          transform: `translate3d(${position.x - 400}px, ${position.y - 400}px, 0)`,
        }}
      ></div>
    </div>
  );
};

export default CursorFollower;
