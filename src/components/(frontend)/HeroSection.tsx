import Text from "@/components/Text";
import { IMAGES } from "@/constants/imgs";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col sm:flex-row items-center justify-between h-full">
        <div className="flex flex-col gap-5 w-full sm:w-[55%] py-4 px-2 sm:px-6 sm:py-12">
          <Text
            text="Welcome to MediCare"
            type="h2"
            className="text-primary text-2xl sm:text-4xl md:text-6xl lg:text-8xl"
          />
          <Text
            text="This is an amazing and easy to use platform to manage your tasks, routeins and more over you patient's data, in easy and attractive way."
            type="p"
            className="text-lg sm:text-xl lg:text-2xl text-md_gray"
          />
        </div>
        <div className="flex mx-auto gap-5 w-[75%] sm:w-[45%]">
          <div className="w-full sm:w-[400px] lg:w-full md:h-full">
            <Image
              src={IMAGES.HeroSectionBanner}
              alt="Dashboard Preview"
              layout="responsive"
              width={200}
              height={100}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
