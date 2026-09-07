import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solutionLinks = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

const whatWeDoLinks = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

function FooterLinks({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <h2 className="text-[20px] font-bold leading-[1.3]">{heading}</h2>
      <ul className="mt-[16px] flex flex-col gap-[12px] text-[16px] leading-[1.35] text-[#f6edf4]">
        {links.map((link) => (
          <li key={link}>
            <Link href="#contact" className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="mt-[24px] flex gap-[16px]" aria-label="Social media links">
      <Link href="#contact" aria-label="LinkedIn" className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[20px] font-bold text-[#1f0018] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
          <path d="M5.2 4.2A2.2 2.2 0 1 1 .8 4.2a2.2 2.2 0 0 1 4.4 0ZM1 8h4.4v14H1V8Zm7 0h4.2v1.9h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.7V22h-4.4v-6.8c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V22H8V8Z" />
        </svg>
      </Link>
      <Link href="#contact" aria-label="Instagram" className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[#1f0018] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-current stroke-[2]">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
        </svg>
      </Link>
      <Link href="#contact" aria-label="X" className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[20px] font-bold text-[#1f0018] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-current">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.4L2.8 2h6.5l4.4 5.8L18.9 2Zm-1.1 17.8h1.7L8.2 4H6.4l11.4 15.8Z" />
        </svg>
      </Link>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1f0018] text-white">
      <div className="mx-auto max-w-[1312px] px-5 lg:w-[calc(100%_-_128px)] lg:px-0">
        <div className="flex flex-col gap-[32px] border-b border-[#e9dce7] py-[40px] lg:flex-row lg:items-center lg:justify-between lg:py-[40px]">
          <div>
            <p className="text-[18px] leading-[1.35]">Ready to be a part of something extraordinary?</p>
            <h2 className="mt-[16px] text-[30px] font-normal leading-[1.2] lg:text-[32px]">Let&apos;s work together to create a difference</h2>
          </div>
          <Link href="#contact" className="inline-flex h-[48px] w-[151px] items-center justify-center rounded-[4px] bg-[#8f155f] text-[18px] font-semibold transition-colors hover:bg-[#a91c73] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Get In Touch
          </Link>
        </div>
        <div className="grid gap-[48px] py-[48px] sm:grid-cols-2 lg:grid-cols-[minmax(0,420px)_minmax(0,360px)_minmax(0,188px)_minmax(0,220px)] lg:justify-start lg:gap-x-[36px]">
          <div>
            <Image src="/tobams-logo.svg" alt="Tobams Group" width={166} height={64} className="h-16 w-auto" />
            <p className="mt-[24px] max-w-[360px] text-[16px] leading-[1.5] text-[#f6edf4]">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>
            <SocialLinks />
          </div>
          <FooterLinks heading="What We Do" links={whatWeDoLinks} />
          <FooterLinks heading="Company" links={companyLinks} />
          <FooterLinks heading="Solution" links={solutionLinks} />
        </div>
      </div>
    </footer>
  );
}
