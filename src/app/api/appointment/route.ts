import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "GET /api/appointment" });
};
export const PUT = async () => {
  return NextResponse.json({ message: "PUT /api/appointment" });
};
export const POST = async () => {
  return NextResponse.json({ message: "POST /api/appointment" });
};
export const DELETE = async () => {
  return NextResponse.json({ message: "DELETE /api/appointment" });
};
