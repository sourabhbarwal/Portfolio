"use client";

import useLenis from "@/hooks/useLenis";

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  useLenis();

  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />

        <Highlights />

        <About />

        <Projects />

        <Skills />

        <Contact />
      </main>
    </>
  );
}