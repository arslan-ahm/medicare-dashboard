export type Notification = {
    id: string;
    title: string;
    text: string;
    isRead: boolean;
    time: string;
    doctorId: string;
}

export type NotificationState = {
    notifications: Notification[];
    loading: boolean;
    error: string | null;
}
