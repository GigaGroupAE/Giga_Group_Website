import React from "react";

const ButtonSecondary = ({
  title,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-center bg-white border border-black px-6 py-2 cursor-pointer rounded-md font-poppins font-semibold text-sm transition duration-200 ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
      } ${className}`}
    >
      {title}
    </button>
  );
};

export default ButtonSecondary;
