"use client";

import { useEffect, useRef, useState, memo } from "react";
import { useCanvasAnimation } from "@/hooks/use-canvas-animation";
import Image from "next/image";
import {
  Heart,
  Music,
  Gamepad2,
  Camera,
  Coffee,
  Code2,
  BookOpen,
  Film,
} from "lucide-react";
import { Card } from "@/components/ui/card";

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
                <Image
                  src="/2CE14424-AEF8-46C8-A0C4-8FAB69DD429D_1_105_c.jpeg"
                  alt="About"
                  width={500}
                  height={500}
                  className="rounded-2xl"
                />
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
              <p className="text-2xl leading-relaxed text-muted-foreground">
                - Wataru Okada
              </p>
            </div>
          </div>

          {/* Hobbies & Interests Section */}
          <div className="mt-16">
            <h3
              className={`text-2xl md:text-3xl font-bold mb-8 text-center neon-glow-cyan ${
                isVisible ? "animate-fadeInUp delay-400" : "opacity-0"
              }`}
            >
              Hobbies & Interests
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Hobbies */}
              <Card
                className={`p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover-tilt ${
                  isVisible ? "animate-scaleIn delay-500" : "opacity-0"
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Gamepad2 className="text-primary" size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Hobbies</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      Music
                    </span>
                    <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      Baseball
                    </span>
                    <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      YouTube
                    </span>
                    <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      Sauna
                    </span>
                  </div>
                </div>
              </Card>

              {/* Special Skills */}
              <Card
                className={`p-6 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover-tilt ${
                  isVisible ? "animate-scaleIn delay-600" : "opacity-0"
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Code2 className="text-secondary" size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Special Skills</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full">
                      アルゴリズム
                    </span>
                    <span className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full">
                      問題解決
                    </span>
                  </div>
                </div>
              </Card>

              {/* Favorite Things */}
              <Card
                className={`p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover-tilt ${
                  isVisible ? "animate-scaleIn delay-700" : "opacity-0"
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="text-accent" size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Favorites</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">
                      コーヒー
                    </span>
                    <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">
                      映画
                    </span>
                    <span className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">
                      写真
                    </span>
                  </div>
                </div>
              </Card>

              {/* Interests */}
              <Card
                className={`p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover-tilt ${
                  isVisible ? "animate-scaleIn delay-800" : "opacity-0"
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="text-primary" size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Interests</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      テクノロジー
                    </span>
                    <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      デザイン
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
