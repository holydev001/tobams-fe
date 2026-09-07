import Image from "next/image";

type TrainingBenefitsProps = {
  items: string[];
};

export default function TrainingBenefits({ items }: TrainingBenefitsProps) {
  return (
    <ul className="mt-5 flex flex-col gap-[6px] font-sans text-[14px] leading-[21px] text-[#696969] lg:mt-[19px] lg:px-[30px] lg:text-lg lg:leading-[27px]">
      {items.map((item) => (
        <li key={item} className="flex min-h-[21px] items-center gap-[12.444px] lg:min-h-[27px]">
          <Image src="/dark-bolts-img.svg" alt="" aria-hidden="true" width={14} height={18} className="h-[18px] w-[14px] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
