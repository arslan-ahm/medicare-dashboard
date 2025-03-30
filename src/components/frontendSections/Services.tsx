
import React from 'react'
import Text from '../Text'
import Carousel from './ui/Carousel';
import { SERVICES_CRASOULE_CONTENT } from '@/constants/frontend';

const Services = () => {
  
  return (
    <>
     <section id="services" className="flex flex-col items-center justify-center gap-8 my-4 bg-light_varient_blue/35 py-8 px-8">
        <div className="flex flex-col md:flex-row items-start gap-2 md:items-center justify-between">
          <div className="w-full md:w-[65%]">
            <Text
              text="We Offer a wide range of services"
              type="h2"
              className="text-xl sm:text-2xl md:text-3xl lg:text-6xl text-primary"
            />
          </div>
          <div className="w-full sm:w-[60%] md:w-[35%]">
            <Text
              text="This is an amazing and easy to use platform to manage your tasks, routeins and more over you patient's data, in easy and attractive way."
              type="p"
              className="text-sm sm:text-md lg:text-lg xl:text-xl text-md_gray"
            />
          </div>
        </div>
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={SERVICES_CRASOULE_CONTENT} />
        </div>
      </section> 
    </>
  )
}

export default Services
