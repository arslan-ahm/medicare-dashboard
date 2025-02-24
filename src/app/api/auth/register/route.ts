import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    if (!body.email || !body.password || !body.name) {
      return NextResponse.json({
        error: "Invalid credentials.",
      });
    }

    const doctor = await prisma.doctor.findUnique({
      where: {
        email: body.email,
      },
    });

    if (doctor) {
      return NextResponse.json(
        {
          error: "Doctor already exists.",
          data: doctor,
          ok: false,
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const res = await prisma.doctor.create({
      data: { ...body, password: hashedPassword },
    });

    if (!res) {
      return NextResponse.json({
        error: "Not Created, Prisma DB issue.",
        ok: false,
      });
    }

    console.log(
      "Doctor created successfully..." + body.name + "(" + body.email + ")"
    );

    return NextResponse.json(
      {
        message: "Doctor created successfully.",
        doctor: { name: body.name, email: body.email },
        ok: true,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      error: "Invalid credentials.",
      body: error,
      ok: false,
    });
  }
};
