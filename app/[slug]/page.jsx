import { gigaGroupCompanies } from '@/src/Data/CompaniesData';
import React from 'react';
import OnGoingProjectsCom from '../components/ProjectsPages/OnGoingProjectCom';
import ContactUsForm from '../components/ContactUsForm';
import { notFound } from 'next/navigation';
import ProjectPageHero from '../components/ProjectsPages/ProjectPageHero';
import { blogsData } from '@/src/Data/BlogsData';
import CompanyMain from '../components/companiesComponents/CompanyMain';
import BlogMain from '../components/Blogs/BlogMain';

// export async function generateStaticParams() {
//   return gigaGroupCompanies.map(({ slug }) => ({
//     slug: slug.replace('/', ''),
//   }));
// }

export async function generateStaticParams() {
  const companySlugs = gigaGroupCompanies?.map(({ slug }) => ({
    slug: slug.replace('/', ''),
  }));

  const blogSlugs = blogsData?.map(({ slug }) => ({
    slug: slug.replace('/', ''),
  }));

  return [...companySlugs, ...blogSlugs];
}

const page = ({ params }) => {
  const slug = `/${params.slug}`;

  const company = gigaGroupCompanies.find(p => p.slug === slug);
  if (company) {
    return <CompanyMain category={company} />;
  }

  const blog = blogsData.find(b => b.slug === slug);
  if (blog) {
    return <BlogMain data={blog} />;
  }

  return notFound();
};

export default page;
