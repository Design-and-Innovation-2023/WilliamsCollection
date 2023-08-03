import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ProductCarousel from "./carousel";
import Link from "next/link";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

const ProductCarouselComponent: React.FC = () => {
  const controls = useAnimation();

  const handleClick = async () => {
    // Scroll to Section 3
    const diStartSectionElement = document.getElementById(
      "design-ideas-section"
    );
    if (diStartSectionElement) {
      await controls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });

      const handleScrollEnd = () => {
        controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
        diStartSectionElement.removeEventListener("scroll", handleScrollEnd);
      };

      diStartSectionElement.scrollIntoView({ behavior: "smooth" });
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
      className="flex flex-col justify-center items-center w-screen h-screen mt-auto mb-auto"
      id="product-moreinfo-section"
    >
      <div className="flex flex-col justify-center items-center space-y-6">
        <p className="text-white text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center">
          {" "}
          Swipe left / right{" "}
        </p>
        <ProductCarousel />
        <div className="flex flex-col justify-center items-center space-x-4 space-y-6">
          <Link
            href="http://junwei9955.pythonanywhere.com"
            className="flex flex-col justify-center items-center space-x-4"
          >
            <Image
              src="/WilliamsCollection/img/gamewebsite-qrcode.svg"
              className="w-32"
              alt="website qrcode"
              width={400}
              height={400}
            />
          </Link>{" "}
          <Button
            variant="filled"
            className={`text-white text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg p-3 xl:p-3`}
            size="md"
            color="amber"
            onClick={handleClick}
          >
            Explore Design Ideas
          </Button>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCarouselComponent;
