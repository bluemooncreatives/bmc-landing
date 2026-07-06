import { SocialIcons } from "@/components/general/SocialIcons";

const services = [
  "Brand identity",
  "Digital design",
  "Creative campaigns",
  "Web design",
  "Art direction",
];

export function BriefCard() {
  return (
    <div className="rounded-[20px] bg-white px-7 py-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
      {/* Heading */}
      <h1 className="max-w-[34rem] text-[26px] font-bold leading-[1.15] tracking-tight text-[#141414] sm:text-[28px]">
        We break down big ideas into simple, powerful, effective outcomes.
      </h1>

      {/* Service pills — overflow clips at the card edge, like the design */}
      <div className="mt-6 flex flex-nowrap gap-3 overflow-hidden">
        {services.map((service) => (
          <span
            key={service}
            className="shrink-0 whitespace-nowrap rounded-lg bg-[#ececec] px-4 py-2.5 text-[15px] font-medium text-[#2f2f2f]"
          >
            {service}
          </span>
        ))}
      </div>

      {/* Red dotted divider with solid caps */}
      <div className="mt-6 flex items-center gap-1.5">
        <span className="h-[3px] w-5 rounded-full bg-[#e01228]" />
        <span
          className="h-[2px] flex-1 rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #e01228 0 5px, transparent 5px 10px)",
          }}
        />
        <span className="h-[3px] w-5 rounded-full bg-[#e01228]" />
      </div>

      {/* Footer row */}
      <div className="mt-5 flex items-center justify-between">
        <span className="text-[15px] font-medium text-[#2b2b2b]">©2025</span>
        <SocialIcons />
      </div>
    </div>
  );
}
