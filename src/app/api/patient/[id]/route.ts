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

    const patient = await prisma.patient.findUnique({
      where: { id },
      include: { doctor: true, appointments: true },
    });

    if (!patient) {
      return NextResponse.json(
        { status: "error", message: "Patient not found.", ok: false },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: "success",
      data: patient,
      message: "Fetched patient successfully.",
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to fetch patient.", ok: false },
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
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    const body = await req.json();

    const updatedPatient = await prisma.patient.update({
      where: { id },
      data: body,
    });

    return NextResponse.json({
      status: "success",
      data: updatedPatient,
      message: "Patient updated successfully.",
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to update patient.", ok: false },
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

    await prisma.patient.delete({ where: { id } });

    return NextResponse.json({
      status: "success",
      message: "Patient deleted successfully.",
      ok: true
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to delete patient.", ok: false },
        { status: 500 }
      );
    }
  }
};
