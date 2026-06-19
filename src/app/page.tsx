"use client";

import useLenis from "@/hooks/useLenis";

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";

export default function Home() {
  useLenis();

  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main className="max-w-7xl mx-auto px-8">
        <Hero />

        <Highlights />

        <About />

        <Projects />

        <Expertise />

        <Contact />
      </main>
    </>
  );
}