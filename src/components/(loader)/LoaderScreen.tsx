"use client";
import Lottie from "lottie-react";
import animationData from "../../../public/loader/loader_screen.json";

const LoaderScreen = ({size}: {size: 'sm' | 'md' | 'lg'}) => {
  let width;
  switch (size) {
    case 'sm':
      width = 'w-30';
      break;
    case 'md':
      width = 'w-65';
      break;
    case 'lg':
      width = 'w-80';
      break;
    default:
      width = 'w-55';
  }

  return (
    <div className="flex justify-center items-center">
      <Lottie className={width} animationData={animationData} loop={true} />
    </div>
  );
};

export default LoaderScreen;
