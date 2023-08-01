import React, { useRef } from "react";

const ProductComponent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
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
        <p className="text-white">
          Our Product let's you have a interative experience at the hunterian
          museum. Allowing you or your children to easily learn more about the
          musuem{" "}
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default ProductComponent;
