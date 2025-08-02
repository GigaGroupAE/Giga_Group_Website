import HeroCard from "@/app/components/Hero/HeroCard";
import HeroInputForm from "@/app/components/Hero/HeroInputForm";
import HeroWrapper from "@/app/components/Hero/HeroWrapper";
import AboutProject from "@/app/components/ProjectsPages/AboutProject";
import OnGoingProjectsCom from "@/app/components/ProjectsPages/OnGoingProjectCom";
import ProjectAmenities from "@/app/components/ProjectsPages/ProjectAmenities";
import ProjectContactUs from "@/app/components/ProjectsPages/ProjectContactUs";
import MediaProject from "@/app/components/ProjectsPages/ProjectGallery";
import ProjectLocation from "@/app/components/ProjectsPages/ProjectLocation";
import { projects } from "@/src/Data/ProjectsData";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map(({ slug }) => ({
    slug: slug.replace("/", ""),
  }));
}

const ProjectPage = ({ params }) => {
  const slug = `/${params.slug}`;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const {
    title,
    status,
    amenitiesFeaturesTitle,
    description,
    location,
    backgroundImage,
    formTitle,
    features,
    imageUrl,
    videoUrl,
    gallery,
    amenitiesTitle,
    amenitiesDesc,
    mapEmbedUrl,
    mapTitle,
    mapDesc,
    imageGalleryTitle,
    imageGalleryTitleDesc,
    featuresTitle,
    whyChooseTitle,
    whyChooseDesc,
    startingFrom,
    locationImageGallery,
    amenities,
    updates,
    contactUsTitle,
    contactUsdec,
  } = project;

  return (
    <section>
      <HeroWrapper backgroundImage={backgroundImage}>
        <div className="w-full  space-y-40 gap-10 flex flex-col-reverse md:flex-row justify-between md:ml-12 md:items-end relative">
          <HeroCard
            badgeText={status}
            title={title}
            // subtitle={status}
            description={description}
          />
          <HeroInputForm title={formTitle || "Inquire Now"} />
        </div>
      </HeroWrapper>

      <AboutProject
        amenitiesTitle={amenitiesTitle}
        amenitiesDesc={amenitiesDesc}
        features={features}
      />

      <MediaProject videoUrl={videoUrl} gallery={gallery} />
      <ProjectLocation
        mapTitle={mapTitle}
        mapDesc={mapDesc}
        galleryTitle={imageGalleryTitle}
        galleryDesc={imageGalleryTitleDesc}
        gallery={locationImageGallery}
      />
      <ProjectAmenities
        amenitiesFeaturesTitle={amenitiesFeaturesTitle}
        amenities={amenities}
        whyChooseTitle={whyChooseTitle}
        whyChooseDesc={whyChooseDesc}
      />
      <dev className="bg-gradient-to-b from-[#f5f9f6] to-[#f2f2f2] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">
            Construction{" "}
            <span className="font-bold text-gray-900">Updates</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates?.map((update, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={update.src}
                  alt={update.alt}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </dev>
      <OnGoingProjectsCom />
      <ProjectContactUs
        contactUsdec={contactUsdec}
        contactUsTitle={contactUsTitle}
      />
    </section>
  );
};

export default ProjectPage;
