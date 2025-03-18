import React from "react";
import Text from "../Text";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SUPPORT_LIST } from "@/constants/frontend";

const SupportSection = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-center gap-10 md:flex-row py-20 px-5 sm:px-10">
      <div className="grid grid-cols-2 grid-rows-2 w-[55%]">
        {/* <Image
          src={IMAGES.HeroSectionBanner}
          alt="hero"
          width={500}
          height={500}
          className="object-cover"
        /> */}
        <div className="bg-red w-full h-full flex justify-center text-white items-center">
          1
        </div>
        <div className="bg-green w-full h-full flex justify-center text-white items-center">
          2
        </div>
        <div className="bg-blue w-full h-full flex justify-center text-white items-center">
          3
        </div>
        <div className="bg-yellow w-full h-full flex justify-center text-white items-center">
          4
        </div>
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
