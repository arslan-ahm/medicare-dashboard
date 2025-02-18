"use client";

import React from "react";
import { store } from "@/store/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
}

export default ReduxProvider;
