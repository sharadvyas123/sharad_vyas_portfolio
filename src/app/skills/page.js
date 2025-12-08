import { HeaderBadgeRow, SkillsShowcase } from "@/components/MainSections";
import Navbar from "@/components/Navbar";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
    <Navbar /> 
      <div className="mx-auto max-w-5xl px-4 pt-10 pb-16 md:px-8">
        <HeaderBadgeRow />
        <div className="mt-8">
          <SkillsShowcase />
        </div>
      </div>
    </main>
  );
}
