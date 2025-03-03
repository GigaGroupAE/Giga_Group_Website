import React from 'react'

const ContactUs = () => {
  return (
    <div className="  md:flex-row flex-col container  mx-auto md:py-[100] py-[70] space-y-5 md:space-y-0 px-6 md:px-0 md:space-x-[100px] flex ">
      <div className="flex  flex-col flex-2 space-y-4 ">
        <h3 className="font-poppins text-xl md:text-2xl text-TextandIcons">Contact Us</h3>
        <h4 className="font-poppins text-2xl md:text-3xl font-semibold text-TextandIcons">
          How Can We Assist You Today?
        </h4>
      </div>
      <div className="flex  flex-1">
        <p className="md:text-center text-sm text-TextandIcons font-poppins ">
          At Giga Group, delivering outstanding customer service is our
          priority. Whether you have questions about our developments, need
          support with your property, or want to learn more about our company,
          our dedicated team is here to assist you. Feel free to reach out using
          the contact details below, and we’ll make sure your inquiries are
          handled promptly and professionally. Let us help you take the next
          step toward your dream lifestyle.
        </p>
      </div>
    </div>
  );
}

export default ContactUs