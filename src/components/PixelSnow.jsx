import React, { useEffect, useRef } from "react";
import "./PixelSnow.css";

const PixelSnow = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;

    let width = 0;
    let height = 0;
    let flakes = [];

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(70, Math.floor((width * height) / 11000));

      flakes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() > 0.7 ? 2 : 1,
        speed: 0.25 + Math.random() * 0.65,
        drift: -0.15 + Math.random() * 0.3,
        opacity: 0.25 + Math.random() * 0.65,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      flakes.forEach((flake) => {
        ctx.fillStyle = `rgba(255,255,255,${flake.opacity})`;

        ctx.fillRect(
          Math.round(flake.x),
          Math.round(flake.y),
          flake.size,
          flake.size,
        );

        flake.y += flake.speed;
        flake.x += flake.drift;

        if (flake.y > height + 5) {
          flake.y = -5;
          flake.x = Math.random() * width;
        }

        if (flake.x > width + 5) {
          flake.x = -5;
        }

        if (flake.x < -5) {
          flake.x = width + 5;
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pixel-snow-container">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default PixelSnow;
