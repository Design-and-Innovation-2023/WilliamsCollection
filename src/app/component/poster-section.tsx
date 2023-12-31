import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ProductCarousel from "./carousel";
import Link from "next/link";
import Image from "next/image";
import type { DialogBodyStylesType } from "@material-tailwind/react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const PosterSection: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const controls = useAnimation();

  const goMeetTeam = async () => {
    // Scroll to Section 3
    const meetTeamSectionElement = document.getElementById(
      "meet-the-team-section"
    );
    if (meetTeamSectionElement) {
      await controls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });

      const handleScrollEnd = () => {
        controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
        meetTeamSectionElement.removeEventListener("scroll", handleScrollEnd);
      };

      meetTeamSectionElement.scrollIntoView({ behavior: "smooth" });
      await controls.start({
        opacity: 1,
        transition: { duration: 5 },
      });
    }
  };
  const handleOpen = () => setOpen(!open);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-center items-center w-screen h-screen mt-auto mb-auto space-y-16  sm:space-y-6 "
      id="poster-section"
    >
      <div
        className="flex flex-col justify-center 
      items-center w-11/12 sm:w-4/12 md:w-8/12 
      lg:w-9/12 flex justify-center items-center "
      >
        <Image
          src="/WilliamsCollection/img/mockup/poster-withholder.png"
          className="object-cover w-5/12 md:w-5/12  xl:w-3/12"
          onClick={handleOpen}
          alt="poster"
          width={400}
          height={400}
        />

        <Image
          src="/WilliamsCollection/img/logo/poster-logo.svg"
          className="object-cover w-5/12 md:w-5/12  xl:w-2/12  "
          alt="poster-logo"
          width={400}
          height={400}
        />
      </div>
      <div className=" w-5/6 2xl:w-3/6 mr-auto ml-auto">
        <p className="text-white text-md text-center">
          Unveil brielliance at our exhibition poster - a gateway to boundless
          inspiration{" "}
        </p>
      </div>

      <div className="flex  justify-center items-center space-x-4">
        <Button
          variant="filled"
          className={`text-white text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg p-3 xl:p-3`}
          size="md"
          color="amber"
          onClick={goMeetTeam}
        >
          Meet the Team
        </Button>{" "}
      </div>
      <Dialog open={open} handler={handleOpen} size="sm">
        <DialogBody className="bg-transparent">
          <Image
            className="h-fit w-full object-contain object-center"
            src="/WilliamsCollection/img/mockup/poster-noframe.png"
            alt="poster no frame"
            width={400}
            height={400}
          />
        </DialogBody>
      </Dialog>
    </motion.div>
  );
};

export default PosterSection;
