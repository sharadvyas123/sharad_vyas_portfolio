"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/project", label: "Project" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="max-w-[90vw] mx-auto py-3 rounded-full bg-gray-900/90 backdrop-blur border border-gray-800 shadow-lg">
      <div className="flex items-center justify-between px-6 my-5">
        
        {/* Logo */}
        <Link href="/" className="font-bold tracking-wide text-lg">
          Sharad Vyas
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm md:text-base">
          {navLinks.map((link) => (
            <li key={link.href} className="hover:text-emerald-300 transition">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="md:hidden mt-2 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-4 gap-6 text-sm bg-gray-900/80 rounded-xl mx-4 mb-3 border border-gray-800 shadow-xl">
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-emerald-300 transition font-medium"
                >
                  <Link href={link.href}>{link.label}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
