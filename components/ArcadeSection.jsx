import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Trophy, Gamepad2, Download, Flame, Sparkles, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const cvUrl = "/files/Geromo_John_Elton_D_FlowCV_Resume_2026-08-02.pdf";

export default function ArcadeSection() {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Game States
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  
  // Leaderboard & handle entry
  const [leaderboard, setLeaderboard] = useState(() => {
    try {
      const saved = localStorage.getItem("cyber_runner_leaderboard");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [
      { handle: "SYS", score: 800 },
      { handle: "BUG", score: 600 },
      { handle: "ERR", score: 400 },
      { handle: "RUN", score: 200 },
      { handle: "DEV", score: 100 },
    ];
  });
  const [handle, setHandle] = useState("");
  const [promptHandle, setPromptHandle] = useState(false);
  const [unlockedCv, setUnlockedCv] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);

  // References for game loop state (to avoid re-running useEffect)
  const gameStateRef = useRef({
    player: {
      x: 80,
      y: 200,
      width: 32,
      height: 32,
      vy: 0,
      jumpPower: -13,
      gravity: 0.65,
      isGrounded: false,
      runFrame: 0,
      speedBoostTime: 0,
    },
    obstacles: [],
    powerups: [],
    particles: [],
    speed: 5,
    baseSpeed: 5,
    boostSpeed: 8.5,
    score: 0,
    floorY: 232,
    floorOffset: 0,
    bgStars: [],
    frameCount: 0,
  });

  // Initialize background stars once
  useEffect(() => {
    const stars = [];
    for (let i = 0; i < 30; i++) {
      stars.push({
        x: Math.random() * 800,
        y: Math.random() * 160,
        size: 1 + Math.random() * 2,
        speed: 0.5 + Math.random() * 1,
      });
    }
    gameStateRef.current.bgStars = stars;
  }, []);

  // Sync state score with game loop score
  useEffect(() => {
    if (isPlaying && !isPaused && !isGameOver) {
      const interval = setInterval(() => {
        setScore(gameStateRef.current.score);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying, isPaused, isGameOver]);

  // Handle keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["Space", "ArrowUp", " "].includes(e.key)) {
        if (isPlaying && !isPaused && !isGameOver) {
          e.preventDefault();
          jump();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, isPaused, isGameOver]);

  // Jump logic
  const jump = () => {
    const state = gameStateRef.current;
    if (state.player.isGrounded) {
      state.player.vy = state.player.jumpPower;
      state.player.isGrounded = false;
      // Spawn dust particles at ground position when jumping
      for (let i = 0; i < 8; i++) {
        state.particles.push({
          x: state.player.x + 10,
          y: state.floorY,
          vx: -2 - Math.random() * 3,
          vy: -Math.random() * 2,
          size: 2 + Math.random() * 3,
          color: "#FAF8F5",
          alpha: 1,
          decay: 0.05,
        });
      }
    }
  };

  // Game action toggles
  const startGame = () => {
    setIsPlaying(true);
    setIsPaused(false);
    setIsGameOver(false);
    setPromptHandle(false);
    setScore(0);

    const state = gameStateRef.current;
    state.score = 0;
    state.speed = state.baseSpeed;
    state.obstacles = [];
    state.powerups = [];
    state.particles = [];
    state.player.y = 200;
    state.player.vy = 0;
    state.player.isGrounded = false;
    state.player.speedBoostTime = 0;
    state.frameCount = 0;
  };

  const togglePause = () => {
    setIsPaused((p) => !p);
  };

  const resetGame = () => {
    setIsPlaying(false);
    setIsPaused(false);
    setIsGameOver(false);
    setPromptHandle(false);
    setScore(0);
    gameStateRef.current.score = 0;
    gameStateRef.current.obstacles = [];
    gameStateRef.current.powerups = [];
    gameStateRef.current.particles = [];
  };

  // Check if score qualifies for leaderboard
  const checkLeaderboardQualify = (finalScore) => {
    if (finalScore <= 0) return;
    const isQualifying = leaderboard.length < 5 || finalScore > leaderboard[leaderboard.length - 1].score;
    if (isQualifying) {
      setPromptHandle(true);
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (!handle.trim()) return;
    const finalHandle = handle.trim().toUpperCase().slice(0, 3);
    const newEntry = { handle: finalHandle, score: gameStateRef.current.score };
    const updated = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    setLeaderboard(updated);
    localStorage.setItem("cyber_runner_leaderboard", JSON.stringify(updated));
    setPromptHandle(false);
    setHandle("");
  };

  // Main Canvas Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    const state = gameStateRef.current;

    const obstacleTypes = [
      { text: "404", color: "#FF007F" },
      { text: "SyntaxError", color: "#FF5E36" },
      { text: "NullPointer", color: "#B100E8" },
    ];

    const techStacks = [
      { text: "React", color: "#00FFCC" },
      { text: "Laravel", color: "#FF5E36" },
      { text: "Supabase", color: "#00E676" },
      { text: "Tailwind", color: "#FF5E97" },
    ];

    const draw = () => {
      // 1. CLEAR CANVAS
      ctx.fillStyle = "#0A0A0E";
      ctx.fillRect(0, 0, 800, 300);

      // 2. DRAW BG GRID LINES (3D Perspective effect)
      ctx.strokeStyle = "#161623";
      ctx.lineWidth = 1;
      // Horizon line
      ctx.beginPath();
      ctx.moveTo(0, 140);
      ctx.lineTo(800, 140);
      ctx.stroke();

      // Perspective floor lines
      for (let i = -10; i < 20; i++) {
        ctx.beginPath();
        ctx.moveTo(400 + i * 20, 140);
        ctx.lineTo(400 + i * 80, 300);
        ctx.stroke();
      }

      // Horizontal moving floor lines
      state.floorOffset = (state.floorOffset + state.speed) % 40;
      for (let y = 140; y < 300; y += 15) {
        const offsetVal = (y - 140 + state.floorOffset) % 160;
        ctx.strokeStyle = `rgba(22, 22, 35, ${0.1 + (y - 140) / 160})`;
        ctx.beginPath();
        ctx.moveTo(0, 140 + offsetVal);
        ctx.lineTo(800, 140 + offsetVal);
        ctx.stroke();
      }

      // 3. DRAW STARFIELD (Parallax scrolling)
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      state.bgStars.forEach((star) => {
        star.x -= star.speed * (state.speed / state.baseSpeed);
        if (star.x < 0) star.x = 800;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });

      // 4. DRAW GROUND SURFACE
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, state.floorY, 800, 300 - state.floorY);
      ctx.strokeStyle = isDarkTheme() ? "#FAF8F5" : "#000000";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, state.floorY);
      ctx.lineTo(800, state.floorY);
      ctx.stroke();

      // 5. UPDATE PLAYER PHYSICS
      if (isPlaying && !isPaused && !isGameOver) {
        state.frameCount++;
        state.player.vy += state.player.gravity;
        state.player.y += state.player.vy;

        if (state.player.y >= state.floorY - state.player.height) {
          state.player.y = state.floorY - state.player.height;
          state.player.vy = 0;
          state.player.isGrounded = true;
        }

        // Speed boost timer decay
        if (state.player.speedBoostTime > 0) {
          state.player.speedBoostTime--;
          state.speed = state.boostSpeed;
          // Spawn speed sparks trail
          if (state.frameCount % 2 === 0) {
            state.particles.push({
              x: state.player.x,
              y: state.player.y + Math.random() * state.player.height,
              vx: -3 - Math.random() * 4,
              vy: (Math.random() - 0.5) * 2,
              size: 3 + Math.random() * 4,
              color: "#00FFCC",
              alpha: 0.9,
              decay: 0.03,
            });
          }
        } else {
          state.speed = state.baseSpeed + Math.min(state.score / 500, 3.5); // Scaled difficulty
        }

        // Running frames animation
        state.player.runFrame = Math.floor(state.frameCount / (state.player.speedBoostTime > 0 ? 3 : 6)) % 4;

        // Obstacles generation
        if (state.frameCount % Math.max(100 - Math.floor(state.score / 150), 60) === 0) {
          const type = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
          state.obstacles.push({
            x: 850,
            y: state.floorY - 24 - (Math.random() > 0.75 ? 40 : 0), // ground or airborne
            width: 70,
            height: 24,
            text: type.text,
            color: type.color,
            passed: false,
          });
        }

        // Power-ups generation
        if (state.frameCount % 230 === 0) {
          const type = techStacks[Math.floor(Math.random() * techStacks.length)];
          state.powerups.push({
            x: 850,
            y: state.floorY - 30 - Math.random() * 60, // airborne floats
            width: 50,
            height: 20,
            text: type.text,
            color: type.color,
          });
        }
      }

      // 6. DRAW PLAYER (Pixel Art Developer character)
      const pX = state.player.x;
      const pY = state.player.y;
      
      // Speed trail shadow
      if (state.player.speedBoostTime > 0) {
        ctx.fillStyle = "rgba(0, 255, 204, 0.25)";
        ctx.fillRect(pX - 10, pY, state.player.width, state.player.height);
        ctx.fillStyle = "rgba(177, 0, 232, 0.15)";
        ctx.fillRect(pX - 20, pY, state.player.width, state.player.height);
      }

      // Character body: Screen/Monitor Head
      ctx.fillStyle = "#2A2A35";
      ctx.strokeStyle = borderColor();
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.rect(pX + 2, pY, 28, 22);
      ctx.fill();
      ctx.stroke();

      // Screen Face Glow
      ctx.fillStyle = state.player.speedBoostTime > 0 ? "#00FFCC" : "#00E676";
      ctx.fillRect(pX + 5, pY + 3, 22, 16);
      
      // Pixel Eyes & Smile
      ctx.fillStyle = "#000000";
      ctx.fillRect(pX + 10, pY + 7, 2, 3);
      ctx.fillRect(pX + 20, pY + 7, 2, 3);
      ctx.fillRect(pX + 12, pY + 13, 8, 2);

      // Body / Keyboard sweater (animated legs running)
      ctx.fillStyle = "#FF5E36";
      ctx.beginPath();
      ctx.rect(pX + 8, pY + 22, 16, 6);
      ctx.fill();
      ctx.stroke();

      // Dynamic Running Legs
      ctx.fillStyle = borderColor();
      if (!state.player.isGrounded) {
        // Jump pose legs
        ctx.fillRect(pX + 6, pY + 28, 4, 4);
        ctx.fillRect(pX + 22, pY + 28, 4, 2);
      } else {
        // Run pose cycles
        if (state.player.runFrame === 0) {
          ctx.fillRect(pX + 8, pY + 28, 4, 4);
          ctx.fillRect(pX + 20, pY + 28, 4, 4);
        } else if (state.player.runFrame === 1) {
          ctx.fillRect(pX + 11, pY + 28, 4, 4);
          ctx.fillRect(pX + 17, pY + 28, 4, 2);
        } else if (state.player.runFrame === 2) {
          ctx.fillRect(pX + 14, pY + 28, 4, 2);
          ctx.fillRect(pX + 17, pY + 28, 4, 4);
        } else {
          ctx.fillRect(pX + 7, pY + 28, 4, 2);
          ctx.fillRect(pX + 21, pY + 28, 4, 4);
        }
      }

      // 7. UPDATE & DRAW OBSTACLES (Neon Error Nodes)
      for (let i = state.obstacles.length - 1; i >= 0; i--) {
        const obs = state.obstacles[i];
        if (isPlaying && !isPaused && !isGameOver) {
          obs.x -= state.speed;
        }

        // Draw obstacle
        ctx.save();
        ctx.fillStyle = "#0A0A0E";
        ctx.strokeStyle = obs.color;
        ctx.lineWidth = 3;
        ctx.shadowColor = obs.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.rect(obs.x, obs.y, obs.width, obs.height);
        ctx.fill();
        ctx.stroke();

        // Error Text
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 10px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(obs.text, obs.x + obs.width / 2, obs.y + obs.height / 2);
        ctx.restore();

        // Dodged Score count
        if (obs.x + obs.width < state.player.x && !obs.passed) {
          obs.passed = true;
          state.score += 50;
          
          // Confetti unlocking CV Easter egg at 1000 points
          if (state.score >= 1000 && !unlockedCv) {
            setUnlockedCv(true);
            setShowCvModal(true);
          }
        }

        // Collision Check
        if (
          state.player.x < obs.x + obs.width - 4 &&
          state.player.x + state.player.width > obs.x + 4 &&
          state.player.y < obs.y + obs.height - 4 &&
          state.player.y + state.player.height > obs.y + 4
        ) {
          // Game Over!
          setIsGameOver(true);
          checkLeaderboardQualify(state.score);
          // Spawn neon crash explosion particles
          for (let k = 0; k < 25; k++) {
            state.particles.push({
              x: state.player.x + 16,
              y: state.player.y + 16,
              vx: (Math.random() - 0.5) * 8,
              vy: (Math.random() - 0.5) * 8 - 3,
              size: 3 + Math.random() * 5,
              color: obs.color,
              alpha: 1,
              decay: 0.02,
            });
          }
        }

        // Remove offscreen
        if (obs.x < -100) {
          state.obstacles.splice(i, 1);
        }
      }

      // 8. UPDATE & DRAW POWER-UPS (Tech Badges)
      for (let i = state.powerups.length - 1; i >= 0; i--) {
        const pw = state.powerups[i];
        if (isPlaying && !isPaused && !isGameOver) {
          pw.x -= state.speed;
        }

        // Draw Power-Up
        ctx.save();
        ctx.fillStyle = borderColor();
        ctx.strokeStyle = pw.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.rect(pw.x, pw.y, pw.width, pw.height);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = pw.color;
        ctx.font = "bold 9px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(pw.text, pw.x + pw.width / 2, pw.y + pw.height / 2);
        ctx.restore();

        // Collect Power-up Collision
        if (
          state.player.x < pw.x + pw.width &&
          state.player.x + state.player.width > pw.x &&
          state.player.y < pw.y + pw.height &&
          state.player.y + state.player.height > pw.y
        ) {
          // Add points + trigger speed boost!
          state.score += 150;
          state.player.speedBoostTime = 150; // speed duration frames
          
          if (state.score >= 1000 && !unlockedCv) {
            setUnlockedCv(true);
            setShowCvModal(true);
          }

          // Spawn celebration sparkles particles
          for (let k = 0; k < 15; k++) {
            state.particles.push({
              x: pw.x + 25,
              y: pw.y + 10,
              vx: (Math.random() - 0.5) * 6,
              vy: (Math.random() - 0.5) * 6,
              size: 2 + Math.random() * 3,
              color: pw.color,
              alpha: 1,
              decay: 0.04,
            });
          }
          state.powerups.splice(i, 1);
          continue;
        }

        // Remove offscreen
        if (pw.x < -100) {
          state.powerups.splice(i, 1);
        }
      }

      // 9. DRAW DUST/SPARK PARTICLES
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const part = state.particles[i];
        part.alpha -= part.decay;
        if (part.alpha <= 0) {
          state.particles.splice(i, 1);
          continue;
        }

        part.x += part.vx;
        part.y += part.vy;

        ctx.save();
        ctx.globalAlpha = part.alpha;
        ctx.fillStyle = part.color;
        ctx.fillRect(part.x, part.y, part.size, part.size);
        ctx.restore();
      }

      // 10. GAME STATE TEXT OVERLAYS
      if (isGameOver) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
        ctx.fillRect(0, 0, 800, 300);

        ctx.fillStyle = "#FF007F";
        ctx.font = "bold 32px monospace";
        ctx.textAlign = "center";
        ctx.fillText("CRASH LOG DETECTED", 400, 120);

        ctx.fillStyle = "#FAF8F5";
        ctx.font = "16px monospace";
        ctx.fillText(`FINAL SCORE: ${state.score} PTS`, 400, 160);
        ctx.fillText("PRESS START OR RESET TO PLAY AGAIN", 400, 195);
      } else if (!isPlaying) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
        ctx.fillRect(0, 0, 800, 300);

        ctx.fillStyle = "#00FFCC";
        ctx.font = "bold 26px monospace";
        ctx.textAlign = "center";
        ctx.fillText("CYBER RUNNER // BUG SQUASHER", 400, 110);
        
        ctx.fillStyle = "#FAF8F5";
        ctx.font = "12px monospace";
        ctx.fillText("JUMP OVER [ERROR NODES] & COLLECT [TECH STACKS] FOR BOOSTS", 400, 145);
        ctx.fillText("CONTROLS: SPACEBAR, UP-ARROW OR JUMP BUTTON", 400, 170);
        
        ctx.fillStyle = "#FFDE47";
        ctx.font = "bold 13px monospace";
        ctx.fillText("REACH 1,000 POINTS TO UNLOCK SECRET CV DOWNLOAD REWARD!", 400, 205);
      } else if (isPaused) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
        ctx.fillRect(0, 0, 800, 300);

        ctx.fillStyle = "#FFDE47";
        ctx.font = "bold 36px monospace";
        ctx.textAlign = "center";
        ctx.fillText("SYSTEM PAUSED", 400, 150);
      }

      animId = requestAnimationFrame(draw);
    };

    const borderColor = () => (theme === "dark" ? "#FAF8F5" : "#000000");
    const isDarkTheme = () => theme === "dark";

    draw();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isPlaying, isPaused, isGameOver, theme]);

  return (
    <section id="arcade" ref={containerRef} className="px-4 py-24 sm:px-6 bg-transparent transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 inline-flex rounded-full border-2 border-border bg-neo-teal px-4 py-1.5 text-[10px] font-mono font-black uppercase tracking-[0.3em] text-black shadow-[2px_2px_0px_var(--border-color)]">
          ● Interactive Arcade
        </p>
        <h2 className="mb-8 text-4xl font-black tracking-[-0.08em] text-text sm:text-5xl lg:text-6xl">
          Squash some bugs
        </h2>

        {/* Main Arcade Frame Wrapper */}
        <div className="bg-[#FAF8F5] text-black border-3 border-black shadow-[6px_6px_0px_#000000] rounded-xl overflow-hidden">
          
          {/* Arcade Marquee Header Bar */}
          <div className="bg-black text-[#FAF8F5] px-4 py-3 flex flex-col sm:flex-row items-center justify-between border-b-3 border-black gap-3">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-neo-teal animate-pulse" />
              <span className="font-mono text-xs font-black uppercase tracking-wider text-neo-teal">
                CYBER RUNNER // BUG SQUASHER v1.0
              </span>
            </div>

            {/* Score Screen */}
            <div className="bg-[#1A1A24] border-2 border-neo-teal px-3 py-1 font-mono text-sm font-black text-neo-teal shadow-[0_0_8px_rgba(0,255,204,0.4)]">
              SCORE: {String(score).padStart(6, "0")}
            </div>

            {/* Game controls */}
            <div className="flex items-center gap-2">
              {!isPlaying || isGameOver ? (
                <button
                  onClick={startGame}
                  className="btn-neo bg-neo-green text-black px-3.5 py-1 text-xs font-mono font-black shadow-[2px_2px_0px_#000]"
                >
                  <Play className="h-3 w-3 inline mr-1 fill-black" />
                  START
                </button>
              ) : (
                <button
                  onClick={togglePause}
                  className="btn-neo bg-neo-yellow text-black px-3.5 py-1 text-xs font-mono font-black shadow-[2px_2px_0px_#000]"
                >
                  <Pause className="h-3 w-3 inline mr-1" />
                  {isPaused ? "RESUME" : "PAUSE"}
                </button>
              )}
              <button
                onClick={resetGame}
                className="btn-neo bg-neo-pink text-white px-3.5 py-1 text-xs font-mono font-black shadow-[2px_2px_0px_#000]"
              >
                <RotateCcw className="h-3 w-3 inline mr-1" />
                RESET
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_260px] border-b-3 border-black">
            
            {/* Left Col: HTML5 Canvas Frame with CRT overlay */}
            <div className="p-3 bg-black flex flex-col items-center justify-center relative">
              
              <div className="relative w-full overflow-hidden rounded-lg border-3 border-black crt-scanlines">
                <canvas
                  ref={canvasRef}
                  width={800}
                  height={300}
                  className="w-full h-auto bg-slate-950 block"
                />
              </div>

              {/* Mobile and tablet Jump button */}
              <div className="w-full flex items-center justify-center py-2 bg-black border-t border-zinc-900 mt-2">
                <button
                  onTouchStart={(e) => { e.preventDefault(); jump(); }}
                  onMouseDown={jump}
                  disabled={!isPlaying || isPaused || isGameOver}
                  className="w-24 h-24 rounded-full border-4 border-black bg-neo-orange text-white font-mono font-black text-sm flex items-center justify-center shadow-[4px_4px_0px_#000] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none hover:bg-orange-600 disabled:opacity-40 disabled:pointer-events-none transition-all"
                >
                  JUMP
                </button>
              </div>
            </div>

            {/* Right Col: Arcade Info & Leaderboard panel */}
            <div className="p-4 bg-[#FAF8F5] border-t-3 md:border-t-0 md:border-l-3 border-black flex flex-col justify-between">
              
              {/* Leaderboard */}
              <div>
                <h3 className="font-mono text-xs font-black uppercase tracking-wider border-b-2 border-black pb-2 mb-3 flex items-center gap-1.5">
                  <Trophy className="h-4 w-4 text-neo-orange" />
                  LEADERBOARD [TOP 5]
                </h3>

                <div className="font-mono text-xs space-y-1.5">
                  {leaderboard.map((entry, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b border-zinc-200">
                      <span className="font-black text-zinc-500">#{idx + 1}</span>
                      <span className="font-black text-black bg-neo-yellow/30 px-1.5 rounded">{entry.handle}</span>
                      <span className="font-bold text-zinc-800">{entry.score} PTS</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Handle Submitter prompt */}
              {promptHandle && (
                <div className="mt-4 p-3 bg-neo-yellow/20 border-2 border-dashed border-neo-orange rounded-lg">
                  <p className="font-mono text-[10px] font-black text-neo-orange mb-2">
                    NEW HIGH SCORE! ENTER HANDLE:
                  </p>
                  <form onSubmit={submitHandle} className="flex gap-2">
                    <input
                      type="text"
                      maxLength={3}
                      value={handle}
                      onChange={(e) => setHandle(e.target.value)}
                      placeholder="AAA"
                      className="w-16 border-2 border-black rounded px-2 py-1 text-center font-mono text-sm font-black uppercase bg-white focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="btn-neo bg-neo-orange text-white px-3 text-[10px] font-mono font-black shadow-[1px_1px_0px_#000]"
                    >
                      OK
                    </button>
                  </form>
                </div>
              )}

              {/* Unlocked CV Status Badge */}
              <div className="mt-6 p-3 rounded-lg border-2 border-black bg-surface-secondary flex flex-col items-center text-center">
                {unlockedCv ? (
                  <>
                    <div className="flex items-center gap-1 text-neo-green mb-1">
                      <Sparkles className="h-4 w-4 fill-current animate-bounce" />
                      <span className="text-[10px] font-mono font-black uppercase text-neo-green">
                        SECRET REWARD UNLOCKED
                      </span>
                    </div>
                    <button
                      onClick={() => setShowCvModal(true)}
                      className="btn-neo bg-neo-teal text-black py-1.5 px-3 w-full text-xs font-mono font-black shadow-[2px_2px_0px_#000]"
                    >
                      <Download className="h-3.5 w-3.5 inline mr-1" />
                      DOWNLOAD CV
                    </button>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-1 text-zinc-400 mb-1">
                      <Flame className="h-4 w-4" />
                      <span className="text-[9px] font-mono font-black uppercase">
                        REWARD LOCKED (1,000 PTS)
                      </span>
                    </div>
                    <div className="w-full bg-zinc-300 h-2 rounded-full overflow-hidden border border-black">
                      <div
                        className="bg-neo-orange h-full"
                        style={{ width: `${Math.min((score / 1000) * 100, 100)}%` }}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Celebratory Confetti CV Unlock Modal */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md bg-[#FAF8F5] text-black border-3 border-black shadow-[8px_8px_0px_#000000] rounded-xl p-6 crt-scanlines">
            <button
              onClick={() => setShowCvModal(false)}
              className="absolute right-4 top-4 rounded-lg border-2 border-black p-1 bg-neo-pink text-white shadow-[2px_2px_0px_#000] active:translate-y-0.5 active:translate-x-0.5 active:shadow-none hover:bg-pink-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-3 border-black bg-neo-yellow shadow-[4px_4px_0px_#000] animate-bounce">
                <Trophy className="h-8 w-8 text-black" />
              </div>

              <h3 className="text-2xl font-black font-mono tracking-tight text-black">
                SCORE GOAL UNLOCKED!
              </h3>
              <p className="text-xs font-mono text-zinc-600 leading-relaxed">
                Congratulations, Cyber Runner! You successfully bypassed the errors and squashed the bugs, reaching the 1,000-point threshold! As a reward, your CV download is now unlocked.
              </p>

              <div className="pt-2">
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neo bg-neo-green text-black w-full py-3 text-xs font-mono font-black shadow-[4px_4px_0px_#000] text-center"
                >
                  <Download className="h-4 w-4 inline mr-1.5" />
                  DOWNLOAD RESUME.PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
