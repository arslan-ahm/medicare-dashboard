import PatientTable from "@/components/details/Table";
import PageTitleBar from "@/components/pageTitlebar/PageTitieBar";
import PatientActions from "@/components/pageTitlebar/PatientActions";

const PatientPage = () => {
  return (
    <section className="flex flex-col w-full pt-2">
      <PageTitleBar title="Total Population" subtitle={`(${200})`}>
        <PatientActions />
      </PageTitleBar>

      <PatientTable />
    </section>
  );
};

export default PatientPage;
