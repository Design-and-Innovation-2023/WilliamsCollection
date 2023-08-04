"use client";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import ProductComponent from "./component/product";
import OurJourneyStartSection from "./component/our-journey-start";
import MainFirstSection from "./component/main-first-section";
import OurJourneySection from "./component/our-journey-timeline";
import DesignIdeas from "./component/design-ideas";
import ProductCarouselComponent from "./component/product-carousel-component";
import PosterSection from "./component/poster-section";
import MeetTheTeam from "./component/meet-the-team";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { SimpleFooter } from "./component/footer";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";
import MeetTheTeamMember from "./component/meet-the-team-member";
import CustomNavbar from "./component/navbar";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden">
        <div className="h-screen w-screen flex flex-wrap">
          <CustomNavbar />
          <MainFirstSection />
          <ProductComponent />
          <ProductCarouselComponent />
          <DesignIdeas />
          <PosterSection />
          <MeetTheTeam />
          <MeetTheTeamMember />
          <OurJourneyStartSection />
          <OurJourneySection />
          <SimpleFooter />
        </div>
      </div>
    </main>
  );
}
