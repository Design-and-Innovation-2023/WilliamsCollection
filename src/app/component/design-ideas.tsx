import React, { useRef } from "react";
import { motion } from "framer-motion";
import ProductCarousel from "./carousel";
import Link from "next/link";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const DesignIdeas: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-center items-center w-screen h-screen mt-auto mb-auto space-y-16  sm:space-y-28  md:space-y-28 lg:space-y-16 xl:space-y-16 2xl:space-y-10"
      id="design-ideas-section"
    >
      <div
        className="flex flex-col justify-center 
      items-center w-11/12 sm:w-4/12 md:w-8/12 
      lg:w-9/12 flex justify-center items-center "
      >
        <img
          src="/img/mockup/design-idea-mockup.webp"
          className="object-cover w-10/12 md:w-9/12  xl:w-5/12"
        ></img>

        <img
          src="/img/logo/design-idea.svg"
          className="object-cover   w-8/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-5/12  2xl:w-3/12 pt-5"
        ></img>
      </div>
      <div className=" w-5/6 2xl:w-3/6 mr-auto ml-auto">
        <p className="text-white text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center">
          "The Power of Design Thinking: From Ideas to Figma Realisation" -
          Witness the application of design thinking principles as we transform
          initial concepts into tangible hi-fi prototypes, with Figma serving as
          the ultimate platform for realisation.{" "}
        </p>
      </div>

      <div className="flex  justify-center items-center space-x-4">
        <Button
          color="white"
          className={`text-white text-sm sm:text-lg md:text-xl lg:text-lg xl:text-2xl 2xl:text-xl bg-amber-500 rounded-full p-3 xl:p-6 2xl:p-6`}
          size="md"
          onClick={handleOpen}
        >
          Zoom in on Storyboard
        </Button>{" "}
        <Button
          color="white"
          className={`text-white text-sm sm:text-lg md:text-xl lg:text-lg xl:text-2xl 2xl:text-xl bg-amber-500 rounded-full p-3 xl:p-6 2xl:p-6`}
          size="lg"
          // onClick={handleClick}
        >
          Figma
        </Button>{" "}
      </div>
      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogBody>
          <img src="/img/bug_game_idea.jpeg" />
        </DialogBody>
      </Dialog>
    </motion.div>
  );
};

export default DesignIdeas;
