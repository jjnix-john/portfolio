import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "BackTrack",
    tag: "Research",
    description:
      "An AI-powered code tracing and repository intelligence system for GitHub developers. Includes a full survey and EDA pipeline for analyzing developer workflows and repository patterns.",
    tech: ["Python", "AI/LLM", "EDA"],
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    title: "QuizArena",
    tag: "Networking",
    description:
      "Multiplayer CLI-based trivia battle system using TCP, UDP, and HTTP networking built in Java with OOP design and OpenTDB API integration.",
    tech: ["Java", "TCP/UDP", "OpenTDB"],
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "Armoniait.com",
    tag: "Web",
    description:
      "Company website built with modern web technologies — clean corporate presence with a professional brand experience.",
    tech: ["React", "Tailwind CSS"],
    screenshot: "/projects/armoniait.png",
    link: "https://armoniait.com",
  },
  {
    title: "Tuon.net",
    tag: "EdTech",
    description:
      "AI-powered study platform delivering intelligent learning experiences with adaptive content and smart recommendations.",
    tech: ["React", "AI/LLM", "Supabase"],
    screenshot: "/projects/tuon.png",
    link: "https://tuon.net",
  },
  {
    title: "Maribago Grill",
    tag: "Restaurant",
    description:
      "Full restaurant platform with online menu, ordering, and reservation features deployed on Vercel.",
    tech: ["React", "Vite", "Vercel"],
    screenshot: "/projects/maribago-grill.png",
    link: "https://maribago-grill.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 sm:py-32 bg-transparent transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-violet-400 dark:text-violet-300">
          Projects
        </p>
        <h2 className="mb-12 text-4xl font-black tracking-[-0.08em] text-text sm:text-5xl lg:text-6xl">
          Featured work
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
