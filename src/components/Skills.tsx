export default function Skills() {
  const categories = [
    {
      title: "Cloud",
      items: [
        "AWS",
        "EC2",
        "S3",
        "IAM",
      ],
    },

    {
      title: "DevOps",
      items: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "CI/CD",
      ],
    },

    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
      ],
    },

    {
      title: "Backend",
      items: [
        "Node.js",
        "Firebase",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-40"
    >
      <div
        className=" mx-auto max-w-7xl px-6"
      >
        <p
          className="
          text-sm
          uppercase
          tracking-[0.3em]
          text-neutral-500
          "
        >
          Expertise
        </p>

        <h2
          className="
          mt-6

          text-6xl
          font-bold

          md:text-8xl
          "
        >
          Tech Stack
        </h2>

        <div
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {categories.map(
            (category) => (
              <div
                key={category.title}
                className="rounded-[32px] border border-neutral-200 bg-white p-10 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3
                  className="text-2xl font-bold"
                >
                  {category.title}
                </h3>

                <div
                  className="mt-8 flex flex-wrap gap-3"
                >
                  {category.items.map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full bg-neutral-100 px-4 py-2"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}