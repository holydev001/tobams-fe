import Image from "next/image";

import TrainingBenefits from "@/components/TrainingBenefits";

const capacityDevelopmentBenefits = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

export default function CapacityDevelopment() {
  return (
    <section aria-labelledby="capacity-development-title" className="bg-white px-5 pb-[64px] pt-[56px] lg:px-0">
      <div className="mx-auto grid max-w-[1312px] gap-y-[48px] lg:w-[calc(100%_-_128px)] lg:grid-cols-[minmax(0,675px)_minmax(0,601px)] lg:gap-x-[35px] lg:gap-y-0">
        <div className="lg:col-start-1 lg:row-start-1">
          <h2 id="capacity-development-title" className="font-sans text-[32px] font-normal leading-[1.2] text-[#171717] lg:text-[40px]">
            Capacity Development
          </h2>
          <p className="mt-[8px] max-w-[675px] text-[18px] leading-[1.45] text-[#6f6a6f]">
            At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
          </p>
          <TrainingBenefits items={capacityDevelopmentBenefits} />
        </div>
        <Image
          src="/capacity-img.svg"
          alt="A facilitator leading a capacity development workshop"
          width={601}
          height={405}
          className="h-auto w-full max-w-[601px] lg:col-start-2 lg:row-start-1 lg:w-full"
        />
      </div>
    </section>
  );
}
