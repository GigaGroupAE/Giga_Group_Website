import React from 'react';
import CompaniMain from '../components/companiesComponents/CompaniMain';

export const metadata = {
  title: 'Companies - Giga Group of Companies, Delivering Excellence',
  description:
    'The Giga Group has a multifarious set of business activities in textile, gold refining, bullion trade, real estate development, and the construction industry',
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

const Page = () => {
  return (
    <section>
      <CompaniMain />
    </section>
  );
};

export default Page;
