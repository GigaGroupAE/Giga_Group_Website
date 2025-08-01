import React from "react";

const ButtonPrimary = ({
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
      className={`bg-secondary text-white text-sm font-poppins font-semibold px-5 py-2 rounded-md transition duration-200 ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-600"
      } ${className}`}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
