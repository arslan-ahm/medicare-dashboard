import axios from "axios";
import { getSession } from "next-auth/react";

const api = axios.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:3000/api/",
});

api.interceptors.request.use(
  async (config) => {
    try {
      const session = await getSession();
      if (session?.user?.id) {
        config.headers["doctorId"] = session.user.id;
      }
    } catch (error) {
      console.error("Error setting auth header:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
