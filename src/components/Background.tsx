"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; sz: number; vx: number; vy: number; a: number; g: boolean };
type Orb = { cx: number; cy: number; rx: number; ry: number; r: number; ph: number; sp: number };

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", size, { passive: true });
    size();

    const W = () => canvas.width;
    const H = () => canvas.height;

    const points: Point[] = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      sz: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.00013,
      vy: (Math.random() - 0.5) * 0.00013,
      a: Math.random() * 0.45 + 0.08,
      g: Math.random() < 0.14,
    }));

    const orbs: Orb[] = [
      { cx: 0.12, cy: 0.22, rx: 0.28, ry: 0.22, r: 0.58, ph: 0, sp: 0.00038 },
      { cx: 0.84, cy: 0.55, rx: 0.22, ry: 0.18, r: 0.5, ph: 2.2, sp: 0.00029 },
      { cx: 0.5, cy: 0.9, rx: 0.18, ry: 0.14, r: 0.44, ph: 4.5, sp: 0.00033 },
      { cx: 0.38, cy: 0.38, rx: 0.14, ry: 0.11, r: 0.32, ph: 1.1, sp: 0.00052 },
    ];

    let t = 0;
    let raf = 0;

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, W(), H());

      const bg = ctx.createLinearGradient(0, 0, 0, H());
      bg.addColorStop(0, "#091524");
      bg.addColorStop(0.3, "#1c355e");
      bg.addColorStop(0.65, "#152d52");
      bg.addColorStop(1, "#091524");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W(), H());

      ctx.strokeStyle = "rgba(28,53,94,0.2)";
      ctx.lineWidth = 0.5;
      const gs = 90;
      for (let x = 0; x < W(); x += gs) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H());
        ctx.stroke();
      }
      for (let y = 0; y < H(); y += gs) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W(), y);
        ctx.stroke();
      }

      ctx.save();
      ctx.translate(W() * 0.5, H() * 1.08);
      for (let i = -2; i <= 2; i++) {
        const ang = (i * 16 * Math.PI) / 180;
        const x2 = Math.tan(ang) * H() * 1.4;
        const gb = ctx.createLinearGradient(0, 0, x2, -H() * 1.2);
        const a = 0.038 - Math.abs(i) * 0.006;
        gb.addColorStop(0, `rgba(28,53,94,${a * 2.2})`);
        gb.addColorStop(0.5, `rgba(28,53,94,${a})`);
        gb.addColorStop(1, "rgba(0,0,0,0)");
        ctx.strokeStyle = gb;
        ctx.lineWidth = 75;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x2, -H() * 1.2);
        ctx.stroke();
      }
      ctx.restore();

      orbs.forEach((o) => {
        const x = (o.cx + Math.sin(t * o.sp + o.ph) * o.rx) * W();
        const y = (o.cy + Math.cos(t * o.sp * 0.68 + o.ph) * o.ry) * H();
        const r = o.r * Math.min(W(), H()) * 0.5;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, "rgba(28,53,94,.58)");
        g.addColorStop(0.4, "rgba(22,44,78,.22)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < 6; i++) {
        const yf = (t * 0.018 + i / 6) % 1;
        const a = Math.sin(yf * Math.PI) * 0.02;
        ctx.strokeStyle = `rgba(230,220,160,${a})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, yf * H());
        ctx.lineTo(W(), yf * H());
        ctx.stroke();
      }

      points.forEach((p, i) => {
        p.x = (((p.x + p.vx) % 1) + 1) % 1;
        p.y = (((p.y + p.vy) % 1) + 1) % 1;
        if (i % 3 === 0) {
          for (let j = i + 1; j < points.length; j++) {
            const p2 = points[j];
            const dx = (p.x - p2.x) * W();
            const dy = (p.y - p2.y) * H();
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 130) {
              const a = (1 - d / 130) * 0.07;
              ctx.strokeStyle = `rgba(230,220,160,${a})`;
              ctx.lineWidth = 0.4;
              ctx.beginPath();
              ctx.moveTo(p.x * W(), p.y * H());
              ctx.lineTo(p2.x * W(), p2.y * H());
              ctx.stroke();
            }
          }
        }
        ctx.beginPath();
        ctx.arc(p.x * W(), p.y * H(), p.sz, 0, Math.PI * 2);
        ctx.fillStyle = p.g ? `rgba(230,220,160,${p.a})` : `rgba(255,255,255,${p.a * 0.55})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 h-full w-full"
      style={{ zIndex: 0 }}
      aria-hidden
    />
  );
}
