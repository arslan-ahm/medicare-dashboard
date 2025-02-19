import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    const doctors = await prisma.doctor.findMany();
    return NextResponse.json({ success: true, data: doctors });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Database error" },
      { status: 500 }
    );
  }
};

const POST = async () => {
  return NextResponse.json({
    success: true,
    message: "POST request to /api/test",
  });
};

export { GET, POST };
