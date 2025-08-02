import React from "react";
import Image from "next/image";

const MediaProject = ({ videoUrl, gallery }) => {
  return (
    <div className="bg-white text-gray-800 container mx-auto px-4 md:px-8 py-8">
      <div className="aspect-w-16 aspect-h-9 mb-8 rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-[25rem] md:h-[40rem]"
          src={videoUrl}
          title="Dubai Skyline Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {gallery.slice(0, 4).map((img, index) => (
          <div
            key={index}
            className="relative h-52 rounded-xl overflow-hidden shadow-md transition-transform transform "
          >
            <Image
              src={img}
              alt={`Interior ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              priority={index < 4}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {gallery.slice(4, 7).map((img, index) => (
          <div
            key={index + 4}
            className="relative h-52 rounded-xl overflow-hidden shadow-md transition-transform transform"
          >
            <Image
              src={img}
              alt={`Interior ${index + 5}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaProject;
