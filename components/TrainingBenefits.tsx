import Image from "next/image";

type TrainingBenefitsProps = {
  items: string[];
};

export default function TrainingBenefits({ items }: TrainingBenefitsProps) {
  return (
    <ul className="mt-[24px] flex flex-col gap-[12px] text-[18px] leading-[1.35] text-[#6f6a6f]">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-[12px]">
          <Image src="/training-bolt-img.svg" alt="" aria-hidden="true" width={28} height={28} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
