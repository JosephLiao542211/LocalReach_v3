import "./styles.css";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";

function Item({ cardnum, priority }: { cardnum: number; priority: number }) {
  if (cardnum == priority) {
    return (
      <motion.div
        initial={{ opacity: 1, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <li className="my-3.5 flex items-center justify-center ">
          <div className="flex w-full rounded-lg bg-gray-200 py-3.5">
            <div className="flex-1/6 mr-1 p-4">Column 1</div>
            <div className="flex-5/6 ml-1 rounded-lg bg-gray-200 p-4">
              Column 2
            </div>
          </div>
        </li>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 1, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <li className="my-3.5 flex scale-75 items-center justify-center opacity-80 transition duration-300 ease-in-out ">
          <div className="flex w-full rounded-lg bg-gray-200 py-3.5">
            <div className="flex-1/6 mr-1 p-4">Column 1</div>
            <div className="flex-5/6 ml-1 rounded-lg bg-gray-200 p-4">
              Column 2
            </div>
          </div>
        </li>
      </motion.div>
    );
  }
}

function HiwCard({ priority }: { priority: number }) {
  return (
    <div className="relative">
      <div className=" absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform">
        <Item cardnum={0} priority={priority}></Item>
        <Item cardnum={1} priority={priority}></Item>
        <Item cardnum={2} priority={priority}></Item>
        <Item cardnum={3} priority={priority}></Item>
      </div>
    </div>
  );
}

export default HiwCard;
