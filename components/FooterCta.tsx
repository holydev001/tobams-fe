import Link from "next/link";

export default function FooterCta() {
  return (
    <section
      aria-labelledby="footer-cta-title"
      className="bg-[#1D0617] text-white"
    >
      <div className="mx-auto flex min-h-[201px] w-[calc(100%_-_48px)] flex-col justify-center gap-[24px] lg:min-h-[159px] lg:w-[calc(100%_-_128px)] lg:flex-row lg:items-center lg:justify-start lg:gap-[10px]">
        <div className="lg:w-[min(1114px,calc(100%_-_161px))]">
          <p className="font-sans text-[14px] leading-[21px] lg:text-[18px] lg:leading-[27px]">
            Ready to be a part of something extraordinary?
          </p>
          <h2
            id="footer-cta-title"
            className="mt-[16px] font-display text-[20px] font-semibold leading-[26px] lg:text-[32px] lg:leading-[41.6px]"
          >
            Let&apos;s work together to create a difference
          </h2>
        </div>
        <Link
          href="#contact"
          className="inline-flex h-[40px] w-[125px] shrink-0 items-center justify-center rounded-[4px] bg-[#571244] font-display text-[14px] font-semibold leading-[18px] transition-colors hover:bg-[#6b1855] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:h-[48px] lg:w-[151px] lg:text-[18px] lg:leading-[23px]"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
