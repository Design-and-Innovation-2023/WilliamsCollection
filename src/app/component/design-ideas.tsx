import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ProductCarousel from "./carousel";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const DesignIdeas: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const controls = useAnimation();

  const goPoster = async () => {
    // Scroll to Section 3
    const posterStartSectionElement = document.getElementById("poster-section");
    if (posterStartSectionElement) {
      await controls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });

      const handleScrollEnd = () => {
        controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
        posterStartSectionElement.removeEventListener(
          "scroll",
          handleScrollEnd
        );
      };

      posterStartSectionElement.scrollIntoView({ behavior: "smooth" });
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
      className="flex flex-col justify-center items-center w-screen h-screen mt-auto mb-auto space-y-8  sm:space-y-28  md:space-y-8"
      id="design-ideas-section"
    >
      <div
        className="flex flex-col justify-center 
      items-center w-11/12 sm:w-4/12 md:w-8/12 
      lg:w-9/12 flex justify-center items-center "
      >
        <Image
          src="/WilliamsCollection/img/mockup/design-idea-mockup.webp"
          className="object-cover w-10/12 md:w-9/12  xl:w-5/12"
          alt="designmockup"
          width={400}
          height={400}
        />

        <Image
          src="/WilliamsCollection/img/logo/design-idea.svg"
          className="object-cover   w-8/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-5/12  2xl:w-3/12 pt-5"
          alt="design-idea-logo"
          width={400}
          height={400}
        />
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
          className={`text-white text-sm sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-xl bg-amber-500 rounded-full p-3 xl:p-6 2xl:p-4`}
          size="md"
          onClick={handleOpen}
        >
          Zoom in on Storyboard
        </Button>{" "}
        <Button
          color="white"
          className={`text-white text-sm sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-xl bg-amber-500 rounded-full p-3 xl:p-6 2xl:p-4`}
          size="lg"
        >
          <Link href="https://www.figma.com/file/0Z1wbQ0pYOWU13dqEbbJcz/Untitled?type=design&node-id=18%3A2&mode=design&t=Va9JcGmi3LvZrBL6-1">
            Figma
          </Link>
        </Button>{" "}
        <Button
          color="white"
          className={`text-white text-sm sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-xl bg-amber-500 rounded-full p-3 xl:p-6 2xl:p-4`}
          size="md"
          onClick={goPoster}
        >
          See Our Poster
        </Button>{" "}
      </div>
      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogBody>
          <Image
            src="/WilliamsCollection/img/bug_game_idea.jpeg"
            alt="bug game idea"
            width={400}
            height={400}
          />
        </DialogBody>
      </Dialog>
    </motion.div>
  );
};

export default DesignIdeas;
