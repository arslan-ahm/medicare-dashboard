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

    const tasks = await prisma.task.findMany({
      where: { doctorId },
      orderBy: {
        date: "asc",
      },
    });
    
    return NextResponse.json({
      status: "success",
      data: tasks,
      message: "Fetched all tasks successfully.",
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to fetch tasks.", ok: false },
        { status: 500 }
      );
    }
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }
    
    const { title, description, date, status } = await req.json();

    
    if (!title || !date || status === undefined) {
      return NextResponse.json(
        { status: "error", message: "Missing required fields.", ok: false },
        { status: 400 }
      );
    }
    
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        date: new Date(date),
        status,
        doctorId,
      },
    });
    
    await prisma.doctor.update({
      where: { id: doctorId },
      data: {
        tasks: { connect: { id: newTask.id } },
      },
    });
    
    return NextResponse.json({
      status: "success",
      data: newTask,
      message: "Task created successfully.",
      ok: true
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to create task.", ok: false },
        { status: 500 }
      );
    }
  }
};
