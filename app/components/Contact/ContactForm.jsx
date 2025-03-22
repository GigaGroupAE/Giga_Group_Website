import React from 'react'
import ButtonPrimary from '../ButtonPrimary';

const ContactForm = () => {
  return (
    <div className=" container mx-auto py-[100] ">

      <div className="md:w-4/6  w-4/5  mx-auto">
        <h2 className="text-center headingSeaction">
          Contact <b>Us</b>
        </h2>
        <p className="descriptionText text-center">
          Let us know how we may help you!
        </p>

        {/* Input Forms  */}

        <form action="" className=" md:w-4/6 w-full mx-auto     space-y-4">
          <input
            placeholder="Name"
            className="w-full px-3 py-2 rounded-md z-50 relative  shadow-sm bg-white outline-none"
          />
          <input
            placeholder="Email Address"
            className="w-full px-3 py-2 rounded-md z-50 relative shadow-sm bg-white outline-none"
          />
          <input
            placeholder="Phone Number"
            className="w-full px-3 py-2 rounded-md z-50 relative shadow-sm bg-white outline-none"
          />
          <textarea
            placeholder="Type your message"
            rows="5"
            className="w-full px-3 py-2 rounded-md z-50 relative shadow-sm bg-white outline-none"
          />

          <div className="md:flex block">
            <ButtonPrimary title="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm