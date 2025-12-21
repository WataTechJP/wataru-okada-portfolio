"use client";

import { useEffect, useRef, useState, memo } from "react";
import type { ReactElement } from "react";
import { useCanvasAnimation } from "@/hooks/use-canvas-animation";
import Image from "next/image";
import { Heart, Gamepad2, Code2, BookOpen } from "lucide-react";
import { useLocale, t } from "@/i18n/LocalProvider";
import { HobbyCard } from "@/components/ui/hobby-card";

export const About = memo(function About(): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { locale } = useLocale();

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        const [entry] = entries;
        if (entry) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentSection);

    return (): void => {
      observer.disconnect();
    };
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
            className={`text-4xl md:text-5xl font-bold mb-12 text-center neon-glow-cyan animate-flicker ${
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
                {t("aboutDescription1", locale)}
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("aboutDescription2", locale)}
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("aboutDescription3", locale)}
              </p>
              <p className="text-2xl text-center md:text-left leading-relaxed text-muted-foreground">
                {t("aboutDescriptionName", locale)}
              </p>
            </div>
          </div>

          {/* Hobbies & Interests Section */}
          <div className="mt-24">
            <h3
              className={`text-2xl md:text-3xl font-bold mb-8 text-center neon-glow-cyan ${
                isVisible ? "animate-fadeInUp delay-400" : "opacity-0"
              }`}
            >
              Hobbies & Interests
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <HobbyCard
                icon={Gamepad2}
                title={t("aboutHobbies", locale)}
                items={["Music", "Baseball", "YouTube", "Sauna"] as const}
                color="primary"
                isVisible={isVisible}
                delay="delay-500"
              />
              <HobbyCard
                icon={Code2}
                title="Special Skills"
                items={["アルゴリズム", "問題解決"] as const}
                color="secondary"
                isVisible={isVisible}
                delay="delay-600"
              />
              <HobbyCard
                icon={Heart}
                title="Favorites"
                items={["Shohei Ohtani", "映画", "写真"] as const}
                color="accent"
                isVisible={isVisible}
                delay="delay-700"
              />
              <HobbyCard
                icon={BookOpen}
                title="Interests"
                items={["テクノロジー", "デザイン"] as const}
                color="primary"
                isVisible={isVisible}
                delay="delay-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
