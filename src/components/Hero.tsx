"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";
import TextReveal from "@/components/ui/TextReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
      flex
      min-h-screen
      items-center
      "
    >
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >
        <div
          className="
          inline-flex

          items-center

          gap-2

          rounded-full

          border

          px-4
          py-2

          text-sm
          "
        >
          <div
            className="
            h-2
            w-2

            rounded-full

            bg-green-500
            "
          />

          Available for internships
        </div>

        <p
          className="
          mt-12

          text-sm

          uppercase

          tracking-[0.35em]

          text-neutral-500
          "
        >
          <TextReveal text="Sourabh Barwal" />
        </p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          mt-8

          max-w-5xl

          text-6xl

          font-bold

          leading-none

          md:text-[7rem]
          "
        >
          Cloud & DevOps
          <br />
          Engineer
        </motion.h1>

        <p
          className="
          mt-10

          max-w-3xl

          text-xl

          leading-relaxed

          text-neutral-600
          "
        >
          Building scalable cloud
          infrastructure, automation
          pipelines and modern software
          systems with a focus on
          reliability, performance and
          developer experience.
        </p>

        <div
          className="
          mt-12

          flex

          flex-wrap

          gap-4
          "
        >
          <Magnetic>
          <button
            className="
            rounded-full

            bg-black

            px-8
            py-4

            text-white
            "
          >
            View Projects
          </button>
          </Magnetic>

          <Magnetic>
            <button
              className="
              rounded-full

              border

              px-8
              py-4
              "
            >
              Resume
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}