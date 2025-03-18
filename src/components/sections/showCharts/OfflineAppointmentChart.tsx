"use client";

import dynamic from "next/dynamic";
import AppointmentChart from "@/components/chartHandlers/AppointmentChart";
import { useAppSelector } from "@/hooks/useRedux";
import { getWeeklyAppointments } from "@/lib/timeHandler";

const LineChart = dynamic(() => import("@/components/charts/LineChart"), {
  ssr: false,
  loading: () => <div style={{ height: "100px" }} />,
});

const OnfflineAppointmentChart = () => {
  const { appointments, loading } = useAppSelector(
    (state) => state.apponitments
  );

  const offlineAppointments = appointments.filter((appt) => !appt.isOnline);
  const weeklyOfflineData = getWeeklyAppointments(offlineAppointments);

  const totalOfflineAppointments = offlineAppointments.length;
  const thisWeekOfflineAppointments = weeklyOfflineData.reduce(
    (sum, count) => sum + count,
    0
  );

  const percentage = totalOfflineAppointments
    ? ((thisWeekOfflineAppointments / totalOfflineAppointments) * 100).toFixed(
        1
      ) + "%"
    : "0%";

  return (
    <AppointmentChart
      title="Offline Consultations"
      percentage={percentage}
      loader={loading}
      type="success"
      value={totalOfflineAppointments.toString()}
      containerStyles="col-span-6 sm:col-span-3 lg:col-span-2"
    >
      <LineChart type="success" chartData={weeklyOfflineData} />
    </AppointmentChart>
  );
};

export default OnfflineAppointmentChart;
