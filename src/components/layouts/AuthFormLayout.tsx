import React from "react";
import Text from "../Text";
import Image from "next/image";
import { IMAGES } from "@/constants/imgs";

type FormLayoutProps = {
  children: React.ReactNode;
};

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-white grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 items-center">
      <div className="flex flex-col p-4 sm:p-8 gap-10">{children}</div>
      <div className="hidden h-screen  text-white xl:col-span-2 sm:flex flex-col items-center gap-y-5 justify-center bg-primary">
        <Text text="ALL IN ONE DASHBOARD" type="h3" />
        <div className="w-[90%] lg:w-3/5 px-8">
          <Image
            src={IMAGES.AuthScreenDashboardPreview}
            alt="Dashboard Preview"
            layout="responsive"
            width={200}
            height={100}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <Text
          text="Keep track of all patient information in this section."
          type="h5"
          className="text-center"
        />
        <button className="bg-white text-primary text-sm px-3 py-2 hover:cursor-not-allowed">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default FormLayout;
