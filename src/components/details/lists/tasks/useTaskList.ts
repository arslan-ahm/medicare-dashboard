import { useAppSelector } from "@/hooks/useRedux";

const useTaskList = () => {
    const { tasks, loading } = useAppSelector((state) => state.tasks);

    return { tasks, loading };
}

export default useTaskList;