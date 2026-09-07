import Image from "next/image";
import Link from "next/link";

const consultantTopics = [
  {
    title: "Expert-Led Learning",
    description: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description: "Engage in hands-on workshops designed to enhance your capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description: "You will attain a globally recognized certification, opening career opportunities and industry recognition.",
  },
];

export default function ConsultantTraining() {
  return (
    <section aria-labelledby="consultant-training-title" className="bg-[#e9e3e7] px-5 pb-[64px] pt-[56px] lg:px-0">
      <div className="mx-auto max-w-[1312px] lg:w-[calc(100%_-_128px)]">
        <h2 id="consultant-training-title" className="font-sans text-[32px] font-normal leading-[1.2] text-[#571244] lg:text-[40px]">
          Training The Consultant
        </h2>
        <p className="mt-[16px] text-[18px] font-semibold leading-[1.35] text-[#571244]">
          Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="mt-[24px] text-[18px] leading-[1.45] text-[#262126]">
          With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from seasoned professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in this program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
        </p>
        <div className="mt-[24px] grid gap-x-[48px] gap-y-[24px] rounded-[8px] bg-[#571244] px-[24px] py-[24px] text-white sm:grid-cols-2">
          {consultantTopics.map((topic) => (
            <article key={topic.title}>
              <h3 className="text-[18px] font-bold leading-[1.35]">{topic.title}</h3>
              <p className="mt-[16px] text-[18px] leading-[1.45]">{topic.description}</p>
            </article>
          ))}
        </div>
        <Link href="#contact" className="mt-[32px] inline-flex h-[48px] w-[173px] items-center justify-center gap-[10px] bg-[#571244] text-[16px] font-bold text-white transition-colors hover:bg-[#421035] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#571244]">
          Learn More
          <Image src="/learn-more.svg" alt="" aria-hidden="true" width={24} height={24} />
        </Link>
      </div>
    </section>
  );
}
