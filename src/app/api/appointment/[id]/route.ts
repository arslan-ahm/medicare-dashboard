import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    const appointment = await prisma.appointment.findUnique({
      where: { id },
    });

    if (!appointment) {
      return NextResponse.json(
        { status: "error", message: "Appointment not found.", ok: false },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: "success",
      data: appointment,
      message: "Appointment fetched successfully.",
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to fetch appointment.", ok: false },
        { status: 500 }
      );
    }
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const body = await req.json();
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    const oldAppointment = await prisma.appointment.findUnique({
      where: { id },
    });

    const { start_time, end_time, patientName, purpose, type, status, isOnline } = body;
    const updatedAppointment = await prisma.appointment.update({
      where: { id },
      data: {
        patientName,
        start_time,
        end_time,
        purpose,
        type,
        status,
        isOnline,
        doctorId,
      },
    });

    const formatDate = (date: string) => new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    const changes = [];
    if (oldAppointment?.patientName !== patientName) changes.push(`Patient Name: ${oldAppointment?.patientName} → ${patientName}`);
    if (oldAppointment?.start_time && oldAppointment.start_time !== start_time) changes.push(`Start Time: ${formatDate(oldAppointment.start_time)} → ${formatDate(start_time)}`);
    if (oldAppointment?.end_time && oldAppointment?.end_time !== end_time) changes.push(`End Time: ${formatDate(oldAppointment?.end_time)} → ${formatDate(end_time)}`);
    if (oldAppointment?.purpose !== purpose) changes.push(`Purpose: ${oldAppointment?.purpose} → ${purpose}`);
    if (oldAppointment?.type !== type) changes.push(`Type: ${oldAppointment?.type} → ${type}`);
    if (oldAppointment?.status !== status) changes.push(`Status: ${oldAppointment?.status} → ${status}`);
    if (oldAppointment?.isOnline !== isOnline) changes.push(`Online: ${oldAppointment?.isOnline ? "Yes" : "No"} → ${isOnline ? "Yes" : "No"}`);

    await prisma.notification.create({
      data: {
        title: "Appointment Updated",
        text: `Your appointment with ${patientName} has been updated. Changes: ${changes.length > 0 ? changes.join(", ") : "No significant changes."}`,
        isRead: false,
        time: new Date().toISOString(),
        doctorId: updatedAppointment.doctorId,
      },
    });

    return NextResponse.json({
      status: "success",
      data: updatedAppointment,
      message: "Appointment updated successfully.",
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to update appointment.", ok: false },
        { status: 500 }
      );
    }
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    const itemToDelete = await prisma.appointment.findUnique({ where: { id } });

    if (!itemToDelete) {
      return NextResponse.json(
        { status: "error", message: "Task not found.", ok: false },
        { status: 404 }
      );
    }
    return NextResponse.json({
      status: "success",
      data: itemToDelete,
      message: "Appointment deleted successfully.",
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to delete appointment.", ok: false },
        { status: 500 }
      );
    }
  }
};
