"use client";
import React from "react";
import ButtonPrimary from "../ButtonPrimary";

export default function HeroCard({
  badgeText,
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="w-full max-w-[480px] bg-white/55 backdrop-blur-[16px] border border-white/40 shadow-2xl rounded-[25px] p-6 md:p-8 text-left ">
      {badgeText && (
        <div className="mb-4">
          <span className="bg-[#E5F2B6] text-[#7A9416] text-sm font-medium px-4 py-1 rounded-full inline-block">
            {badgeText}
          </span>
        </div>
      )}

      <h1 className="text-[28px] md:text-[32px] text-[#1F2937] font-semibold leading-tight mb-4">
        {title}{" "}
        {subtitle && (
          <span className="font-normal text-[#1F2937]">{subtitle}</span>
        )}
      </h1>

      <p className="text-[14px] md:text-[16px] text-[#4B5563] leading-relaxed mb-6">
        {description}
      </p>

      {buttonText && (
        <ButtonPrimary onClick={onButtonClick} title={buttonText} />
      )}
    </div>
  );
}
