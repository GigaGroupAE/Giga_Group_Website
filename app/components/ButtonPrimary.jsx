import React from "react";

const ButtonPrimary = ({ title, handleOnClick }) => {
  return (
    <div
      onClick={handleOnClick}
      className="bg-secondary text-center  px-5 py-2 cursor-pointer rounded-md "
    >
      <h2 className="font-poppins font-semibold text-sm text-white">{title}</h2>
    </div>
  );
};

export default ButtonPrimary;
