"use client";
import dynamic from "next/dynamic";
import animationData from "../../../public/loader/loader.json";


const Loader = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
  let width;
  switch (size) {
    case "sm":
      width = "w-20";
      break;
    case "md":
      width = "w-20 xs:w-28 w-32";
      break;
      case "lg":
      width = "w-60";
      break;
    default:
      width = "w-40";
  }

  return (
    <div className="flex justify-center items-center">
      <Lottie className={width} animationData={animationData} loop={true} />
    </div>
  );
};

export default Loader;
