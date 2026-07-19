import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "BackTrack",
    tag: "Research",
    description:
      "An AI-powered code tracing and repository intelligence system for GitHub developers. Includes a full survey and EDA pipeline for analyzing developer workflows and repository patterns.",
    tech: ["Python", "AI/LLM", "EDA"],
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
  {
    title: "QuizArena",
    tag: "Networking",
    description:
      "Multiplayer CLI-based trivia battle system using TCP, UDP, and HTTP networking built in Java with OOP design and OpenTDB API integration.",
    tech: ["Java", "TCP/UDP", "OpenTDB"],
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
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
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-semibold tracking-widest uppercase text-sky-500 mb-3">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mb-12">
          Featured Work
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
