import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function CustomNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const controls = useAnimation();
  const listOfSectionId = [
    "main-first-section",
    "product-section",
    "design-ideas-section",
    "poster-section",
    "meet-the-team-section",
    "journey-start-section",
  ];
  const goTo = async (rating: string) => {
    // Scroll to Section 3
    const element = document.getElementById(rating);
    if (element) {
      await controls.start({
        opacity: 0,
        transition: { duration: 0.3 },
      });

      const handleScrollEnd = () => {
        controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
        element.removeEventListener("scroll", handleScrollEnd);
      };

      element.scrollIntoView({ behavior: "smooth" });
      await controls.start({
        opacity: 1,
        transition: { duration: 5 },
      });
    }
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="opacity-100 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="#"
          onClick={(e: any) => goTo(listOfSectionId[1])}
          className="flex items-center text-amber-500"
        >
          Product
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="#"
          onClick={(e: any) => goTo(listOfSectionId[2])}
          className="flex items-center text-amber-500"
        >
          Our Design
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="#"
          onClick={(e: any) => goTo(listOfSectionId[3])}
          className="flex items-center text-amber-500"
        >
          Our Poster
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="#"
          onClick={(e: any) => goTo(listOfSectionId[4])}
          className="flex items-center text-amber-500"
        >
          Meet the Team
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="#"
          onClick={(e: any) => goTo(listOfSectionId[5])}
          className="flex items-center text-amber-500"
        >
          Our Journey
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/past-journey/dailies"
          className="flex items-center text-amber-500"
        >
          Dailies
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/past-journey/emailupdates"
          className="flex items-center text-amber-500"
        >
          Email Updates
        </Link>
      </Typography>
    </ul>
  );
  return (
    <Navbar
      blurred={false}
      color="transparent"
      className="mx-auto max-w-screen-xl px-6 py-3"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Image
          src="/WilliamsCollection/img/logo/main-wc-logo.svg"
          className="opacity-100 w-36 px-4"
          width={703}
          height={659}
          alt="main-wc-logo"
        />
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
}
