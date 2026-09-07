import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex h-[317px] flex-col items-center justify-center overflow-hidden px-6 py-10 text-center text-white md:h-[511px] md:px-16 md:py-28"
    >
      <HeroBackground />
      <div className="relative flex w-full flex-col items-center gap-6 md:gap-10">
        <div className="flex w-full flex-col items-center gap-2 md:gap-3">
          <div className="flex h-[38px] w-[150px] items-center justify-center rounded-[100px] bg-[rgba(255,255,255,0.1)] px-8 md:h-[45px] md:w-[193px] md:px-12">
            <span className="whitespace-nowrap font-display text-[12px] font-semibold leading-[18px] tracking-[0.36px] md:font-sans md:text-sm md:leading-[21px] md:tracking-normal">
              WHAT WE DO
            </span>
          </div>
          <div className="flex h-[127px] w-full flex-col items-center gap-3 md:h-[142px] md:gap-[15px]">
            <div className="flex h-[31px] w-full items-center justify-center md:h-[73px]">
              <h1
                id="hero-title"
                className="font-display w-full text-[24px] font-bold leading-[31.2px] md:text-[56px] md:leading-[72.8px]"
              >
                <span className="md:hidden">Learning and Development</span>
                <span className="hidden md:inline">Training and Development</span>
              </h1>
            </div>
            <p className="h-[84px] w-full text-[14px] font-semibold leading-[21px] md:h-[54px] md:max-w-[1077px] md:text-lg md:leading-[27px]">
              Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
            </p>
          </div>
        </div>
        <Link
          href="#consultation"
          className="inline-flex h-[40px] w-[173px] items-center justify-center rounded-[4px] bg-[#571244] px-[22px] text-[14px] font-semibold leading-[21px] transition-colors hover:bg-[#3f0d32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:h-[48px] md:w-[214px] md:px-6 md:text-lg md:leading-[27px]"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
