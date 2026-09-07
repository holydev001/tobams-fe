import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <LearningManagement />
      </main>
    </div>
  );
}
