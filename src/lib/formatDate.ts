export const formatDate = (dateString: string): string => {
    const inputDate = new Date(dateString);
    const now = new Date();

    const diffInMilliseconds = inputDate.getTime() - now.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInMonths / 12);

    if (diffInSeconds > 0 && diffInSeconds < 60) return "A moment from now";
    if (diffInSeconds < 0 && diffInSeconds > -60) return "A moment ago";

    if (diffInMinutes > 0 && diffInMinutes < 60) return diffInMinutes === 1 ? "In a minute" : `In ${diffInMinutes} minutes`;
    if (diffInMinutes < 0 && diffInMinutes > -60) return diffInMinutes === -1 ? "A minute ago" : `${Math.abs(diffInMinutes)} minutes ago`;

    // 🔹 Hours
    if (diffInHours > 0 && diffInHours < 24) return diffInHours === 1 ? "In an hour" : `In ${diffInHours} hours`;
    if (diffInHours < 0 && diffInHours > -24) return diffInHours === -1 ? "An hour ago" : `${Math.abs(diffInHours)} hours ago`;

    // 🔹 Days
    if (diffInDays > 0 && diffInDays < 7) return diffInDays === 1 ? "Tomorrow" : `In ${diffInDays} days`;
    if (diffInDays < 0 && diffInDays > -7) return diffInDays === -1 ? "Yesterday" : `${Math.abs(diffInDays)} days ago`;

    // 🔹 Weeks
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks > 0 && diffInWeeks < 4) return diffInWeeks === 1 ? "Next week" : `In ${diffInWeeks} weeks`;
    if (diffInWeeks < 0 && diffInWeeks > -4) return diffInWeeks === -1 ? "Last week" : `${Math.abs(diffInWeeks)} weeks ago`;

    // 🔹 Months
    if (diffInMonths > 0 && diffInMonths < 12) return diffInMonths === 1 ? "Next month" : `In ${diffInMonths} months`;
    if (diffInMonths < 0 && diffInMonths > -12) return diffInMonths === -1 ? "Last month" : `${Math.abs(diffInMonths)} months ago`;

    // 🔹 Years
    if (diffInYears > 0) return diffInYears === 1 ? "Next year" : `In ${diffInYears} years`;
    if (diffInYears < 0) return diffInYears === -1 ? "Last year" : `${Math.abs(diffInYears)} years ago`;

    return "Today";
};
