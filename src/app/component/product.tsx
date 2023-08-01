import React, { useRef } from "react";

const ProductComponent: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      id="product-section"
    >
      <div className="w-2/6">
        <img
          src="/img/phone-webapp/product-showcase.png"
          className="object-cover w-1/4 lg:w-full"
        ></img>
      </div>
      <div className="w-1/4">
        <img
          src="/img/product-section-logo.svg"
          className="object-cover w-1/4 lg:w-full"
        ></img>
      </div>
      <div>
        <h2 className="text-white">
          An interactive and enriching experience for young visitors to collect
          virtual artefact into their personal collection when they visit The
          Hunterian Museum.{" "}
        </h2>
      </div>

      <div></div>
    </div>
  );
};

export default ProductComponent;
