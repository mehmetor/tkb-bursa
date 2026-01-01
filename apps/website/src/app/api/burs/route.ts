import { prisma } from "@tkb/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = await prisma.bursBasvuru.create({
      data: {
        ad: body.ad,
        soyad: body.soyad,
        tcNo: body.tcNo,
        telefon: body.telefon,
        eposta: body.eposta,
        universite: body.universite,
        bolum: body.bolum,
        sinif: body.sinif,
        ogrenciBelgesi: body.ogrenciBelgesi || "",
        transkript: body.transkript || "",
        gelirBeyani: body.gelirBeyani || "",
        kvkkOnay: body.kvkkOnay,
      },
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Burs başvuru hatası:", error);
    return NextResponse.json({ success: false, error: "Başvuru sırasında bir hata oluştu." }, { status: 500 });
  }
}

