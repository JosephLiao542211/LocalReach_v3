import { useState } from "react";

// import Button from "./components/Button";
// import Icon from "./components/Icon";
// import Pin from "./components/Pin";
// import Typewriter from "./components/Typewriter";

import Navbar from "./components/Navbar/NavBar";
import VideoBackground from "./components/Landing/VideoBackgroundLanding";
import Tabs from "./components/AR/Tabs";
import Howitworks from "./components/HIW/HowItWorks";
import Blob from "./components/Global/Blob";
import CursorFollower from "./components/Global/CursorFollower";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact_Section from "./components/Contact/ContactUs";
import Pricing from "./components/Pricing/Pricing";

function Tab1() {
  return (
    <div className="mx-[15%]  flex h-full flex-col space-y-4 text-left lg:flex-row lg:space-x-4 lg:space-y-0">
      {/* Left Column */}
      <div className=" mr-[5%] flex-1 rounded-lg ">
        <h2 className="sectiontitle pb-8 text-2xl font-bold">
          Heading for Tab 1
        </h2>
        <p className="subheading">
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
    <div className="mx-[15%] flex  h-full flex-col space-y-4 text-left lg:flex-row lg:space-x-12 lg:space-y-0">
      {/* Left Column */}
      <div className=" mr-[20%] flex-1 rounded-lg ">
        <h2 className="sectiontitle pb-8 text-2xl font-bold">
          Heading for Tab 1
        </h2>
        <p className="subheading">
          This is the text content for Tab 1. It can be as long as needed, and
          will be displayed in a nice, readable format.
        </p>
      </div>
      <div className="relative flex-1 bg-green-500">
        <div className="absolute -bottom-[5%] -left-5 hidden h-[100px] w-[300px] bg-orange-400 md:block"></div>
      </div>
      <div className="relative flex-1 bg-green-500">
        <div className="absolute -left-5 -top-[5%] hidden h-[100px] w-[300px] bg-blue-300 md:block"></div>
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
      label: "For Resturants",
      content: <Tab2></Tab2>,
    },
  ];

  return (
    <div className="text-center">
      <VideoBackground />
      <Navbar></Navbar>
      <div className="relative w-full ">
        <Tabs tabs={tabData} />
      </div>
      <div className="contain-paint">
        <div className="relative z-20 h-[300em] bg-[#080808]">
          <div className="sticky top-0">
            <CursorFollower />
            <Blob color="#95D0FD" startingPosition={{ x: 0, y: 200 }} />
          </div>

          <div className="absolute top-0 h-max w-full">
            <Blob />
            <Blob color="#95D0FD" startingPosition={{ x: 500, y: 2000 }} />
            <Blob startingPosition={{ x: 1000, y: 4000 }} />
          </div>
          <Howitworks></Howitworks>
        </div>
        <div className=" h-fit bg-[#080808]">
          <div className="sticky top-0">
            <CursorFollower />
          </div>
          <Testimonials />
          <Pricing></Pricing>
          <Contact_Section />
        </div>
      </div>
    </div>
  );
}

export default App;
