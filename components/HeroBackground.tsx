import Image from "next/image";

export default function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-y-0 left-[calc(50%_-_50vw)] w-screen">
      <Image
        src="/mobile-hero-img.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-fill md:hidden"
      />
      <Image
        src="/desktop-hero-img.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-fill md:block"
      />
    </div>
  );
}
