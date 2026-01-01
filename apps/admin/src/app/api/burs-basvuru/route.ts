import { prisma } from "@tkb/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const start = parseInt(searchParams.get("_start") || "0");
  const end = parseInt(searchParams.get("_end") || "10");
  const sort = searchParams.get("_sort") || "createdAt";
  const order = searchParams.get("_order") || "DESC";

  const [data, total] = await Promise.all([
    prisma.bursBasvuru?.findMany({
      skip: start,
      take: end - start,
      orderBy: { [sort]: order.toLowerCase() as "asc" | "desc" },
    }),
    prisma.bursBasvuru?.count(),
  ]);

  return NextResponse.json(data, {
    headers: {
      "x-total-count": total.toString(),
      "Access-Control-Expose-Headers": "x-total-count",
    },
  });
}

