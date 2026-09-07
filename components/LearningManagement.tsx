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
    <section id="academy" aria-labelledby="learning-management-title" className="mt-[40px] overflow-hidden bg-[#e9e3e7] px-0 py-[32px] sm:py-[48px] lg:py-[48px]">
      <div className="mx-auto grid max-w-[1312px] gap-y-[24px] px-5 lg:w-[calc(100%_-_128px)] lg:grid-cols-[557px_minmax(0,1fr)] lg:gap-x-[80px] lg:gap-y-[32px] lg:px-0">
        <h2 id="learning-management-title" className="order-1 font-display text-[30px] font-bold leading-[1.12] text-[#571244] lg:col-start-2 lg:row-start-1 lg:mt-[28px] lg:text-[40px]">Learning Management System</h2>
        <Image src="/learning-management-icon.svg" alt="Professionals learning together" width={557} height={568} className="order-2 mx-auto h-auto w-[375px] lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mx-0 lg:w-[557px]" />
        <div className="order-3 rounded-[8px] bg-[#dacdd7] px-[24px] py-[24px] lg:col-start-2 lg:row-start-2 lg:min-h-[355px]">
            <p className="text-[14px] leading-[1.55] text-[#262126] md:text-[16px]">
              TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
            </p>
            <p className="mt-[20px] text-[16px] font-bold text-[#571244]">Some of our courses include:</p>
            <ul className="mt-[12px] grid grid-cols-1 gap-[12px] text-[14px] text-[#262126] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[12px]">
              {learningTopics.map((topic) => <li key={topic} className="flex items-center gap-[8px]"><span aria-hidden="true" className="h-[5px] w-[5px] rounded-full bg-[#262126]" />{topic}</li>)}
            </ul>
          </div>
        <Link href="#academy" className="order-4 inline-flex h-[48px] w-[173px] items-center justify-center gap-[10px] bg-[#571244] text-[16px] font-bold text-white transition-colors hover:bg-[#421035] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244] lg:col-start-2 lg:row-start-3">Learn More<Image src="/learn-more.svg" alt="" width={24} height={24} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
