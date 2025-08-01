import React from "react";
import aboutGiga1 from "../../../public/aboutGiga1.webp";
import aboutGiga2 from "../../../public/aboutGiga2.webp";
import aboutGiga3 from "../../../public/aboutGiga3.webp";
import aboutGiga4 from "../../../public/aboutGiga4.webp";
import aboutGiga5 from "../../../public/aboutGiga5.webp";
import aboutGiga6 from "../../../public/aboutGiga2.webp";
import Image from "next/image";

const MediaProject = () => {
  const galleryImages = [
    aboutGiga1,
    aboutGiga2,
    aboutGiga3,
    aboutGiga4,
    aboutGiga5,
    aboutGiga4,
  ];

  return (
    <div className="bg-white text-gray-800 max-w-screen-xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center py-8">
        Dubai Lifestyle & Interior Showcase
      </h1>

      {/* YouTube Video */}
      <div className="aspect-w-16 aspect-h-9 mb-6 mx-4 sm:mx-8 md:mx-1">
        <iframe
          className="w-full  h-[40rem] rounded-lg"
          src="https://www.youtube.com/embed/Scxs7L0vhZ4"
          title="Dubai Skyline Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {galleryImages.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Interior ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default MediaProject;
