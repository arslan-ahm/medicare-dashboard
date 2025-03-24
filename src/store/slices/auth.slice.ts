import { AxiosError } from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/utils/axiosInstance";
import { AuthState, Doctor } from "@/types/slices/auth";

const initialState: AuthState = {
  doctor: null,
  loading: false,
  error: null,
  successMessage: null,
};

export const fetchDoctor = createAsyncThunk(
  "auth/fetchDoctor",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/doctor");
      return response.data?.user;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch doctor data"
        );
      }
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (
    { oldPassword, newPassword }: { oldPassword: string; newPassword: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.patch("/auth/changePassword", {
        oldPassword,
        newPassword,
      });
      return response.data.message;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error?.message || "Failed to change password"
        );
      }
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
      const response = await api.put("/doctor", {
        name,
        email,
        specialization,
        organization,
      });
      return response.data.doctor;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to update profile"
        );
      }
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
      .addCase(fetchDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.doctor = action.payload;
      })
      .addCase(fetchDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

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
        state.doctor = action.payload;
        state.successMessage = "Profile updated successfully";
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, logout, clearMessages } = authSlice.actions;
export default authSlice.reducer;
