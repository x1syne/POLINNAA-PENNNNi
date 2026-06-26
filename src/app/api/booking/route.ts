import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

type BookingPayload = {
  name?: string;
  contact?: string;
  pet?: string;
  service?: string;
  comment?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as BookingPayload;

  if (!payload.name || !payload.contact) {
    return NextResponse.json(
      { ok: false, message: "Укажите имя и контакт для связи." },
      { status: 400 },
    );
  }

  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json({
      ok: true,
      mode: "direct",
      message: "Заявка принята. Мы скоро свяжемся с вами.",
    });
  }

  const { error } = await supabase.from("booking_requests").insert({
    name: payload.name,
    contact: payload.contact,
    pet: payload.pet ?? null,
    service: payload.service ?? null,
    comment: payload.comment ?? null,
    source: "website",
  });

  if (error) {
    return NextResponse.json(
      { ok: false, message: "Не получилось отправить заявку. Свяжитесь с нами напрямую." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    mode: "supabase",
    message: "Заявка отправлена. Мы скоро свяжемся с вами.",
  });
}
