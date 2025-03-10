
export type Task = {
    id: string;
    title: string;
    description?: string;
    date: string;
    status: boolean;
}

export type TasksType = {
    tasks: Task[];
    loading: boolean;
    error: string | null;
}