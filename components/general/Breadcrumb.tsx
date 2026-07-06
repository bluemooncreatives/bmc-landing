import Link from "next/link";
import { Fragment } from "react";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <Fragment key={`${item.label}-${i}`}>
            <li>
              {item.href ? (
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
            </li>
            {i < items.length - 1 ? (
              <li aria-hidden className="text-zinc-400">
                /
              </li>
            ) : null}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
