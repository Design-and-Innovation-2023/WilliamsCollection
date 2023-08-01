"use client";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import ProductComponent from "./component/product";
import OurJourneyStartSection from "./component/our-journey-start";
import MainFirstSection from "./component/main-first-section";
import OurJourneySection from "./component/our-journey-timeline";
import DesignIdeas from "./component/design-ideas";
import ProductCarouselComponent from "./component/product-carousel-component";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden">
        <div className="h-screen w-screen flex flex-wrap">
          <MainFirstSection />
          <ProductComponent />
          <ProductCarouselComponent />
          <DesignIdeas />
          <OurJourneyStartSection />
          <OurJourneySection />
        </div>
      </div>
    </main>
  );
}
