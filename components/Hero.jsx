const resumeUrl = "/files/Geromo_John_Elton_D_FlowCV_Resume_2026-08-02.pdf";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8 bg-transparent"
    >
      {/* Retro Dot Grid Background decoration */}
      <div className="absolute inset-0 bg-retro-grid pointer-events-none z-0" />

      <div className="relative mx-auto max-w-6xl z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Left Content Column */}
          <div className="space-y-8 text-left">
            <div className="space-y-5">
              
              {/* Status Pills / Badges */}
              <div className="flex flex-wrap gap-2.5 animate-fade-in">
                <span className="inline-flex items-center gap-2 rounded border-2 border-border bg-neo-green px-3.5 py-1.5 text-xs font-mono font-black uppercase text-black shadow-[2px_2px_0px_var(--border-color)]">
                  <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
                  Available for Work
                </span>
                <span className="inline-flex items-center rounded border-2 border-border bg-neo-lilac px-3.5 py-1.5 text-xs font-mono font-black uppercase text-white shadow-[2px_2px_0px_var(--border-color)]">
                  Full-Stack Developer
                </span>
              </div>

              {/* Bold Neubrutalist Typography Headline */}
              <h1 className="font-extrabold tracking-tight text-5xl sm:text-7xl lg:text-8xl leading-none animate-fade-up">
                <span className="block text-text">
                  John Elton
                </span>
                <span className="inline-block bg-neo-yellow text-black border-4 border-border px-4 py-1 mt-2 rotate-[-1deg] shadow-[4px_4px_0px_var(--border-color)]">
                  Geromo
                </span>
              </h1>
            </div>

            {/* Subheading & Technical tags */}
            <div className="space-y-6 animate-fade-up stagger-1">
              <p className="max-w-xl text-lg font-bold leading-relaxed text-muted sm:text-xl font-mono">
                &gt;_ Crafting highly efficient web applications, automated scraper pipelines, and scalable developer tools.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded border-2 border-border bg-surface px-3 py-1 text-xs font-bold uppercase tracking-wider text-text shadow-[2px_2px_0px_var(--border-color)]">
                  📍 Mandaue City, PH
                </span>
                <span className="rounded border-2 border-border bg-surface px-3 py-1 text-xs font-bold uppercase tracking-wider text-text shadow-[2px_2px_0px_var(--border-color)]">
                  🎓 Student & Innovator
                </span>
              </div>
            </div>

            {/* Action Buttons with Neubrutalist translation click animations */}
            <div className="flex flex-col gap-4 sm:flex-row pt-2 animate-fade-up stagger-2">
              <a
                href="#projects"
                className="btn-neo bg-neo-teal text-black px-8 py-4 text-xs font-black shadow-neo"
              >
                View Work
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-neo bg-neo-orange text-white px-8 py-4 text-xs font-black shadow-neo"
              >
                Download CV
              </a>
            </div>

            {/* Tech Stack Pills (Styled like Chrome Badge Stickers) */}
            <div className="pt-4 animate-fade-up stagger-3">
              <p className="mb-3 font-mono text-xs font-black uppercase tracking-widest text-text">
                [Tech Stack]
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "React", bg: "bg-neo-teal" },
                  { name: "Next.js", bg: "bg-neo-lilac text-white" },
                  { name: "JavaScript", bg: "bg-neo-yellow" },
                  { name: "Tailwind CSS", bg: "bg-neo-pink" },
                  { name: "Node.js", bg: "bg-neo-green" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`tech-tag rounded px-3 py-1.5 text-xs font-mono font-extrabold uppercase tracking-wide border-2 border-border ${tech.bg} shadow-[2px_2px_0px_var(--border-color)]`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Retro-Futuristic Terminal Window */}
          <div className="relative mx-auto w-full max-w-md pt-8 lg:pt-0 animate-fade-up stagger-4 z-10">
            <div className="glass-panel overflow-hidden border-2 border-border bg-surface p-4 shadow-neo-lg crt-scanlines">
              
              {/* Terminal Header */}
              <div className="mb-4 flex items-center justify-between border-b-2 border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border border-border bg-neo-orange" />
                  <span className="h-3 w-3 rounded-full border border-border bg-neo-yellow" />
                  <span className="h-3 w-3 rounded-full border border-border bg-neo-green" />
                </div>
                <span className="font-mono text-xs font-extrabold text-text">
                  system_profile.sh
                </span>
                <span className="rounded bg-neo-pink px-1.5 py-0.5 text-[9px] font-mono font-bold text-black border border-border">
                  v2.0.26
                </span>
              </div>
              
              {/* Terminal Code Simulator */}
              <div className="font-mono text-xs leading-relaxed space-y-2">
                <div className="text-muted">$ whoami</div>
                <div className="text-neo-teal font-bold">&gt; John Elton Geromo</div>
                
                <div className="text-muted">$ current_role</div>
                <div className="text-neo-orange font-bold">&gt; Full-Stack Software Developer</div>
                
                <div className="text-muted">$ check_status --verbose</div>
                <div className="bg-surface-secondary/70 p-2.5 rounded border border-dashed border-border text-[11px] space-y-1">
                  <p className="text-neo-green font-bold">● Status: Active & Available</p>
                  <p className="text-text">● Focus: Fast, clean, optimized code</p>
                  <p className="text-text">● Environment: Production Ready</p>
                </div>
                
                <div className="text-muted">$ list_interests</div>
                <pre className="text-[10px] text-neo-lilac font-bold leading-none">
{`   _____  _____  ______ 
  /  _  \\/  _  \\/  ____/ 
  /  / \\  /  / \\  \\___ \\  
 /__/  \\_/__/  \\_/____/  `}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row with Neubrutalist Cards */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 animate-fade-up stagger-5">
          {[
            { label: "Projects Built", value: "10+", color: "text-neo-orange" },
            { label: "Years Coding", value: "3+", color: "text-neo-teal" },
            { label: "Languages", value: "5+", color: "text-neo-lilac" },
            { label: "Client Satisfaction", value: "Curious", color: "text-neo-green" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-panel bg-surface p-5 border-2 border-border shadow-neo hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--border-color)] transition-all"
            >
              <p className={`text-3xl font-black font-mono tracking-tight ${stat.color}`}>
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] font-mono font-black uppercase tracking-widest text-text">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
