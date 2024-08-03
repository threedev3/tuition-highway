import React from "react";

const CustomButton = ({ text }) => {
  return (
    <button className="bg-orangeHeading py-2 px-6 text-white rounded-full sm:text-base text-sm">
      {text}
    </button>
  );
};

export default CustomButton;
