'use client'; // Necessary for Next.js

import { useState } from 'react';
import ButtonPrimary from './ButtonPrimary';
import { toast, ToastContainer } from 'react-toastify'; // Importing toastify for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS
import emailjs from '@emailjs/browser';

export default function Newsletter() {
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [errors, setErrors] = useState({}); // Error state
  const [submitted, setSubmitted] = useState(false); // To handle form submission status

  const handleSubmit = async e => {
    e.preventDefault();

    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please provide a valid email address';

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      setSubmitted(true);
      setLoading(true);

      try {
        const response = await emailjs.send(
          'service_658s2ke',
          'template_p8iwpoc',
          {
            fullName,
            email,
          },
          'ck9DNObPZvF0mqOZp'
        );

        if (response.status === 200) {
          toast.success(
            'Thank you for subscribing! You will receive the latest updates from Giga Group right in your inbox.',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
            }
          );
          setfullName('');
          setEmail('');
        } else {
          toast.error('There was an issue with your subscription. Please try again later.', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
          });
        }
      } catch (error) {
        toast.error('Network error. Please try again later.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
        });
      } finally {
        setLoading(false);
        setSubmitted(false);
      }
    } else {
      setErrors(newErrors);
      setSubmitted(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-white via-[#fdfae9] to-white py-20 md:px-6">
      <div className="container px-8 mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-black mb-4">
            Stay Updated with <span className="font-extrabold">Giga Group</span>
          </h2>
          <p className="text-[#1E293B] text-base leading-relaxed max-w-md">
            Subscribe to our newsletter to stay updated on the latest projects, exclusive offers,
            and insightful real estate news. Your gateway to premium opportunities awaits!
          </p>
        </div>

        <div className="flex justify-center w-full ">
          <div className="w-full max-w-[700px] bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-10">
            <h3 className="text-2xl font-extrabold text-black mb-1">Newsletter Form</h3>
            <div className="h-[2px] w-20 bg-yellow-500 mb-6" />

            <form onSubmit={handleSubmit}>
              <div className="flex justify-center flex-col lg:flex-row items-center gap-4">
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={e => setfullName(e.target.value)}
                    className="w-full py-3 px-4 text-sm text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">*{errors.name}</p>}
                </div>

                <div className="flex-1 w-full">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full py-3 px-4 text-sm text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 ml-1">*{errors.email}</p>
                  )}
                </div>

                <ButtonPrimary
                  onClick={handleSubmit}
                  title={loading ? 'Submitting...' : 'Subscribe'}
                  disabled={loading}
                />
              </div>
            </form>

            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
