
import React from 'react'
import Text from '../Text'
import Carousel from './ui/Carousel';
import { IMAGES } from '@/constants/imgs';

const Services = () => {
  const slideData = [
    {
      title: "Patient Records",
      desc: "Easily access and manage patient records securely, ensuring data privacy and quick retrieval for better healthcare decisions.",
      src: IMAGES.MEDICARE_1,
    },
    {
      title: "Appointments",
      desc: "Schedule and track appointments effortlessly, with automated reminders and seamless integration into your workflow.",
      src: IMAGES.MEDICARE_2,
    },
    {
      title: "Medical History",
      desc: "Review comprehensive medical history at a glance, enabling informed diagnoses and personalized treatment plans.",
      src: IMAGES.MEDICARE_3,
    },
    {
      title: "Prescriptions",
      desc: "Organize and manage prescriptions with ease, reducing errors and improving medication adherence for patients.",
      src: IMAGES.MEDICARE_4,
    },
    ];
  return (
    <>
     <section className="flex flex-col items-center justify-center gap-8 my-4 bg-light_varient_blue/35 py-8 px-8">
        <div className="flex flex-col md:flex-row items-start gap-2 md:items-center justify-between">
          <div className="w-full md:w-[65%]">
            <Text
              text="We Offer a wide range of services"
              type="h2"
              className="text-xl sm:text-2xl md:text-3xl lg:text-6xl text-primary"
            />
          </div>
          <div className="w-[60%] md:w-[35%]">
            <Text
              text="This is an amazing and easy to use platform to manage your tasks, routeins and more over you patient's data, in easy and attractive way."
              type="p"
              className="text-sm sm:text-md lg:text-lg xl:text-xl text-md_gray"
            />
          </div>
        </div>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </div>
      </section> 
    </>
  )
}

export default Services
