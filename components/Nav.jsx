"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        const top = s.offsetTop - 120;
        if (window.scrollY >= top) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight text-stone-900"
        >
          <span className="text-sky-500">JG</span>
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-0.5 bg-stone-600 rounded transition-all ${
              open ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-stone-600 rounded transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-stone-600 rounded transition-all ${
              open ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>

        <ul
          className={`${
            open ? "flex" : "hidden"
          } md:flex absolute md:relative top-16 left-0 right-0 bg-white md:bg-transparent border-b md:border-0 border-stone-200 md:top-0 flex-col md:flex-row gap-0 md:gap-8 p-4 md:p-0 shadow-md md:shadow-none`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-2.5 md:py-0 text-sm font-medium transition-colors relative ${
                  active === l.href.slice(1)
                    ? "text-sky-600"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {l.label}
                {active === l.href.slice(1) && (
                  <span className="hidden md:block absolute -bottom-1 left-0 w-full h-0.5 bg-sky-500 rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
