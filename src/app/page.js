import FlagshipSection from "../components/FlagshipSection";
import DonorSection from "../components/DonorSection";
import ClosingCtaSection from "../components/ClosingCtaSection";
import HeroSection from "../components/HeroSection";
import NewsSection from "../components/NewsSection";
import PartnershipsSection from "../components/PartnershipsSection";
import ProgrammesSection from "../components/ProgrammesSection";
import StatisticsBar from "../components/StatisticsBar";
import ScrollProgress from "../components/ScrollProgress";
import TextMotion from "../components/TextMotion";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <TextMotion />
      <HeroSection />
      <StatisticsBar />
      <FlagshipSection />
      <ProgrammesSection />
      <PartnershipsSection />
      <DonorSection />
      <NewsSection />
      <ClosingCtaSection />
    </main>
  );
}
