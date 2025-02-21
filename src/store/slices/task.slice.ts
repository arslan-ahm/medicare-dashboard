import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  description?: string;
  date: string;
  status: boolean;
}

interface TasksType {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TasksType = {
  tasks: [
    {
      id: "task1",
      status: true,
      title: "Complete project report",
      description: "Finalize and submit the project report by end of the day.",
      date: "2023-10-01",
    },
    {
      id: "task2",
      status: false,
      title: "Team meeting",
      description: "Discuss project milestones and next steps.",
      date: "2023-10-02",
    },
    {
      id: "task3",
      status: true,
      title: "Code review",
      description: "Review code for the new feature implementation.",
      date: "2023-10-03",
    },
    {
      id: "task4",
      status: false,
      title: "Client presentation",
      description:
        "Prepare slides and present the project progress to the client.",
      date: "2023-10-04",
    },
    {
      id: "task5",
      status: true,
      title: "Update documentation",
      description: "Update the project documentation with the latest changes.",
      date: "2023-10-05",
    },
    {
      id: "task6",
      status: true,
      title: "Code review",
      description: "Review code for the new feature implementation.",
      date: "2023-10-03",
    },
    {
      id: "task7",
      status: false,
      title: "Client presentation",
      description:
        "Prepare slides and present the project progress to the client.",
      date: "2023-10-04",
    },
    {
      id: "task8",
      status: true,
      title: "Update documentation",
      description: "Update the project documentation with the latest changes.",
      date: "2023-10-05",
    },
  ],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk<
  Task[],
  void,
  { rejectValue: string }
>("tasks/fetchTasks", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("/api/task");
    if (!response.ok) throw new Error("Failed to fetch tasks");

    return await response.json();
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const addTask = createAsyncThunk<
  Task,
  Omit<Task, "id">,
  { rejectValue: string }
>("tasks/addTask", async (newTask, { rejectWithValue }) => {
  try {
    const response = await fetch("/api/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    if (!response.ok) throw new Error("Failed to add task");

    return await response.json();
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const editTask = createAsyncThunk<Task, Task, { rejectValue: string }>(
  "tasks/editTask",
  async (updatedTask, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/task/${updatedTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) throw new Error("Failed to update task");

      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const deleteTask = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("tasks/deleteTask", async (taskId, { rejectWithValue }) => {
  try {
    const response = await fetch(`/api/task/${taskId}`, { method: "DELETE" });

    if (!response.ok) throw new Error("Failed to delete task");

    return taskId;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load tasks";
      })

      .addCase(addTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add task";
      })

      .addCase(editTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      })
      .addCase(editTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update task";
      })

      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete task";
      });
  },
});

export const { setTasks } = taskSlice.actions;

export default taskSlice.reducer;
