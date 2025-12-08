import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
    <Navbar /> 
      <div className="mx-auto max-w-3xl px-4 pt-10 pb-16 md:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 md:p-8 shadow-lg backdrop-blur">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Let&apos;s build something cool 💬
          </h1>
          <p className="text-sm md:text-base text-slate-300 mb-4">
            I&apos;m always down to talk about frontend, AI, math, anime, or
            some wild idea you want to prototype.
          </p>

          <ul className="space-y-3 text-sm text-slate-200">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <span className="text-emerald-300"><Link href={"mailto:sharadvyas132@gmail.com"}>sharadvyas132@gmail.com</Link></span>
            </li>
            <li>
              <span className="font-semibold">GitHub:</span>{" "}
              <span> <Link href={"https://github.com/sharadvyas123"}>github.com/sharadvyas123</Link></span>
            </li>
            <li>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <span><Link href={"https://www.linkedin.com/in/sharad-vyas-270310324/"}>linkedin.com/in/sharad-vyas</Link></span>
            </li>
          </ul>

          <p className="mt-6 text-xs text-slate-400">
            Thank you for stopping by!
          </p>
        </div>
      </div>
    </main>
  );
}
