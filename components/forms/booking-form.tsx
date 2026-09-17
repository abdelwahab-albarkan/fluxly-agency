"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";

const timeSlots = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

const inputClasses =
  "w-full rounded-xl border border-border-subtle bg-surface/60 px-4 py-3 text-sm text-white placeholder-ink-muted transition-colors duration-300 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20";

function getUpcomingWeekdays(count: number) {
  const days: Date[] = [];
  const cursor = new Date();
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      days.push(new Date(cursor));
    }
  }
  return days;
}

export function BookingForm() {
  const dates = useMemo(() => getUpcomingWeekdays(5), []);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedDate === null || !selectedTime) return;
    setConfirmed(true);
  }

  if (confirmed && selectedDate !== null && selectedTime) {
    const dateLabel = dates[selectedDate].toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center rounded-xl border border-border-subtle bg-surface/60 p-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
        <h3 className="mt-4 text-lg font-semibold text-white">You&apos;re booked</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
          We&apos;ll see you <span className="text-white">{dateLabel}</span> at{" "}
          <span className="text-white">{selectedTime}</span>. A calendar invite is on its way to your inbox.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={handleSubmit}
      className="rounded-xl border border-border-subtle bg-surface/60 p-8"
    >
      <div>
        <p className="mb-3 text-xs font-medium text-ink-secondary">Pick a date</p>
        <div className="flex flex-wrap gap-2.5">
          {dates.map((date, i) => (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => setSelectedDate(i)}
              className={cn(
                "rounded-lg border px-4 py-2.5 text-xs font-medium transition-all duration-300",
                selectedDate === i
                  ? "border-brand/50 bg-brand/15 text-white"
                  : "border-border-subtle text-ink-secondary hover:border-brand/30 hover:text-white"
              )}
            >
              {date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-xs font-medium text-ink-secondary">Pick a time (ET)</p>
        <div className="flex flex-wrap gap-2.5">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setSelectedTime(slot)}
              className={cn(
                "rounded-lg border px-4 py-2.5 text-xs font-medium transition-all duration-300",
                selectedTime === slot
                  ? "border-brand/50 bg-brand/15 text-white"
                  : "border-border-subtle text-ink-secondary hover:border-brand/30 hover:text-white"
              )}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 border-t border-border-subtle pt-6 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-name" className="mb-2 block text-xs font-medium text-ink-secondary">
            Full name
          </label>
          <input id="booking-name" name="name" type="text" required placeholder="Jane Cooper" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="booking-email" className="mb-2 block text-xs font-medium text-ink-secondary">
            Email
          </label>
          <input
            id="booking-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={selectedDate === null || !selectedTime}
        className="mt-6 w-full sm:w-auto"
      >
        Confirm Booking
        <ArrowRight className="h-4 w-4" strokeWidth={2} />
      </Button>
    </motion.form>
  );
}
