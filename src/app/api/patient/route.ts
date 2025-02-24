import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "GET /api/patient" });
};
export const PUT = async () => {
  return NextResponse.json({ message: "PUT /api/patient" });
};
export const POST = async () => {
  return NextResponse.json({ message: "POST /api/patient" });
};
export const DELETE = async () => {
  return NextResponse.json({ message: "DELETE /api/patient" });
};
