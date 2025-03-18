import { Appointment } from "@/types/slices/appointment";

export const formatDate = (dateString: string): string => {
    const inputDate = new Date(dateString);
    const now = new Date();

    const diffInMilliseconds = inputDate.getTime() - now.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInMonths / 12);

    if (diffInSeconds > 0 && diffInSeconds < 60) return "A moment from now";
    if (diffInSeconds < 0 && diffInSeconds > -60) return "A moment ago";

    if (diffInMinutes > 0 && diffInMinutes < 60) return diffInMinutes === 1 ? "In a minute" : `In ${diffInMinutes} minutes`;
    if (diffInMinutes < 0 && diffInMinutes > -60) return diffInMinutes === -1 ? "A minute ago" : `${Math.abs(diffInMinutes)} minutes ago`;


    if (diffInHours > 0 && diffInHours < 24) return diffInHours === 1 ? "In an hour" : `In ${diffInHours} hours`;
    if (diffInHours < 0 && diffInHours > -24) return diffInHours === -1 ? "An hour ago" : `${Math.abs(diffInHours)} hours ago`;


    if (diffInDays > 0 && diffInDays < 7) return diffInDays === 1 ? "Tomorrow" : `In ${diffInDays} days`;
    if (diffInDays < 0 && diffInDays > -7) return diffInDays === -1 ? "Yesterday" : `${Math.abs(diffInDays)} days ago`;


    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks > 0 && diffInWeeks < 4) return diffInWeeks === 1 ? "Next week" : `In ${diffInWeeks} weeks`;
    if (diffInWeeks < 0 && diffInWeeks > -4) return diffInWeeks === -1 ? "Last week" : `${Math.abs(diffInWeeks)} weeks ago`;


    if (diffInMonths > 0 && diffInMonths < 12) return diffInMonths === 1 ? "Next month" : `In ${diffInMonths} months`;
    if (diffInMonths < 0 && diffInMonths > -12) return diffInMonths === -1 ? "Last month" : `${Math.abs(diffInMonths)} months ago`;


    if (diffInYears > 0) return diffInYears === 1 ? "Next year" : `In ${diffInYears} years`;
    if (diffInYears < 0) return diffInYears === -1 ? "Last year" : `${Math.abs(diffInYears)} years ago`;

    return "Today";
};


export const getWeeklyAppointments = (appointments: Appointment[]) => {
    const weeklyData = new Array(7).fill(0);

    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    appointments.forEach((appt) => {
        if (!appt.createdAt) return;

        const apptDate = new Date(appt.createdAt);
        if (apptDate >= startOfWeek && apptDate <= endOfWeek) {
            const dayIndex = (apptDate.getDay() + 6) % 7;
            weeklyData[dayIndex] += 1;
        }
    });

    return weeklyData;
};