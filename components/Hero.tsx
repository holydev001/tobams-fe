import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate h-[317px] overflow-hidden text-center text-white md:h-[511px]">
      <HeroBackground />
      <div className="relative mx-auto flex h-[317px] max-w-[900px] flex-col items-center justify-center px-5 md:h-[511px] md:px-8">
        <p className="mb-[16px] inline-flex h-[44px] items-center rounded-full bg-black/35 px-[48px] text-[10px] font-bold uppercase tracking-[0.02em] backdrop-blur-[1px] md:mb-[20px] md:h-[45px] md:px-[48px] md:text-sm">
          What We Do
        </p>
        <h1 id="hero-title" className="font-display max-w-[900px] text-[25px] font-bold leading-[1.12] md:text-[52px] md:leading-[1.1]">
          Training and Development
        </h1>
        <p className="mt-[16px] max-w-[790px] text-[11px] leading-[1.45] md:mt-[20px] md:text-lg md:leading-[1.45]">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
        </p>
        <Link href="#consultation" className="mt-[24px] inline-flex h-[36px] items-center justify-center border border-[#a20f73] bg-[#a20f73] px-5 text-[10px] font-bold transition-colors hover:bg-[#7f0c59] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:mt-[32px] md:h-[48px] md:px-7 md:text-base">
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
