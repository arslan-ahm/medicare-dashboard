import PatientTable from "@/components/details/Table";
import PageTitleBar from "@/components/pageTitlebar/PageTitieBar";
import PatientActions from "@/components/pageTitlebar/PatientActions";

const PatientPage = () => {
  return (
    <section className="flex flex-col w-full pt-2 overflow-x-auto">
      <PageTitleBar title="Total Population" subtitle={`(${200})`}>
        <PatientActions />
      </PageTitleBar>

      <div className="overflow-x-auto sm:w-[70vh] md:w-full">
        <PatientTable />
      </div>
    </section>
  );
};

export default PatientPage;
