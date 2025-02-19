import React, { useState } from "react";
import close from "../../public/cross.svg";
import add from "../../public/add.svg";
import { QAData } from "@/src/Data/QuestionsData";
import Image from "next/image";

const GeneralQA = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  return (
    <section className="flex w-[80%] mx-auto mt-8 px-10">
      <div className="">
        {QAData.map((item) => {
          return (
            <div key={item?.id} className="my-12">
              <div
                className="flex items-center gap-4 "
                onClick={() =>
                  setOpenQuestionId(
                    openQuestionId === item?.id ? null : item?.id
                  )
                }
              >
                {openQuestionId === item?.id ? (
                  <Image src={close} alt="close" />
                ) : (
                  <Image src={add} alt="open" />
                )}
                <h2 className="font-semibold font-poppins text-TextandIcons text-sm">
                  {item?.question}
                </h2>
              </div>

              {openQuestionId === item?.id && (
                <div className="py-4">
                  <h1 className="font-poppins font-medium text-xs  leading-6">
                    {item?.answer}
                  </h1>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GeneralQA;
