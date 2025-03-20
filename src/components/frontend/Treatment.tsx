import React from "react";
import { TREATMENT_TABS } from "@/constants/frontend";
import Image from "next/image";
import { IMAGES } from "@/constants/imgs";

const TreatmentSection = () => {
  return (
    <section className="flex flex-col-reverse items-stretch justify-center gap-10 lg:flex-row py-20 px-5 sm:px-10">
      <div className="space-y-6 w-full lg:w-[55%]">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-[600]">
            Support You <br /> HealthCare Needs
          </h2>
        </div>
        <ul className="space-y-5 px-3">
          {TREATMENT_TABS.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 items-center w-[75%] hover:bg-white p-3 rounded-lg border border-gray-200"
            >
              <span className="shadow-sm bg-white p-3 rounded-full text-2xl">
                {item.icon}
              </span>
              <div>
                <h6 className="font-bold text-xl">{item.title}</h6>
                <p className="text-gray-500 text-base">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative w-full lg:w-[45%] h-full">
          <div className="absolute sm:bottom-[-10%] sm:left-0 rounded-l-full overflow-hidden z-10 border-[10px] border-white">
            <Image
              src={IMAGES.MEDICARE_2}
              alt="medicare_1"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <div className="relative sm:bottom-0 sm:left-0 rounded-l-full overflow-hidden">
            <Image
              src={IMAGES.MEDICARE_1}
              alt="medicare_2"
              width={500}
              height={500}
              className="object-cover "
            />
          </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
