import { useEffect, useRef } from "react";
import heroTop from "../assets/hero-top.png";
import heroBottom from "../assets/hero-bottom.png";

export default function Hero({
  brushSize = 180,
  fadeTime = 2500,
  spacing = 0.12,
  follow = 0.18,
  className = "",
  style = {},
  children,
}) {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    const bottom = bottomRef.current;

    if (!hero || !canvas || !bottom) return;

    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = 1;

    let topImage = null;
    let bottomImage = null;

    let animationFrame = null;
    let destroyed = false;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    let hasPointer = false;

    const strokes = [];

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => resolve(img);
        img.onerror = reject;

        img.src = src;
      });
    };

    const drawCoverImage = (context, image) => {
      if (!image) return;

      const scale = Math.max(
        width / image.naturalWidth,
        height / image.naturalHeight,
      );

      const imageWidth = image.naturalWidth * scale;

      const imageHeight = image.naturalHeight * scale;

      const x = (width - imageWidth) / 2;

      const y = (height - imageHeight) / 2;

      context.drawImage(image, x, y, imageWidth, imageHeight);
    };

    const resize = () => {
      width = hero.clientWidth;
      height = hero.clientHeight;

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;

      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;

      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      drawCanvas();
    };

    const createStroke = (x, y) => {
      strokes.push({
        x,
        y,
        size: brushSize * (0.75 + Math.random() * 0.5),
        created: performance.now(),
        rotation: Math.random() * Math.PI,
      });
    };

    const drawBrush = (context, stroke) => {
      const { x, y, size, rotation } = stroke;

      context.save();

      context.translate(x, y);

      context.rotate(rotation);

      context.beginPath();

      const points = 40;

      for (let i = 0; i <= points; i++) {
        const angle = (Math.PI * 2 * i) / points;

        const variation =
          0.8 + Math.sin(angle * 5 + stroke.created * 0.002) * 0.12;

        const radius = size * 0.5 * variation;

        const px = Math.cos(angle) * radius * 1.25;

        const py = Math.sin(angle) * radius;

        if (i === 0) {
          context.moveTo(px, py);
        } else {
          context.lineTo(px, py);
        }
      }

      context.closePath();
      context.fill();

      context.restore();
    };

    const drawCanvas = () => {
      if (!topImage) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, width, height);

      // Draw the top image
      drawCoverImage(ctx, topImage);

      // Erase brush areas
      ctx.globalCompositeOperation = "destination-out";

      const now = performance.now();

      for (let i = strokes.length - 1; i >= 0; i--) {
        const stroke = strokes[i];

        const age = now - stroke.created;

        if (age > fadeTime) {
          strokes.splice(i, 1);
          continue;
        }

        const progress = age / fadeTime;

        const opacity = 1 - progress;

        ctx.save();

        ctx.globalAlpha = opacity;

        drawBrush(ctx, stroke);

        ctx.restore();
      }

      ctx.globalCompositeOperation = "source-over";
    };

    const animate = () => {
      if (destroyed) return;

      if (hasPointer) {
        const dx = mouseX - currentX;

        const dy = mouseY - currentY;

        currentX += dx * follow;

        currentY += dy * follow;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const step = brushSize * spacing;

        if (distance > step) {
          const steps = Math.ceil(distance / step);

          for (let i = 0; i < steps; i++) {
            const t = (i + 1) / steps;

            createStroke(currentX - dx * (1 - t), currentY - dy * (1 - t));
          }
        } else if (distance > 1) {
          createStroke(currentX, currentY);
        }
      }

      drawCanvas();

      animationFrame = requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      const rect = hero.getBoundingClientRect();

      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;

      if (!hasPointer) {
        currentX = mouseX;
        currentY = mouseY;
        hasPointer = true;

        createStroke(currentX, currentY);
      }
    };

    const handlePointerLeave = () => {
      hasPointer = false;
    };

    const handleResize = () => {
      resize();
    };

    hero.addEventListener("pointermove", handlePointerMove);

    hero.addEventListener("pointerleave", handlePointerLeave);

    window.addEventListener("resize", handleResize);

    Promise.all([loadImage(heroTop), loadImage(heroBottom)])
      .then(([loadedTop, loadedBottom]) => {
        if (destroyed) return;

        topImage = loadedTop;

        bottomImage = loadedBottom;

        bottom.style.backgroundImage = `url("${heroBottom}")`;

        resize();

        animationFrame = requestAnimationFrame(animate);
      })
      .catch((error) => {
        console.error("Hero image loading failed:", error);
      });

    return () => {
      destroyed = true;

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      hero.removeEventListener("pointermove", handlePointerMove);

      hero.removeEventListener("pointerleave", handlePointerLeave);

      window.removeEventListener("resize", handleResize);
    };
  }, [brushSize, fadeTime, spacing, follow]);

  return (
    <section
      id="home"
      ref={heroRef}
      className={`scratch-hero ${className}`}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
        background: "#000",
        touchAction: "pan-y",
        ...style,
      }}
    >
      {/* Bottom image */}
      <div
        ref={bottomRef}
        className="scratch-hero-bottom"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Top image + scratch mask */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* Hero content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {children}
      </div>
    </section>
  );
}
