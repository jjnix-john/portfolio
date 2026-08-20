import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const profileContainerRef = useRef(null);

  // Close profile popup when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileContainerRef.current &&
        !profileContainerRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        const top = s.offsetTop - 150;
        if (window.scrollY >= top) current = s.id;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-auto w-full max-w-5xl px-4">
      <nav className="relative flex h-16 items-center justify-between rounded-xl border-2 border-border bg-surface px-4 shadow-neo transition-all duration-300">
        
        {/* Profile / Avatar Trigger (Left) */}
        <div className="relative" ref={profileContainerRef}>
          <button
            type="button"
            onClick={() => setProfileOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-surface-secondary overflow-hidden shadow-[2px_2px_0px_var(--border-color)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--border-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_var(--border-color)]"
            aria-label="Toggle profile view"
          >
            <img
              src="/files/PictureUpload.png"
              alt="John Elton Geromo"
              className="h-full w-full object-cover object-center"
              style={{ objectPosition: "center 18%" }}
            />
          </button>

          {/* Retro-Futuristic Terminal Profile Card */}
          {profileOpen && (
            <div className="absolute left-0 top-14 z-50 w-[260px] rounded-xl border-2 border-border bg-surface p-3 shadow-neo-lg crt-scanlines">
              {/* Terminal Title Bar */}
              <div className="mb-2.5 flex items-center justify-between border-b-2 border-border pb-2">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setProfileOpen(false)}
                    className="h-2.5 w-2.5 rounded-full border border-border bg-neo-orange hover:bg-red-600 transition-colors"
                    title="Close Panel"
                  />
                  <span className="h-2.5 w-2.5 rounded-full border border-border bg-neo-yellow" />
                  <span className="h-2.5 w-2.5 rounded-full border border-border bg-neo-green" />
                </div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-muted">
                  geromo.sys
                </span>
              </div>

              <div className="overflow-hidden rounded-lg border-2 border-border bg-surface-secondary">
                <div className="relative">
                  <img
                    src="/files/PictureUpload.png"
                    alt="John Elton Geromo profile"
                    className="h-44 w-full object-cover object-center"
                    style={{ objectPosition: "center 18%" }}
                  />
                  <div className="absolute left-2 top-2 rounded border-2 border-border bg-neo-teal px-1.5 py-0.5 text-[8px] font-mono font-black uppercase tracking-wider text-black shadow-[1px_1px_0px_#000]">
                    MANDAUE
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between px-1">
                <div>
                  <p className="font-mono text-[9px] font-black uppercase tracking-widest text-neo-orange">
                    ● Available for Work
                  </p>
                  <p className="text-sm font-black tracking-tight text-text">
                    John Elton Geromo
                  </p>
                </div>
                <div className="rounded border-2 border-border bg-neo-lilac px-1.5 py-1 text-[10px] font-mono font-bold text-white shadow-[1px_1px_0px_#000]">
                  DEV
                </div>
              </div>

              {/* Neubrutalist Close Button at bottom */}
              <button
                onClick={() => setProfileOpen(false)}
                className="w-full mt-3.5 btn-neo bg-neo-orange text-white py-1.5 text-[10.5px] font-mono font-bold shadow-[2px_2px_0px_#000]"
              >
                Close Window
              </button>
            </div>
          )}
        </div>

        {/* Navigation & Controls (Right) */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex items-center gap-2">
            {links.map((l) => {
              const isLinkActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`inline-block rounded-lg px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all border-2 border-transparent ${
                      isLinkActive
                        ? "bg-neo-teal text-black border-border shadow-[2px_2px_0px_var(--border-color)] -translate-y-0.5 -translate-x-0.5"
                        : "text-text hover:bg-surface-secondary hover:border-border hover:shadow-[2px_2px_0px_var(--border-color)] hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-y-0 active:translate-x-0 active:shadow-none"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border bg-surface text-text shadow-[2px_2px_0px_var(--border-color)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--border-color)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_var(--border-color)]"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m3.08 3.08l4.24 4.24M1 12h6m6 0h6m-15.78 7.78l4.24-4.24m3.08-3.08l4.24-4.24" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-lg border-2 border-border bg-surface text-text shadow-[2px_2px_0px_var(--border-color)] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-5 rounded bg-text transition-all duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded bg-text transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded bg-text transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {open && (
          <div className="absolute left-0 right-0 top-20 z-50 rounded-xl border-2 border-border bg-surface p-3 shadow-neo md:hidden">
            <ul className="flex flex-col gap-2">
              {links.map((l) => {
                const isLinkActive = active === l.href.slice(1);
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-4 py-2.5 font-mono text-sm font-bold uppercase tracking-wider transition-all border-2 border-transparent ${
                        isLinkActive
                          ? "bg-neo-teal text-black border-border shadow-[2px_2px_0px_var(--border-color)]"
                          : "text-text hover:bg-surface-secondary hover:border-border hover:shadow-[2px_2px_0px_var(--border-color)]"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
