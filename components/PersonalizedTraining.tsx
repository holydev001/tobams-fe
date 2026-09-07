import Image from "next/image";

import TrainingBenefits from "@/components/TrainingBenefits";

const personalizedTrainingBenefits = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

export default function PersonalizedTraining() {
  return (
    <section aria-labelledby="personalized-training-title" className="bg-white px-5 pb-[64px] pt-[56px] lg:px-0">
      <div className="mx-auto grid max-w-[1312px] gap-y-[48px] lg:w-[calc(100%_-_128px)] lg:grid-cols-[minmax(0,599px)_minmax(0,1fr)] lg:items-start lg:gap-x-[80px] lg:gap-y-0">
        <Image
          src="/personalized-img.svg"
          alt="Professionals attending a personalised training session"
          width={599}
          height={378}
          className="order-1 h-auto w-full max-w-[599px] lg:col-start-1 lg:row-start-1 lg:w-full"
        />
        <div className="order-2 lg:col-start-2 lg:row-start-1 lg:pt-[8px]">
          <h2 id="personalized-training-title" className="font-sans text-[32px] font-normal leading-[1.2] text-[#171717] lg:text-[40px]">
            Personalised Individual Training
          </h2>
          <p className="mt-[8px] text-[18px] leading-[1.45] text-[#6f6a6f]">
            Begin a journey of lifelong learning and professional development with Tobams Group&apos;s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a broad spectrum of topics to meet the evolving needs of today&apos;s professionals.
          </p>
          <TrainingBenefits items={personalizedTrainingBenefits} />
        </div>
      </div>
    </section>
  );
}
