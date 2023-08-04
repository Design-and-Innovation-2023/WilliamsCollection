import { motion, useAnimation } from "framer-motion";
import React from "react";
import Image from "next/image";
import CustomButton from "./buttons";
import ReactPlayer from "react-player";
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
        <div className=" w-screen flex justify-center items-center space-x-4">
          <Image
            src="/WilliamsCollection/img/mockup/gameqr.png"
            width={100}
            height={300}
            alt="gameqr"
          />
          <ReactPlayer
            url="https://youtu.be/yZW9wJyQTpw"
            width="fit-content"
            height="100%"
            controls={true}
            playing={true}
            pip={true}
          />
        </div>

        <div className="w-11/12">
          <p className="text-white text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center">
            Explore the Marvels of the Museum with William's Collection!
          </p>
          <p className="text-white text-sm sm:text-lg md:text-lg text-center">
            An immersive Quest Awaits
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <CustomButton onClick={handleClick}> Explore Our Product</CustomButton>
      </div>
    </motion.div>
  );
};

export default MainFirstSection;
