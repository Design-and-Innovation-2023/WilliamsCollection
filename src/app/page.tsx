"use client";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import ProductComponent from "./component/product";
import OurJourneyStartSection from "./component/our-journey-start";
import MainFirstSection from "./component/main-first-section";
import OurJourneySection from "./component/our-journey-timeline";

export default function Home() {
  return (
    <div className="block justify-center item-center overflow-y-scroll h-screen">
      <MainFirstSection />
      <ProductComponent />
      <OurJourneyStartSection />
      <OurJourneySection />
    </div>
  );
}
