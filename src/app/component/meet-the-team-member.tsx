import React, { useRef } from "react";
import { motion } from "framer-motion";
import ProductCarousel from "./carousel";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";

const MeetTheTeamMember: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col justify-center items-center w-screen h-fit sm:h-screen mr-auto ml-auto mt-auto mb-auto space-y-16 sm:space-y-28  md:space-y-8"
      id="meet-the-member-section"
    >
      <div className="grid gap-12 items-center md:grid-cols-3">
        <div className="space-y-4 text-center">
          <Image
            className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-48 lg:h-48"
            src="/img/team/IzzDanial.jpeg"
            alt="woman"
            loading="lazy"
            width="1000"
            height="667"
          />
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <h4 className="text-lg xl:text-2xl text-white">Izz Danial</h4>
            <Link href="https://www.linkedin.com/in/izzdanial/">
              <IconButton>
                <Image src="/img/logo/linkedin.svg" alt="linkedin logo" />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="space-y-4 text-center">
          <Image
            className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-48 lg:h-48"
            src="/img/team/Nadiah.jpeg"
            alt="man"
            loading="lazy"
            width="1000"
            height="667"
          />
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <h4 className="text-lg xl:text-2xl text-white">Nur Farah Nadiah</h4>
            <Link href="https://www.linkedin.com/in/farah-nadiah">
              <IconButton>
                <Image src="/img/logo/linkedin.svg" alt="linkedin logo" />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="space-y-4 text-center">
          <Image
            className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-48 lg:h-48"
            src="/img/team/Wujie.jpeg"
            alt="woman"
            loading="lazy"
            width="1000"
            height="667"
          />
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <h4 className="text-lg xl:text-2xl text-white">Chen Wu Jie</h4>
            <Link href="https://www.linkedin.com/in/wujie-chen-20b88422a">
              <IconButton>
                <Image src="/img/logo/linkedin.svg" alt="linkedin logo" />
              </IconButton>
            </Link>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <Image
            className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-48 lg:h-48"
            src="/img/team/JunWei.jpeg"
            alt="woman"
            loading="lazy"
            width="1000"
            height="667"
          />
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <h4 className="text-lg xl:text-2xl text-white">Lim Jun Wei</h4>
            <Link href="https://www.linkedin.com/in/junwei10255">
              <IconButton>
                <Image src="/img/logo/linkedin.svg" alt="linkedin logo" />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="space-y-4 text-center">
          <Image
            className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-48 lg:h-48"
            src="/img/team/Lionel.jpeg"
            alt="woman"
            loading="lazy"
            width="1000"
            height="667"
          />
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <h4 className="text-lg xl:text-2xl text-white">Lionel Chew</h4>
            <Link href="https://www.linkedin.com/in/ccklionel">
              <IconButton>
                <Image src="/img/logo/linkedin.svg" alt="linkedin logo" />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="space-y-4 text-center">
          <Image
            className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-48 lg:h-48"
            src="/img/team/ky.jpg"
            alt="woman"
            loading="lazy"
            width="1000"
            height="667"
          />
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <h4 className="text-lg xl:text-2xl text-white">Lim Kei Yiang</h4>
            <Link href="https://www.linkedin.com/in/keiyianglim/">
              <IconButton>
                <Image src="/img/logo/linkedin.svg" alt="linkedin logo" />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-white"> Scroll down to see our Journey</p>
    </motion.div>
  );
};

export default MeetTheTeamMember;
