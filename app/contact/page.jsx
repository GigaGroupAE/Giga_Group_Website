import React from "react";
import ContactUs from "../components/Contact/ContactUs";
import Image from "next/image";
import cover from "../../public/contact-bg.webp";
import ContactForm from "../components/Contact/ContactForm";
import FrequentlyQA from "../components/HomeComponents/FrequentlyQA";
import map from "../../public/aboutMap.svg";
import WhyChoiceProject from "../components/WhyChoiceProject";

const page = () => {
  return (
    <main className="   ">
      <div className="">
        <Image
          src={cover}
          alt="Contact-us"
          className="w-full md:h-[650] h-[300] object-cover"
        />
      </div>

      <ContactUs />

      <div className="bg-gradient-to-br from-white to-[#F8F7E0] via-transparent ">
        <ContactForm />
      </div>

      <FrequentlyQA />

      <div className="">
        <Image src={map} alt="map" />
      </div>

      <WhyChoiceProject />
    </main>
  );
};

export default page;
