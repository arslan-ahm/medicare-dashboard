import { useAppSelector } from "@/hooks/useRedux";
import { getWeeklyAppointments } from "@/lib/timeHandler";

const useOfflineAppointmentChart = () => {
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

  return { totalOfflineAppointments, weeklyOfflineData, loading, percentage };
};

export default useOfflineAppointmentChart;
