"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { NextAuthSessionProviderType } from "@/types/provider";

export const NextAuthSessionProvider = ({
  children,
}: NextAuthSessionProviderType) => {
  return <SessionProvider>{children}</SessionProvider>;
};
