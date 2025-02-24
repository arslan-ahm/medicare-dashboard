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
      include: {
        patient: true,
      },
      orderBy: { date: "asc" },
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
      date,
      time,
      location,
      purpose,
      duration,
      type,
      status,
      isOnline,
      patientId,
    } = body;
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    if (
      !date ||
      !time ||
      !location ||
      !purpose ||
      !duration ||
      !type ||
      !status ||
      !patientId
    ) {
      return NextResponse.json(
        { status: "error", message: "All required fields must be provided.", ok: false },
        { status: 400 }
      );
    }

    const newAppointment = await prisma.appointment.create({
      data: {
        date: new Date(date),
        time,
        location,
        purpose,
        duration,
        type,
        status,
        isOnline,
        doctor: { connect: { id: doctorId } },
        patient: { connect: { id: patientId } },
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
        { status: "error", message: "Failed to create appointment.", ok: false },
        { status: 500 }
      );
    }
  }
};
