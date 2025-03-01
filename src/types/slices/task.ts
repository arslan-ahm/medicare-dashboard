import { TaskStatus } from "@prisma/client";

export type Task = {
    id: string;
    title: string;
    description?: string;
    date: string;
    status: TaskStatus;
}

export type TasksType = {
    tasks: Task[];
    loading: boolean;
    error: string | null;
}