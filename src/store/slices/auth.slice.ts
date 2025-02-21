import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Doctor {
  id: string;
  name: string;
  email: string;
  organization: string;
  specialization: string;

  patients: string[];
  appointments: string[];
  tasks: string[];
}

interface AuthState {
  doctor: Doctor | null;
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: AuthState = {
  doctor: null,
  loading: false,
  error: null,
  successMessage: null,
};

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (
    { oldPassword, newPassword }: { oldPassword: string; newPassword: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch("/api/auth/changePassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Failed to change password");

      return data.message;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (
    { name, email, specialization, organization }: Partial<Doctor>,
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch("/api/auth/updateProfile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, specialization, organization }),
      });

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Failed to update profile");

      return data.doctor; // Returning updated doctor data
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Doctor | null>) => {
      state.doctor = action.payload;
      state.error = null;
      state.successMessage = null;
    },
    logout: (state) => {
      state.doctor = null;
      state.error = null;
      state.successMessage = null;
      state.loading = false;
    },
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Profile updated successfully";
        state.doctor = action.payload; // Update doctor info
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, logout, clearMessages } = authSlice.actions;
export default authSlice.reducer;
