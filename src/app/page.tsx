import Navbar from "@/components/navbar/frontendNavbar/FrontendNavbar";
import HeroParallex from "@/components/frontendSections/HeroSection";
import ServicesSection from "@/components/frontendSections/Services";
import SpecialitySection from "@/components/frontendSections/Speciality";
import SupportSection from "@/components/frontendSections/OurSupport";
import ContactUs from "@/components/frontendSections/ContactUs";
import TestimonialsSection from "@/components/frontendSections/Testimonials";

export default function Page() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <HeroParallex />
        <ServicesSection />
        <SpecialitySection />
        <SupportSection />
        <TestimonialsSection />
        <ContactUs />
      </main>
    </>
  );
}
