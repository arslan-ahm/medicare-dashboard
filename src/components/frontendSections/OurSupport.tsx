import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { OUR_SUPPORTS } from "@/constants/frontend";

const SupportSection = () => {
  return (
    <section className="flex min-[1250px]:flex-row flex-col items-center justify-center gap-10 py-20 px-5 sm:px-10">
      <div className="lg:text-start text-center">
        <h2 className="text-xl xs:text-2xl md:text-3xl lg:text-6xl text-primary">
          Comprehensive Support for Healthcare Professionals
        </h2>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={OUR_SUPPORTS} />
      </div>
    </section>
  );
};

export default SupportSection;
