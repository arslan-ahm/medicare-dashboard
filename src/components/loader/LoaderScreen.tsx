"use client";
import animationData from "../../../public/loader/loader_screen.json";
import dynamic from 'next/dynamic';

const LoaderScreen = ({ size }: { size?: number }) => {
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  return (
    <div className="flex justify-center items-center">
      <Lottie size={size} animationData={animationData} loop={true} />
    </div>
  );
};

export default LoaderScreen;