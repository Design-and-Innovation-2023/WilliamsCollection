import { motion, useAnimation } from "framer-motion";
import React from "react";

const MainFirstSection: React.FC = () => {
  const controls = useAnimation();

  const handleClick = async () => {
    // Scroll to Section 3
    const journeyStartSectionElement =
      document.getElementById("product-section");
    if (journeyStartSectionElement) {
      await controls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });

      const handleScrollEnd = () => {
        controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
        journeyStartSectionElement.removeEventListener(
          "scroll",
          handleScrollEnd
        );
      };

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
      <div className={`w-1/4`}>
        <img
          src="/img/logo/main-wc-logo.svg"
          className="object-cover w-1/4 lg:w-full"
        ></img>
      </div>

      <div className="pt-20">
        <button
          className="rounded-full text-white bg-amber-500 p-5 font-bold"
          onClick={handleClick}
        >
          {" "}
          Learn About Our Journey
        </button>
      </div>
    </motion.div>
  );
};

export default MainFirstSection;
