import { motion, useAnimation } from "framer-motion";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Button from "react-bootstrap/Button";

const MainFirstSection: React.FC = () => {
  const controls = useAnimation();

  const handleClick = async () => {
    // Scroll to Section 3
    const productStartSectionElement =
      document.getElementById("product-section");
    if (productStartSectionElement) {
      await controls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });

      const handleScrollEnd = () => {
        controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
        productStartSectionElement.removeEventListener(
          "scroll",
          handleScrollEnd
        );
      };

      productStartSectionElement.scrollIntoView({ behavior: "smooth" });
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
      className="flex flex-col justify-center items-center h-screen w-screen mt-auto mb-auto space-y-16  sm:space-y-28  md:space-y-28 lg:space-y-16 xl:space-y-16 2xl:space-y-20"
    >
      <div className="w-5/12 md:w-3/12">
        <img src="/img/logo/main-wc-logo.svg" className="object-cover"></img>
      </div>

      <div className="w-3/4 md:w-3/4 2xl:w-4/12">
        <p className="text-white text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center">
          Enabling Interactive & Enriching experience for young visitors to
          collect virtual artefacts into personal collection when they visit The
          Hunterian Museum.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button
          variant="primary"
          className={`text-white text-sm sm:text-lg md:text-xl lg:text-lg xl:text-2xl 2xl:text-xl bg-amber-500 rounded-full p-3 xl:p-6 2xl:p-6`}
          size="lg"
          onClick={handleClick}
        >
          Click to see our product
        </Button>{" "}
      </div>
    </motion.div>
  );
};

export default MainFirstSection;
