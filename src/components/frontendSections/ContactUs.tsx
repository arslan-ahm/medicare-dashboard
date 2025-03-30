"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { PlaceholdersAndVanishInput } from "./ui/animated-placeholders";
import { CONTACT_US_PLACEHOLDERS } from "@/constants/frontend";
import useContactUs from "@/hooks/useContactUs";


export default function ContactUs() {
  const { handleChange, onSubmit } = useContactUs();
  return (
    <section id="contact" className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the Waitlist
        </h1>
        <p className="text-slate-400  xl:max-w-lg max-w-sm sm:max-w-sm mx-auto my-2 text-sm text-center relative z-10">
          Stay updated with the latest Medicare plans and services tailored to
          your needs. Join our community to receive exclusive insights, tips,
          and updates directly in your inbox.
        </p>
        <div className="mt-8">
          <PlaceholdersAndVanishInput
            placeholders={CONTACT_US_PLACEHOLDERS}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
}

 
export function GlobeDemo() {
  
 
  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
      </div>
    </div>
  );
}