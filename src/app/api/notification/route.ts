
import { prisma } from "@/lib/prisma";
import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const doctorId = req.headers.get("doctorId");

        if (!doctorId) {
            return NextResponse.json(
                { status: "error", message: "Unauthorized access.", ok: false },
                { status: 401 }
            );
        }

        const notifications = await prisma.notification.findMany({
            where: { doctorId },
            orderBy: { time: "desc" },
        });

        return NextResponse.json({
            status: "success",
            data: notifications,
            message: "Fetched all notifications successfully.",
            ok: true
        });
    } catch (error) {
        if (error instanceof AxiosError) {
            return NextResponse.json(
                { status: "error", message: error?.message || "Failed to fetch notifications.", ok: false },
                { status: 500 }
            );
        }
    }
}

export async function POST(req: NextRequest) {
    try {
        const doctorId = req.headers.get("doctorId");

        if (!doctorId) {
            return NextResponse.json(
                { status: "error", message: "Unauthorized access.", ok: false },
                { status: 401 }
            );
        }

        const { title, text } = await req.json();
        if (!title || !text) {
            return NextResponse.json(
                { status: "error", message: "Missing required fields.", ok: false },
                { status: 400 }
            );
        }

        const notification = await prisma.notification.create({
            data: { title, text, isRead: false, time: new Date().toISOString(), doctorId },
        });

        return NextResponse.json({
            status: "success",
            data: notification,
            message: "Notification created successfully.",
            ok: true,
        }, { status: 201 });

    } catch (error) {
        if (error instanceof AxiosError) {
            return NextResponse.json(
                { status: "error", message: error?.message || "Error creating notification.", ok: false },
                { status: 500 }
            );
        }
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const doctorId = req.headers.get("doctorId");

        if (!doctorId) {
            return NextResponse.json(
                { status: "error", message: "Unauthorized access.", ok: false },
                { status: 401 }
            );
        }

        await prisma.notification.updateMany({
            where: { doctorId, isRead: false },
            data: { isRead: true },
        });

        return NextResponse.json({
            status: "success",
            message: "All unread notifications marked as read.",
            ok: true,
        }, { status: 200 });
    } catch (error) {
        if (error instanceof AxiosError) {
            return NextResponse.json(
                { status: "error", message: error?.message || "Error marking notifications as read.", ok: false },
                { status: 500 });
        }
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const doctorId = req.headers.get("doctorId");

        if (!doctorId) {
            return NextResponse.json(
                { status: "error", message: "Unauthorized access.", ok: false },
                { status: 401 }
            );
        }

        await prisma.notification.deleteMany({ where: { doctorId } });

        return NextResponse.json({
            status: "success",
            message: "All notifications deleted successfully.",
            ok: true,
        }, { status: 200 });
    } catch (error) {
        if (error instanceof AxiosError) {
            return NextResponse.json(
                { status: "error", message: error?.message || "Error deleting notifications.", ok: false },
                { status: 500 }
            );
        }
    }
}
