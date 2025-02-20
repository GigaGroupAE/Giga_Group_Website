import React from "react";
import fb from "../../public/fb.svg";
import x from "../../public/x.svg";
import yt from "../../public/yt.svg";
import whatsapp from "../../public/whatsapp.svg";
import pintrust from "../../public/pintrust.svg";
import linkdin from "../../public/lindin.svg";
import ig from "../../public/ig.svg";
import Image from "next/image";

const CopyRights = () => {
  return (
    <section className="bg-white px-[50px] h-[70px] flex items-center justify-between ">
      <div className="">
        <h2 className="font-poppins text-xs text-TextandIcons font-medium">
          All © Reserved by <b>Giga</b> Group ® | United Arab Emirates
        </h2>
      </div>
      <div className="flex items-center gap-4 relative z-50 ">
        <Image src={fb} alt="Facebook" />
        <Image src={ig} alt="Instagram" />
        <Image src={linkdin} alt="Facebook" />
        <Image src={pintrust} alt="Facebook" />
        <Image src={yt} alt="Facebook" />
        <Image src={x} alt="Facebook" />
        <Image src={whatsapp} alt="Facebook" />
      </div>

      <div className=" absolute h-[70px] w-2/6 right-0  rounded-ss-full  bg-gradient-to-r from-white to-secondary/30"></div>
    </section>
  );
};

export default CopyRights;
