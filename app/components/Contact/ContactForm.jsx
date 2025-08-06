'use client';
import React, { useState } from 'react';
import ButtonPrimary from '../ButtonPrimary';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
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
    <div className=" container mx-auto py-[100] ">
      <div className="md:w-4/6  w-4/5  mx-auto">
        <h2 className="text-center headingSeaction">
          Contact <b>Us</b>
        </h2>
        <p className="descriptionText text-center">Let us know how we may help you!</p>

        <form onSubmit={handleSubmit} className=" md:w-4/6 w-full mx-auto     space-y-4">
          <input
            name="fullName"
            id="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md z-50 relative  shadow-sm bg-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md z-50 relative shadow-sm bg-white outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md z-50 relative shadow-sm bg-white outline-none"
          />
          <textarea
            rows="3"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md z-50 relative shadow-sm bg-white outline-none"
          />

          <div className="md:flex block">
            <ButtonPrimary
              title={loading ? 'Submitting...' : 'Submit'}
              type="submit"
              disabled={loading}
            />
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactForm;
