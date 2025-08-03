import React from 'react';
import ButtonPrimary from '../ButtonPrimary';
import pin from '../../../public/pin.svg';
import Image from 'next/image';
import GigaComponent from '../GigaComponent';

const HomeMap = () => {
  return (
    <section className="flex flex-col md:flex-row px-4 md:px-8 container mx-auto">
      <div className="flex flex-col md:w-1/2 justify-center  md:items-start">
        <GigaComponent title="10% Down Payment | Convenient Monthly Installments" />

        <h1 className="font-poppins text-3xl text-TextandIcons my-3">
          Reserve Your <span className="font-semibold">Luxury Apartment</span> in DHA Phase 2,
          Islamabad
        </h1>
        <p className="descriptionText text-start  md:w-4/5">
          Step into elevated living at Goldcrest Views, a premium address in DHA Phase 2. Discover a
          range of thoughtfully designed residences to suit every lifestyle—whether you're seeking a
          smart studio, a spacious family apartment, or an opulent penthouse. Book now with just 10%
          down and enjoy the convenience of flexible installment plans. Choose from studio, 1, 2, 3,
          and 4-bedroom apartments, or indulge in the luxury of our signature penthouses—crafted for
          those who aspire to live above it all.
        </p>

        <div className="my-4">
          <ButtonPrimary title="Learn More" />
        </div>
      </div>

      <div className="relative flex-1 w-full mt-8 md:mt-0">
        <div className="relative w-full h-[300px] md:h-[600px] bg-contain bg-bgmap bg-no-repeat bg-center">
          <div className="absolute  flex flex-col  h-64 md:h-96  justify-between gap-4 top-16 left-4 md:left-16">
            <div className="bg-[rgba(250,248,229)] rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
              <h1 className="text-TextandIcons font-bold text-xl md:text-2xl">2.5</h1>
              <p className="text-xs md:text-sm">KM</p>
            </div>
            <div className="bg-[rgba(250,248,229)] rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
              <h1 className="text-TextandIcons font-bold text-xl md:text-2xl">0.5</h1>
              <p className="text-xs md:text-sm">KM</p>
            </div>
          </div>

          {/* Map Pin */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <Image src={pin} alt="Location Pin" width={30} height={30} />
            <div className="bg-white rounded-full p-2 mt-2">
              <p className="text-TextandIcons font-poppins font-semibold text-xs md:text-sm">
                25°17'48"N 55°19'02"E
              </p>
            </div>
          </div>

          {/* Distance marker */}
          <div className="absolute bottom-0 right-4">
            <div className="bg-[rgba(250,248,229)] rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
              <h1 className="text-TextandIcons font-bold text-xl md:text-2xl">10</h1>
              <p className="text-xs md:text-sm">KM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMap;
