import React from 'react';
import ProjectPageMain from '../components/ProjectsPages/ProjectPageMain';

export const metadata = {
  title: 'Projects - Delivered & Ongoing - Giga Group of Companies',
  description:
    'This page lists all the projects that have been undertaken by the Giga Group of companies, Including all delivered & in-progress projects',
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
      <ProjectPageMain />
    </main>
  );
};

export default page;
