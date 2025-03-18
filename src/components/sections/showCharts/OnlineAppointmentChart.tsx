"use client";

import dynamic from "next/dynamic";
import AppointmentChart from "@/components/chartHandlers/AppointmentChart";
import { useAppSelector } from "@/hooks/useRedux";
import { getWeeklyAppointments } from "@/lib/timeHandler";

const LineChart = dynamic(() => import("@/components/charts/LineChart"), {
  ssr: false,
  loading: () => <div style={{ height: "100px" }} />,
});

const OnlineAppointmentChart = () => {
  const {appointments, loading} = useAppSelector(
    (state) => state.apponitments
  );
  const onlineAppointments = appointments.filter((appt) => appt.isOnline);
  const weeklyData = getWeeklyAppointments(onlineAppointments);

  const totalAppointments = onlineAppointments.length;
  const thisWeekAppointments = weeklyData.reduce(
    (sum, count) => sum + count,
    0
  );

  const percentage = totalAppointments
    ? `${((thisWeekAppointments / totalAppointments) * 100).toFixed(1)}%`
    : "0%";

  return (
    <AppointmentChart
      title="Online Consultations"
      percentage={percentage}
      loader={loading}
      type="loss"
      value={totalAppointments.toString()}
      containerStyles="col-span-6 sm:col-span-3 lg:col-span-2"
    >
      <LineChart type="loss" chartData={weeklyData} />
    </AppointmentChart>
  );
};

export default OnlineAppointmentChart;
