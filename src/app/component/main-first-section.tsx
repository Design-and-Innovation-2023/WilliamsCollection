import { motion, useAnimation } from "framer-motion";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Button } from "@material-tailwind/react";

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
      id="main-first-section"
      className="flex flex-col justify-center items-center w-screen  h-screen mt-0 pb-40 mb-auto space-y-10  sm:space-y-10  md:space-y-10 lg:space-y-10 xl:space-y-10 2xl:space-y-10"
    >
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className=" w-5/12 md:w-3/12 2xl:w-2/12">
          <img
            src="/img/logo/main-wc-logo-notext.svg"
            className="object-cover"
          ></img>
        </div>

        <div className="w-10/12">
          <p className="text-white text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center">
            Explore the Marvels of the Museum with William's Collection!
          </p>
          <p className="text-white text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center">
            An immersive Quest Awaits
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button
          variant="text"
          className={`text-white text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg p-3 xl:p-6 2xl:p-6`}
          size="md"
          onClick={handleClick}
          color="white"
        >
          Explore Our Product
        </Button>{" "}
      </div>
    </motion.div>
  );
};

export default MainFirstSection;
