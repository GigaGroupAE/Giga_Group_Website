import React from 'react';
import AboutMain from '../components/AboutComponents/AboutMain';

export const metadata = {
  title: 'About Us - Vision, Values & Strength - Giga Group of Companies',
  description:
    'Find more information about Giga Group of Companies. The leadership, management, mission statement, vision, strengths, core values, and more!',
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
    <section>
      <AboutMain />
    </section>
  );
};

export default page;
