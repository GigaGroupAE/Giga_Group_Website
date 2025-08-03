import React from 'react';
import ManagementMain from '../components/Management/ManagementMain';

export const metadata = {
  title: 'Management - Giga Group of Companies',
  description:
    'Haji Amin Giga Pardesi is the President and Mr. Najeeb Amin Pardesi is the Vice Chairman and CEO of Giga Group of Companies. Read More',
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
      <ManagementMain />
    </section>
  );
};

export default page;
