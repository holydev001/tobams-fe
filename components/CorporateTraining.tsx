import Image from "next/image";

import TrainingBenefits from "@/components/TrainingBenefits";

const corporateTrainingBenefits = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

export default function CorporateTraining() {
  return (
    <section aria-labelledby="corporate-training-title" className="bg-white px-5 pb-[64px] pt-[56px] lg:px-0">
      <div className="mx-auto grid max-w-[1312px] gap-y-[48px] lg:w-[calc(100%_-_128px)] lg:grid-cols-[minmax(0,675px)_minmax(0,602px)] lg:gap-x-[35px] lg:gap-y-0">
        <div className="lg:col-start-1 lg:row-start-1">
          <h2 id="corporate-training-title" className="font-sans text-[32px] font-normal leading-[1.2] text-[#171717] lg:text-[40px]">
            Corporate Trainings
          </h2>
          <p className="mt-[8px] max-w-[675px] text-[18px] leading-[1.45] text-[#6f6a6f]">
            Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company&apos;s goals and values.
          </p>
          <TrainingBenefits items={corporateTrainingBenefits} />
        </div>
        <Image
          src="/corporate-training-img.svg"
          alt="A corporate training session in progress"
          width={602}
          height={346}
          className="h-auto w-full max-w-[602px] lg:col-start-2 lg:row-start-1 lg:w-full"
        />
      </div>
    </section>
  );
}
