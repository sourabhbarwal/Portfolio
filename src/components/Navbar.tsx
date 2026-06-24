"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { PERSONAL_INFO } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 40
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className=" fixed top-0 left-0 z-50 w-full "
    >
      <div
        className={` mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-neutral-200 px-8 py-3 backdrop-blur-xl transition-all duration-300

        ${
          scrolled
            ? "bg-white/95 shadow-xl"
            : "bg-white/75"
        }
      `}
      >
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight"
        >
          Sourabh Barwal
        </a>

        <nav
          className="hidden items-center gap-10 md:flex"
        >
          <a
            href="#about"
            className="
              relative

              after:absolute
              after:left-0
              after:-bottom-1

              after:h-[1px]
              after:w-0

              after:bg-black

              after:transition-all

              hover:after:w-full
            "
            >
            About
          </a>

          <a
            href="#projects"
            className="
              relative

              after:absolute
              after:left-0
              after:-bottom-1

              after:h-[1px]
              after:w-0

              after:bg-black

              after:transition-all

              hover:after:w-full
            "
            >
            Work
          </a>

          <a
            href="#skills"
            className="
              relative

              after:absolute
              after:left-0
              after:-bottom-1

              after:h-[1px]
              after:w-0

              after:bg-black

              after:transition-all

              hover:after:w-full
            "
            >
            Tech Stack
          </a>

          <a
            href="#contact"
            className="
              relative

              after:absolute
              after:left-0
              after:-bottom-1

              after:h-[1px]
              after:w-0

              after:bg-black

              after:transition-all

              hover:after:w-full
            "
            >
            Contact
          </a>
        </nav>

        <div
          className="flex items-center gap-5"
        >
          <a
            href={
              PERSONAL_INFO.github
            }
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={
              PERSONAL_INFO.linkedin
            }
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}