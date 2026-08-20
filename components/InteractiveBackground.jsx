import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export default function InteractiveBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Pointer Tracking
    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // --- 1. Floating Geometric Shapes (Memphis/Neubrutalist Accents) ---
    const SHAPE_COUNT = 8;
    const shapeTypes = ["hexagon", "ring", "diamond", "cross"];
    const shapes = [];

    const neoColors = [
      "#00f5d4", // teal
      "#ff5e36", // orange
      "#b100e8", // lilac
      "#00e676", // green
      "#ff5e97", // pink
      "#ffde47", // yellow
    ];

    for (let i = 0; i < SHAPE_COUNT; i++) {
      const initX = (10 + Math.random() * 80) / 100 * width;
      const initY = (10 + Math.random() * 80) / 100 * height;
      shapes.push({
        type: shapeTypes[i % shapeTypes.length],
        x: initX,
        y: initY,
        baseX: initX,
        baseY: initY,
        vx: 0,
        vy: 0,
        size: 14 + Math.random() * 16,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: 0.003 + Math.random() * 0.005 * (Math.random() > 0.5 ? 1 : -1),
        amplitude: 20 + Math.random() * 25,
        driftTime: Math.random() * 100,
        color: neoColors[i % neoColors.length],
      });
    }

    // --- 2. Retro Pixel Particles Trail ---
    const pixelParticles = [];

    // --- Animation Loop ---
    let time = 0;
    const tick = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === "dark";
      const borderColor = isDark ? "#faf8f5" : "#000000";

      // 1. Update & Spawn Pixel Particles at Cursor
      const mouse = mouseRef.current;
      if (mouse.active) {
        if (mouse.x === -1000) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.22;
          mouse.y += (mouse.targetY - mouse.y) * 0.22;
        }

        const distance = Math.sqrt(Math.pow(mouse.targetX - mouse.x, 2) + Math.pow(mouse.targetY - mouse.y, 2));

        // Spawn squares if mouse is moving
        if (distance > 1) {
          const spawnCount = distance > 5 ? 2 : 1;
          for (let k = 0; k < spawnCount; k++) {
            pixelParticles.push({
              x: mouse.x + (Math.random() - 0.5) * 16,
              y: mouse.y + (Math.random() - 0.5) * 16,
              vx: (Math.random() - 0.5) * 1.5,
              vy: (Math.random() - 0.5) * 1.2 + 0.8, // drift downward like gravity
              size: 4 + Math.random() * 5,
              life: 1.0,
              decay: 0.015 + Math.random() * 0.02,
              color: neoColors[Math.floor(Math.random() * neoColors.length)],
            });
          }
        }
      }

      // Draw Pixel Particles
      for (let i = pixelParticles.length - 1; i >= 0; i--) {
        const p = pixelParticles[i];
        p.life -= p.decay;

        if (p.life <= 0) {
          pixelParticles.splice(i, 1);
          continue;
        }

        p.x += p.vx;
        p.y += p.vy;

        ctx.save();
        ctx.fillStyle = p.color;
        // Hard border around pixel particle
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 1;
        ctx.globalAlpha = p.life;
        
        ctx.beginPath();
        ctx.rect(p.x, p.y, p.size, p.size);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      // 2. Draw Floating Geometric Shapes
      shapes.forEach((item) => {
        item.driftTime += 0.003;
        const driftX = Math.cos(item.driftTime * 1.8) * item.amplitude;
        const driftY = Math.sin(item.driftTime * 0.9) * item.amplitude;

        const targetX = item.baseX + driftX;
        const targetY = item.baseY + driftY;

        let forceX = 0;
        let forceY = 0;

        // Repel from mouse
        if (mouse.active && mouse.x !== -1000) {
          const dx = item.x - mouse.x;
          const dy = item.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 200;

          if (dist < repelRadius) {
            const force = (1 - dist / repelRadius) * 3.5;
            const angle = Math.atan2(dy, dx);
            forceX = Math.cos(angle) * force;
            forceY = Math.sin(angle) * force;
          }
        }

        item.vx += (targetX - item.x) * 0.015 + forceX;
        item.vy += (targetY - item.y) * 0.015 + forceY;

        item.vx *= 0.85;
        item.vy *= 0.85;

        item.x += item.vx;
        item.y += item.vy;
        item.rotation += item.rotSpeed;

        // Boundaries check
        const padding = item.size + 10;
        if (item.x < padding) item.x = padding;
        if (item.x > width - padding) item.x = width - padding;
        if (item.y < padding) item.y = padding;
        if (item.y > height - padding) item.y = height - padding;

        // Draw shape with thick border and solid fill
        ctx.save();
        
        // Shadow offset (tactile Neubrutalist look)
        ctx.fillStyle = item.color;
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 2.0;

        ctx.shadowColor = isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.12)";
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;

        if (item.type === "hexagon") {
          ctx.beginPath();
          for (let s = 0; s < 6; s++) {
            const angle = (Math.PI / 3) * s + item.rotation;
            const sx = item.x + Math.cos(angle) * item.size;
            const sy = item.y + Math.sin(angle) * item.size;
            if (s === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else if (item.type === "ring") {
          ctx.beginPath();
          ctx.arc(item.x, item.y, item.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // inner hole
          ctx.beginPath();
          ctx.arc(item.x, item.y, item.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? "#0a0a0a" : "#f4f0ea"; // match background
          ctx.shadowColor = "transparent"; // remove shadow for inner circle
          ctx.fill();
          ctx.stroke();
        } else if (item.type === "diamond") {
          ctx.beginPath();
          for (let s = 0; s < 4; s++) {
            const angle = (Math.PI / 2) * s + item.rotation;
            const sx = item.x + Math.cos(angle) * item.size;
            const sy = item.y + Math.sin(angle) * item.size;
            if (s === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else if (item.type === "cross") {
          ctx.translate(item.x, item.y);
          ctx.rotate(item.rotation);
          ctx.beginPath();
          // thick lines for Neubrutalist cross
          ctx.rect(-item.size, -2, item.size * 2, 4);
          ctx.rect(-2, -item.size, 4, item.size * 2);
          ctx.fill();
          ctx.stroke();
        }

        ctx.restore();
      });

      // Maintain bases coordinate spacing during resize
      shapes.forEach((item, idx) => {
        const xPct = (idx * 15 + 10) % 90;
        const yPct = (idx * 12 + 15) % 90;
        item.baseX = (xPct / 100) * width;
        item.baseY = (yPct / 100) * height;
      });

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full opacity-60" />
    </div>
  );
}
