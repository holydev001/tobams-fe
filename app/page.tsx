import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";
import CorporateTraining from "@/components/CorporateTraining";
import PersonalizedTraining from "@/components/PersonalizedTraining";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <LearningManagement />
        <CorporateTraining />
        <PersonalizedTraining />
      </main>
    </div>
  );
}
