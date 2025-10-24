import { Hero } from "@/components/Hero";
import { MissionBlock } from "@/components/MissionBlock";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { InfrastructureTable } from "@/components/InfrastructureTable";
import { CTAFooter } from "@/components/CTAFooter";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-[#0B0B0F] antialiased overflow-x-hidden">
      <Hero />
      <MissionBlock />
      <ProjectsGrid />
      <InfrastructureTable />
      <CTAFooter />
    </div>
  );
}