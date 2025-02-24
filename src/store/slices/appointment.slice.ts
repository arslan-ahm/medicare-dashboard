import { Appointment, AppointmentsType } from "@/types/slices/appointment";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


const initialState: AppointmentsType = {
  appointments: [],
  loading: false,
  error: null,
};

export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/appointment");
      if (!response.ok) throw new Error("Failed to fetch appointments");
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const addAppointment = createAsyncThunk(
  "appointments/addAppointment",
  async (appointmentData: Omit<Appointment, "id">, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) throw new Error("Failed to add appointment");
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const updateAppointment = createAsyncThunk(
  "appointments/updateAppointment",
  async (
    { id, data }: { id: string; data: Partial<Appointment> },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`/api/appointment/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update appointment");
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const deleteAppointment = createAsyncThunk(
  "appointments/deleteAppointment",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/appointment/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete appointment");
      return id;
    } catch (error) {
      return rejectWithValue((error as Error).message);
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

      .addCase(deleteAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deleteAppointment.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.appointments = state.appointments.filter(
            (a) => a.id !== action.payload
          );
        }
      )
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearAppointmentsError } = appointmentSlice.actions;
export default appointmentSlice.reducer;
