import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";
export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing credentials");
                }
                const user = await prisma.doctor.findFirst({
                    where: {
                        email: credentials?.email,
                    },
                });
                
                if (!user || !user?.id || !user?.password) {
                    throw new Error("User not registered");
                }

                const isPasswordValid = await bcrypt.compare(credentials?.password as string , user?.password);
                if (!isPasswordValid) {
                    throw new Error("Invalid password");
                }
                return user;
            },
        }),
    ],
    secret: process.env.AUTH_SECRET, 
    session: {
        strategy: "jwt", 
    },
     cookies: {
        sessionToken: {
            name: "next-auth.session-token", 
            options: {
                httpOnly: true, 
                secure: process.env.NODE_ENV === "production", 
                sameSite: "lax", 
                path: "/",
                maxAge: 24 * 60 * 60, 
            },
        },
    },
    debug: process.env.NODE_ENV !== "production",
});