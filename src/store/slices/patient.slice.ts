import api from "@/lib/axiosInstance";
import { Patient, PatientsType } from "@/types/slices/patient";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const initialState: PatientsType = {
  patients: [],
  loading: false,
  error: null,
};

export const fetchPatients = createAsyncThunk(
  "patients/fetchPatients",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/patient");
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch patient"
        );
      }
    }
  }
);

export const addPatient = createAsyncThunk(
  "patients/addPatient",
  async (patientData: Omit<Patient, "id">, { rejectWithValue }) => {
    try {
      const response = await api.post("/patient", patientData);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to add Patient"
        );
      }
    }
  }
);

export const updatePatient = createAsyncThunk(
  "patients/updatePatient",
  async (
    data: Partial<Patient>,
    { rejectWithValue }
  ) => {
    try {
      const response = await api.put(`/patient/${data.id}`, data);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to update Patient"
        );
      }
    }
  }
);

export const deletePatient = createAsyncThunk(
  "patients/deletePatient",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/patient/${id}`);
      return response.data.data.id;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data?.message || "Failed to Detele Patient");
      }
    }
  }
);

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    clearPatientsError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPatients.fulfilled,
        (state, action: PayloadAction<Patient[]>) => {
          state.loading = false;
          state.patients = action.payload;
        }
      )
      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(addPatient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addPatient.fulfilled,
        (state, action: PayloadAction<Patient>) => {
          state.loading = false;
          state.patients.push(action.payload);
        }
      )
      .addCase(addPatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(updatePatient.pending, (state, action) => {
        const index = state.patients.findIndex((p) => p.id === action.meta.arg.id);
        console.log(action.meta.arg);

        if (index !== -1) {
          state.patients[index] = { ...state.patients[index], ...action.meta.arg };
        }
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePatient.fulfilled, (state, action: PayloadAction<Patient>) => {
        state.loading = false;
        const index = state.patients.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.patients[index] = action.payload;
        }
      })
      .addCase(updatePatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(deletePatient.pending, (state, action) => {
        state.patients = state.patients.filter((p) => p.id !== action.meta.arg);
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePatient.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deletePatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearPatientsError } = patientSlice.actions;
export default patientSlice.reducer;
