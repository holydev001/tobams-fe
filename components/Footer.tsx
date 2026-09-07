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

function FooterLinks({
  heading,
  links,
  className,
  hideLastOnMobile = false,
}: {
  heading: string;
  links: string[];
  className?: string;
  hideLastOnMobile?: boolean;
}) {
  return (
    <div className={className}>
      <h2 className="font-sans text-[18px] font-bold leading-[27px] lg:font-display lg:text-[20px] lg:leading-[27.28px]">
        {heading}
      </h2>
      <ul className="mt-[16px] flex flex-col gap-[12px] font-sans text-[14px] leading-[21px] text-[#F8F8F8] lg:font-display lg:text-[16px] lg:leading-[24px]">
        {links.map((link, index) => (
          <li
            key={link}
            className={hideLastOnMobile && index === links.length - 1 ? "hidden lg:block" : undefined}
          >
            <Link
              href="#contact"
              className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
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
    <nav className="mt-[34px] flex gap-[20px]" aria-label="Social media links">
      <Link href="#contact" aria-label="LinkedIn" className="inline-flex h-[20px] w-[20px] items-center justify-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-current">
          <path d="M5.2 4.2A2.2 2.2 0 1 1 .8 4.2a2.2 2.2 0 0 1 4.4 0ZM1 8h4.4v14H1V8Zm7 0h4.2v1.9h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.7V22h-4.4v-6.8c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V22H8V8Z" />
        </svg>
      </Link>
      <Link href="#contact" aria-label="Facebook" className="inline-flex h-[20px] w-[20px] items-center justify-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-current">
          <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.8V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V11H8v3h2.6v8h2.9Z" />
        </svg>
      </Link>
      <Link href="#contact" aria-label="X" className="inline-flex h-[20px] w-[20px] items-center justify-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-current">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.4L2.8 2h6.5l4.4 5.8L18.9 2Zm-1.1 17.8h1.7L8.2 4H6.4l11.4 15.8Z" />
        </svg>
      </Link>
      <Link href="#contact" aria-label="Instagram" className="inline-flex h-[20px] w-[20px] items-center justify-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-none stroke-current stroke-[2]">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
        </svg>
      </Link>
    </nav>
  );
}

function ContactInformation() {
  return (
    <div className="h-[398px] border-0 px-[16px] pt-[16px] lg:relative lg:grid lg:h-[221px] lg:grid-cols-[minmax(0,1fr)_254px] lg:gap-[24px] lg:px-[24px] lg:pt-[44px]">
      <div className="lg:border-r lg:border-[#F8F8F8] lg:pr-[24px]">
        <h2 className="font-sans text-[18px] font-bold leading-[27px] lg:font-display lg:text-[20px] lg:leading-[27.28px]">
          Registered Offices
        </h2>
        <div className="mt-[10px] grid gap-[16px] font-sans text-[16px] leading-[24px] text-[#F8F8F8] lg:grid-cols-2 lg:gap-[48px]">
          <p>
            United Kingdom
            <br />
            07451196 (Registered by Company House)
            <br />
            Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
          </p>
          <p>
            Nigeria RC 1048722 (Registered by the Corporate Affairs Commission)
            <br />
            4, Muaz Close, Angwari-Rimi
          </p>
        </div>
      </div>
      <div className="mt-[40px] lg:mt-0">
        <h2 className="font-sans text-[18px] font-bold leading-[27px] lg:font-display lg:text-[20px] lg:leading-[27.28px]">
          Contact Information
        </h2>
        <div className="mt-[16px] flex flex-col gap-[8px] font-display text-[16px] leading-[24px] text-[#F8F8F8] lg:gap-0">
          <Link href="mailto:theteam@tobamsgroup.com" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            theteam@tobamsgroup.com
          </Link>
          <Link href="tel:+447886600748" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            +447886600748
          </Link>
        </div>
      </div>
    </div>
  );
}

function FooterLegal() {
  return (
    <div className="border-t border-[#F8F8F8] pt-[23px] lg:pt-[19px]">
      <div className="lg:flex lg:h-[36px] lg:items-center lg:justify-between">
        <p className="hidden font-display text-[16px] font-light leading-[24px] text-[#F8F8F8] lg:block">
          Copyright ⓒ Tobams Group, 2024. All rights reserved.
        </p>
        <div className="flex h-[72px] flex-wrap justify-center gap-x-[40px] font-display text-[14px] font-light leading-[36px] text-[#F8F8F8] lg:h-[36px] lg:justify-end lg:gap-[40px] lg:text-[16px]">
          <Link href="#contact" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Privacy Policy
          </Link>
          <Link href="#contact" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Cookies Policy
          </Link>
          <Link href="#contact" className="w-full text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:w-auto">
            Terms and Conditions
          </Link>
        </div>
      </div>
      <p className="mt-[12px] font-display text-[14px] font-light leading-[24px] text-[#F8F8F8] lg:hidden">
        Copyright ⓒ Tobams Group, 2024. All rights reserved.
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#11040E] pb-[24px] pt-[24px] text-white lg:pb-[32px] lg:pt-[52px]">
      <div className="mx-auto w-[calc(100%_-_48px)] lg:w-[calc(100%_-_128px)]">
        <div className="grid gap-[20px] pt-[20px] lg:min-h-[385px] lg:grid-cols-[minmax(0,1.4833fr)_minmax(0,1.2292fr)_minmax(0,0.5fr)_minmax(0,1fr)] lg:gap-[clamp(32px,6.9444vw,100px)] lg:pt-0">
          <div className="h-[244.6px] lg:h-auto">
            <Image src="/tobams-logo.svg" alt="Tobams Group" width={188} height={73} className="h-[72.6px] w-[188px] object-contain" />
            <p className="mt-[24px] max-w-[356px] font-sans text-[14px] leading-[21px] text-[#F8F8F8] lg:font-display lg:text-[16px] lg:leading-[24px]">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>
            <SocialLinks />
          </div>
          <FooterLinks heading="What We Do" links={whatWeDoLinks} className="h-[229px] lg:h-auto" hideLastOnMobile />
          <FooterLinks heading="Company" links={companyLinks} className="h-[361px] lg:h-auto lg:[&>h2]:leading-[20px] lg:[&>ul]:mt-[17px]" />
          <FooterLinks heading="Solution" links={solutionLinks} className="h-[262px] lg:h-auto" />
        </div>
        <div className="mt-[40px] lg:h-[221px]">
          <ContactInformation />
        </div>
        <div className="mt-[24px] lg:mt-[20px]">
          <FooterLegal />
        </div>
      </div>
    </footer>
  );
}
