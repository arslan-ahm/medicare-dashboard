import ContactUs from "@/components/frontend/ContactUs";
import HeroSection from "@/components/frontend/HeroSection";
import ServicesSection from "@/components/frontend/Services";
import SpecialitySection from "@/components/frontend/SpecialitySection";
import SupportSection from "@/components/frontend/SupportSection";
import Navbar from "@/components/navbar/FrontendNavbar";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <SpecialitySection />
        <SupportSection />
        <ContactUs />
      </main>
    </>
  );
}
