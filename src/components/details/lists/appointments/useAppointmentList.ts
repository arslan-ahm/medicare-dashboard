import { useAppSelector } from "@/hooks/useRedux";


const useAppointmentList = () => {
    const { appointments, loading } = useAppSelector(
        (store) => store.apponitments
    );

    return {
        appointments,
        loading,
    }
}

export default useAppointmentList; 