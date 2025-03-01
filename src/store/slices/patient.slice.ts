import { Patient, PatientsType } from "@/types/slices/patient";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: PatientsType = {
  patients: [],
  loading: false,
  error: null,
};

export const fetchPatients = createAsyncThunk(
  "patients/fetchPatients",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/patient");
      if (!response.ok) throw new Error("Failed to fetch patients");
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const addPatient = createAsyncThunk(
  "patients/addPatient",
  async (patientData: Omit<Patient, "id">, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData),
      });

      if (!response.ok) throw new Error("Failed to add patient");
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const updatePatient = createAsyncThunk(
  "patients/updatePatient",
  async (
    { id, data }: { id: string; data: Partial<Patient> },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`/api/patient/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update patient");
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const deletePatient = createAsyncThunk(
  "patients/deletePatient",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/patient/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete patient");
      return id;
    } catch (error) {
      return rejectWithValue((error as Error).message);
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

      .addCase(updatePatient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updatePatient.fulfilled,
        (state, action: PayloadAction<Patient>) => {
          state.loading = false;
          const index = state.patients.findIndex(
            (p) => p.id === action.payload.id
          );
          if (index !== -1) {
            state.patients[index] = action.payload;
          }
        }
      )
      .addCase(updatePatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(deletePatient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deletePatient.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.patients = state.patients.filter(
            (p) => p.id !== action.payload
          );
        }
      )
      .addCase(deletePatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearPatientsError } = patientSlice.actions;
export default patientSlice.reducer;
