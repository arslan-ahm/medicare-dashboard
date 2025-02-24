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

    const patients = await prisma.patient.findMany({
      where: { doctorId },
      include: { appointments: true },
    });

    return NextResponse.json({
      status: "success",
      data: patients,
      message: "Fetched all patients successfully.",
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to fetch patients.", ok: false },
        { status: 500 }
      );
    }
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const doctorId = req.headers.get("doctorId");
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid JSON format in request body.",
          ok: false,
          error: parseError,
        },
        { status: 400 }
      );
    }

    if (!body) {
      return NextResponse.json(
        { status: "error", message: "Invalid request body.", ok: false },
        { status: 400 }
      );
    }

    if (!doctorId || doctorId.length !== 24) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid or missing doctor ID.",
          ok: false,
        },
        { status: 401 }
      );
    }

    const requiredFields = [
      "forename",
      "surname",
      "dateOfBirth",
      "diagnosis",
      "status",
      "gender",
    ];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { status: "error", message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const validStatuses = [
      "RECOVERED",
      "AWAITING_SURGERY",
      "ON_TREATMENT",
      "OTHER",
    ];
    if (!validStatuses.includes(body.status)) {
      return NextResponse.json(
        { status: "error", message: "Invalid patient status.", ok: false },
        { status: 400 }
      );
    }

    const validGenders = ["MALE", "FEMALE", "OTHER"];
    if (!validGenders.includes(body.gender)) {
      return NextResponse.json(
        { status: "error", message: "Invalid gender value.", ok: false },
        { status: 400 }
      );
    }

    const parsedDateOfBirth = new Date(body.dateOfBirth);
    if (isNaN(parsedDateOfBirth.getTime())) {
      return NextResponse.json(
        { status: "error", message: "Invalid dateOfBirth format.", ok: false },
        { status: 400 }
      );
    }

    const newPatient = await prisma.patient.create({
      data: {
        forename: body.forename,
        surname: body.surname,
        phone: body.phone,
        dateOfBirth: new Date(body.dateOfBirth),
        gender: body.gender,
        diagnosis: body.diagnosis,
        status: body.status,
        notes: body.notes,
        doctorId: doctorId,
      },
    });

    return NextResponse.json({
      status: "success",
      data: newPatient,
      message: "Patient created successfully.",
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          status: "error",
          message: "Failed to create patient.",
          ok: false,
          error,
        },
        { status: 500 }
      );
    }
  }
};
