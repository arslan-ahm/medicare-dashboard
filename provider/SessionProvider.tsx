"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

interface NextAuthSessionProvider {
  children: React.ReactNode;
}

export const NextAuthSessionProvider = ({
  children,
}: NextAuthSessionProvider) => {
  return <SessionProvider>{children}</SessionProvider>;
};
