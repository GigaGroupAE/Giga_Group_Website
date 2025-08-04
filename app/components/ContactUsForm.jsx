// import React from 'react'

// const ContactUsForm = () => {
//   return (
//     <div className="bg-gray-300  py-24">
//       <div className="container mx-auto bg-indigo-100">
//         <div className="w-96">
//           <h2 className="subHeading ">
//             {" "}
//             <b>Invest in Tomorrow, </b> Live in Luxury
//           </h2>
//           <p className="descriptionText">
//             At Giga Group, we believe in creating more than just homes—we create
//             lifestyles that inspire. Pearl Bliss Residence is our latest
//             masterpiece, redefining modern living in Dubai with unmatched
//             quality and elegance.
//           </p>
//           <p className="descriptionText py-4" >
//             Every detail, from visionary architecture to flawless execution,
//             reflects our passion for excellence. Our team’s dedication ensures a
//             living experience that blends comfort, style, and future-focused
//             innovation. Make the choice to invest in a home that transforms your
//             tomorrow—reserve your unit today!
//           </p>
//         </div>
//         <div className=""></div>
//       </div>
//     </div>
//   );
// }

// export default ContactUsForm

import React from 'react';
import ButtonPrimary from './ButtonPrimary';

const ContactUsForm = () => {
  return (
    <section className="bg-gradient-to-b from-white via-[#fdfcea] to-[#fdfcea] py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="subHeading ">
            <b>Invest in Tomorrow, </b> Live in Luxury
          </h2>

          <p className="descriptionText">
            At Giga Group, we believe in creating more than just homes—we create lifestyles that
            inspire. Pearl Bliss Residence is our latest masterpiece, redefining modern living in
            Dubai with unmatched quality and elegance.
          </p>

          <p className="descriptionText py-4">
            Every detail, from visionary architecture to flawless execution, reflects our passion
            for excellence. Our team’s dedication ensures a living experience that blends comfort,
            style, and future-focused innovation. Make the choice to invest in a home that
            transforms your tomorrow—reserve your unit today!
          </p>
        </div>

        <div className=" p-6 sm:p-8 w-full">
          <h3 className="text-xl text-center md:text-2xl font-bold text-gray-900 mb-2">
            Contact <span className="font-semibold">Us</span>
          </h3>
          <p className="text-gray-600 text-center text-sm mb-6">Let us know how we may help you!</p>

          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 border-0 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-3"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 border-0 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-3"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border-0 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-2"
              />
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Type your message"
                className="w-full px-4 border-0 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-3"
              ></textarea>
            </div>
            <div>
              <ButtonPrimary title="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
