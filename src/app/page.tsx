import HeroSection from "@/components/(sections)/frontend/HeroSection";
import Navbar from "@/components/navbar/FrontendNavbar";
import Text from "@/components/Text";
import { IMAGES } from "@/constants/imgs";
// import Image from "next/image";

export default function Home() {
  const Services_cards = [
    {
      title: "Online Appointment",
      description:
        "Book an appointment with your doctor online and get a reminder before the appointment.",
      image: IMAGES.AuthScreenDashboardPreview,
    },
    {
      title: "Patient Management",
      description:
        "Manage your patient's data, appointments, prescriptions and more in one place.",
      image: IMAGES.HeroSectionBanner,
    },
    {
      title: "Medication Reminder",
      description:
        "Get a reminder for your medication and never miss a dose of your medicine.",
      image: IMAGES.blob,
    },
  ];
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <section className="flex flex-col items-center justify-center gap-8 my-4 bg-light_varient_blue/35 py-8 px-8">
        <div className="flex flex-col md:flex-row items-start gap-2 md:items-center justify-between">
          <div className="w-full md:w-[65%]">
            <Text
              text="We Offer a wide range of services"
              type="h2"
              className="text-xl sm:text-2xl md:text-3xl lg:text-6xl"
            />
          </div>
          <div className="w-[60%] md:w-[35%]">
            <Text
              text="This is an amazing and easy to use platform to manage your tasks, routeins and more over you patient's data, in easy and attractive way."
              type="p"
              className="text-sm sm:text-md lg:text-lg xl:text-xl text-md_gray"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-4 flex-wrap">
          {Services_cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 w-[330px] bg-white p-4 rounded-lg shadow-md"
            >
              <div className="w-full">
                <Text
                  text={card.title}
                  type="h5"
                  className="text-md font-semibold md:text-lg lg:text-xl"
                />
              </div>
              <div className="w-full">
                <Text
                  text={
                    card.description.length > 50
                      ? card.description.slice(0, 50) + "..."
                      : card.description
                  }
                  type="span"
                  className="text-sm lg:text-md xl:text-lg text-md_gray"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg before:absolute before:bottom-0 before:right-0 before:w-12 before:h-12 before:bg-white  before:rounded-tl-[20px] before:content-[''] before:z-10 before:shadow-[inset_4px_6px_1px_rgba(0,0,0,0.01)] bg-red ">
                <div className="h-[200px] w-full bg-primary rounded-lg shadow-md">
                  {index + 1}
                </div>
                {/* <Image
                  src={card.image}
                  alt="Dashboard Preview"
                  layout="responsive"
                  width={200}
                  height={100}
                  className="object-cover w-full h-full shadow-md"
                /> */}
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-yellow flex justify-center items-center font-semibold text-white rounded-full z-30">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
