import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const task = await prisma.task.findUnique({ where: { id } });
    const doctorId = req.headers.get("doctorId");

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
  const body = await req.json();
  try {
    const { id } = params;
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    console.log("PUT request - Step 4");
    const { date, status, description, title } = body;

    const updatedTask = await prisma.task.update({
      where: { id }, // Use id for lookup
      data: {
        date:  new Date(date), 
        status, 
        description, 
        title
      },
    });

    console.log("PUT request - Step 5", updatedTask);

    return NextResponse.json({
      status: "success",
      data: updatedTask,
      message: "Task updated successfully.",
      ok: true,
    });
  } catch (error) {
    console.log('Request message =>', body);
    console.log('Error message =>', error);
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
    const doctorId = req.headers.get("doctorId");

    if (!doctorId) {
      return NextResponse.json(
        { status: "error", message: "Unauthorized access.", ok: false },
        { status: 401 }
      );
    }

    const itemToDelete = await prisma.task.findUnique({ where: { id } });

    if (!itemToDelete) {
      return NextResponse.json(
        { status: "error", message: "Task not found.", ok: false },
        { status: 404 }
      );
    }

    await prisma.task.delete({
      where: { id },
    });

    return NextResponse.json({
      status: "success",
      data: itemToDelete,
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
