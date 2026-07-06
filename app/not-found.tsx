import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium text-zinc-500">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back home</Button>
        <Button href="/projects" variant="secondary">
          Browse projects
        </Button>
      </div>
      <Link
        href="/contact"
        className="mt-8 text-sm text-zinc-500 hover:text-foreground"
      >
        Think something&apos;s broken? Let me know →
      </Link>
    </div>
  );
}
