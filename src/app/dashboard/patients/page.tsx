import { Metadata } from "next";
import PatientHeader from "@/components/sections/PatientHeader";
import PatientTable from "@/components/details/table/Table";

export const metadata: Metadata = {
  title: "Dashboard - Patients",
  description: "Your patients are listed here.",
};


const Page = () => {
  return (
    <section className="flex flex-col w-full pt-2">
      <PatientHeader />

      <PatientTable />
    </section>
  );
};

export default Page;
