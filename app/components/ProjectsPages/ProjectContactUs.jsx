'use client';

import React, { useState } from 'react';
import ButtonPrimary from '../ButtonPrimary';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ProjectContactUs = ({ contactUsdec, contactUsTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      await emailjs.send(
        'service_658s2ke',
        'template_m3ogp4t',
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'ck9DNObPZvF0mqOZp'
      );

      toast.success(
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-green-600" />
          <span>
            Thank you for your inquiry. We have received your details, and one of our sales
            representatives will follow up with you shortly.
          </span>
        </div>,
        {
          position: 'bottom-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        }
      );
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        project: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error(
        <div className="flex items-center gap-2">
          <FaTimesCircle className="text-red-600" />
          <span>
            We encountered an error while submitting your request. Please try again or contact us
            directly for assistance.
          </span>
        </div>,
        {
          position: 'top-right',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        }
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-gradient-to-b from-white via-[#fdfcea] to-[#fdfcea] py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {contactUsTitle}
          </h2>
          <p className="mt-6 text-gray-600 text-base leading-relaxed">{contactUsdec}</p>
        </div>

        <div className=" p-6 sm:p-8 w-full">
          <h3 className="text-xl text-center md:text-2xl font-bold text-gray-900 mb-2">
            Contact <span className="font-semibold">Us</span>
          </h3>
          <p className="text-gray-600 text-center text-sm mb-6">Let us know how we may help you!</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 border-0 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-3"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 border-0 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-3"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-0 px-4 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-2"
              />
            </div>
            <div>
              <textarea
                rows="3"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full  border-0  px-4 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-3"
              ></textarea>
            </div>
            <div>
              <ButtonPrimary
                title={loading ? 'Submitting...' : 'Submit'}
                type="submit"
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ProjectContactUs;
