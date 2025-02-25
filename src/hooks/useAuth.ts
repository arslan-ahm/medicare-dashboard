"use client";

// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { RootState } from "@/store/store";
// import axios from "axios";

export function useAuth() {
  const user = useSelector((state: RootState) => state.auth.doctor);

  // useEffect(() => {
  //   async function fetchSession() {
  //     try {
  //       const session = await getSession();
  //       console.log("Session =>", session);

  //       if (session?.user?.id) {
  //         axios.defaults.headers.common[
  //           "doctorId"
  //         ] = `Bearer ${session.user.id}`;
  //       }
  //     } catch (error) {
  //       console.error("Error =>", error);
  //     }
  //   }

  //   fetchSession();
  // }, []);

  return { user, signOut };
}
