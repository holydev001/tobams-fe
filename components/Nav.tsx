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

function Logo() {
  return (
    <Link href="/" aria-label="Tobams Group home" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6b145a]">
      <Image src="/tobams-logo.svg" alt="Tobams Group" width={166} height={64} priority className="h-[50px] w-auto object-contain lg:h-16" />
    </Link>
  );
}

function DropdownIcon({ light = false }: { light?: boolean }) {
  return (
    <Image
      src={light ? "/account-icon.svg" : "/nav-icon.svg"}
      alt=""
      width={20}
      height={20}
      aria-hidden="true"
    />
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 bg-white text-[#202020] shadow-sm">
      <div className="flex h-[76px] items-center justify-between px-[26px] lg:h-[104px] lg:px-[72px]">
        <Logo />
        <div className="hidden items-center gap-6 lg:flex">
          <button type="button" className="inline-flex h-[48px] items-center gap-3 rounded-[3px] border border-[#571244] bg-[#571244] px-4 text-base font-bold text-white hover:bg-[#451036] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3eaf1]"><Image src="/user.svg" alt="" width={24} height={24} aria-hidden="true" /></span>
            Account <DropdownIcon light />
          </button>
          <Link href="#assessment" className="inline-flex h-[48px] items-center rounded-[3px] border border-[#ef4656] bg-[#ef4656] px-5 text-base font-bold text-white hover:bg-[#d83a4a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4656]">Take Assessment</Link>
        </div>
        <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)} className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-[6px] bg-[#202020] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244] lg:hidden">
          <span aria-hidden="true" className="flex w-[16px] flex-col gap-[3px]"><span className="h-[2px] w-full rounded-full bg-current" /><span className="h-[2px] w-full rounded-full bg-current" /><span className="h-[2px] w-full rounded-full bg-current" /></span>
        </button>
      </div>
      <nav id="primary-navigation" aria-label="Primary navigation" className={`${open ? "block" : "hidden"} border-t border-[#e8e4e6] lg:block`}>
        <ul className="flex flex-col px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:px-0 lg:py-0">
          {links.map(([label, href, hasMenu]) => <li key={label}><Link href={href} className={`relative inline-flex min-h-11 items-center gap-1 border-b-2 text-[15px] font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244] lg:h-[69px] lg:min-h-0 lg:text-[18px] lg:font-normal ${label === "About" ? "border-transparent text-[#571244] after:absolute after:inset-x-[-4px] after:bottom-[-2px] after:h-[2px] after:bg-[#571244]" : "border-transparent hover:border-[#571244] hover:text-[#571244]"}`}>{label}{hasMenu && <DropdownIcon />}</Link></li>)}
        </ul>
      </nav>
    </header>
  );
}
