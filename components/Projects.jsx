import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "BoxedLinks",
    tag: "Cloud Storage",
    description:
      "A Google Drive-style cloud file storage and sharing platform built with Next.js and Tailwind CSS. Users upload files and share them through unique links with Supabase Auth and Storage.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
    screenshot: "/projects/boxedlinks.png",
    link: "https://boxed-links.vercel.app/",
  },
  {
    title: "Tuon.net",
    tag: "EdTech AI",
    description:
      "Adaptive learning platform that converts study materials into generative AI-powered quizzes with real-time personalized recommendations.",
    tech: ["React", "AI/LLM", "Supabase", "Node.js"],
    screenshot: "/projects/tuon.png",
    link: "https://tuon.net",
  },
  {
    title: "QuizArena",
    tag: "Networking & Java",
    description:
      "Multiplayer CLI-based trivia battle system using TCP, UDP, and HTTP networking built in Java with OOP design and OpenTDB API integration.",
    tech: ["Java", "TCP/UDP", "OOP", "OpenTDB"],
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "Armoniait.com",
    tag: "Corporate Web",
    description:
      "Corporate company website engineered with clean, reusable front-end components and fully responsive layouts.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    screenshot: "/projects/armoniait.png",
    link: "https://armoniait.com",
  },
  {
    title: "Maribago Grill",
    tag: "Business Web",
    description:
      "Website proposal for a Lapu-Lapu City restaurant featuring digital interactive menus, inquiry workflows, and mobile-optimized pages.",
    tech: ["React", "Vite", "Vercel"],
    screenshot: "/projects/maribago-grill.png",
    link: "https://maribago-grill.vercel.app/",
  },
  {
    title: "BackTrack",
    tag: "Research & AI",
    description:
      "AI-powered code tracing and repository intelligence system for developers, featuring EDA pipeline and workflow analytics.",
    tech: ["Python", "AI/LLM", "Data Analysis"],
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
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
