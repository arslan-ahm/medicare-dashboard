import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
    };
  }
}

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const doctor = await prisma.doctor.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!doctor || !doctor.id || !doctor.password) {
          throw new Error("Invalid credentials");
        }

        const correctPassword = await bcrypt.compare(
          credentials.password,
          doctor.password
        );

        if (!correctPassword) {
          throw new Error("Invalid credentials");
        }

        console.log("Authorized User:", doctor);
        return { id: doctor.id, name: doctor.name, email: doctor.email };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV !== "production",
  callbacks: {
    async session({ session, token }) {
      console.log("Session Token:", token);
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      console.log("Session User:", session.user);
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      console.log("JWT Token:", token);
      return token;
    },
  },
};
