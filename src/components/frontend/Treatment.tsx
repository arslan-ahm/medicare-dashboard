import React from "react";
import { AnimatedTestimonials } from "./ui/testimonials";
import { IMAGES } from "@/constants/imgs";

const TreatmentSection = () => {
  const testimonials = [
    {
      quote:
        "The care and attention provided by the staff have been exceptional. This platform has made managing my health so much easier.",
      name: "Linda Johnson",
      designation: "Patient",
      src: IMAGES.USER_2,
    },
    {
      quote:
        "As a healthcare provider, this system has streamlined our operations and improved patient satisfaction significantly.",
      name: "Dr. Robert Smith",
      designation: "General Practitioner",
      src: IMAGES.USER_1,
    },
    {
      quote:
        "The intuitive design and robust features have made a real difference in how I manage my medical records.",
      name: "Karen Williams",
      designation: "Healthcare Administrator",
      src: IMAGES.USER_3,
    },
    {
      quote:
        "This platform has truly revolutionized the way we deliver care. The support team is always there to help.",
      name: "Dr. Emily Davis",
      designation: "Specialist at CityCare Hospital",
      src: IMAGES.USER_4,
    },
  ];
  return (
    <section className="flex flex-col-reverse items-stretch justify-center gap-10 lg:flex-row py-20 px-5 sm:px-10">
      <AnimatedTestimonials testimonials={testimonials} />;
    </section>
  );
};

export default TreatmentSection;
