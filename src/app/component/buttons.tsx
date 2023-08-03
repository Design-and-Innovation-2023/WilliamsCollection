import { Button } from "@material-tailwind/react";
import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      variant="filled"
      className={`text-white text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg p-3 xl:p-3`}
      size="md"
      color="amber"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
