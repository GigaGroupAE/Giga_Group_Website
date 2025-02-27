import React from "react";

const ButtonPrimary = ({ title }) => {
  return (
    <div className="bg-secondary text-center  px-4 py-2 cursor-pointer rounded-md ">
      <h2 className="font-poppins text-sm text-white">{title}</h2>
    </div>
  );
};

export default ButtonPrimary;
