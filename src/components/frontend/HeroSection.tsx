"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from "next/image";
import { HEROSECTION_LIST } from "@/constants/frontend";

const HeroParallex = ({
  products,
}: {
  products: {
    title: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products?.slice(0, 5);
  const secondRow = products?.slice(5, 10);
  const thirdRow = products?.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 140]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[180vh] sm:h-[240vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, indx) => (
            <ProductCard product={product} translate={translateX} key={indx} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product, indx) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={indx}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, indx) => (
            <ProductCard product={product} translate={translateX} key={indx} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-primary">
        Welcome to <br /> MediCare Dashboards
      </h1>
      <p className="max-w-2xl text-sm md:text-lg lg:text-xl mt-8 text-slate-800">
        Manage your patients, appointments, and medical records efficiently. Our
        platform is designed to simplify your workflow and enhance patient care.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-[15rem] lg:h-[25rem] w-[20rem] sm:w-[30rem] lg:w-[45rem] relative shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 pointer-events-none"></div>
      <h2 className="absolute bottom-4 px-2 py-1 rounded-sm bg-primary/80 left-4 opacity-0 group-hover/product:opacity-100 text-white text-xl font-bold transition-all duration-300 ease-in-out">
        {product.title}
      </h2>
    </motion.div>
  );
};

const HeroSection = () => {
  HEROSECTION_LIST.sort(() => Math.random() - 0.5);
  return <HeroParallex products={HEROSECTION_LIST} />;
};

export default HeroSection;
