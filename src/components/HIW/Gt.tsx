import { motion, useScroll } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent } from "framer-motion";
import HiwCard from "../HiwCard";
interface GtProps {
  refProp: React.RefObject<HTMLDivElement>;
}

const Gt: React.FC<GtProps> = ({ refProp }) => {
  const { scrollYProgress } = useScroll({
    target: refProp,
    offset: ["start -2", "end 2"],
  });
  const [slide, setslide] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.15) {
      setslide(0);
    }
    if (latest < 0.5 && latest > 0.15) {
      setslide(1);
    }
    if (latest < 0.85 && latest > 0.5) {
      setslide(2);
    }
    if (latest > 0.85) {
      setslide(3);
    }
  });

  return (
    <div className="flex h-fit md:flex-row">
      <div className="flex flex-1 justify-center">
        <HiwCard priority={slide} />
      </div>
      <div className="mt-4 md:ml-4 md:mt-0">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="hidden flex-1 items-center justify-center p-4 md:flex md:p-10">
          <div className="relative h-[305px] w-full md:w-[510px]">
            <div className="relative h-[307px] w-[1em] md:w-[508px]">
              <div className="absolute left-[20%] top-[90%] h-[46px] w-[1em] rounded-[149px/23px] bg-[#1e1e1e] opacity-50 mix-blend-multiply blur-[48.1px]" />
              <img
                className="absolute left-[30%] top-[95%] h-[12px] w-[40%]"
                alt="Base"
                src="base.svg"
              />
              <div className="absolute left-[33%] top-[95%] h-[3px] w-[35%] rounded-[85.26px/1.55px] bg-[#1e1e1e] mix-blend-multiply blur-[6.57px]" />
              <div className="absolute left-[36%] top-[95%] h-[3px] w-[30%] [background:linear-gradient(180deg,rgb(34,34,34)_0%,rgb(23.38,23.18,23.18)_100%)]" />
              <div className="absolute left-0 top-0 h-[292px] w-full rounded-[14px] [background:linear-gradient(180deg,rgb(41.21,41.21,41.21)_0%,rgb(34.41,34.41,34.41)_100%)]" />
              <img
                className="absolute left-[6px] top-[6px] h-[280px] w-[calc(100%-12px)]"
                alt="Mask group"
                src="mask-group.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gt;
