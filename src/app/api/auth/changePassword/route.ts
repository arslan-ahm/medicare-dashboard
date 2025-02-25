import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest) => {
  try {
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    const { oldPassword, newPassword } = await req.json();

    const doctor = await prisma.doctor.findUnique({
      where: { id: doctorId },
      select: { password: true },
    });

    if (!doctor) {
      return NextResponse.json(
        { status: "error", message: "Doctor not found.", ok: false },
        { status: 404 }
      );
    }

    const isPasswordMatch = await bcrypt.compare(oldPassword, doctor.password);

    if (!isPasswordMatch) {
      return NextResponse.json(
        { status: "error", message: "Old password is incorrect.", ok: false },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.doctor.update({
      where: { id: doctorId },
      data: { password: hashedPassword },
    });

    return NextResponse.json({
      status: "success",
      message: "Password updated successfully.",
      ok: true,
    });
  } catch (error) {
    console.error("Error updating password:", error);
    return NextResponse.json(
      { status: "error", message: "Internal Server Error", ok: false },
      { status: 500 }
    );
  }
};
