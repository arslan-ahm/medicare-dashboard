import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const task = await prisma.task.findUnique({ where: { id } });
    const doctorId = req.headers.get("doctorid");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    if (!task) {
      return NextResponse.json(
        { status: "error", message: "Task not found.", ok: false },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: "success",
      data: task,
      message: "Task fetched successfully.",
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to fetch task.", ok: false },
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
    const body = await req.json();
    const doctorId = req.headers.get("doctorid");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: body,
    });

    return NextResponse.json({
      status: "success",
      data: updatedTask,
      message: "Task updated successfully.",
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to update task.", ok: false },
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
    const doctorId = req.headers.get("doctorid");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    await prisma.task.delete({
      where: { id },
    });

    return NextResponse.json({
      status: "success",
      message: "Task deleted successfully.",
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: "error", message: "Failed to delete task.", ok: false },
        { status: 500 }
      );
    }
  }
};
