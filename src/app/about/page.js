import {
  HeaderBadgeRow,
  HeroCard,
  SidePanel,
  AnimeAndVibes,
} from "@/components/MainSections";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
        <Navbar />
      <div className="mx-auto max-w-5xl px-4 pt-10 pb-16 md:px-8">
        <HeaderBadgeRow />
        <section className="mt-8 grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2.4fr)] items-start">
          <HeroCard />
          <SidePanel />
        </section>

        <section className="mt-10">
          <AnimeAndVibes />
        </section>
      </div>
    </main>
  );
}
