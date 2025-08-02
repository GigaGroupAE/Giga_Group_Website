"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonPrimary from "../ButtonPrimary";

export default function HeroInputForm({ title }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    project: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vhg5z4w",
        "template_rbumtof",
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          project: formData.project,
        },
        "NSfDaAmK37KYylceo"
      )
      .then(() => {
        setStatus({ type: "success", message: "Form submitted successfully!" });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          project: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <div className="w-full max-w-[480px] bg-white/30 backdrop-blur-[16px] border border-white/40 shadow-2xl rounded-[25px] p-6 md:p-8 text-left">
      {title && (
        <h3 className="text-TextandIcons text-center text-xl md:text-2xl font-bold mb-4">
          {title}
        </h3>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label
            htmlFor="fullName"
            className="text-sm font-semibold text-white mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            className="p-3  outline-none rounded-md border border-gray-300 text-gray-800"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="p-3 outline-none rounded-md border border-gray-300 text-gray-800"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 outline-none rounded-md border border-gray-300 text-gray-800"
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="p-3 outline-none rounded-md border border-gray-300 text-gray-800"
          required
        />

        <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="p-3 outline-none rounded-md border border-gray-300 text-gray-800"
          required
        >
          <option value="">Select Project</option>
          <option value="giga-group">GIGA Group</option>
          <option value="al-ghurair-giga">Al Ghurair Giga</option>
          <option value="goldcrest-views">Goldcrest Views</option>
          <option value="giga-mall">GIGA Mall</option>
          <option value="giga-business-complex">Giga Business Complex</option>
          <option value="goldcrest-highlife">Goldcrest Highlife</option>
          <option value="goldcrest-commercial">Goldcrest Commercial</option>
          <option value="giga-mall-extension">GIGA Mall Extension</option>
          <option value="central-palace-residence">
            Central Palace Residence
          </option>
        </select>

        <ButtonPrimary title="Submit" type="submit" />

        {status.message && (
          <p
            className={`text-sm mt-2 ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
