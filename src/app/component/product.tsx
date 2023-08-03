import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ProductCarousel from "./carousel";
import Link from "next/link";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

const ProductComponent: React.FC = () => {
  const controls = useAnimation();

  const handleClick = async () => {
    // Scroll to Section 3
    const moreinfoElement = document.getElementById("product-moreinfo-section");
    if (moreinfoElement) {
      await controls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });

      const handleScrollEnd = () => {
        controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
        moreinfoElement.removeEventListener("scroll", handleScrollEnd);
      };

      moreinfoElement.scrollIntoView({ behavior: "smooth" });
      await controls.start({
        opacity: 1,
        transition: { duration: 5 },
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-center items-center w-screen h-screen mt-0 mb-auto space-y-16  sm:space-y-28  md:space-y-8 "
      id="product-section"
    >
      <div
        className="flex flex-col justify-center 
      items-center w-11/12 sm:w-4/12 md:w-8/12 
      lg:w-7/12 flex justify-center items-center "
      >
        <Image
          src="/img/phone-webapp/product-showcase.png"
          className="object-cover w-10/12 md:w-8/12 lg:w-7/12 xl:w-5/12"
          alt="product showcase"
        />

        <Image
          src="imgproduct-section-logo.svg"
          className="object-cover  w-8/12 sm:w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12"
          alt="product-section-logo"
        />
      </div>
      <div className=" w-5/6 2xl:w-3/6 mr-auto ml-auto">
        <p className="text-white text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center">
          An interactive and enriching experience for young visitors to collect
          virtual artefact into their personal collection when they visit The
          Hunterian Museum.{" "}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Button
          className={`text-white text-sm sm:text-lg md:text-xl lg:text-lg xl:text-2xl 2xl:text-xl bg-amber-500 rounded-full p-3 xl:p-6 2xl:p-6`}
          size="lg"
          onClick={handleClick}
        >
          Show More
        </Button>{" "}
      </div>
    </motion.div>
  );
};

export default ProductComponent;
