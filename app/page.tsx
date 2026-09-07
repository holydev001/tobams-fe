import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";
import CorporateTraining from "@/components/CorporateTraining";
import PersonalizedTraining from "@/components/PersonalizedTraining";
import CapacityDevelopment from "@/components/CapacityDevelopment";
import ManagementDevelopment from "@/components/ManagementDevelopment";
import TransformationHub from "@/components/TransformationHub";
import ConsultantTraining from "@/components/ConsultantTraining";
import ConsultationCta from "@/components/ConsultationCta";
import Testimonials from "@/components/Testimonials";
import FooterCta from "@/components/FooterCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <LearningManagement />
        <CorporateTraining />
        <PersonalizedTraining />
        <CapacityDevelopment />
        <ManagementDevelopment />
        <TransformationHub />
        <ConsultantTraining />
        <ConsultationCta />
        <Testimonials />
      </main>
      <FooterCta />
      <Footer />
    </div>
  );
}
