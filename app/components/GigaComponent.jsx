import React from "react";

const GigaComponent = ({title}) => {
  return (
    <div className="flex items-center gap-2  ">
      <h1 className="text-placeholderText text-sm font-poppins">
        {title ? title : "Giga "}
      </h1>

      <div className="bg-secondary  w-[110px] h-0.5"></div>
    </div>
  );
};

export default GigaComponent;
