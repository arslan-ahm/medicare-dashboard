import React from "react";
import Link from "next/link";
import Image from "next/image";
import Text from "@/components/Text";
import { IMAGES } from "@/constants/imgs";
import { IoIosArrowBack } from "react-icons/io";

const Page = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="w-[min(450px,85%)] px-8 text-center">
        <Image
          src={IMAGES.NOT_FOUND}
          alt="Page Not Found"
          layout="responsive"
          width={400}
          height={300}
          className="object-cover mx-auto"
        />
        <Text
          text="Oops! Page Not Found"
          type="h1"
          className="mt-2 text-2xl font-bold text-gray-800"
        />
        <Text
          text="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
          type="p"
          className="mt-2 text-lg text-gray-600"
        />
        <Link
          href="/"
          className="flex items-center justify-center group mt-4 bg-md_varient_red px-3 py-2 text-gray-800 rounded-full hover:bg-primary-dark transition duration-300"
        >
          <IoIosArrowBack className="relative right-0 text-2xl duration-150 text-gray-700 group-hover:right-3" />{" "}
          Go back to <span className="font-semibold ml-2">Home</span>
        </Link>
      </div>
    </section>
  );
};

export default Page;
