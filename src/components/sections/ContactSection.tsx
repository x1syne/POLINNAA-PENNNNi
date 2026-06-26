"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { ArrowRight, ChatCircleText, MapPin, PaperPlaneTilt } from "@phosphor-icons/react";
import { site } from "@/data/site";

type FormState = {
  status: "idle" | "sending" | "success" | "error";
  message: string;
};

export function ContactSection() {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "sending", message: "Отправляем заявку..." });

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message ?? "Не получилось отправить заявку.");
      }

      form.reset();
      setState({ status: "success", message: data.message ?? "Заявка отправлена." });
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "Не получилось отправить заявку.",
      });
    }
  }

  return (
    <section className="section" id="contacts">
      <div className="mb-9">
        <div className="section-kicker">Контакты</div>
        <h2 className="section-title">Записаться на услугу</h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.86fr]">
        <form className="glass-card grid gap-4 rounded-card p-6 md:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 font-black">
              Ваше имя
              <input className="min-h-14 rounded-2xl border border-border bg-white px-4 font-bold" name="name" placeholder="Например, Анна" required />
            </label>
            <label className="grid gap-2 font-black">
              Контакт
              <input className="min-h-14 rounded-2xl border border-border bg-white px-4 font-bold" name="contact" placeholder="Telegram, VK или телефон" required />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 font-black">
              Питомец
              <input className="min-h-14 rounded-2xl border border-border bg-white px-4 font-bold" name="pet" placeholder="Шпиц, кот, йорк" />
            </label>
            <label className="grid gap-2 font-black">
              Услуга
              <select className="min-h-14 rounded-2xl border border-border bg-white px-4 font-bold" name="service" defaultValue="Комплекс">
                <option>Комплекс</option>
                <option>Гигиена</option>
                <option>Экспресс-линька</option>
                <option>Когти / уши / глаза</option>
                <option>Нужна консультация</option>
              </select>
            </label>
          </div>
          <label className="grid gap-2 font-black">
            Комментарий
            <textarea className="min-h-32 resize-y rounded-2xl border border-border bg-white px-4 py-3 font-bold" name="comment" placeholder="Возраст, порода, состояние шерсти, удобное время" />
          </label>
          <button className="button-base button-primary" type="submit" disabled={state.status === "sending"}>
            {state.status === "sending" ? "Отправляем..." : "Отправить заявку"}
            <PaperPlaneTilt size={22} weight="fill" />
          </button>
          {state.message ? (
            <p className={state.status === "error" ? "font-bold text-accent-strong" : "font-bold text-muted"} role="status">
              {state.message}
            </p>
          ) : null}
        </form>

        <div className="grid gap-5">
          <article className="dark-card rounded-card p-6 md:p-8">
            <div className="relative mb-6 overflow-hidden rounded-full bg-white">
              <Image className="mx-auto aspect-square w-40 object-cover" src="/media/contact-pet.webp" alt="Питомец в салоне" width={320} height={320} />
            </div>
            <h3 className="text-4xl font-black leading-tight">Можно написать напрямую</h3>
            <div className="mt-6 grid gap-3">
              <a className="button-base button-primary" href={site.telegram} target="_blank" rel="noreferrer">
                <ChatCircleText size={22} weight="fill" />
                Telegram канала
              </a>
              <a className="button-base bg-white text-text" href={site.managerTelegram} target="_blank" rel="noreferrer">
                <PaperPlaneTilt size={22} weight="fill" />
                Написать мастеру
              </a>
              <a className="button-base bg-white/12 text-white" href={site.maps} target="_blank" rel="noreferrer">
                <MapPin size={22} weight="fill" />
                {site.address}
              </a>
            </div>
          </article>
          <article className="glass-card rounded-card p-6 md:p-8">
            <div className="text-sm font-black uppercase text-accent-strong">Адрес</div>
            <h3 className="mt-2 text-3xl font-black">{site.city}, {site.address}</h3>
            <a className="mt-6 inline-flex items-center gap-2 font-black text-accent-strong" href={site.maps} target="_blank" rel="noreferrer">
              Открыть Яндекс Карты
              <ArrowRight size={20} weight="bold" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
