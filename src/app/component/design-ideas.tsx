import React, { useRef } from "react";
import { motion } from "framer-motion";
import ProductCarousel from "./carousel";
import Link from "next/link";

const DesignIdeas: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-center items-center "
      id="product-section"
    >
      <div className=" w-5/6 md:3/6 lg:2/6">
        <img
          src="/img/phone-webapp/product-showcase.png"
          className="object-cover"
        ></img>
        s
      </div>
      <div className="w-2/6  sm:3/6 md:2/6 lg:1/6">
        <img src="/img/product-section-logo.svg" className="object-cover"></img>
      </div>
      <div className=" w-5/6 mt-5 mb-5">
        <h2 className="text-white text-sm sm:text-l md:text-xl text-center">
          An interactive and enriching experience for young visitors to collect
          virtual artefact into their personal collection when they visit The
          Hunterian Museum.{" "}
        </h2>
      </div>
      <div className="w-4/6 flex flex-col justify-center items-center">
        <button
          className="rounded-full text-white bg-amber-500 p-5 font-bold text-base md:text-lg lg:text-xl sm:text-md"
          // onClick={handleClick}
        >
          {" "}
          View More About our Product
        </button>
        <Link
          className="text-white p-5 font-bold text-base text-center"
          // onClick={handleClick}
          href="http://junwei9955.pythonanywhere.com"
        >
          {" "}
          Go to Game
        </Link>
        <p className="text-white p-1 font-bold text-sm text-center">
          {" "}
          Play this in a mobile for the fullest experience
        </p>
        <p className=" text-white p-2 font-bold text-sm text-center">
          {" "}
          Scroll down for our Design Idea{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default DesignIdeas;
