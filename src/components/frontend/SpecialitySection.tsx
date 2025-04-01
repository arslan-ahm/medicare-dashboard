"use client";
import Image from "next/image";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll";
import { IMAGES } from "@/constants/imgs";
import { WobbleCard } from "./ui/grid-cards";
import Text from "../Text";

const SpecialitySection = () => {
  const content = [
    {
      title: "Patient Management",
      description:
        "Easily manage patient records, medical history, and treatment plans. Our platform ensures that all patient information is organized and accessible, helping you provide better care.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--green-500))] text-white">
          Patient Management
        </div>
      ),
    },
    {
      title: "Appointment Scheduling",
      description:
        "Streamline appointment scheduling with an intuitive interface. Allow patients to book appointments online and manage your schedule efficiently.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src={IMAGES.DASHBOARD_HOME}
            width={250}
            height={300}
            className="h-full w-full object-cover"
            alt="Appointment scheduling demo"
          />
        </div>
      ),
    },
    {
      title: "Interactive Dashboards",
      description:
        "Get real-time insights into your practice with interactive dashboards. Track appointments, patient statistics, and other key metrics to make informed decisions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
          Interactive Dashboards
        </div>
      ),
    },
  ];
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
        <StickyScroll content={content} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-primary min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Empower Your Practice with Medicare Dashboard
            </h2>
            <p className="mt-4 text-left text-base/6 text-gray-200">
              Streamline patient management, appointment scheduling, and data
              insights with our intuitive platform designed for healthcare
              professionals.
            </p>
          </div>
          <Image
            src={IMAGES.DASHBOARD_PATIENTS}
            width={500}
            height={500}
            alt="Patient management demo image"
            className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-12 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-blue min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Simplify Appointment Scheduling
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-200">
            Enable seamless scheduling for your patients and manage your
            calendar effortlessly with our advanced tools.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-primary lg:col-span-3 bg-blue min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Gain Insights with Interactive Dashboards
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-300">
              Monitor key metrics, track patient data, and make informed
              decisions with real-time analytics tailored for your practice.
            </p>
          </div>
          <Image
            src={IMAGES.DASHBOARD_SCHEDULE}
            width={500}
            height={500}
            alt="Dashboard insights demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
};

export default SpecialitySection;
