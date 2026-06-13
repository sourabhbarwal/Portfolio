"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center px-6"
    >
      <div
        className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2"
      >
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
          >
            <div
              className="h-2 w-2 rounded-full bg-green-500"
            />

            Available for internships
          </div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-8 text-7xl font-bold leading-none md:text-[7rem]"
          >
            Sourabh
            <br />
            Barwal
          </motion.h1>

          <p
            className="mt-8 max-w-xl text-xl text-neutral-600"
          >
            Cloud & DevOps Engineer
            focused on scalable
            infrastructure,
            automation and modern
            web experiences.
          </p>

          <div
            className="mt-10 flex gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-white"
            >
              View Work
            </a>

            <a
              href="/resume.pdf"
              className="rounded-full border px-6 py-3"
            >
              Resume
            </a>
          </div>
        </div>

        <div>
          <div
            className="aspect-square overflow-hidden rounded-[40px] border bg-neutral-100">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}