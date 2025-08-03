import React from 'react';
import GalleryComponentMain from '../components/galleryComponent/GalleryComponentMain';

export const metadata = {
  title: 'Gallery - Awards & Trophies - Giga Group of Companies',
  description:
    'Have a look at the awards and certificates won by Giga Group on National and International levels achieved awards & trophies?',
  keywords: [
    'Giga Group',
    'Real Estate Pakistan',
    'Gold Refining',
    'Bullion Trade',
    'Textile Industry',
    'Business Conglomerate',
    'Giga Mall',
    'Investment in Pakistan',
    'Property in Islamabad',
  ],
};

const page = () => {
  return (
    <main>
      <GalleryComponentMain />
    </main>
  );
};

export default page;
