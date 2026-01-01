import { prisma } from "@tkb/db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.uyelikBasvuru.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(data);
}

