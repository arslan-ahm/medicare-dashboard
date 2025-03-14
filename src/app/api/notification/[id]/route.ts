import { prisma } from "@/lib/prisma";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";


export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const doctorId = req.headers.get("doctorId");

        if (!doctorId) {
            return NextResponse.json(
                { status: "error", message: "Unauthorized access.", ok: false },
                { status: 401 }
            );
        }

        if (!id) return NextResponse.json(
            { status: "error", message: "Missing notification ID.", ok: false },
            { status: 400 }
        );

        const notification = await prisma.notification.updateMany({
            where: { id, doctorId },
            data: { isRead: true },
        });

        if (notification.count === 0) {
            return NextResponse.json(
                { status: "error", message: "Notification not found or unauthorized.", ok: false },
                { status: 404 }
            );
        }

        return NextResponse.json({
            status: "success",
            message: "Notification marked as read.",
            ok: true,
        }, { status: 200 });
    } catch (error) {
        if (error instanceof AxiosError) {
            return NextResponse.json(
                { status: "error", message: error?.message || "Error updating notification.", ok: false },
                { status: 500 }
            );
        }
    }
}


export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const doctorId = req.headers.get("doctorId");

        if (!doctorId) {
            return NextResponse.json(
                { status: "error", message: "Unauthorized access.", ok: false },
                { status: 401 }
            );
        }

        if (!id) return NextResponse.json(
            { status: "error", message: "Missing notification ID.", ok: false },
            { status: 400 }
        );

        const notification = await prisma.notification.deleteMany({
            where: { id, doctorId },
        });

        if (notification.count === 0) {
            return NextResponse.json(
                { status: "error", message: "Notification not found or unauthorized.", ok: false },
                { status: 404 }
            );
        }

        return NextResponse.json({
            status: "success",
            message: "Notification deleted successfully.",
            ok: true,
        }, { status: 200 });
    } catch (error) {
        if (error instanceof AxiosError) {
            return NextResponse.json(
                { status: "error", message: error?.message || "Error deleting notification.", ok: false },
                { status: 500 }
            );
        }
    }
}