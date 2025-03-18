"use client";
import Lottie from "lottie-react";
import animationData from "../../../public/loader/loader_screen.json";

const LoaderScreen = ({ size }: { size?: number }) => {
  return (
    <div className="flex justify-center items-center">
      <Lottie size={size} animationData={animationData} loop={true} />
    </div>
  );
};

export default LoaderScreen;
