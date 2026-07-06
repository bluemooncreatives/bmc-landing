import Link from "next/link";

export function StartProjectBar() {
  return (
    <Link
      href="/contact"
      className="flex items-center justify-center rounded-2xl bg-[#1a1a1c] py-4 text-[17px] font-medium text-white transition-colors hover:bg-[#242427]"
    >
      Start project
    </Link>
  );
}
