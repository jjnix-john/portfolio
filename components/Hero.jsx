export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-stone-500 mb-3 animate-fade-in">
            Hi, my name is
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-stone-900 animate-fade-up">
            John Elton<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">
              Geromo
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-500 mt-3 font-medium animate-fade-up stagger-1">
            <span className="text-stone-900 font-semibold">Student</span> / Full Stack Developer
          </p>

          <div className="flex items-center gap-2 mt-6 text-sm text-stone-500 animate-fade-up stagger-2">
            <svg
              className="w-4 h-4 text-sky-500 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Mandaue City, Philippines
          </div>

          <div className="flex flex-wrap gap-4 mt-8 animate-fade-up stagger-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-all hover:-translate-y-0.5 shadow-lg shadow-sky-200"
            >
              View Projects
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 text-stone-700 font-semibold rounded-xl hover:border-stone-400 hover:bg-stone-100 transition-all hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
