import { useRef } from "react";

import Gt from "./Gt";
import Blob from "./Blob";
import CursorFollower from "./CursorFollower";

const Howitworks = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="sticky -top-[3%] z-20 mx-auto max-w-screen-xl overflow-hidden md:top-[4%]">
      <div className="relative z-10 mx-[10%] h-max">
        <div className="sectiontitle pt-32">How It Works</div>
        <div className="subheading-nocolor pb-[2em] pt-8 text-gray-400">
          No new work. We'll get you live within 30 days. Easy installation,
          100% hassle-free.
        </div>
      </div>
      <div className="h-fit rounded-lg bg-white bg-opacity-20 p-8 backdrop-blur-md md:p-16 lg:p-16 xl:p-16">
        <Gt refProp={ref} />
      </div>
    </div>
  );
};

export default Howitworks;
