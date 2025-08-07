'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectPageHero from '../ProjectsPages/ProjectPageHero';
import HeroInputForm from '../Hero/HeroInputForm';
import Image from 'next/image';

const BlogMain = ({ data }) => {
  return (
    <section>
      <div
        className="relative h-96 md:min-h-[700px] w-full bg-no-repeat bg-contain md:bg-cover bg-center brightness-110 flex items-end"
        style={{
          backgroundImage: `url(${data?.image})`,
        }}
      ></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 md:py-16">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold my-4">{data?.title}</h2>
          <div>
            <p className="whitespace-pre-line">{data?.introduction}</p>{' '}
          </div>

          {data?.video && (
            <iframe
              className="w-full my-6 h-[15rem] md:h-[25rem]"
              src={data?.video}
              title="Dubai Skyline Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

          <div className="py-3">
            {data?.sections?.map((item, index) => {
              return (
                <div className="" key={index}>
                  <h2 className="text-3xl font-bold my-4">{item?.heading}</h2>
                  <p className="whitespace-pre-line">{item?.description}</p>
                  {item?.image && (
                    <div>
                      <Image
                        width={300}
                        height={200}
                        src={item?.image}
                        objectFit="contain"
                        className=" h-full my-6 w-full rounded-2xl"
                      />
                    </div>
                  )}

                  {item?.projects && (
                    <div>
                      {item?.projects?.map(item => {
                        console.log(item, 'item');
                        return (
                          <div>
                            <h4 className="text-2xl font-bold my-4">{item?.name}</h4>

                            <div className="flex gap-4 py-2">
                              <p>
                                <b>Location: </b> <span>{item?.location}</span>
                              </p>
                              <p>
                                <b>Booking Open Now</b> <span>{item?.booking}</span>
                              </p>
                            </div>
                            {item?.image && (
                              <div>
                                <Image
                                  width={300}
                                  height={200}
                                  src={item?.image}
                                  objectFit="contain"
                                  className=" h-full my-6 w-full rounded-2xl"
                                />
                              </div>
                            )}
                            <p className="whitespace-pre-line">{item?.description}</p>

                            <div className=" flex flex-col md:flex-row   justify-around">
                              {item?.features && (
                                <div className="">
                                  <h4 className="text-2xl font-bold my-4">Features</h4>
                                  {item?.features?.map((feature, index) => {
                                    console.log(feature, 'feature');
                                    return (
                                      <li key={index} className="">
                                        {feature}
                                      </li>
                                    );
                                  })}
                                </div>
                              )}

                              {item?.amenities && (
                                <div className="">
                                  <h4 className="text-2xl font-bold my-4">Amenities</h4>
                                  {item?.amenities?.map(item => {
                                    console.log(item, 'item');
                                    return (
                                      <ul>
                                        <li className="">{item}</li>
                                      </ul>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {item?.benefits && (
                    <div>
                      {item?.benefits?.map(item => {
                        return (
                          <div>
                            <h4 className="text-2xl font-bold my-4">{item?.title}</h4>
                            <p className="whitespace-pre-line">{item?.content}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="block md:hidden mt-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <HeroInputForm title="REGISTER YOUR INTEREST in Giga Group Projects" />
            </motion.div>
          </div>
        </div>

        {/* Desktop Sticky Sidebar */}
        <div className="hidden md:block w-full md:w-1/3">
          <motion.div
            className="sticky top-40"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <HeroInputForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogMain;
