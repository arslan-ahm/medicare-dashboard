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

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayTasks = tasks.filter(
      (task) => new Date(task.date).toDateString() === today.toDateString()
    );

    const pastUncompletedTasks = tasks.filter(
      (task) => new Date(task.date) < today && task.status !== "COMPLETED"
    );

    const upcomingUncompletedTasks = tasks.filter(
      (task) => new Date(task.date) > today && task.status !== "COMPLETED"
    );

    const upcomingCompletedTasks = tasks.filter(
      (task) => new Date(task.date) > today && task.status === "COMPLETED"
    );

    return NextResponse.json({
      status: "success",
      data: {
        todayTasks,
        pastUncompletedTasks,
        upcomingUncompletedTasks,
        upcomingCompletedTasks,
      },
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

    if (!title || !date || !status || !doctorId) {
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
