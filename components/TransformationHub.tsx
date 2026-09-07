import Image from "next/image";
import Link from "next/link";

const transformationFeatures = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Training",
  "Communication Skills",
  "Business Model Development",
];

export default function TransformationHub() {
  return (
    <section aria-labelledby="transformation-hub-title" className="bg-white px-5 pb-[64px] pt-[64px] lg:px-0">
      <div className="mx-auto max-w-[1312px] rounded-[16px] bg-[#fcd9dd] p-[24px] lg:w-[calc(100%_-_128px)] lg:p-[40px]">
        <p className="font-display text-[20px] italic leading-[1.2] text-[#3478c9] lg:text-[24px]">Learning With Our CEO:</p>
        <h2 id="transformation-hub-title" className="mt-[12px] font-display text-[30px] font-normal italic leading-[1.2] text-[#571244] lg:text-[36px]">
          Transformation Hub With Jite Newton
        </h2>
        <p className="mt-[24px] text-[18px] leading-[1.45] text-[#262126]">
          Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re looking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your potential and drive success in your endeavours.
        </p>
        <div className="mt-[24px] grid gap-[24px] lg:grid-cols-[560px_minmax(0,1fr)] lg:gap-x-[32px]">
          <Image
            src="/training-consultant-img.svg"
            alt="A professional participating in a digital training session"
            width={560}
            height={340}
            className="h-auto w-full max-w-[560px] rounded-[8px] lg:w-full"
          />
          <div className="rounded-[8px] bg-[#fde4e7] p-[20px]">
            <ul className="grid gap-[12px] sm:grid-cols-2 sm:gap-x-[24px]">
              {transformationFeatures.map((feature) => (
                <li key={feature} className="flex h-[60px] items-center gap-[12px] rounded-[12px] bg-white px-[20px] text-[18px] text-[#262126]">
                  <Image src="/training-bolt-img.svg" alt="" aria-hidden="true" width={28} height={28} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact" className="mt-[24px] inline-flex h-[48px] w-[173px] items-center justify-center gap-[10px] bg-[#571244] text-[16px] font-bold text-white transition-colors hover:bg-[#421035] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]">
              Learn More
              <Image src="/learn-more.svg" alt="" aria-hidden="true" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
