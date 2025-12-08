"use client";

import { motion } from "framer-motion";
import { act, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

// ======== MUSIC TRACKS =========
const TRACKS = [
  {
    id:"Love Story",
    title: "Love Story",
    artist: "Cool song.",
    src: "/music/love_story.mp3",
  },
  {
    id : "itachi",
    title: "Itachi Uchiha",
    artist: "You are under my Genjustu!! 😵‍💫",
    src: "/music/itachi.mp3",
  },
  {
    id: "way down we go",
    title: "Way down we Go ",
    artist: "Kaleo",
    src: "/music/way_down_we_go.mp3",
  },
];

const containerStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const float = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 2.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ======== EXPORT: HOME PAGE MAIN LAYOUT =========
export function HomeHeroAndMain() {
  return (
    <>
      <main className="min-h-screen w-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 relative overflow-hidden">
        {/* Background blobs */}
        <Navbar />
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-40 -left-40 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute top-40 -right-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/25 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-10 pt-16 md:px-8 md:pt-20">
          <HeaderBadgeRow />

          <motion.section
            variants={containerStagger}
            initial="hidden"
            animate="show"
            className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2.4fr)] items-start"
          >
            <HeroCard />
            <SidePanel />
          </motion.section>

          <motion.section
            variants={containerStagger}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2"
          >
            <SkillsShowcase />
            <ProjectsShowcase />
          </motion.section>

          <motion.section
            variants={containerStagger}
            initial="hidden"
            animate="show"
            className="grid gap-6 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,2.8fr)]"
          >
            <AnimeAndVibes />
            <MusicSection />
          </motion.section>
        </div>
      </main>
    </>
  );
}

// ======== SMALL PIECES (USED IN MANY PAGES) =========
export function HeaderBadgeRow() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-4 py-1 text-xs md:text-sm shadow-[0_0_20px_rgba(15,23,42,0.8)] backdrop-blur"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Sharad is online · building cool AI stuff</span>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="inline-flex flex-wrap gap-2 text-xs md:text-sm"
      >
        <FloatingChip>Song Lover 🎧</FloatingChip>
        <FloatingChip delay={0.2}>Anime Enjoyer 🎌</FloatingChip>
        <FloatingChip delay={0.4}>Knowledge Seeker 🔍</FloatingChip>
        <FloatingChip delay={0.6}>Math Nerd ➕</FloatingChip>
      </motion.div>
    </div>
  );
}

function FloatingChip({ children, delay = 0 }) {
  return (
    <motion.span
      variants={float}
      animate="animate"
      transition={{ delay }}
      className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[0.7rem] uppercase tracking-wide shadow-sm backdrop-blur"
    >
      {children}
    </motion.span>
  );
}

export function HeroCard() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-linear-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 p-6 md:p-8 shadow-[0_0_35px_rgba(15,23,42,0.9)] backdrop-blur-lg"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-30px] left-[-30px] h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

      <motion.p
        className="text-xs font-mono uppercase tracking-[0.22em] text-slate-400 mb-3"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 70, delay: 0.1 }}
      >
        Hi, I&apos;m
      </motion.p>

      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, delay: 0.15 }}
      >
        Sharad
        <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 via-emerald-300 to-cyan-400">
          {" "}
          · Frontend &amp; AI Dev
        </span>
      </motion.h1>

      <motion.p
        className="mt-4 max-w-xl text-sm md:text-base text-slate-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        I love crafting playful, expressive UIs, and mixing them with{" "}
        <span className="text-emerald-300">AI magic</span>. When I&apos;m not
        doing math or breaking my brain on algorithms, I&apos;m vibing to songs
        and anime soundtracks, learning something new every single day.
      </motion.p>

      <motion.div
        className="mt-6 flex flex-wrap gap-3 text-xs md:text-sm"
        initial="hidden"
        animate="show"
        variants={containerStagger}
      >
        <Tag>GenAI Hackathon Builder</Tag>
        <Tag>Image Generation on AWS</Tag>
        <Tag>GreenGuard · Satellite + ML</Tag>
        <Tag>Neural Networks from Scratch</Tag>
      </motion.div>

      <motion.div
        className="mt-7 flex flex-wrap items-center gap-4"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <CTAButton>
          <Link href={'/project'}>View My Projects</Link></CTAButton>
        <button className="text-xs md:text-sm text-slate-300 hover:text-emerald-300 transition-colors underline-offset-4 hover:underline">
          Download Resume
        </button>
      </motion.div>
    </motion.div>
  );
}

function Tag({ children }) {
  return (
    <motion.span
      variants={fadeUp}
      className="rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1 shadow-sm backdrop-blur text-slate-200"
    >
      {children}
    </motion.span>
  );
}

function CTAButton({ children }) {
  return (
    <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-emerald-400/50 bg-linear-to-r from-emerald-500/80 via-emerald-400/80 to-cyan-400/80 px-5 py-2 text-xs md:text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(45,212,191,0.5)]">
      <span className="relative z-10">{children}</span>
      <motion.span
        initial={{ x: 12 }}
        animate={{ x: 0 }}
        transition={{ repeat: Infinity, duration: 1.6, repeatType: "reverse" }}
        className="relative z-10 text-sm"
      >
        ✨
      </motion.span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/30 mix-blend-overlay blur-md transition-transform duration-500 group-hover:translate-x-[0%]" />
    </button>
  );
}

export function SidePanel() {
  return (
    <motion.div variants={fadeUp} className="flex flex-col gap-4">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 md:p-5 shadow-lg backdrop-blur"
        variants={fadeUp}
      >
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400 mb-3">
          Quick intro
        </p>
        <p className="text-sm text-slate-200">
          Based in <span className="text-emerald-300">Surat, Gujarat</span>, I
          love building apps that feel like a{" "}
          <span className="italic">perfectly timed anime opening</span>:
          energetic, smooth, and slightly dramatic in all the right ways.
        </p>
        <p className="mt-3 text-sm text-slate-300">
          I&apos;m obsessed with:{" "}
          <span className="text-fuchsia-300">
            clean UI, motion design, GenAI, and problem-solving with math
          </span>
          . If it has good vibes + good logic, I&apos;m in.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="grid grid-cols-2 gap-3 text-xs md:text-sm"
      >
        <HighlightCard
          title="Frontend"
          items={["Next.js", "React", "Tailwind", "Framer Motion"]}
        />
        <HighlightCard
          title="AI / ML"
          items={[
            "GenAI Apps",
            "Image Gen (Bedrock)",
            "ML (Keras)",
            "Satellite + ML",
          ]}
        />
      </motion.div>
    </motion.div>
  );
}

function HighlightCard({ title, items }) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3 py-3 shadow-md backdrop-blur">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2">
        {title}
      </p>
      <ul className="space-y-1 text-[0.72rem] text-slate-200">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ======== SKILLS / PROJECTS / VIBES / MUSIC (REUSED) =========
export function SkillsShowcase() {
  const frontendSkills = [
    { name: "Next.js", icon: "/skills/nextjs.svg" },
    { name: "React", icon: "/skills/react.svg" },
    { name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
    { name: "JavaScript", icon: "/skills/js.svg" },
    { name: "TypeScript", icon: "/skills/ts.svg" },
    { name: "Framer Motion", icon: "/skills/react.svg" }, // placeholder
  ];

  const backendSkills = [
    { name: "Node.js", icon: "/skills/nodejs.svg" },
    { name: "Express", icon: "/skills/express.svg" },
    { name: "MongoDB", icon: "/skills/mongodb.svg" },
    { name: "PostgreSQL", icon: "/skills/postgres.svg" },
    { name: "Git / GitHub", icon: "/skills/git.svg" }, // add git.svg if you want
  ];

  const aiSkills = [
    { name: "Python", icon: "/skills/python.svg" },
    { name: "TensorFlow / Keras", icon: "/skills/tensorflow.svg" },
    { name: "LangChain", icon: "/skills/langchain.png" },
    { name: "OpenAI / LLMs", icon: "/skills/openai.svg" },
    { name: "Docker", icon: "/skills/docker.svg" },
  ];

  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 md:p-6 shadow-lg backdrop-blur"
    >
      <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400 mb-3">
        Skills
      </p>

      <h2 className="text-lg md:text-xl font-semibold text-slate-50 mb-4">
        Frontend, backend, full stack &amp; AI.
      </h2>

      <div className="space-y-5 text-xs md:text-sm">
        <SkillGroup title="Frontend Developer" skills={frontendSkills} />
        <SkillGroup title="Backend / Full Stack" skills={backendSkills} />
        <SkillGroup title="AI Engineer · LLM Optimizer" skills={aiSkills} />
      </div>
    </motion.div>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div>
      <p className="mb-2 text-[0.8rem] font-semibold text-slate-200">
        {title}
      </p>

      {/* GRID – no stacking, responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2 shadow-sm"
          >
            <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-md bg-slate-800">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain p-1"
                sizes="28px"
              />
            </div>
            <span className="text-[0.8rem] text-slate-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


function SkipperStack({ title, chips }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3 shadow-[0_0_20px_rgba(15,23,42,0.9)]">
      <p className="mb-2 text-[0.75rem] text-slate-300">{title}</p>
      <div className="relative h-24 overflow-hidden">
        {chips.map((chip, index) => (
          <motion.div
            key={chip}
            className="absolute inset-x-0 mx-auto w-[95%] rounded-xl bg-slate-950/80 border border-slate-700/80 px-3 py-2 text-[0.74rem] text-slate-200 shadow-md backdrop-blur"
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{
              y: [40, 0, -40],
              opacity: [0, 1, 0],
              scale: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: index * 0.4,
            }}
          >
            <div className="flex items-center justify-between gap-2">
              <span>{chip}</span>
              <span className="text-[0.6rem] text-emerald-300">active</span>
            </div>
            <div className="mt-1 h-1 rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-fuchsia-400 via-emerald-300 to-cyan-400"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ProjectsShowcase() {
  const projects = [
    {
      name: "GreenGuard",
      label: "Satellite + ML",
      desc: "Monitors urban tree loss using Sentinel Hub, ML models, and a clean React dashboard.",
      tag: "Featured",
      demo : "https://green-guard-eta.vercel.app/"
    },
    {
      name: "Evo-Gene",
      label: "DNA analysis + DL model",
      desc: "DNA analysis of any sequence and Multimodal application for the Helth and care department",
      tag: "Hackathon",
      demo :"https://evo-gene-yxvt.vercel.app/"
    },
    {
      name: "NeuralNet from Scratch",
      label: "NumPy + MNIST",
      desc: "Pure Python neural network learning MNIST without big frameworks.",
      tag: "Deep Dive",
      demo:""
    },
    {
      name: "Fact checker",
      label: "Langchain + Frontend UI",
      desc: "An app where you can check the facts and verify on global level.",
      tag: "Featured",
      demo : "https://factchecker-chatbot.vercel.app/"
    },
    {
      name: "Help me",
      label: "Pure Nextjs",
      desc: "Our idea is to deliver one platform for service provider.",
      tag: "Real world start up idea",
      demo : "https://helpme-beige.vercel.app/"
    },
    {
      name: "Aquasense",
      label: "RAG chatbot + Nextjs",
      desc: "Platform for the indian ocean argo dataset and ocean disasters predictions system .",
      tag: "Hackathon",
      demo : "https://aquasense-seven.vercel.app/"
    },
  ];

  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 md:p-6 shadow-lg backdrop-blur"
    >
      <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400 mb-3">
        Selected builds
      </p>
      <h2 className="text-lg md:text-xl font-semibold text-slate-50 mb-4">
        Projects that represent my vibes.
      </h2>

      <div className="space-y-3 text-xs md:text-sm">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.07, type: "spring", stiffness: 70 }}
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 shadow-sm hover:border-emerald-400/80 hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] transition-all cursor-pointer"
            onClick={()=>{window.location.href = p.demo ? p.demo : '/project' }}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <span className="font-semibold text-slate-50">{p.name}</span>
                <span className="text-[0.72rem] text-slate-400">
                  {p.label}
                </span>
              </div>
              <span className="rounded-full border border-slate-700/80 bg-slate-950/90 px-2 py-1 text-[0.65rem] uppercase tracking-wide text-emerald-300">
                {p.tag}
              </span>
            </div>
            <p className="mt-2 text-slate-300 text-[0.8rem]">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function AnimeAndVibes() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 md:p-6 shadow-lg backdrop-blur"
    >
      <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400 mb-3">
        Anime &amp; knowledge mode
      </p>
      <h2 className="text-lg md:text-xl font-semibold text-slate-50 mb-3">
        Built like an anime MC, powered by curiosity.
      </h2>

      <p className="text-sm text-slate-300">
        I love anime not just for the fights, but for the{" "}
        <span className="text-fuchsia-300">
          growth arcs, background music, and world-building
        </span>
        . That&apos;s also how I approach code: build worlds, not just apps.
      </p>

      <p className="mt-3 text-sm text-slate-300">
        I&apos;m constantly exploring{" "}
        <span className="text-emerald-300">
          new tech, math concepts, and AI techniques
        </span>{" "}
        — because it&apos;s fun, but also because future-me should be more op
        than current-me.
      </p>

      <motion.div
        className="mt-4 grid grid-cols-3 gap-3 text-[0.75rem]"
        initial="hidden"
        animate="show"
        variants={containerStagger}
      >
        <MiniPill title="Anime" text="OPs, EDs &amp; OSTs on repeat." />
        <MiniPill title="Music" text="Coding with BGM > silence." />
        <MiniPill title="Learning" text="Docs, blogs &amp; deep dives." />
      </motion.div>
    </motion.div>
  );
}

function MiniPill({ title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-slate-800/80 bg-slate-900/80 px-3 py-2 shadow-sm"
    >
      <p className="font-semibold text-slate-100 text-[0.75rem] mb-1">
        {title}
      </p>
      <p className="text-[0.7rem] text-slate-300">{text}</p>
    </motion.div>
  );
}

// =========Fire rain animation==================
export function FireRain({ active }) {
  if (!active) return null;

  const baseEmbers = [
  { id: 1, left: "5%", duration: 10, delay: 0 },
  { id: 2, left: "15%", duration: 12, delay: 0.8 },
  { id: 3, left: "26%", duration: 11, delay: 1.6 },
  { id: 4, left: "34%", duration: 13, delay: 0.4 },
  { id: 5, left: "42%", duration: 9, delay: 1.2 },
  { id: 6, left: "51%", duration: 12, delay: 2.0 },
  { id: 7, left: "59%", duration: 11, delay: 0.6 },
  { id: 8, left: "67%", duration: 13, delay: 1.4 },
  { id: 9, left: "76%", duration: 10, delay: 2.2 },
  { id: 10, left: "84%", duration: 14, delay: 1.0 },
  { id: 11, left: "92%", duration: 11, delay: 2.8 },
  { id: 12, left: "10%", duration: 13, delay: 3.2 },
  { id: 13, left: "30%", duration: 12, delay: 3.8 },
  { id: 14, left: "55%", duration: 10, delay: 4.4 },
  { id: 15, left: "80%", duration: 13, delay: 5.0 },
  { id: 16, left: "0%", duration: 11, delay: 0.3 },
  { id: 17, left: "20%", duration: 14, delay: 1.1 },
  { id: 18, left: "40%", duration: 10, delay: 2.5 },
  { id: 19, left: "60%", duration: 12, delay: 3.5 },
  { id: 20, left: "98%", duration: 9, delay: 4.8 },
  { id: 21, left: "12%", duration: 14, delay: 0.6 },
  { id: 22, left: "27%", duration: 11, delay: 1.3 },
  { id: 23, left: "37%", duration: 13, delay: 2.1 },
  { id: 24, left: "47%", duration: 9, delay: 2.9 },
  { id: 25, left: "57%", duration: 12, delay: 3.7 },
  { id: 26, left: "68%", duration: 11, delay: 4.2 },
  { id: 27, left: "75%", duration: 14, delay: 4.9 },
  { id: 28, left: "88%", duration: 9, delay: 5.4 },
  { id: 29, left: "2%", duration: 13, delay: 1.8 },
  { id: 30, left: "18%", duration: 10, delay: 3.4 },
  { id: 31, left: "8%", duration: 11, delay: 0.5 },
  { id: 32, left: "22%", duration: 12, delay: 1.7 },
  { id: 33, left: "33%", duration: 10, delay: 2.8 },
  { id: 34, left: "45%", duration: 14, delay: 3.9 },
  { id: 35, left: "65%", duration: 11, delay: 4.6 },
  { id: 36, left: "81%", duration: 9, delay: 5.3 },
  { id: 37, left: "95%", duration: 13, delay: 5.8 },
  { id: 38, left: "28%", duration: 14, delay: 1.9 },
  { id: 39, left: "50%", duration: 10, delay: 2.7 },
  { id: 40, left: "72%", duration: 11, delay: 3.6 },
  { id: 41, left: "7%", duration: 13, delay: 0.4 },
  { id: 42, left: "29%", duration: 12, delay: 1.1 },
  { id: 43, left: "44%", duration: 9, delay: 2.4 },
  { id: 44, left: "63%", duration: 11, delay: 3.2 },
  { id: 45, left: "78%", duration: 14, delay: 4.1 },
  { id: 46, left: "93%", duration: 10, delay: 4.9 },
  { id: 47, left: "15%", duration: 11, delay: 2.6 },
  { id: 48, left: "39%", duration: 13, delay: 3.8 },
  { id: 49, left: "54%", duration: 12, delay: 5.0 },
  { id: 50, left: "70%", duration: 11, delay: 5.5 },
];


  const horizontalFall = -150; // px-ish

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {baseEmbers.map((ember) => (
        <motion.div
          key={ember.id}
          className="absolute"
          style={{ left: ember.left }}
          initial={{ y: "-10vh", opacity: 0, scale: 0.7 }}
          animate={{
            y: ["-10vh", "40vh", "80vh", "120vh"],
            x: [0, horizontalFall * 0.4, horizontalFall * 0.8, horizontalFall],
            opacity: [0, 1, 1, 0],
            rotate: [0, -5, 3, 0],
            scale: [0.7, 1, 0.9, 0.8],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-0.5 h-2.5 rounded-full bg-linear-to-b from-orange-400 via-red-500 to-amber-300 shadow-[0_0_10px_rgba(248,113,113,0.8)]" />
        </motion.div>
      ))}
    </div>
  );
}


// ======== MUSIC SECTION (PLAYER + BGM) =========
export function MusicSection({ onItachiGlobalChange }) {
  const [isItachiMode, setIsItachiMode] = useState(false);

  const handleItachiStateChange = (active) => {
    setIsItachiMode(active);
    if (typeof onItachiGlobalChange === "function") {
      onItachiGlobalChange(active);
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-5 md:p-6 shadow-[0_0_35px_rgba(15,23,42,0.95)] backdrop-blur"
    >
      {/* Video background only when Itachi is playing */}
      {isItachiMode && (
        <>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/itachi_video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Dark overlay to keep text readable */}
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}

      {/* Actual content on top */}
      <div className="relative z-10">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400 mb-3">
          Song lover mode
        </p>
        <h2 className="text-lg md:text-xl font-semibold text-slate-50 mb-2">
          Music player &amp; BGM for this portfolio.
        </h2>
        <p className="text-sm text-slate-300 mb-10">
          Coding without music feels illegal. So here&apos;s a built-in player
        </p>

        <MusicPlayer onItachiStateChange={handleItachiStateChange} />
      </div>
    </motion.div>
  );
}




function MusicPlayer({ onItachiStateChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBgmLoop, setIsBgmLoop] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const currentTrack = TRACKS[currentIndex];
  const isItachiTrack = currentTrack.id === "itachi";

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const handleTimeUpdate = () => {
      if (!audio.duration) return;
      setProgress((audio.currentTime / audio.duration) * 100);
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      if (isBgmLoop) {
        handleNext();
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isBgmLoop]);

  // Whenever track or play state changes, tell parent if Itachi mode is active
  useEffect(() => {
    if (typeof onItachiStateChange === "function") {
      onItachiStateChange(isItachiTrack && isPlaying);
    }
  }, [isItachiTrack, isPlaying, onItachiStateChange]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [currentIndex, isPlaying]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TRACKS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TRACKS.length - 1 : prev - 1));
  };

  const handleSeek = (e) => {
    if (!audioRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.min(Math.max(x / rect.width, 0), 1);
    audioRef.current.currentTime = ratio * duration;
    setProgress(ratio * 100);
  };

  const formatTime = (sec) => {
    if (!sec || Number.isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="relative z-10 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-lg backdrop-blur">
      <audio ref={audioRef} src={currentTrack.src} preload="metadata" />

      {/* top info */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <div className="flex flex-col">
          <span className="text-xs font-mono uppercase tracking-[0.16em] text-slate-400">
            Now playing
          </span>
          <span className="text-sm md:text-base font-semibold text-slate-50">
            {currentTrack.title}
          </span>
          <span className="text-[0.7rem] text-slate-400">
            {currentTrack.artist}
          </span>
        </div>

        <button
          className={`self-start rounded-full px-3 py-1 text-[0.7rem] border ${
            isBgmLoop
              ? "border-emerald-400/80 text-emerald-300"
              : "border-slate-700 text-slate-400"
          }`}
          onClick={() => setIsBgmLoop((v) => !v)}
        >
          BGM Loop {isBgmLoop ? "· ON" : "· OFF"}
        </button>
      </div>

      {/* progress bar */}
      <div
        className="relative mt-2 h-2 w-full cursor-pointer rounded-full bg-slate-800"
        ref={progressBarRef}
        onClick={handleSeek}
      >
        <motion.div
          className="absolute left-0 top-0 h-2 rounded-full bg-linear-to-r from-fuchsia-400 via-emerald-300 to-cyan-400"
          style={{ width: `${progress}%` }}
          layout
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
        <motion.div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-slate-50 shadow-md"
          style={{ left: `${progress}%` }}
          layout
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>

      <div className="mt-2 flex justify-between text-[0.7rem] text-slate-400">
        <span>{formatTime((progress / 100) * duration)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* controls + caption */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-center gap-3">
          <SmallRoundButton onClick={handlePrev}>⏮</SmallRoundButton>
          <PlayButton isPlaying={isPlaying} onClick={handlePlayPause} />
          <SmallRoundButton onClick={handleNext}>⏭</SmallRoundButton>
        </div>

        <div className="flex flex-col items-center sm:items-end text-[0.7rem] text-slate-300">
          <span className="uppercase tracking-[0.14em] text-xs">
            BGM for this site
          </span>
        </div>
      </div>
    </div>
  );
}


function SmallRoundButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-sm text-slate-100 shadow-sm hover:border-emerald-300 hover:text-emerald-200 hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all"
    >
      {children}
    </button>
  );
}

function PlayButton({ isPlaying, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/80 bg-linear-to-br from-emerald-500/90 to-cyan-400/90 text-base text-slate-950 shadow-[0_0_20px_rgba(45,212,191,0.7)] hover:scale-105 transition-transform"
    >
      {isPlaying ? "⏸" : "▶"}
    </button>
  );
}
