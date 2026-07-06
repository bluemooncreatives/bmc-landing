"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success";

const inputClass =
  "w-full rounded-xl border border-black/[.12] bg-transparent px-4 py-2.5 text-sm outline-none transition-colors focus:border-foreground/60 dark:border-white/[.14]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function update(field: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Simulated submission — wire up to a route handler / API here.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
    setValues({ name: "", email: "", message: "" });
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[.06] p-6 text-center">
        <p className="text-2xl" aria-hidden>
          ✅
        </p>
        <h3 className="mt-2 text-lg font-semibold">Message sent</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-5"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            placeholder="Ada Lovelace"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClass} resize-y`}
          placeholder="Tell me a little about what you have in mind…"
        />
      </div>
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
