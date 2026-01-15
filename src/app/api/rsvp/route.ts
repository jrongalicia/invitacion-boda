import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const attending = body.attending === true;
    const attendees = Number(body.attendees || 1);
    const note = body.note ? String(body.note).trim() : null;

    if (!name) {
      return NextResponse.json(
        { ok: false, message: "El nombre es obligatorio." },
        { status: 400 }
      );
    }

    if (attendees < 1 || attendees > 20) {
      return NextResponse.json(
        { ok: false, message: "Cantidad inválida." },
        { status: 400 }
      );
    }

    const rsvp = await prisma.rsvp.create({
      data: {
        name,
        attending,
        attendees,
        note,
      },
    });

    return NextResponse.json({ ok: true, rsvp });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Error al guardar RSVP." },
      { status: 500 }
    );
  }
}
