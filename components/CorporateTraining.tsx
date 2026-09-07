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
    <section aria-labelledby="corporate-training-title" className="w-screen bg-white pb-6 pt-12 lg:pb-[120px] lg:pt-16">
      <div className="mx-auto flex w-full flex-col px-6 lg:grid lg:grid-cols-[646px_minmax(0,1fr)] lg:items-start lg:gap-x-16 lg:px-16">
        <h2 id="corporate-training-title" className="order-1 font-display text-[20px] font-semibold leading-[30px] tracking-[0.6px] text-[#151515] lg:col-start-1 lg:row-start-1 lg:text-[40px] lg:leading-[60px] lg:tracking-[1.2px]">
          Corporate Trainings
        </h2>
        <Image
          src="/corporate-training-img.svg"
          alt="A corporate training session in progress"
          width={602}
          height={346}
          sizes="(min-width: 1024px) 602px, 327px"
          className="order-2 mt-[14px] h-[229px] w-full object-fill lg:col-start-2 lg:row-start-1 lg:mt-0 lg:h-[346px] lg:w-[602px]"
        />
        <div className="order-3 mt-6 lg:col-start-1 lg:row-start-1 lg:mt-[60px]">
          <p className="h-[126px] max-w-[646px] font-sans text-[14px] leading-[21px] text-[#696969] lg:h-[108px] lg:text-lg lg:leading-[27px]">
            Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company&apos;s goals and values.
          </p>
          <TrainingBenefits items={corporateTrainingBenefits} />
        </div>
      </div>
    </section>
  );
}
