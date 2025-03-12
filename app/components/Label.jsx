import React from "react";

const Label = ({ title }) => {
  return (
    <div className="bg-[#EEECBE] flex px-5 rounded-full ">
      <h2 className="font-poppins text-TextandIcons text-sm">{title}</h2>
    </div>
  );
};

export default Label;
