import Image from "next/image";

const managementBenefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopment() {
  return (
    <section aria-labelledby="management-development-title" className="bg-white px-5 pb-[64px] pt-[64px] lg:px-0">
      <div className="mx-auto grid max-w-[1312px] rounded-[16px] bg-[#2b0922] p-[24px] lg:w-[calc(100%_-_128px)] lg:grid-cols-[592px_minmax(0,1fr)] lg:gap-x-[48px] lg:p-[40px]">
        <Image
          src="/management-dev-img.svg"
          alt="Colleagues collaborating during a management development programme"
          width={592}
          height={639}
          className="order-1 h-auto w-full max-w-[592px] lg:col-start-1 lg:row-start-1 lg:w-full"
        />
        <div className="order-2 mt-[32px] text-white lg:col-start-2 lg:row-start-1 lg:mt-0">
          <h2 id="management-development-title" className="font-sans text-[32px] font-normal leading-[1.2] lg:text-[48px]">
            Management Development Program
          </h2>
          <p className="mt-[24px] text-[18px] leading-[1.45]">
            Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the skills and knowledge to develop the high-performing leaders they need to thrive.
          </p>
          <p className="mt-[24px] text-[18px] leading-[1.45]">
            Our program includes workshops, seminars, coaching sessions, courses, and experiential learning opportunities designed to enhance leadership, strategic thinking, communication, and other managerial competencies for corporate organisations.
          </p>
          <ul className="mt-[24px] flex flex-col gap-[16px]">
            {managementBenefits.map((benefit) => (
              <li key={benefit} className="flex h-[40px] items-center gap-[12px] rounded-[8px] bg-[#8f6283] px-[12px] text-[18px] leading-none">
                <Image src="/management-dev-bolt-img.svg" alt="" aria-hidden="true" width={32} height={32} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
