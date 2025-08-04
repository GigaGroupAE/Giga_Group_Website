import React, { useState } from 'react';
import close from '../../../public/cross.svg';
import add from '../../../public/add.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GeneralQA = ({ QAData }) => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleOpen = id => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <section className="flex md:w-[95%] w-full mx-auto mt-8 md:px-10">
      <div>
        {QAData?.map(item => {
          const isOpen = openQuestionId === item?.id;

          return (
            <div key={item?.id} className="my-8">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleOpen(item?.id)}
              >
                {isOpen ? <Image src={close} alt="close" /> : <Image src={add} alt="open" />}
                <h2 className="font-semibold font-poppins text-TextandIcons text-sm">
                  {item?.question}
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  height: isOpen ? 'auto' : 0,
                }}
                transition={
                  {
                    // duration: 0.7,
                  }
                }
                className="py-1"
              >
                {isOpen && (
                  <h1 className="font-poppins font-medium text-xs leading-6">{item?.answer}</h1>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GeneralQA;
