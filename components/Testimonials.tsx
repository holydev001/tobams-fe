"use client";

import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    image: "/pfp-one-img.svg",
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    quote: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    image: "/pfp-two-img.svg",
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    quote: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    image: "/pfp-three-img.svg",
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    quote: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    image: "/pfp-four-img.svg",
    name: "Tobams Group Client",
    role: "Business Partner",
    quote: "Tobams Group delivers thoughtful, professional solutions that help organisations move forward with confidence.",
  },
];

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "next" | "previous") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: direction === "next" ? carousel.clientWidth : -carousel.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section aria-labelledby="testimonials-title" className="bg-white px-5 pb-[64px] pt-[64px] lg:px-0">
      <h2 id="testimonials-title" className="text-center font-sans text-[32px] font-bold leading-[1.2] text-[#171717] lg:text-[40px]">
        Testimonials
      </h2>
      <div className="mx-auto mt-[48px] max-w-[1312px] lg:w-[calc(100%_-_128px)]">
        <div ref={carouselRef} className="flex gap-[24px] overflow-hidden">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="min-w-full rounded-[16px] border-l-2 border-[#ef4656] bg-white px-[24px] py-[20px] shadow-[0_2px_10px_rgba(38,33,38,0.08)] lg:min-w-[calc((100%_-_48px)_/_3)]">
              <div className="flex items-center gap-[20px]">
                <Image src={testimonial.image} alt={`${testimonial.name} profile`} width={44} height={44} />
                <div>
                  <h3 className="text-[16px] leading-[1.25] text-[#262126]">{testimonial.name}</h3>
                  <p className="mt-[4px] text-[14px] leading-[1.25] text-[#7a747a]">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-[24px] text-[18px] leading-[1.45] text-[#262126]">{testimonial.quote}</p>
            </article>
          ))}
        </div>
        <div className="mt-[32px] flex justify-end gap-[12px]">
          <button type="button" aria-label="Previous testimonials" onClick={() => scrollCarousel("previous")} className="inline-flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-[#fde4e7] text-[26px] leading-none text-[#ef4656] transition-colors hover:bg-[#f8cbd1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4656]">
            ‹
          </button>
          <button type="button" aria-label="Next testimonials" onClick={() => scrollCarousel("next")} className="inline-flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-[#fde4e7] text-[26px] leading-none text-[#ef4656] transition-colors hover:bg-[#f8cbd1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ef4656]">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
