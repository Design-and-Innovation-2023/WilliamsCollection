import React, { useState } from "react";
import styles from "../page.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
const OurJourneyStartSection: React.FC = () => {
  const [scale, setScale] = useState(1);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
      id="journey-start-section"
      className="pt-10 w-screen h-screen flex flex-col justify-end items-center"
    >
      <motion.div
        // initial={{ scale: -5 }}
        // animate={{ scale: 1 }}
        // transition={{ delay: 1 }}
        className="flex flex-col justify-end items-center h-4/6 max-w-sm lg:max-w-lg 2xl:max-w-xl sm:mt-10 "
      >
        <Image
          src="/WilliamsCollection/img/logo/our-journey-logo.svg"
          className="object-cover w-3/4 lg:w-screen"
          alt="our-journey-logo"
          fill={true}
        />
      </motion.div>

      <div className="w-5 flex flex-col justify-end items-center h-2/6">
        <div className={`w-5 h-1/6 ${styles.line}`}></div>
      </div>
    </motion.div>
  );
};

export default OurJourneyStartSection;
