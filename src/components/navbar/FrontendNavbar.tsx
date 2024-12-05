"use client";

import React from "react";
import Image from "next/image";
import Text from "@/components/Text";
import { IMAGES } from "@/constants/imgs";
import TextButton from "@/components/TextButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FRONTEND_NAVLIST } from "@/constants/menu";

const Navbar = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <nav className="bg-white py-4 px-4 sm:px-6 flex justify-between items-center border-b border-gray-200 sticky top-0 left-0 w-full z-40">
      <div className="flex gap-2 items-center text-xl text-gray-500 font-bold sm:w-[30%] md:w-[20%]">
        <Image src={IMAGES.LOGO} width={40} height={40} alt="logo" />
        <span className="hidden sm:flex items-center">
          <Text text="Medicare" type="h2" className="sm:text-2xl lg:text-3xl" />
        </span>
      </div>

      <div className="hidden lg:flex max-w-[350px] xl:max-w-[80vh] w-[80%]">
        <ul className="flex space-x-8">
          {FRONTEND_NAVLIST.map((item, i) => (
            <li key={i}>
              <NavItem text={item.text} link={item.link} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <TextButton
          text="Let's Go"
          variant="outline"
          onClick={handleClick}
          className="rounded-full border hover:border-primary hover:*:text-primary px-4 py-2"
        />
      </div>
    </nav>
  );
};

const NavItem = ({ text, link }: { text: string; link: string }) => (
  <Link
    className="relative hover:before:w-full before:w-0 before:duration-200  before:h-[1px] before:rounded-full before:absolute before:bg-primary before:-bottom-1 before:left-[50%] before:-translate-x-1/2 before:transform before:transition-all"
    href={link}
  >
    {text}
  </Link>
);

export default Navbar;
