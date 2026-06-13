import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  github: string;
  description: string;
};

export default function ProjectCard({
  title,
  subtitle,
  image,
  github,
  description,
}: Props) {
  return (
    <div
      className="
      py-32
      "
    >
      <div
        className="
        mx-auto
        max-w-7xl
        px-6

        grid
        gap-16

        md:grid-cols-2
        "
      >
        <div>
          <Image
            src={image}
            alt={title}
            width={1400}
            height={900}
            className="
            rounded-[32px]
            border
            "
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Case Study
          </p>

          <h3 className="mt-4 text-5xl font-bold">
            {title}
          </h3>

          <p className="mt-4 text-xl text-neutral-600">
            {subtitle}
          </p>

          <p className="mt-8 text-neutral-600">
            {description}
          </p>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
            mt-8
            inline-flex
            "
          >
            GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}