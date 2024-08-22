import GetStartedSection from "./GetStartedSection";
import { motion } from "framer-motion";

export function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        opacity: { duration: 2, ease: "easeInOut" },
        x: { duration: 1.5, ease: "easeInOut" },
      }}
      className=" relative z-10 ml-[10%] flex h-screen w-screen flex-col justify-evenly overflow-visible"
    >
      <div className="title-font relative flex h-4/6 flex-col justify-end overflow-visible text-left text-4xl font-bold">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            delay: 1.5,
          }}
          style={{ originY: 1 }}
          className="absolute -z-10 mb-[10rem] h-[18rem] w-[34rem] overflow-visible bg-orange-400"
        ></motion.div>
        <h1>
          Unlock your <br />
          TV Advertising
        </h1>
      </div>
      <GetStartedSection></GetStartedSection>
    </motion.div>
  );
}
