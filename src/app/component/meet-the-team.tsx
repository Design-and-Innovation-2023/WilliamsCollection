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

const MeetTheTeam: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const controls = useAnimation();

  const goMeetTeam = async () => {
    // Scroll to Section 3
    const posterStartSectionElement = document.getElementById(
      "meet-the-member-section"
    );
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
      className="flex flex-col justify-center items-center w-screen h-screen mt-auto mb-auto space-y-16  sm:space-y-28  md:space-y-8"
      id="meet-the-team-section"
    >
      <div
        className="flex flex-col justify-center 
      items-center w-10/12 sm:w-4/12 md:w-7/12 
      lg:w-9/12 flex justify-center items-center "
      >
        <Image
          src="/img/logo/meet-the-team.svg"
          className="object-cover w-10/12 md:w-9/12  xl:w-4/12"
          alt="meet-the-team"
          fill={true}
        />
      </div>
      <div
        className="flex flex-col justify-center 
      items-center w-11/12 sm:w-4/12 md:w-8/12 
      lg:w-9/12 flex justify-center items-center"
      >
        <Image
          src="/img/team/GrpPhoto.jpeg"
          className="object-cover w-10/12 md:w-9/12  xl:w-5/12"
          alt="team-photo"
          fill={true}
        />
      </div>
      <div className=" w-5/6 2xl:w-3/6 mr-auto ml-auto">
        <p className="text-white text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-center">
          Our team's tenacity and seamless collaboration defied all challenges,
          leading us triumphantly to the project's successful culmination{" "}
        </p>
      </div>
      <div className="flex  justify-center items-center space-x-4">
        <Button
          color="white"
          className={`text-white text-sm sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-xl bg-amber-500 rounded-full p-3 xl:p-6 2xl:p-4`}
          size="md"
          onClick={goMeetTeam}
        >
          Meet the Member
        </Button>{" "}
      </div>
    </motion.div>
  );
};

export default MeetTheTeam;
