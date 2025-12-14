"use client";

import { useEffect, useRef, useState, memo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useCanvasAnimation } from "@/hooks/use-canvas-animation";

import { useLocale, t } from "@/i18n/LocalProvider";

export const Hero = memo(function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(true); // Heroは常に表示
  const fullText = "Full-Stack Engineer";

  const { locale } = useLocale();

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useCanvasAnimation(canvasRef, sectionRef, {
    particleCount: 50, // Heroは少し多め
    isVisible,
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fadeInUp neon-glow-pink animate-neon-flicker">
            <span className="text-balance">Wataru Okada</span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary mb-4 animate-fadeInUp delay-200 font-mono neon-glow-cyan">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-300 whitespace-pre-line">
            {t("heroDescription", locale)}
          </p>

          <div className="flex items-center justify-center gap-4 mb-12 animate-fadeInUp delay-400">
            <Button size="lg" asChild className="animate-pulse-glow">
              <a href="#contact">{t("heroContact", locale)}</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-tilt">
              <a href="#projects">{t("heroProjects", locale)}</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fadeInUp delay-500">
            <a
              href="https://github.com/WataTechJP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover-tilt animate-float"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/wataru-okada-509319334/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-125 hover-tilt animate-float delay-100"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:wattech3371@gmail.com"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125 hover-tilt animate-float delay-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={32} className="text-muted-foreground neon-glow-cyan" />
      </a>
    </section>
  );
});
