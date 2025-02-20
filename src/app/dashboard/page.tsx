"use client";

import { getSession } from "next-auth/react";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    async function fetchSession() {
      try {
        const session = await getSession();
        console.log("Session =>", session);
      } catch (error) {
        console.error("Error =>", error);
      }
    }
    fetchSession();
  }, []);

  return <div>Dashboard</div>;
};

export default Page;
