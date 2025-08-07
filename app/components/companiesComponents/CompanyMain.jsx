import React from 'react';
import ProjectPageHero from '../ProjectsPages/ProjectPageHero';
import OnGoingProjectsCom from '../ProjectsPages/OnGoingProjectCom';
import ContactUsForm from '../ContactUsForm';

const CompanyMain = ({ category }) => {
  return (
    <main>
      <ProjectPageHero backgroundImage={category?.image}></ProjectPageHero>

      <div className=" container mx-auto py-28">
        <h1 className="headingSeaction text-center font-semibold">{category?.type}</h1>

        {category?.companies?.map(company => (
          <div key={company?.id} className=" p-6 rounded-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800">{company?.title}</h2>
            <p className="text-gray-600 mt-4">{company?.description}</p>
          </div>
        ))}
      </div>
      <OnGoingProjectsCom />
      <ContactUsForm />
    </main>
  );
};

export default CompanyMain;
