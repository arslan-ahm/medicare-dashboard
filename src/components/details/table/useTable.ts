import { useAppSelector } from "@/hooks/useRedux";

const useTable = () => {
    const { patients } = useAppSelector((state) => state.patients);

    return { patients };
}

export default useTable;