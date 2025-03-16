import { NextResponse } from "next/server";
import crypto from "crypto";
import moment from "moment";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const POST = async (req: Request) => {
    try {
        const { email } = await req.json();

        const doctor = await prisma.doctor.findUnique({
            where: { email },
        });

        if (!doctor) {
            return NextResponse.json({
                success: false,
                status: 404,
                message: "Doctor not found in the database",
            });
        }

        const resetToken = crypto.randomBytes(10).toString("hex");
        const resetTokenExpiration = moment().add(1, "hour").toDate();

        await prisma.doctor.update({
            where: { email },
            data: {
                password: resetToken,
                createdAt: resetTokenExpiration,
            },
        });

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        if (!process.env.NEXTAUTH_URL) {
            return NextResponse.json({
                success: false,
                status: 500,
                message: "'NEXTAUTH_URL' or 'Domain' is not defined in the environment variables properly.",
            });
        }

        const resetLink = `${process.env.NEXTAUTH_URL}/reset-password/?token=${resetToken}`;
console.log('resetLink', resetLink)
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Reset Your Password",
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                <h2 style="color: #333;font-size:18px;font-weight:600;">Reset Your Password</h2>
                <p style="color: #555;">Hi There,</p>
                <p style="color: #555;">We received a request to reset your password. Click the button below to reset it:</p>
                <p>${resetLink}</p>
                <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; margin: 20px 0; font-size: 16px; color: #fff; background-color: #007bff; border-radius: 5px; text-decoration: none;">Reset Password</a>
                <p style="color: #555;">If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
                <p style="color: #555;">Thank you,<br/>The Medicare Dashboard Team.</p>
            </div>
            `,
        };

        const sendMail = await transporter.sendMail(mailOptions);
        if (!sendMail) {
            return NextResponse.json({
                success: false,
                status: 400,
                message: "Something went wrong in sending email",
            });
        }

        return NextResponse.json({
            success: true,
            status: 200,
            message: "Reset password email sent successfully",
        });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : "An error occurred",
            },
            { status: 500 }
        );
    }
};

export const PUT = async (req: Request) => {
    try {
        const { password, token } = await req.json();

        const doctor = await prisma.doctor.findFirst({
            where: {
                password: token,
                createdAt: { gt: moment().subtract(1, "hour").toDate() },
            },
        });

        if (!doctor) {
            return NextResponse.json(
                { success: false, message: "Invalid or expired token" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.doctor.update({
            where: { id: doctor.id },
            data: {
                password: hashedPassword,
                createdAt: new Date(),
            },
        });

        return NextResponse.json(
            { success: true, message: "Password updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : "An error occurred",
            },
            { status: 500 }
        );
    }
};
