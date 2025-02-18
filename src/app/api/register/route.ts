import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    if (!body.email || !body.password || !body.name) {
      return NextResponse.json({
        error: "Invalid credentials.",
      });
    }
    // console.log("Creating doctor...");

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
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    // console.log("Got Input...", name, email, password, specialization);
    const res = await prisma.doctor.create({
      data: { ...body, password: hashedPassword },
    });

    if (!res) {
      return NextResponse.json({
        error: "Not Created, Prisma DB issue.",
      });
    }

    console.log(
      "Doctor created successfully..." + body.name + "(" + body.email + ")"
    );

    return NextResponse.json(
      {
        message: "Doctor created successfully.",
        doctor: { name: body.name, email: body.email },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      error: "Invalid credentials.",
      body: error,
    });
  }
};
