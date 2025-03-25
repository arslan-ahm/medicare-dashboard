import { useAppSelector } from "@/hooks/useRedux";

const useAppoitmentList = () => {
  const { appointments, loading } = useAppSelector(
    (store) => store.apponitments
  );
  return { appointments, loading };
};
export default useAppoitmentList;
