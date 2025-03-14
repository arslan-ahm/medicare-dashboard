import api from "@/lib/axiosInstance";
import { NotificationState, Notification } from "@/types/slices/notification";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const initialState: NotificationState = {
    notifications: [],
    loading: false,
    error: null,
};

export const fetchNotifications = createAsyncThunk(
    "notifications/fetchNotifications",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/notification");
            return response.data.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                return rejectWithValue(
                    error.response?.data?.message || "Failed to fetch notifications"
                );
            }
        }
    }
);

export const addNotification = createAsyncThunk(
    "notifications/addNotification",
    async (notificationData: Omit<Notification, "id">, { rejectWithValue }) => {
        try {
            const response = await api.post("/notification", notificationData);
            return response.data.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                return rejectWithValue(
                    error.response?.data?.message || "Failed to add notification"
                );
            }
        }
    }
);

export const markNotificationAsRead = createAsyncThunk(
    "notifications/markNotificationAsRead",
    async (id: string, { rejectWithValue }) => {
        try {
            await api.patch(`/notification/${id}`);
            return id;
        } catch (error) {
            if (error instanceof AxiosError) {
                return rejectWithValue(
                    error.response?.data?.message || "Failed to mark notification as read"
                );
            }
        }
    }
);

export const markAllNotificationsAsRead = createAsyncThunk(
    "notifications/markAllNotificationsAsRead",
    async (_, { rejectWithValue }) => {
        try {
            await api.patch("/notification");
            return;
        } catch (error) {
            if (error instanceof AxiosError) {
                return rejectWithValue(
                    error.response?.data?.message || "Failed to mark all notifications as read"
                );
            }
        }
    }
);

export const deleteNotification = createAsyncThunk(
    "notifications/deleteNotification",
    async (id: string, { rejectWithValue }) => {
        try {
            await api.delete(`/notification/${id}`);
            return id;
        } catch (error) {
            if (error instanceof AxiosError) {
                return rejectWithValue(
                    error.response?.data?.message || "Failed to delete notification"
                );
            }
        }
    }
);

export const deleteAllNotifications = createAsyncThunk(
    "notifications/deleteAllNotifications",
    async (_, { rejectWithValue }) => {
        try {
            await api.delete("/notification");
            return;
        } catch (error) {
            if (error instanceof AxiosError) {
                return rejectWithValue(
                    error.response?.data?.message || "Failed to delete all notifications"
                );
            }
        }
    }
);


const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        clearNotificationsError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotifications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchNotifications.fulfilled,
                (state, action: PayloadAction<Notification[]>) => {
                    state.loading = false;
                    state.notifications = action.payload;
                }
            )
            .addCase(fetchNotifications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(addNotification.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                addNotification.fulfilled,
                (state, action: PayloadAction<Notification>) => {
                    state.loading = false;
                    state.notifications.push(action.payload);
                }
            )
            .addCase(addNotification.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(markNotificationAsRead.fulfilled, (state, action) => {
                state.notifications = state.notifications.map((notif) =>
                    notif.id === action.payload ? { ...notif, isRead: true } : notif
                );
            })
            .addCase(markAllNotificationsAsRead.fulfilled, (state) => {
                state.notifications = state.notifications.map((notif) => ({
                    ...notif,
                    isRead: true,
                }));
            })
            .addCase(deleteNotification.fulfilled, (state, action) => {
                state.notifications = state.notifications.filter(
                    (notif) => notif.id !== action.payload
                );
            })
            .addCase(deleteAllNotifications.fulfilled, (state) => {
                state.notifications = [];
            });
    },
});


export const { clearNotificationsError } = notificationsSlice.actions;
export default notificationsSlice.reducer;
