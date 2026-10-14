import { useState, useRef, useEffect } from "react";

// Safe inline markdown parser for **bold text** and [link text](url)
function parseFormattedLine(line) {
  if (!line) return "";
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  const elements = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      elements.push(line.substring(lastIndex, match.index));
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      // Markdown link: [text](url)
      const linkText = match[1];
      const linkUrl = match[2];
      elements.push(
        <a
          key={`link-${match.index}`}
          href={linkUrl}
          target={linkUrl.startsWith("http") ? "_blank" : undefined}
          rel={linkUrl.startsWith("http") ? "noopener noreferrer" : undefined}
          className="font-extrabold underline text-neo-teal hover:text-neo-orange transition-colors"
        >
          {linkText}
        </a>
      );
    } else if (match[3] !== undefined) {
      // Bold text: **text**
      elements.push(
        <strong key={`bold-${match.index}`} className="font-extrabold text-text">
          {match[3]}
        </strong>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    elements.push(line.substring(lastIndex));
  }

  return elements.length > 0 ? elements : line;
}

// Guardrail checker: strictly verifies if the prompt is about John, his work, tech skills, or hiring
function isRelatedToJohn(query) {
  if (!query || typeof query !== "string") return false;
  const q = query.trim().toLowerCase();

  // Common short greetings & portfolio questions
  const greetings = [
    "hi", "hello", "hey", "hola", "greetings", "good morning", "good afternoon",
    "good evening", "who are you", "what can you do", "help", "who made you",
    "what is this", "tell me about yourself", "sup", "yo"
  ];
  if (greetings.some((g) => q === g || q.startsWith(g + " ") || q.endsWith(" " + g))) {
    return true;
  }

  // Keywords directly tied to John, his skills, projects, education, career
  const allowedKeywords = [
    "john", "elton", "geromo", "jjnix", "author", "developer", "creator", "candidate", "you", "jeg", "jeg ai",
    // Projects
    "boxedlinks", "boxed-links", "boxed", "tuon", "tuon.net", "quizarena", "quiz", "armonia",
    "maribago", "backtrack", "project", "projects", "portfolio", "app", "website",
    // Tech Stack & Languages
    "tech", "stack", "skill", "skills", "language", "languages", "java", "c++", "cpp",
    "python", "php", "javascript", "typescript", "js", "ts", "react", "next", "next.js",
    "node", "node.js", "supabase", "tailwind", "css", "html", "sql", "postgres", "mysql",
    "database", "api", "apis", "rest", "tcp", "udp", "socket", "network", "networking",
    "selenium", "git", "github", "vercel", "ai", "llm", "claude", "antigravity", "tools",
    // Education & Achievements
    "education", "school", "college", "university", "uclm", "cebu", "degree", "bsit",
    "award", "awards", "hackathon", "ibpap", "ibm", "ccs days", "topcit", "ef set",
    "cert", "certificate", "certification", "certifications", "english", "c1",
    // Career & Contact
    "experience", "work", "job", "hire", "hiring", "available", "role", "full stack",
    "front end", "frontend", "backend", "intern", "internship", "contact", "email",
    "phone", "number", "linkedin", "resume", "cv", "location", "mandaue", "philippines"
  ];

  return allowedKeywords.some((keyword) => q.includes(keyword));
}

// Generate focused, accurate answer about John
function generateAnswer(query) {
  if (!query || typeof query !== "string") {
    return "I'm **Jeg AI**. Please type a question about John's skills, projects, or background!";
  }
  const q = query.trim().toLowerCase();

  // Guardrail check: if question is unrelated, return a short concise response
  if (!isRelatedToJohn(q)) {
    return "I'm **Jeg AI**, John's portfolio assistant. I only answer questions about John Elton Geromo, his projects, and skills. Feel free to ask about his work!";
  }

  // Greetings / Identity
  if (
    q.includes("who are you") ||
    q.includes("what can you do") ||
    q.includes("who made you") ||
    q === "hi" ||
    q === "hello" ||
    q === "hey" ||
    q === "yo" ||
    q.includes("yourself")
  ) {
    return "Hello! 👋 I'm **Jeg AI**, the personal assistant for **John Elton Geromo**. Ask me anything about his projects (**BoxedLinks**, **Tuon.net**), his core stack (**Java, C++, Python, PHP, React, Supabase**), or how to contact and hire him!";
  }

  // Email
  if (q.includes("email") || q.includes("mail")) {
    return "You can email John directly at:\n\n📧 **[johneltongeromo438@gmail.com](mailto:johneltongeromo438@gmail.com)**\n\nHe responds promptly for developer roles and collaborations!";
  }

  // Contact / Phone / Socials
  if (q.includes("phone") || q.includes("contact") || q.includes("number") || q.includes("reach") || q.includes("call")) {
    return "Here is how you can connect with **John Elton Geromo**:\n\n• **Email**: [johneltongeromo438@gmail.com](mailto:johneltongeromo438@gmail.com)\n• **Phone**: 0993 302 3621 / +63 993 302 3621\n• **LinkedIn**: [linkedin.com/in/john-elton-d-geromo-726574406](https://www.linkedin.com/in/john-elton-d-geromo-726574406)\n• **GitHub**: [github.com/jjnix-john](https://github.com/jjnix-john)\n• **Location**: Tabok, Mandaue City, Philippines";
  }

  // Tuon.net Project / Experience (matching tuon or tuon.net)
  if (q.includes("tuon") || q.includes("study") || q.includes("quiz")) {
    return "🎓 **Tuon.net (AI-Powered Study Platform)**\n\n• **Role**: Co-Engineer (Jan 2025 - Present)\n• **Impact**: Co-engineered an adaptive learning system that converts raw study materials into generative AI-powered quizzes with real-time recommendations.\n• **Tech Stack**: React, Node.js, Generative AI / LLM APIs, Supabase.\n• **Live Site**: [https://tuon.net](https://tuon.net)";
  }

  // BoxedLinks Project
  if (q.includes("boxed") || q.includes("boxedlinks") || q.includes("box link")) {
    return "📦 **BoxedLinks (Cloud File Sharing Platform)**\n\n• **Overview**: A Google Drive-style file storage and sharing platform where users can securely upload files and share them via unique links.\n• **Tech Stack**: Next.js, Supabase (Auth & Storage), Tailwind CSS, deployed on Vercel.\n• **Key Features**: Secure user authentication, direct cloud upload & retrieval, responsive cross-device Neubrutalist interface.\n• **Live Demo**: [https://boxed-links.vercel.app/](https://boxed-links.vercel.app/)";
  }

  // Java & Networking / QuizArena
  if (q.includes("quizarena") || (q.includes("java") && (q.includes("tcp") || q.includes("udp") || q.includes("network")))) {
    return "⚔️ **QuizArena (Multiplayer CLI Trivia System)**\n\n• **Overview**: A multiplayer trivia battle system built from scratch in **Java**.\n• **Architecture**: Implements TCP, UDP, and HTTP network communication with robust OOP design patterns.\n• **Integration**: Connected to the OpenTDB API for dynamic question generation.";
  }

  // Other Projects / All Projects
  if (q.includes("project") || q.includes("work") || q.includes("built") || q.includes("portfolio")) {
    return "Here are John's standout featured projects:\n\n1. **BoxedLinks** (2026): Google Drive-style cloud storage & sharing with Next.js, Supabase Auth & Storage. [Live Demo](https://boxed-links.vercel.app/)\n2. **Tuon.net**: AI study platform with generative quiz pipelines. [tuon.net](https://tuon.net)\n3. **QuizArena**: Multiplayer trivia battle engine in Java utilizing TCP/UDP sockets.\n4. **Armonia Website**: Modern corporate presence with reusable UI components. [armoniait.com](https://armoniait.com)\n5. **Maribago Grill**: Digital restaurant menu and ordering portal. [Live Link](https://maribago-grill.vercel.app/)\n6. **BackTrack**: AI-powered code tracing and repository intelligence in Python.";
  }

  // Specific Languages: Java, C++, PHP, Python
  if (q.includes("java") || q.includes("c++") || q.includes("cpp") || q.includes("php") || q.includes("python")) {
    return "💻 **John's Core Systems & Backend Languages**:\n\n• **Java**: OOP architecture, multiplayer socket programming (TCP/UDP in QuizArena).\n• **C++ & C**: High-performance algorithms, data structures, and computer science fundamentals.\n• **Python**: Generative AI scripting, EDA data pipelines, and automation (BackTrack).\n• **PHP**: Server-side scripting, relational databases (MySQL), and backend web services.\n• **JavaScript & TypeScript**: Modern full-stack mastery with React, Next.js, and Node.js.";
  }

  // Tech Stack & Skills in general
  if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("framework") || q.includes("tool")) {
    return "🛠️ **John Elton Geromo's Job-Ready Tech Stack**:\n\n• **Languages**: JavaScript (ES6+), TypeScript, Java, C++, Python, PHP, SQL, HTML5/CSS3, C\n• **Frontend**: React, Next.js (App Router), Tailwind CSS, Neubrutalism UI\n• **Backend & DB**: Node.js, Express, Supabase (Auth & Storage), PostgreSQL, MySQL, REST APIs, TCP/UDP sockets\n• **Tools & Platforms**: Git, GitHub, Vercel, Selenium, Postman, Linux CLI, Claude Code, Antigravity\n• **Practices**: Full-Stack Architecture, Agile/Scrum, Software Design Patterns, Technical Documentation.";
  }

  // Experience / Jobs
  if (q.includes("experience") || q.includes("job") || q.includes("career")) {
    return "💼 **Professional Experience**:\n\n**Co-Engineer @ Tuon.net** (Jan 2025 - Present)\n• Co-engineered an adaptive learning platform converting study materials into generative AI quizzes.\n• Designed user-focused interfaces with real-time personalized study recommendations.\n• Integrated generative AI APIs to automate quiz creation from raw study materials.";
  }

  // Education
  if (q.includes("education") || q.includes("school") || q.includes("college") || q.includes("university") || q.includes("uclm") || q.includes("degree")) {
    return "🎓 **Education**:\n\n**Bachelor of Science in Information Technology (BSIT)**\nUniversity of Cebu - Lapulapu and Mandaue Campus (UCLM)\n\nEquipped with strong theoretical and applied foundations in Software Engineering, Computer Networks, Systems Architecture, and Database Systems.";
  }

  // Certifications & Awards
  if (q.includes("cert") || q.includes("award") || q.includes("hackathon") || q.includes("ibm") || q.includes("topcit") || q.includes("ef set")) {
    return "🏆 **Awards & Certifications**:\n\n• **IBPAP Hackathon Finalist** (\"Can You Hack It?\"): 1 of 20 competing schools nationwide, directly coached and mentored by IBM engineers (Aug 2026).\n• **3rd Place, CCS Days Hackathon 2025**: University of Cebu - UCLM.\n• **TOPCIT Level 2 Certified**: Test of Practical Competency in ICT.\n• **EF SET English Certificate C1 (Advanced)**: Certified high proficiency in global technical collaboration.";
  }

  // Hiring / Availability
  if (q.includes("hire") || q.includes("available") || q.includes("role") || q.includes("looking") || q.includes("open to")) {
    return "🚀 **Availability for Hire**:\n\n**Yes, John is actively seeking a Full Stack or Front-End Developer role!**\n\n• **Best fit**: Full Stack Engineer (React/Next.js + Node/Supabase/Java), Front-End Developer, or Software Engineer.\n• **Strengths**: Fast learner, hackathon proven (IBM-coached), solid foundations in web stacks and systems languages.\n• **Get in touch**: [johneltongeromo438@gmail.com](mailto:johneltongeromo438@gmail.com) | +63 993 302 3621";
  }

  // Resume / CV
  if (q.includes("resume") || q.includes("cv")) {
    return "📄 You can download John Elton Geromo's complete updated resume here:\n\n👉 **[Download John's Resume (PDF)](/files/Geromo_John_Elton_D_FlowCV_Resume_2026-08-02.pdf)**";
  }

  // Default fallback about John
  return "**John Elton Geromo** is a Full Stack Developer & BSIT student in Mandaue City, Philippines. He builds high-performance web applications using React, Next.js, Node.js, and Supabase, with strong backend programming in Java, C++, Python, and PHP.\n\nKey Highlights:\n• Built **BoxedLinks** (Google Drive-style cloud storage)\n• Co-Engineer at **Tuon.net** (AI Study App)\n• **IBPAP Hackathon Finalist** (Coached by IBM Engineers)\n• **TOPCIT Level 2** & **EF SET C1** certified";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi there! I'm **Jeg AI**, John Elton's personal assistant. Ask me anything about his technical skills (Java, C++, React, Supabase), projects like **BoxedLinks** or **Tuon.net**, hackathons, or how to hire him!",
      time: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const query = typeof textToSend === "string" ? textToSend : input;
    if (!query || !query.trim()) return;

    const userMessage = {
      sender: "user",
      text: query.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (typeof textToSend !== "string") setInput("");
    setIsTyping(true);

    // Short thinking delay
    setTimeout(() => {
      try {
        const response = generateAnswer(query);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: response,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      } catch (err) {
        console.error("ChatBot error:", err);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "I'm **Jeg AI**. I ran into a brief hiccup, but feel free to ask me again about John's skills, projects, or background!",
            time: "Just now",
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    }, 400);
  };

  const samplePrompts = [
    "Tech stack & languages",
    "Tell me about BoxedLinks",
    "Experience at Tuon.net",
    "Certifications & Awards",
    "How to hire John",
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 rounded-2xl border-2 border-border bg-neo-yellow px-4 py-3 font-mono text-xs font-black uppercase text-black shadow-neo transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-lg active:translate-x-0.5 active:translate-y-0.5"
          aria-label="Open Jeg AI Chatbot"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neo-teal opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-neo-green border border-black" />
          </span>
          <span className="flex items-center gap-1.5">
            <span>💬 Ask Jeg AI</span>
            <span className="hidden sm:inline rounded bg-black px-1.5 py-0.5 text-[9px] text-white font-mono">
              ONLINE
            </span>
          </span>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="flex h-[540px] w-[340px] sm:w-[400px] flex-col overflow-hidden rounded-2xl border-2 border-border bg-surface shadow-neo-lg crt-scanlines animate-fade-up">
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-border bg-surface-secondary px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src="/files/PictureUpload.png"
                  alt="John Elton Geromo"
                  className="h-8 w-8 rounded-full border-2 border-border object-cover"
                  style={{ objectPosition: "center 18%" }}
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-black bg-neo-green" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-mono text-xs font-black text-text">Jeg AI</h3>
                  <span className="rounded bg-neo-teal px-1 py-0.2 text-[8px] font-mono font-black uppercase text-black border border-border">
                    v1.0
                  </span>
                </div>
                <p className="text-[10px] font-mono text-muted">John Elton's Portfolio Assistant</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() =>
                  setMessages([
                    {
                      sender: "bot",
                      text: "Chat reset! Ask me anything about John's skills, projects (**BoxedLinks**, **Tuon.net**), experience, or qualifications.",
                      time: "Just now",
                    },
                  ])
                }
                title="Reset conversation"
                className="rounded p-1 text-muted hover:text-text hover:bg-surface transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-border bg-neo-orange p-1 text-white hover:brightness-110 transition-all shadow-[1px_1px_0px_#000]"
                title="Close Chat"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Filter / Topic Chips */}
          <div className="flex gap-1.5 overflow-x-auto border-b border-border bg-surface px-3 py-2 scrollbar-none">
            {samplePrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="shrink-0 rounded-full border border-border bg-surface-secondary/70 px-2.5 py-1 text-[10px] font-mono font-bold text-text hover:bg-neo-yellow hover:text-black transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-surface text-xs font-mono leading-relaxed">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl p-3 border-2 border-border shadow-[2px_2px_0px_var(--border-color)] whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-neo-teal text-black font-semibold rounded-br-none"
                      : "bg-surface-secondary text-text rounded-bl-none"
                  }`}
                >
                  {/* Format bold text, bullets, and clickable markdown links */}
                  {msg.text.split("\n").map((line, lineIdx) => (
                    <p key={lineIdx} className="my-0.5">
                      {parseFormattedLine(line)}
                    </p>
                  ))}
                </div>
                <span className="mt-1 text-[9px] text-muted">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 rounded-xl border border-border bg-surface-secondary p-2.5 w-16">
                <span className="h-1.5 w-1.5 rounded-full bg-neo-teal animate-bounce" />
                <span className="h-1.5 w-1.5 rounded-full bg-neo-orange animate-bounce [animation-delay:0.15s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-neo-lilac animate-bounce [animation-delay:0.3s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="border-t-2 border-border bg-surface p-2.5 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Jeg AI anything about John..."
              className="flex-1 rounded-xl border-2 border-border bg-surface-secondary px-3 py-2 text-xs font-mono text-text outline-none focus:border-neo-teal transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="rounded-xl border-2 border-border bg-neo-yellow px-3.5 py-2 font-mono text-xs font-black text-black shadow-[2px_2px_0px_var(--border-color)] disabled:opacity-40 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
