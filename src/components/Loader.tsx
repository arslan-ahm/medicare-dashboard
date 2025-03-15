"use client";
import Lottie from "lottie-react";
import animationData from "../../public/loader.json";

const Loader = ({size}: {size: 'sm' | 'md' | 'lg'}) => {
  let width;
  switch (size) {
    case 'sm':
      width = 'w-20';
      break;
    case 'md':
      width = 'w-60';
      break;
    case 'lg':
      width = 'w-80';
      break;
    default:
      width = 'w-40';
  }

  return (
    <div className="flex justify-center items-center">
      <Lottie className={width} animationData={animationData} loop={true} />
    </div>
  );
};

export default Loader;
