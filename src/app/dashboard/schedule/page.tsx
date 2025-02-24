import Calendar from "@/components/details/calendar/Calendar";
import PageTitleBar from "@/components/pageTitlebar/PageTitieBar";
import ScheduleActions from "@/components/pageTitlebar/ScheduleActions";
import { Appointment } from "@/types/slices/appointment";

const Schedule = () => {
  const appointments: Appointment[] = [
    {
      id: "10",
      date: "2025-02-22",
      time: "09:00",
      purpose: "Medical Appointment",
      duration: 45,
      status: "Pending",
      patientId: "245",
      isOnline: false,
      location: "General Clinic",
      type: "Medical",
    },
    {
      id: "11",
      date: "2025-02-23",
      time: "19:00",
      purpose: "Diagnostic Test",
      duration: 60,
      status: "Pending",
      patientId: "245",
      isOnline: false,
      location: "General Clinic",
      type: "Medical",
    },
    {
      id: "1",
      date: "2025-02-26",
      time: "09:00",
      purpose: "Medical Appointment",
      duration: 45,
      status: "Pending",
      patientId: "123",
      isOnline: false,
      location: "General Clinic",
      type: "Medical",
    },
    {
      id: "2",
      date: "2025-02-27",
      time: "11:00",
      purpose: "Follow-up Check",
      duration: 30,
      status: "Confirmed",
      patientId: "124",
      isOnline: true,
      location: "Telehealth",
      type: "Online",
    },
    {
      id: "2",
      date: "2025-02-27",
      time: "1:00",
      purpose: "Follow-up Check",
      duration: 30,
      status: "Confirmed",
      patientId: "124",
      isOnline: true,
      location: "Telehealth",
      type: "Online",
    },
  ];

  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  return (
    <section className="mt-4">
      <PageTitleBar title={`Weekly schedule for ${month} ${year}`}>
        <ScheduleActions />
      </PageTitleBar>

      <div className="mt-4 lg:h-[60vh] overflow-auto custom-scroll p-2">
        <Calendar appointments={appointments} />
      </div>
    </section>
  );
};

export default Schedule;
