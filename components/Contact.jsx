const channels = [
  {
    label: "Email",
    value: "johneltongeromo@gmail.com",
    href: "mailto:johneltongeromo@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "jjnix-john",
    href: "https://github.com/jjnix-john",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "john-elton-d-geromo",
    href: "https://www.linkedin.com/in/john-elton-d-geromo-726574406",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+639933023621",
    href: "tel:+639933023621",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-sky-500 mb-3">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mb-4">
          Get In Touch
        </h2>
        <p className="text-stone-500 max-w-md mx-auto mb-10">
          Have a project, research idea, or just want to say hi? I&apos;m always open to
          new opportunities and conversations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 px-5 py-4 bg-white border border-stone-200 rounded-xl hover:border-sky-300 hover:shadow-md hover:-translate-y-0.5 transition-all min-w-[180px] flex-1"
            >
              <span className="text-sky-500 shrink-0">{ch.icon}</span>
              <div className="text-left">
                <div className="text-xs text-stone-400 font-medium">{ch.label}</div>
                <div className="text-sm font-semibold text-stone-900">{ch.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
