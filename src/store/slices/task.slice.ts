import { AxiosError } from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/lib/axiosInstance";
import { Task, TasksType } from "@/types/slices/task";

const initialState: TasksType = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk<
  Task[],
  void,
  { rejectValue: string }
>("tasks/fetchTasks", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("/task");
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch tasks"
      );
    }
  }
});

export const addTask = createAsyncThunk<
  Task,
  Omit<Task, "id">,
  { rejectValue: string }
>("tasks/addTask", async (newTask, { rejectWithValue }) => {
  try {
    const response = await api.post("/task", newTask);
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add task"
      );
    }
  }
});

export const editTask = createAsyncThunk<Task, Task, { rejectValue: string }>(
  "tasks/editTask",
  async (updatedTask, { rejectWithValue }) => {
    try {
      const response = await api.put(`/task/${updatedTask.id}`, updatedTask);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to update task"
        );
      }
    }
  }
);

export const deleteTask = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("tasks/deleteTask", async (taskId, { rejectWithValue }) => {
  try {
    const response = await api.delete(`/task/${taskId}`);
    return response.data.data.id;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data?.message);
    } else {
      return rejectWithValue("Failed to delete task");
    }
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

      .addCase(addTask.pending, (state, action) => {
        state.loading = true;
        state.tasks.push({
          ...action.meta.arg,
          id: crypto.randomUUID(),
        });
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
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

      .addCase(deleteTask.pending, (state, action) => {
        state.loading = true;
        state.tasks = state.tasks.filter((task) => task.id !== action.meta.arg);
      })
      .addCase(deleteTask.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete task";
      });
  },
});

export const { setTasks } = taskSlice.actions;

export default taskSlice.reducer;
