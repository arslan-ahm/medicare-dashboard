import Navbar from "@/components/navbar/frontendNavbar/FrontendNavbar";
import Text from "@/components/Text";
import { IMAGES } from "@/constants/imgs";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex items-center justify-between h-full my-5">
        <div className="flex flex-col gap-5 w-[50%] py-4 px-8 sm:px-6 sm:py-12">
          <Text
            text="Welcome to MediCare"
            type="h2"
            className="text-primary font-semibold text-xl sm:text-4xl lg:text-5xl"
            />
          <Text
            text="This is an amazing and easy to use platform to manage your tasks, routeins and more over you patient's data, in easy and attractive way."
            type="p"
            className="text-lg sm:text-xl lg:text-2xl text-md_gray"
          />
        </div>
        <div className="flex items-center gap-5 w-[40%] bg-primary p-8 rounded-lg shadow-lg">
          <div className="w-[90%] py-4 px-8 sm:px-6 sm:py-12">
            <Image
              src={IMAGES.AuthScreenDashboardPreview}
              alt="Dashboard Preview"
              layout="responsive"
              width={200}
              height={100}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
