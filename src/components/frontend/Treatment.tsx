import React from "react";
import { AnimatedTestimonials } from "./ui/testimonials";
import { CUSTOMERS_TESTIMONIALS } from "@/constants/frontend";

const TreatmentSection = () => {
  return (
    <section className="flex flex-col justify-center space-y-2 p-12">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl text-primary">
          Comprehensive Treatment Management
        </h2>
        <p className="mt-4 w-full mx-auto md:w-[60%] text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
          Our platform provides tools for effective treatment management,
          ensuring healthcare professionals can deliver their best.
        </p>
      </div>
      <div className="flex flex-col-reverse items-stretch justify-center gap-10 lg:flex-row py-20 px-5 sm:px-10">
        <AnimatedTestimonials testimonials={CUSTOMERS_TESTIMONIALS} />;
      </div>
    </section>
  );
};

export default TreatmentSection;
