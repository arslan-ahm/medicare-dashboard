import { useAppSelector } from "@/hooks/useRedux";

const useGenderChart = () => {
  const { patients, loading } = useAppSelector((state) => state.patients);
  const totalPatients = patients.length;

  return { totalPatients, loading };
};

export default useGenderChart;
