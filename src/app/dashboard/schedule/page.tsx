import { Metadata } from "next";
import Calendar from "@/components/details/calendar/Calendar";
import PageTitleBar from "@/components/titlebarActions/PageTitieBar";
import ScheduleActions from "@/components/titlebarActions/ScheduleActions";

export const metadata: Metadata = {
  title: "Dashboard - Schedules",
  description: "Your schedules are listed here.",
};


const Page = () => {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <section className="mt-4">
      <PageTitleBar title={`Schedules for ${month} ${year}`}>
        <ScheduleActions />
      </PageTitleBar>

      <div className="mt-4 overflow-auto custom-scroll p-2">
          <Calendar />
      </div>
    </section>
  );
};

export default Page;
