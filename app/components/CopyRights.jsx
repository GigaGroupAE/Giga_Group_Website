import React from 'react';
import fb from '../../public/fb.svg';
import x from '../../public/x.svg';
import yt from '../../public/yt.svg';
import whatsapp from '../../public/whatsapp.svg';
import pintrust from '../../public/pintrust.svg';
import linkdin from '../../public/lindin.svg';
import ig from '../../public/ig.svg';
import Image from 'next/image';
import Link from 'next/link';

const CopyRights = () => {
  return (
    <section
      className="bg-white px-[50px] h-[70px] flex md:flex-row flex-col
     items-center md:justify-between   justify-around "
    >
      <div className="">
        <h2 className="font-poppins text-xs text-TextandIcons relative font-medium z-50">
          All © Reserved by <b>Giga</b> Group ® | Pakistan
        </h2>
      </div>
      <div className="flex items-center gap-4 relative z-50 ">
        <Link href="https://www.facebook.com/GigaGroupPakistan/">
          <Image src={fb} alt="Facebook" />
        </Link>
        <Link href="https://www.instagram.com/gigagrouppakistan">
          <Image src={ig} alt="Instagram" />
        </Link>
        <Link href="https://www.linkedin.com/company/giga-group-of-companies">
          <Image src={linkdin} alt="linkedin" />
        </Link>
        <Link href="https://www.pinterest.com/gigamall/giga-mall/">
          <Image src={pintrust} alt="Pintrust" />
        </Link>
        <Link href="https://www.youtube.com/channel/UCYFOlyPzx3G6FnCVy1AaXmA">
          <Image src={yt} alt="Youtube" />
        </Link>
        <Link href="https://x.com/GigaGroupofCo">
          <Image src={x} alt="X" />
        </Link>
        <Link href="s">
          <Image src={whatsapp} alt="whatsapp" />
        </Link>
      </div>

      <div className=" absolute h-[70px] w-2/6 right-0  rounded-ss-full  bg-gradient-to-r from-white to-secondary/30 z-0"></div>
    </section>
  );
};

export default CopyRights;
