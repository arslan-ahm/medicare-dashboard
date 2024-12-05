import { useAppSelector } from "@/hooks/useRedux";
import { getWeeklyAppointments } from "@/utils/timeHandler";


const useOnlineAppointmentChart = () => {
    const { appointments, loading } = useAppSelector(
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

    return { percentage, totalAppointments, weeklyData, loading };
}

export default useOnlineAppointmentChart;