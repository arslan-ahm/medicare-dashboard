import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    console.log("Step - 1");
    const doctorId = req.headers.get("doctorId");
    console.log("Step - 2");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }
    console.log("Step - 3");

    const user = await prisma.doctor.findUnique({
      where: { id: doctorId }
    });
    console.log("Step - 4");


    return NextResponse.json({
      message: "Got the user successfully.",
      ok: true,
      user,
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { status: "error", message: "Internal Server Error", error },
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    const body = await req.json();

    const updatedDoctor = await prisma.doctor.update({
      where: { id: doctorId },
      data: body,
    });

    return NextResponse.json({
      status: "success",
      data: updatedDoctor,
      message: "Doctor updated successfully.",
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
