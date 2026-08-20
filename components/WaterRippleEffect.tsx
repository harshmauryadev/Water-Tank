"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
  lineWidth: number;
  color: string;
}

interface Droplet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decay: number;
  color: string;
  gravity: number;
}

export default function WaterRippleEffect() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  if (pathname === "/") {
    return null;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const ripples: Ripple[] = [];
    const droplets: Droplet[] = [];

    // Ocean palette colors
    const colors = [
      "rgba(14, 165, 233, ", // Ocean Blue (#0EA5E9)
      "rgba(6, 182, 212, ",  // Cyan (#06B6D4)
      "rgba(56, 189, 248, ", // Light Sky Blue (#38BDF8)
      "rgba(20, 184, 166, ", // Teal (#14B8A6)
      "rgba(255, 255, 255, " // White highlight
    ];

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    let lastX = -100;
    let lastY = -100;
    let lastTime = Date.now();

    const spawnRipple = (x: number, y: number, intensity: number = 1) => {
      if (ripples.length > 40) ripples.shift(); // Limit max ripples for performance

      const baseColor = colors[Math.floor(Math.random() * colors.length)];
      ripples.push({
        x,
        y,
        radius: 4,
        maxRadius: Math.min(80, 35 + intensity * 25),
        alpha: 0.65,
        speed: 1.8 + intensity * 0.8,
        lineWidth: Math.max(1, 2.5 * intensity),
        color: baseColor,
      });
    };

    const spawnDroplets = (x: number, y: number, count: number = 5, speedFactor: number = 1) => {
      const maxDroplets = 100;
      if (droplets.length > maxDroplets) {
        droplets.splice(0, droplets.length - maxDroplets);
      }

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 3.5 + 1.2) * speedFactor;
        const colorPrefix = colors[Math.floor(Math.random() * colors.length)];

        droplets.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (Math.random() * 1.5), // slight upward splash arc
          radius: Math.random() * 2.2 + 1.2,
          alpha: 0.85,
          decay: Math.random() * 0.02 + 0.015,
          color: colorPrefix,
          gravity: 0.12,
        });
      }
    };

    const handlePointerMove = (x: number, y: number) => {
      const now = Date.now();
      const dt = Math.max(1, now - lastTime);
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = dist / dt; // px/ms

      if (dist > 8) {
        const intensity = Math.min(2.5, Math.max(0.5, speed * 1.5));
        spawnRipple(x, y, intensity);

        // Spawn splash droplets if moved fast enough
        if (dist > 25 || speed > 0.8) {
          const dropCount = Math.min(8, Math.floor(dist / 12));
          spawnDroplets(x, y, dropCount, Math.min(2, speed * 1.2));
        }

        lastX = x;
        lastY = y;
        lastTime = now;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handlePointerMove(touch.clientX, touch.clientY);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      // Multi-layer shockwave ripple burst on click
      spawnRipple(x, y, 2.5);
      setTimeout(() => spawnRipple(x, y, 1.8), 80);
      setTimeout(() => spawnRipple(x, y, 1.2), 160);

      // Splash splash droplets ("pani ke chhite")
      spawnDroplets(x, y, 18, 1.8);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Render Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha -= (0.65 / (r.maxRadius / r.speed));

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${r.color}${Math.max(0, r.alpha)})`;
        ctx.lineWidth = r.lineWidth;
        ctx.shadowColor = "rgba(14, 165, 233, 0.4)";
        ctx.shadowBlur = 8;
        ctx.stroke();

        // Inner soft glowing ring
        if (r.radius > 10) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, Math.max(1, r.radius - 6), 0, Math.PI * 2);
          ctx.strokeStyle = `${r.color}${Math.max(0, r.alpha * 0.4)})`;
          ctx.lineWidth = Math.max(0.5, r.lineWidth * 0.5);
          ctx.stroke();
        }
        ctx.restore();
      }

      // 2. Render Splash Droplets ("Chhite")
      for (let i = droplets.length - 1; i >= 0; i--) {
        const d = droplets[i];
        d.x += d.vx;
        d.y += d.vy;
        d.vy += d.gravity;
        d.vx *= 0.97;
        d.alpha -= d.decay;

        if (d.alpha <= 0 || d.y > height + 20) {
          droplets.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(d.x, d.y, Math.max(0.5, d.radius), 0, Math.PI * 2);
        ctx.fillStyle = `${d.color}${Math.max(0, d.alpha)})`;
        ctx.shadowColor = "rgba(56, 189, 248, 0.6)";
        ctx.shadowBlur = 4;
        ctx.fill();

        // Shiny reflection dot on droplet
        if (d.radius > 1.8) {
          ctx.beginPath();
          ctx.arc(d.x - d.radius * 0.3, d.y - d.radius * 0.3, d.radius * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, d.alpha * 0.9)})`;
          ctx.fill();
        }
        ctx.restore();
      }

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] w-full h-full"
      aria-hidden="true"
    />
  );
}
