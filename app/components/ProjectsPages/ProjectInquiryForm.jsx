'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import ButtonPrimary from '../ButtonPrimary';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function ProjectInquiryForm({ title, projectData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    profession: '',
    message: '',
    city: '',
    project: projectData.name,
    selectedOption: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    selectedOption: try {
      await emailjs.send(
        'service_658s2ke',
        'template_m3ogp4t',
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          project: formData.selectedOption,
          profession: formData.profession,
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
        project: projectData.name,
        selectedOption: '',
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
    <div className="w-full max-w-[480px] bg-white/30 backdrop-blur-[16px] border border-white/40 shadow-2xl rounded-[25px] p-6 md:p-8 text-left">
      {title && (
        <h3 className="text-TextandIcons text-center text-xl md:text-2xl font-bold mb-4">
          {title}
        </h3>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Full Name"
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
          name="profession"
          placeholder="Profession"
          value={formData.profession}
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
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleChange}
          className="p-3 outline-none uppercase rounded-md border border-gray-300 text-gray-800"
          required
        >
          <option value="">Select an Option</option>
          {projectData?.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <textarea
          type="text"
          rows="2"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 outline-none rounded-md border border-gray-300 text-gray-800"
          required
        />

        <ButtonPrimary
          title={loading ? 'Submitting...' : 'Submit'}
          type="submit"
          disabled={loading}
        />

        {status.message && (
          <p
            className={`text-sm mt-2 ${
              status.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status.message}
          </p>
        )}
      </form>

      <ToastContainer />
    </div>
  );
}
