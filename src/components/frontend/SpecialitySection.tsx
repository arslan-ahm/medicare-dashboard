import React, { JSX } from "react";
import Text from "../Text";
import { SPECIALITY_TABS } from "@/constants/frontend";

const SpecialitySection = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-center gap-10 md:flex-row py-20 px-5 sm:px-10">
      <div className="w-full lg:w-[45%] space-y-5 sm:px-10 md:px-5">
        {SPECIALITY_TABS.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 rounded-full ${item.color} ${
              index % 2 !== 0 && "ml-12"
            }`}
          >
            <div className="rounded-full border-[8px] md:border-[15px] border-white">
            <IconWrapper icon={item.icon} />
            </div>
            <div className="px-1 md:px-3">
              <Text
                text={item.title}
                type="h6"
                className="text-base sm:text-lg md:text-xl font-semibold text-gray-500"
              />
              <Text
                text={item.text}
                type="p"
                className="text-[10px] sm:text-base xl:text-lg text-gray-400"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3 w-full lg:w-[55%]">
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
            className="text-sm sm:text-md lg:text-lg xl:text-xl text-md_gray"
          />
        </div>
      </div>
    </section>
  );
};

const IconWrapper = ({ icon }: { icon: JSX.Element }) => {
    return <div className="p-2 text-white text-2xl md:text-5xl">{icon}</div>;
  };

export default SpecialitySection;
