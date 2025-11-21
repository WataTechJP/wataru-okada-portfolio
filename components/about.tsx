"use client";

import { useEffect, useRef, useState, memo } from "react";
import { useCanvasAnimation } from "@/hooks/use-canvas-animation";

export const About = memo(function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useCanvasAnimation(canvasRef, sectionRef, {
    particleCount: 30,
    isVisible,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center neon-glow-pink animate-flicker ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`${
                isVisible ? "animate-slideInLeft delay-200" : "opacity-0"
              }`}
            >
              <div className="aspect-square rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>

            <div
              className={`space-y-6 ${
                isVisible ? "animate-slideInRight delay-300" : "opacity-0"
              }`}
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate full-stack engineer with expertise in building
                modern web applications. With a strong foundation in both
                frontend and backend technologies, I create seamless digital
                experiences that users love.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My approach combines clean code, thoughtful design, and
                performance optimization to deliver products that not only look
                great but work flawlessly across all devices.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
