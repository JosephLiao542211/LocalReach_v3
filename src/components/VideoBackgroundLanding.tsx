// src/components/VideoBackground.js
import React from "react";
import { Landing } from "./Landing";

const VideoBackground = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="/Blustream Case Study - Sharkeys Sports Bar - Southampton, UK (online-video-cutter.com).mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* Overlay with Gradient and Blur */}
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 1.55%, #080808 80.81%)`,
          backdropFilter: "blur(2px)",
          zIndex: 1, // Ensure this overlay is above the video
        }}
      ></div>
      <div className=" relative top-96 z-10 mx-[10%] mb-[33%] h-full w-full text-left">
        <Landing></Landing>
      </div>
    </div>
  );
};

export default VideoBackground;
