export default function ConsultationCta() {
  return (
    <section id="contact" aria-labelledby="consultation-cta-title" className="bg-white px-5 py-[64px] lg:px-0">
      <div className="mx-auto flex min-h-[205px] max-w-[960px] flex-col items-center justify-center rounded-[8px] bg-[#571244] px-[24px] py-[32px] text-center text-white">
        <h2 id="consultation-cta-title" className="text-[20px] font-normal leading-[1.45] lg:text-[22px]">
          Want to accelerate professional growth and development at your organisation?
          <br />
          See how we can help.
        </h2>
        <a href="#contact" className="mt-[24px] inline-flex h-[46px] w-[212px] items-center justify-center bg-white text-[18px] font-normal text-[#571244] transition-colors hover:bg-[#f5edf3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
