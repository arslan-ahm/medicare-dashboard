"use client";
import Image from "next/image";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll";
import { WobbleCard } from "./ui/grid-cards";
import Text from "../Text";
import { SIDE_FIX_SCROLL_CONTENT, SPECIALITY_GRID } from "@/constants/frontend";
import { GridSectionProps } from "@/types/componentsTypes/speciality";

const SpecialitySection = () => {
  return (
    <section id="speciality" className="space-y-12 py-20 px-5 sm:px-10">
      <div className="w-full text-start md:text-center">
        <Text
          text="Explore Our Specialized Features"
          type="h2"
          className="text-xl sm:text-2xl md:text-3xl lg:text-6xl text-primary"
        />
        <p className="mt-4 w-full mx-auto md:w-[60%] text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
          Discover tools designed to simplify patient management, streamline
          appointment scheduling, and provide actionable insights through
          interactive dashboards.
        </p>
      </div>
      <div className="w-full py-4">
        <StickyScroll content={SIDE_FIX_SCROLL_CONTENT} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {SPECIALITY_GRID.map((item, index) => (
          <WobbleCard
            key={index}
            containerClassName={
              item.containerClassName
            }
          >
            <GridSection
              title={item.title}
              desc={item.desc}
              img={item.img}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
            />
          </WobbleCard>
        ))}
      </div>
    </section>
  );
};

const GridSection: React.FC<GridSectionProps> = ({
  title,
  desc,
  img,
  imgAlt,
  imgSrc,
}) => {
  return (
    <>
      <div className="max-w-sm">
        <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          {title}
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-300">
          {desc}
        </p>
      </div>
      {img && imgSrc && imgAlt && (
        <Image
          src={imgSrc}
          width={500}
          height={500}
          alt={imgAlt}
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      )}
    </>
  );
};

export default SpecialitySection;
