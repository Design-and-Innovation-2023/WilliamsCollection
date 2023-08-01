"use client";
import styles from "./page.module.css";
import "react-vertical-timeline-component/style.min.css";
import { motion, Variants, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import TimelineJourneyComponent from "./component/journey-timeline";
import { useInView } from "react-intersection-observer";
import ProductComponent from "./component/product";
const OurJourneyStartSection: React.FC = () => {
  const [scale, setScale] = useState(1);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
      id="journey-start-section"
      className="pt-10 h-screen flex flex-col justify-end items-center"
    >
      <motion.div
        // initial={{ scale: -5 }}
        // animate={{ scale: 1 }}
        // transition={{ delay: 1 }}
        className="flex flex-col justify-end items-center h-4/6 max-w-sm lg:max-w-lg 2xl:max-w-xl sm:mt-10 "
      >
        <img
          src="/img/logo1.png"
          className="object-cover w-3/4 lg:w-full"
        ></img>
      </motion.div>

      <div className="w-5 flex flex-col justify-end items-center h-2/6">
        <div className={`w-5 h-1/6 ${styles.line}`}></div>
      </div>
    </motion.div>
  );
};

const OurJourneySection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="section3"
      className="mr-5"
    >
      <TimelineJourneyComponent />
    </motion.div>
  );
};

const MainPage: React.FC = () => {
  const controls = useAnimation();

  const handleClick = async () => {
    // Scroll to Section 3
    const journeyStartSectionElement = document.getElementById(
      "journey-start-section"
    );
    if (journeyStartSectionElement) {
      await controls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });

      // const handleScrollEnd = () => {
      //   controls.start({
      //     opacity: 1,
      //     transition: { duration: 0.3 },
      //   });
      //   journeyStartSectionElement.removeEventListener(
      //     "scroll",
      //     handleScrollEnd
      //   );
      // };

      journeyStartSectionElement.scrollIntoView({ behavior: "smooth" });
      await controls.start({
        opacity: 1,
        transition: { duration: 5 },
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={controls}
      exit={{ opacity: 1 }}
      className="pt-10 h-screen flex flex-col justify-center items-center"
    >
      <div className={`w-2/4`}>
        <img
          src="/img/mainweblogo.webp"
          className="object-cover w-1/4 lg:w-full"
        ></img>
      </div>

      <div className="pt-20">
        <button
          className="rounded-full text-white bg-amber-500 p-5 font-bold"
          // onClick={handleClick}
        >
          {" "}
          Learn About Our Journey
        </button>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="block justify-center item-center overflow-y-scroll h-screen">
      <MainPage />
      <ProductComponent />
      <OurJourneyStartSection />
      <OurJourneySection />
    </div>
  );
}
