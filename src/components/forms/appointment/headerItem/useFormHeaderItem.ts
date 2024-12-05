import { useAppSelector } from "@/hooks/useRedux";

const useFromHeaderItem = () => {
    const doctor = useAppSelector((state) => state.auth.doctor);

    const formattedDate = new Date().toLocaleDateString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "long",
    });

    const timeWithPeriod = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return { doctor, formattedDate, timeWithPeriod };
}

export default useFromHeaderItem;