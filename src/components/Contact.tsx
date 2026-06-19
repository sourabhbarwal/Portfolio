import { PERSONAL_INFO } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
export default function Contact() {
  return (
    <Reveal>
    <section
      id="contact"
      className="
      py-40
      "
    >
      <div
        className="mx-auto max-w-5xl px-6 text-center "
      >
        <p
          className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500 "
        >
          Contact
        </p>

        <h2
          className="text-6xl font-bold leading-none md:text-8xl "
        >
          Let's build
          <br />
          something great.
        </h2>

        <p
          className="mx-auto mt-10 max-w-2xl text-xl text-neutral-600 "
        >
          Open to internships,
          freelance opportunities,
          collaborations and
          interesting engineering
          challenges.
        </p>

        <div
          className="mt-12 flex flex-wrap justify-center gap-4 "
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="rounded-full bg-black px-8 py-4 text-white "
          >
            Get In Touch
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-8 py-4"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
    </Reveal>
  );
}