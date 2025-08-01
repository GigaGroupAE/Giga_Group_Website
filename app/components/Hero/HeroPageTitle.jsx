"use client";
import React from "react";

export default function HeroPageTitle({ title }) {
  return (
    <div className=" bottom-10    mt-10 z-10">
      <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight drop-shadow-md">
        {title}
      </h1>
    </div>
  );
}
