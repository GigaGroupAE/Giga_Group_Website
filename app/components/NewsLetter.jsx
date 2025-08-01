"use client";
import { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name cannot be empty";
    if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Please enter a valid email address";

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      setName("");
      setEmail("");
    } else {
      setErrors(newErrors);
      setSubmitted(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-white via-[#fdfae9]  to-white py-20 md:px-6">
      <div className="container  px-8 mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-black mb-4">
            Stay Updated with <span className="font-extrabold">Giga Group</span>
          </h2>
          <p className="text-[#1E293B] text-base leading-relaxed max-w-md ">
            Subscribe to our newsletter and be the first to know about our
            latest projects, exclusive offers, and industry insights. Your
            gateway to premium real estate opportunities awaits!
          </p>
        </div>

        <div className="flex justify-center w-full ">
          <div className="w-full max-w-[700px] bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-10">
            <h3 className="text-2xl font-extrabold text-black mb-1">
              Newsletter Form
            </h3>
            <div className="h-[2px] w-20 bg-yellow-500 mb-6" />

            <form onSubmit={handleSubmit}>
              <div className="flex  justify-center  flex-col lg:flex-row items-center gap-4">
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-3 px-4 text-sm text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 ml-1">
                      *{errors.name}
                    </p>
                  )}
                </div>

                <div className="flex-1 w-full">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 px-4 text-sm text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 ml-1">
                      *{errors.email}
                    </p>
                  )}
                </div>

                <ButtonPrimary title="Subscribe" />
              </div>

              {submitted && (
                <p className="bg-green-100 text-green-700 px-4 py-2 rounded-md text-sm mt-4">
                  Thank you for subscribing! You’ll now receive the latest
                  updates from Giga Group right in your inbox.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
