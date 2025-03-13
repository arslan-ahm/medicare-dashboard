import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Appointment, AppointmentsType } from "@/types/slices/appointment";
import api from "@/lib/axiosInstance";


const initialState: AppointmentsType = {
  appointments: [],
  loading: false,
  error: null,
};

export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/appointment");
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch Appointments"
        );
      }
    }
  }
);

export const addAppointment = createAsyncThunk(
  "appointments/addAppointment",
  async (appointmentData: Omit<Appointment, "id">, { rejectWithValue }) => {
    try {
      const response = await api.post("/appointment", appointmentData);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to add Appointment"
        );
      }
    }
  }
);

export const updateAppointment = createAsyncThunk(
  "appointments/updateAppointment",
  async (
    updateData: Partial<Appointment>,
    { rejectWithValue }
  ) => {
    try {
      const response = await api.put(`/appointment/${updateData.id}`, updateData);
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

export const deleteAppointment = createAsyncThunk(
  "appointments/deleteAppointment",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/appointment/${id}`);
      console.log("API Response:", response.data);
      return response.data.data.id;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || "Failed to Detele Appointment");
      }
    }
  }
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    clearAppointmentsError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAppointments.fulfilled,
        (state, action: PayloadAction<Appointment[]>) => {
          state.loading = false;
          state.appointments = action.payload;
        }
      )
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(addAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addAppointment.fulfilled,
        (state, action: PayloadAction<Appointment>) => {
          state.loading = false;
          state.appointments.push(action.payload);
        }
      )
      .addCase(addAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(updateAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateAppointment.fulfilled,
        (state, action: PayloadAction<Appointment>) => {
          state.loading = false;
          const index = state.appointments.findIndex(
            (a) => a.id === action.payload.id
          );
          if (index !== -1) {
            state.appointments[index] = action.payload;
          }
        }
      )
      .addCase(updateAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(deleteAppointment.pending, (state, action) => {
        state.loading = true;
        state.appointments = state.appointments.filter(
          (appt) => appt.id !== action.meta.arg
        );
      })
      .addCase(deleteAppointment.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || "Failed to delete appointment";
      });

  },
});

export const { clearAppointmentsError } = appointmentSlice.actions;
export default appointmentSlice.reducer;
