import React from 'react';
import ContactUs from '../components/Contact/ContactUs';
import Image from 'next/image';
import cover from '../../public/contact-bg.webp';
import ContactForm from '../components/Contact/ContactForm';
import FrequentlyQA from '../components/HomeComponents/FrequentlyQA';
import map from '../../public/aboutMap.svg';
import WhyChoiceProject from '../components/WhyChoiceProject';

const page = () => {
  return (
    <main className="   ">
      <div className="">
        <Image src={cover} alt="Contact-us" className="w-full md:h-[650] h-[300] object-cover" />
      </div>

      <ContactUs />
      <div className="bg-secondary  blur-[200px]  h-[22rem] w-[30rem] md:ml-96  2xl:ml-[70rem] mt-96 -z-40  xl:ml-[30rem]      -left-20  rounded-full absolute"></div>

      <div className="bg-white/70">
        <ContactForm />
      </div>

      <FrequentlyQA />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106434.6482267791!2d73.06690929709029!3d33.52523391820261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38dfedbc825db4d3%3A0xf2067784d377d58d!2sBlock%2010%2C%20G5G2%2BF4G%20Al%20Ghurair%20Giga%2C%20Defense%20Residency%2C%20Sector%20Road%2C%20Sector%20A%20DHA%20Phase%20II%2C%20Islamabad!3m2!1d33.525261199999996!2d73.1493105!5e0!3m2!1sen!2s!4v1754322815423!5m2!1sen!2s"
        className="  h-96  w-full  rounded-2xl"
      ></iframe>

      <WhyChoiceProject />
    </main>
  );
};

export default page;
