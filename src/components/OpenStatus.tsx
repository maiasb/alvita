"use client";

import { useEffect, useState } from "react";
import { hours } from "@/lib/site";

type Status = { open: boolean; text: string } | null;

const WEEKDAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function fmt(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
}

function compute(now: Date): Status {
  // Castanhal usa o horário de Belém (UTC-3, sem horário de verão).
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Belem",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  const day = WEEKDAYS[get("weekday")];
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));

  const today = hours.find((h) => (h.days as readonly number[]).includes(day));
  if (today && today.close > 0) {
    if (minutes >= today.open && minutes < today.close) {
      return { open: true, text: `Aberto agora, fechamos às ${fmt(today.close)}` };
    }
    if (minutes < today.open) {
      return { open: false, text: `Fechado, abrimos hoje às ${fmt(today.open)}` };
    }
  }
  // Próximo dia de atendimento
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const next = hours.find((h) => (h.days as readonly number[]).includes(d));
    if (next && next.close > 0) {
      const label = i === 1 ? "amanhã" : ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"][d];
      return { open: false, text: `Fechado, abrimos ${label} às ${fmt(next.open)}` };
    }
  }
  return null;
}

export function OpenStatus({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => {
    const tick = () => setStatus(compute(new Date()));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  // Reserva o espaço antes da hidratação para evitar salto de layout.
  if (!status) return <span className="inline-block h-5 w-48" aria-hidden />;

  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-medium ${
        tone === "dark" ? "text-white/90" : "text-ink"
      }`}
    >
      <span
        className={`size-2.5 rounded-full ${status.open ? "bg-lime shadow-[0_0_0_4px_rgba(166,193,54,.25)]" : "bg-muted/60"}`}
        aria-hidden
      />
      {status.text}
    </span>
  );
}
