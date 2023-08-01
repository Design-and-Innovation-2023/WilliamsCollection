import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import ProductCarousel from "./carousel";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const ProductCarouselComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-center items-center w-screen h-screen mt-auto mb-auto"
      id="product-moreinfo-section"
    >
      <div className="flex flex-col justify-center items-center space-y-16  sm:space-y-28  md:space-y-28 lg:space-y-16 xl:space-y-16 2xl:space-y-20">
        <p className="text-white text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center">
          {" "}
          Swipe left / right{" "}
        </p>
        <ProductCarousel />
        <Link
          href="http://junwei9955.pythonanywhere.com"
          className={`text-white text-sm sm:text-lg md:text-xl lg:text-lg xl:text-2xl 2xl:text-xl bg-amber-500 rounded-full p-3 xl:p-6 2xl:p-6`}
        >
          Go to game
        </Link>{" "}
      </div>
    </motion.div>
  );
};

export default ProductCarouselComponent;
