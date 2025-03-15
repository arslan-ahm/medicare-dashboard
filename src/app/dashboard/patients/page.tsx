import PatientHeader from "@/components/(sections)/PatientHeader";
import PatientTable from "@/components/details/table/Table";

const PatientPage = () => {
  return (
    <section className="flex flex-col w-full pt-2">
      <PatientHeader />

      <div className="relative overflow-auto custom-scroll shadow-md bg-white mt-3">
        <PatientTable />
      </div>
    </section>
  );
};

export default PatientPage;
