import React from "react";
import Text from "../Text";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SUPPORT_LIST } from "@/constants/frontend";
import Image from "next/image";
import { IMAGES } from "@/constants/imgs";

const SupportSection = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-col items-center justify-center gap-10 lg:flex-row py-20 px-5 sm:px-10">
      <div className="grid grid-cols-2 gap-4 grid-rows-2 w-full sm:w-[75%] lg:w-[55%]">
        {[
          IMAGES.MEDICARE_1,
          IMAGES.MEDICARE_2,
          IMAGES.MEDICARE_3,
          IMAGES.MEDICARE_4,
        ].map((path, index) => (
          <div
            key={index}
            className={`bg-red aspect-[1/1] ${
              index % 2 !== 0
                ? "rounded-[50%_50%_50%_1%]"
                : "rounded-[50%_1%_50%_50%]"
            } overflow-hidden`}
          >
            <Image
              src={path}
              alt="hero"
              width={400}
              height={400}
              className="object-fill"
            />
          </div>
        ))}
      </div>
      <div className="space-y-3 w-full lg:w-[45%]">
        <div>
          <Text
            text="Speciality Enrollment is Streamlined"
            type="h2"
            className="text-xl sm:text-2xl md:text-3xl lg:text-6xl"
          />
        </div>
        <div className="">
          <Text
            text="This is an amazing and easy to use platform to manage your tasks, routeins and more over you patient's data, in easy and attractive way."
            type="p"
            className="text-sm sm:text-base lg:text-lg text-gray-500"
          />
        </div>
        <ul className="space-y-5">
          {SUPPORT_LIST.map((item, index) => (
            <li key={index} className="flex gap-3 items-center">
              <IoMdCheckmarkCircleOutline className="text-green text-xl" />
              <div>
                <h6 className="font-bold text-lg">{item.title}</h6>
                <p className="text-gray-500 text-">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SupportSection;
