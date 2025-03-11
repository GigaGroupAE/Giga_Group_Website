import React from "react";

const ButtonSecandary = ({ title }) => {
  return (
    <div className=" text-center bg-white   border border-black px-6 py-2 cursor-pointer rounded-md ">
      <h2 className="font-poppins font-semibold  text-sm ">{title}</h2>
    </div>
  );
};

export default ButtonSecandary;
