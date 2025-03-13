import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = async (req: NextRequest) => {
  try {
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    const appointments = await prisma.appointment.findMany({
      where: { doctorId },
    });

    return NextResponse.json({
      status: "success",
      data: appointments,
      message: "Fetched all appointments successfully.",
      ok: true
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to fetch appointments.", ok: false },
        { status: 500 }
      );
    }
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const {
      start_time,
      end_time,
      patientName,
      purpose,
      type,
      status,
      isOnline,
    } = body;
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    if (
      !patientName ||
      !purpose ||
      !start_time ||
      !end_time ||
      !status ||
      !type ||
      isOnline === undefined
    ) {
      return NextResponse.json(
        { status: "error", message: "All required fields must be provided.", ok: false },
        { status: 400 }
      );
    }

    const newAppointment = await prisma.appointment.create({
      data: {
        start_time,
        end_time,
        purpose,
        patientName,
        type,
        status,
        isOnline,
        doctor: { connect: { id: doctorId } },
      },
    });

    return NextResponse.json({
      status: "success",
      data: newAppointment,
      message: "Appointment created successfully.",
      ok: true
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: error.message, ok: false },
        { status: 500 }
      );
    }
  }
};
