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
    <section aria-labelledby="personalized-training-title" className="w-screen bg-white px-0 pb-6 lg:pb-[120px]">
      <div className="mx-auto flex w-full flex-col px-6 lg:grid lg:grid-cols-[599px_minmax(0,1fr)] lg:items-start lg:gap-x-[81px] lg:px-16">
        <h2 id="personalized-training-title" className="order-1 h-[30px] font-display text-[20px] font-semibold leading-[30px] tracking-[0.6px] text-[#151515] lg:col-start-2 lg:row-start-1 lg:h-[60px] lg:text-[40px] lg:leading-[60px] lg:tracking-[1.2px]">
          Personalised Individual Training
        </h2>
        <Image
          src="/personalized-img.svg"
          alt="Professionals attending a personalised training session"
          width={599}
          height={378}
          sizes="(min-width: 1024px) 599px, 327px"
          className="order-2 mt-6 h-[240px] w-full object-fill lg:col-start-1 lg:row-start-1 lg:mt-0 lg:h-[378px] lg:w-[599px]"
        />
        <div className="order-3 mt-6 lg:col-start-2 lg:row-start-1 lg:mt-[60px]">
          <p className="h-[126px] font-sans text-[14px] leading-[21px] text-[#696969] lg:h-[108px] lg:text-lg lg:leading-[27px]">
            Begin a journey of lifelong learning and professional development with Tobams Group&apos;s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a broad spectrum of topics to meet the evolving needs of today&apos;s professionals.
          </p>
          <TrainingBenefits items={personalizedTrainingBenefits} />
        </div>
      </div>
    </section>
  );
}
