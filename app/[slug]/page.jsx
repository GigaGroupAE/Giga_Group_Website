import { gigaGroupCompanies } from '@/src/Data/CompaniesData';
import React from 'react';
import OnGoingProjectsCom from '../components/ProjectsPages/OnGoingProjectCom';
import ContactUsForm from '../components/ContactUsForm';
import { notFound } from 'next/navigation';
import ProjectPageHero from '../components/ProjectsPages/ProjectPageHero';

export async function generateStaticParams() {
  return gigaGroupCompanies.map(({ slug }) => ({
    slug: slug.replace('/', ''),
  }));
}

const page = ({ params }) => {
  const slug = `/${params.slug}`;
  const category = gigaGroupCompanies.find(p => p.slug === slug);

  if (!category) return notFound();

  return (
    <main>
      <ProjectPageHero backgroundImage={category?.image}></ProjectPageHero>

      <div className=" container mx-auto py-28">
        <h1 className="headingSeaction text-center font-semibold">{category.type}</h1>

        {category?.companies?.map(company => (
          <div key={company.id} className=" p-6 rounded-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800">{company.title}</h2>
            <p className="text-gray-600 mt-4">{company.description}</p>
          </div>
        ))}

        <OnGoingProjectsCom />
        <ContactUsForm />
      </div>
    </main>
  );
};

export default page;
