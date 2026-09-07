import Image from "next/image";
import Link from "next/link";

const learningTopics = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LearningManagement() {
  return (
    <section
      id="academy"
      aria-labelledby="learning-management-title"
      className="mt-6 flex h-[1113px] w-screen flex-col items-center gap-6 bg-[#5712441A] px-6 py-6 lg:mt-0 lg:h-auto lg:min-h-[744px] lg:bg-white lg:px-0 lg:py-10"
    >
      <div className="mx-auto grid h-full w-full grid-cols-1 gap-y-6 lg:h-auto lg:min-h-[664px] lg:grid-cols-[556.88px_minmax(0,1fr)] lg:grid-rows-[86px_minmax(376px,auto)_106px] lg:gap-x-20 lg:gap-y-0 lg:bg-[#5712441A] lg:px-16 lg:py-12">
        <h2
          id="learning-management-title"
          className="order-1 h-[30px] font-display text-[20px] font-semibold leading-[30px] tracking-[0.6px] text-[#571244] lg:col-start-2 lg:row-start-1 lg:mt-[26px] lg:h-[60px] lg:text-[40px] lg:leading-[60px] lg:tracking-[1.2px]"
        >
          Learning Management System
        </h2>

        <Image
          src="/learning-management-icon.svg"
          alt="Professionals learning together"
          width={557}
          height={568}
          sizes="(min-width: 1024px) 557px, 327px"
          className="order-2 h-[327px] w-full object-fill lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:h-[568px] lg:w-[556.88px]"
        />

        <div className="relative order-3 flex h-[660px] w-full flex-col bg-[#5712441A] p-6 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:mt-5 lg:h-auto lg:min-h-[356px] lg:self-start">
          <p className="h-[294px] font-sans text-[14px] leading-[21px] text-[#151515] lg:h-auto lg:min-h-[189px] lg:text-lg lg:leading-[27px]">
            TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
          </p>

          <div className="mt-6 flex h-[222px] flex-col gap-3 lg:mt-5 lg:h-auto lg:min-h-[99px]">
            <p className="h-[24px] font-sans text-[16px] font-bold leading-[24px] text-[#571244] lg:h-[27px] lg:text-lg lg:leading-[27px]">
              Some of our courses include:
            </p>
            <ul className="grid h-[186px] grid-cols-1 gap-y-3 font-sans text-[14px] leading-[21px] text-[#151515] lg:h-auto lg:min-h-[60px] lg:grid-cols-3 lg:gap-x-3 lg:gap-y-3 lg:text-[16px] lg:leading-[24px]">
              {learningTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>

          <Link
            href="#academy"
            className="mt-6 inline-flex h-[48px] w-[153px] items-center justify-center gap-2 bg-[#571244] px-6 py-[10.5px] font-sans text-[14px] font-semibold leading-[21px] text-white transition-colors hover:bg-[#421035] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244] lg:absolute lg:left-0 lg:top-[calc(100%+32px)] lg:mt-0 lg:w-[173px] lg:text-lg lg:leading-[27px]"
          >
            Learn More
            <Image src="/learn-more.svg" alt="" width={24} height={24} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
