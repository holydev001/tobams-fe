"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  ["About", "#about", true],
  ["What We Do", "#what-we-do", true],
  ["Jobs", "#jobs", true],
  ["Projects", "#projects", false],
  ["TG Academy", "#academy", false],
  ["Strategic Partnership", "#partnership", false],
  ["Pricing", "#pricing", false],
  ["Book a Consultation", "#consultation", false],
] as const;

const desktopLinkWidths: Record<(typeof links)[number][0], string> = {
  About: "lg:w-[82px]",
  "What We Do": "lg:w-[127px]",
  Jobs: "lg:w-[53.3333px]",
  Projects: "lg:w-[65px]",
  "TG Academy": "lg:w-[104px]",
  "Strategic Partnership": "lg:w-[171px]",
  Pricing: "lg:w-[56px]",
  "Book a Consultation": "lg:w-[163px]",
};

const desktopTextWidths: Record<(typeof links)[number][0], string> = {
  About: "lg:w-[62px]",
  "What We Do": "lg:w-[107px]",
  Jobs: "lg:w-[35px]",
  Projects: "lg:w-[65px]",
  "TG Academy": "lg:w-[104px]",
  "Strategic Partnership": "lg:w-[171px]",
  Pricing: "lg:w-[56px]",
  "Book a Consultation": "lg:w-[163px]",
};

function Logo() {
  return (
    <Link href="/" aria-label="Tobams Group home" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6b145a]">
      <Image src="/tobams-logo.svg" alt="Tobams Group" width={166} height={64} priority className="h-[50px] w-auto object-contain lg:h-16" />
    </Link>
  );
}

function DropdownIcon({ light = false, compact = false, className = "" }: { light?: boolean; compact?: boolean; className?: string }) {
  if (compact) {
    return (
      <svg aria-hidden="true" className={className} width="8.3333" height="4.1667" viewBox="0 0 8.3333 4.1667" fill="none">
        <path d="M0 0L4.1667 4.1667L8.3333 0" stroke="#571244" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <Image
      src={light ? "/account-icon.svg" : "/nav-icon.svg"}
      alt=""
      width={20}
      height={20}
      aria-hidden="true"
      className={className}
    />
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 bg-white text-[#202020] shadow-sm">
      <div className="relative flex h-[76px] items-center justify-between px-[26px] lg:h-[104px] lg:px-16 lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:right-0 lg:after:h-px lg:after:bg-[#DDD0DA]">
        <Logo />
        <div className="hidden items-center gap-6 lg:flex">
          <button type="button" className="inline-flex h-[48px] w-[167px] items-center justify-center gap-3 rounded-[4px] border border-[#571244] bg-[#571244] px-4 text-[18px] font-semibold leading-[27px] text-white hover:bg-[#451036] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-[#571244] bg-[#DDD0DA]"><Image src="/user.svg" alt="" width={24} height={24} aria-hidden="true" /></span>
            Account <DropdownIcon light />
          </button>
          <Link href="#assessment" className="inline-flex h-[48px] w-[183px] items-center justify-center whitespace-nowrap rounded-[4px] border border-[#EF4353] bg-[#EF4353] px-[19px] text-[18px] font-semibold leading-[27px] text-white hover:bg-[#d83a4a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EF4353]">Take Assessment</Link>
        </div>
        <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)} className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-[6px] bg-[#202020] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244] lg:hidden">
          <span aria-hidden="true" className="flex w-[16px] flex-col gap-[3px]"><span className="h-[2px] w-full rounded-full bg-current" /><span className="h-[2px] w-full rounded-full bg-current" /><span className="h-[2px] w-full rounded-full bg-current" /></span>
        </button>
      </div>
      <nav id="primary-navigation" aria-label="Primary navigation" className={`${open ? "block" : "hidden"} lg:block`}>
        <ul className="flex flex-col px-4 py-3 sm:px-6 lg:h-[69px] lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:px-0 lg:py-0">
          {links.map(([label, href, hasMenu]) => {
            const isActive = label === "About";
            const isCompactIcon = label === "Jobs";

            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`inline-flex min-h-11 items-center border-b text-[15px] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244] lg:min-h-0 lg:items-start lg:gap-0 lg:text-[18px] lg:font-normal ${desktopLinkWidths[label]} ${isActive ? "border-[#571244] text-[#571244] lg:h-[29px] lg:font-semibold" : "border-transparent text-[#151515] hover:border-[#571244] hover:text-[#571244] lg:h-[27px]"}`}
                >
                  <span className={`text-center leading-[27px] ${desktopTextWidths[label]}`}>{label}</span>
                  {hasMenu && <DropdownIcon compact={isCompactIcon} className={isCompactIcon ? "mt-[11.4167px] shrink-0" : "mt-[3.5px] shrink-0"} />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
