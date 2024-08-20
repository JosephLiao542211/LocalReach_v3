import { useRef } from "react";

import Gt from "./Gt";
import Blob from "./Blob";

const Howitworks = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="contain-paint">
      <div className=" relative h-[300em] bg-[#080808] ">
        <div className="absolute">
          <Blob></Blob>
          <Blob color="#95D0FD" startingPosition={{ x: 500, y: 2000 }}></Blob>
          <Blob startingPosition={{ x: 1000, y: 4000 }}></Blob>
        </div>
        <div className=" sectiontitle mx-[10%] pt-32">HOW IT WORKS</div>
        <div className="subheading mx-[10%] pb-24 pt-8">
          No new work. We'll get you live within 30 days. Easy installation 100%
          hassle free.
        </div>

        <div className="sm:py-38 sticky top-[28%] mx-auto max-w-screen-xl  overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-16 lg:px-6">
          <div>
            <Gt refProp={ref} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
