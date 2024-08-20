import { useState } from "react";

// import Button from "./components/Button";
// import Icon from "./components/Icon";
// import Pin from "./components/Pin";
// import Typewriter from "./components/Typewriter";

import Navbar from "./components/NavBar";
import VideoBackground from "./components/VideoBackgroundLanding";
import Tabs from "./components/Tabs";
import Howitworks from "./components/HowItWorks";
function Tab1() {
  return (
    <div className="mx-[10%]  flex h-full flex-col space-y-4 text-left lg:flex-row lg:space-x-4 lg:space-y-0">
      {/* Left Column */}
      <div className=" flex-1 rounded-lg bg-gray-100 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Heading for Tab 1</h2>
        <p className="text-gray-700">
          This is the text content for Tab 1. It can be as long as needed, and
          will be displayed in a nice, readable format.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex-1">
        <div className="relative h-full overflow-hidden rounded-lg bg-gray-200 shadow-md">
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
        </div>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="mx-[10%] flex  h-full flex-col space-y-4 text-left lg:flex-row lg:space-x-4 lg:space-y-0">
      {/* Left Column */}
      <div className=" flex-1 rounded-lg bg-gray-100 p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Heading for Tab 1</h2>
        <p className="text-gray-700">
          This is the text content for Tab 1. It can be as long as needed, and
          will be displayed in a nice, readable format.
        </p>
      </div>
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0);

  // const words = [
  //   { text: "Vite", className: "text-[#a95eff]" },
  //   { text: " + " },
  //   { text: "React", className: "text-[#61dafb]" },
  //   { text: " + " },
  //   { text: "Tailwindcss", className: "text-[#0ea5e9]" },
  //   { text: " + " },
  //   { text: "Framer Motion", className: "text-[#ff57c8]" },
  // ];
  const tabData = [
    {
      label: "For Advertisers",
      content: <Tab1></Tab1>,
    },
    {
      label: "Tab 2",
      content: <Tab2></Tab2>,
    },
  ];

  return (
    <div className="text-center">
      <VideoBackground />
      <Navbar></Navbar>
      <div className="w-full ">
        <Tabs tabs={tabData} />
      </div>
      <Howitworks></Howitworks>
    </div>
  );
}

export default App;
