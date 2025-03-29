import Navbar from "@/components/navbar/frontendNavbar/FrontendNavbar";
import HeroParallex from "@/components/frontend/HeroSection";
import ServicesSection from "@/components/frontend/Services";
import SpecialitySection from "@/components/frontend/SpecialitySection";
import SupportSection from "@/components/frontend/SupportSection";
import ContactUs from "@/components/frontend/ContactUs";
import TreatmentSection from "@/components/frontend/Treatment";

export default function Page() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <HeroParallex />
        <ServicesSection />
        <SpecialitySection />
        <SupportSection />
        <TreatmentSection />
        <ContactUs />
      </main>
    </>
  );
}
