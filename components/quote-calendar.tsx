"use client";

import { useMemo, useState } from "react";

type Props = {
  value: Date | null;
  onChange: (d: Date) => void;
};

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function startOfDay(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function buildMonthGrid(viewMonth: Date) {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstOfMonth = new Date(year, month, 1);

  // Monday-first: 0=Mon..6=Sun. JS getDay: 0=Sun..6=Sat.
  const dow = (firstOfMonth.getDay() + 6) % 7;

  const cells: Date[] = [];
  // Pad with previous month days so the grid starts on Monday
  for (let i = dow; i > 0; i--) {
    cells.push(new Date(year, month, 1 - i));
  }
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, month, d));
  }
  // Pad to 42 cells (6 weeks)
  while (cells.length < 42) {
    const last = cells[cells.length - 1];
    cells.push(new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1));
  }
  return cells;
}

export default function QuoteCalendar({ value, onChange }: Props) {
  const [viewMonth, setViewMonth] = useState(() => {
    const d = value ?? new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });

  const today = useMemo(() => startOfDay(new Date()), []);
  const cells = useMemo(() => buildMonthGrid(viewMonth), [viewMonth]);

  const monthLabel = viewMonth.toLocaleString(undefined, {
    month: "long",
    year: "numeric",
  });

  const goPrev = () =>
    setViewMonth(
      (m) => new Date(m.getFullYear(), m.getMonth() - 1, 1)
    );
  const goNext = () =>
    setViewMonth(
      (m) => new Date(m.getFullYear(), m.getMonth() + 1, 1)
    );

  // Don't allow navigating to months entirely in the past
  const prevDisabled = (() => {
    const lastDayPrev = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 0);
    return lastDayPrev < today;
  })();

  return (
    <div className="rounded-2xl border border-line bg-white p-4 sm:p-5">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={goPrev}
          disabled={prevDisabled}
          aria-label="Previous month"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-mid transition-colors enabled:hover:bg-off enabled:hover:text-ink disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <div className="text-[0.95rem] font-bold text-ink">{monthLabel}</div>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next month"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-mid transition-colors hover:bg-off hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Weekday labels */}
      <div className="mb-1 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((w) => (
          <div
            key={w}
            className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-soft"
          >
            {w}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          const inMonth = d.getMonth() === viewMonth.getMonth();
          const isPast = d < today;
          const selected = value ? isSameDay(d, value) : false;
          const isToday = isSameDay(d, today);

          const base =
            "flex aspect-square items-center justify-center rounded-lg text-[0.85rem] font-medium transition-colors";
          let cls = "";
          if (isPast) {
            cls = "text-soft/40 cursor-not-allowed";
          } else if (selected) {
            cls = "bg-brand text-white shadow-[0_4px_12px_-4px_rgba(46,49,145,0.55)]";
          } else if (isToday) {
            cls =
              "bg-brand-pale text-brand font-bold hover:bg-brand-pale/80";
          } else if (!inMonth) {
            cls = "text-soft hover:bg-off hover:text-mid";
          } else {
            cls = "text-ink hover:bg-off";
          }

          return (
            <button
              key={i}
              type="button"
              disabled={isPast}
              onClick={() => onChange(startOfDay(d))}
              className={`${base} ${cls}`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
