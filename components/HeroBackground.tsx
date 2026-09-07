import Image from "next/image";

export default function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Image
        src="/mobile-hero-img.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover md:hidden"
      />
      <Image
        src="/desktop-hero-img.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-cover md:block"
      />
    </div>
  );
}
