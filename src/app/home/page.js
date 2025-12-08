"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { FireRain } from "@/components/MainSections";
import { MusicSection } from "@/components/MainSections";
const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Engineer",
  "AI Engineer",
  "LLM Optimizer",
];

function useTypewriter(
  words,
  typingSpeed = 120,
  pauseTime = 1200,
  deletingSpeed = 60
) {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // char index
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // typing / deleting effect
  useEffect(() => {
    const currentWord = words[index % words.length];

    let timeout;

    if (!deleting && subIndex < currentWord.length) {
      timeout = setTimeout(() => setSubIndex(subIndex + 1), typingSpeed);
    } else if (!deleting && subIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && subIndex > 0) {
      timeout = setTimeout(() => setSubIndex(subIndex - 1), deletingSpeed);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

  // cursor blink
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const currentWord = words[index % words.length];
  return {
    text: currentWord.substring(0, subIndex),
    cursorVisible: blink,
  };
}

export default function HomePage() {
  const nameType = useTypewriter(["Sharad Vyas"], 130, 1500, 80);
  const roleType = useTypewriter(roles, 90, 1200, 60);

  // Global Itachi state: controls fire rain
  const [isItachiGlobal, setIsItachiGlobal] = useState(false);

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 relative">
      <Navbar />

      <FireRain active={isItachiGlobal} />

      <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-16 md:px-8">
        {/* Hero: left typing, right image */}
        <section className="min-h-[70vh] grid gap-10 md:grid-cols-2 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 70 }}
            className="space-y-4"
          >
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-slate-400">
              Hi, I&apos;m
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              <span className="bg-linear-to-r from-fuchsia-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                {nameType.text || "\u00A0"}
              </span>
              <span className="text-fuchsia-300">
                {nameType.cursorVisible ? "|" : "\u00A0"}
              </span>
            </h1>

            <div className="mt-2 text-lg md:text-2xl font-medium text-slate-100">
              <span className="text-slate-400 mr-2">I&apos;m a</span>
              <span className="text-emerald-300">
                {roleType.text || "\u00A0"}
              </span>
              <span className="text-emerald-300">
                {roleType.cursorVisible ? "|" : "\u00A0"}
              </span>
            </div>

            <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300 leading-relaxed">
              A stylish, fun-loving developer who mixes{" "}
              <span className="text-emerald-300">frontend</span>,{" "}
              <span className="text-cyan-300">backend</span>, and{" "}
              <span className="text-fuchsia-300">AI / LLMs</span> — with a
              constant BGM of anime openings and lo-fi tracks.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs md:text-sm">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Song Lover 🎧
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Anime Enjoyer 🎌
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Knowledge Seeker 🔍
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1">
                Math Nerd ➕
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 70, delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative h-52 w-52 md:h-64 md:w-64">
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-emerald-400 via-fuchsia-400 to-cyan-400 blur-xl opacity-40" />
              <div className="relative h-full w-full rounded-full border-4 border-slate-900 bg-slate-900 shadow-[0_0_35px_rgba(15,23,42,0.9)] overflow-hidden">
                {/* TODO: put your own picture in /public/me.jpg */}
                <Image
                  src="/me.jpg"
                  alt="Sharad photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Who am I section */}
        <section className="mt-16 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70 }}
            className="text-2xl md:text-3xl font-semibold mb-4"
          >
            Who am I? 👋
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 70 }}
            className="text-sm md:text-base text-slate-300 leading-relaxed"
          >
            I&apos;m Sharad from Surat, Gujarat — a developer who treats code
            like a creative playground. I love building{" "}
            <span className="text-emerald-300">
              smooth, animated UIs in Next.js
            </span>
            , wiring up{" "}
            <span className="text-cyan-300">backends and APIs</span>, and
            experimenting with{" "}
            <span className="text-fuchsia-300">
              AI, LLMs, and neural networks
            </span>
            . When I&apos;m not debugging something wild, I&apos;m probably
            listening to songs, watching anime, or learning some new concept
            just for fun.
          </motion.p>
        </section>

        <section className="mt-12">
          <MusicSection onItachiGlobalChange={setIsItachiGlobal} />
        </section>
      </div>
    </main>
  );
}
