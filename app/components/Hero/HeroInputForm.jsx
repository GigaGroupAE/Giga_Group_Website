"use client";
import React, { useState } from "react";
import ButtonPrimary from "../ButtonPrimary";

export default function HeroInputForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    project: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="w-full max-w-[480px] bg-white/30 backdrop-blur-[16px] border border-white/40 shadow-2xl rounded-[25px] p-6 md:p-8 text-left ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="p-3 rounded-md border border-white text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300 text-gray-800"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300 text-gray-800"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300 text-gray-800"
          required
        />
        <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300 text-gray-800"
          required
        >
          <option value="">Select Project</option>
          <option value="project1">Project 1</option>
          <option value="project2">Project 2</option>
        </select>
        <ButtonPrimary title="Submit" />
      </form>
    </div>
  );
}
