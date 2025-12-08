import { ProjectsShowcase, HeaderBadgeRow } from "@/components/MainSections";
import Navbar from "@/components/Navbar";

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50"> 
    <Navbar /> 
      <div className="mx-auto max-w-5xl px-4 pt-10 pb-16 md:px-8">
        <HeaderBadgeRow />
        <div className="mt-8">
          <ProjectsShowcase />
        </div>
      </div>
    </main>
  );
}
