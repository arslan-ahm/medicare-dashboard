import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { NextAuthSessionProvider } from "../../provider/SessionProvider";
import ReduxProvider from "../../provider/ReduxProvider";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MediCare - Dashboard",
  description:
    "MediCare - Dashboard for doctors and patients to manage their appointments, prescriptions, and medical records.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} scroll-smooth`}>
        <NextAuthSessionProvider>
          <ReduxProvider>{children}</ReduxProvider>
          <Toaster />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
