import { prisma } from "@tkb/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = await prisma.uyelikBasvuru.create({
      data: {
        ad: body.ad,
        soyad: body.soyad,
        telefon: body.telefon,
        eposta: body.eposta,
        meslek: body.meslek,
        notlar: body.notlar,
        kvkkOnay: body.kvkkOnay,
      },
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Üyelik başvuru hatası:", error);
    return NextResponse.json({ success: false, error: "Başvuru sırasında bir hata oluştu." }, { status: 500 });
  }
}

