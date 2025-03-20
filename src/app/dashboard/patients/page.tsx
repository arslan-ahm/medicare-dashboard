import PatientHeader from "@/components/sections/PatientHeader";
import PatientTable from "@/components/details/table/Table";

const Page = () => {
  return (
    <section className="flex flex-col w-full pt-2">
      <PatientHeader />

      <PatientTable />
    </section>
  );
};

export default Page;
