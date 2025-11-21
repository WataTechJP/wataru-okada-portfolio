"use client";

import { useEffect, useRef, useState, memo } from "react";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  Wrench,
  Share2,
  Triangle,
  FileCode,
  Wind,
  Zap,
  Box,
  CircleDot,
  Cloud,
  GitBranch,
  Container,
} from "lucide-react";
import { useCanvasAnimation } from "@/hooks/use-canvas-animation";

const techIcons: { [key: string]: any } = {
  React: Share2,
  "Next.js": Triangle,
  TypeScript: FileCode,
  "Tailwind CSS": Wind,
  "Framer Motion": Zap,
  "Node.js": Zap,
  Express: Server,
  Python: Box,
  FastAPI: Zap,
  GraphQL: Share2,
  PostgreSQL: Database,
  MongoDB: CircleDot,
  Redis: Database,
  Prisma: Database,
  Supabase: Database,
  "React Native": Smartphone,
  Expo: Smartphone,
  "Progressive Web Apps": Layout,
  Docker: Container,
  "CI/CD": GitBranch,
  Vercel: Cloud,
  AWS: Cloud,
  "GitHub Actions": GitBranch,
  JavaScript: Code2,
  SQL: Database,
  "HTML/CSS": Layout,
};

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "primary",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "FastAPI", "GraphQL"],
    color: "secondary",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
    color: "accent",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Expo", "Progressive Web Apps"],
    color: "primary",
  },
  {
    title: "DevOps",
    icon: Wrench,
    skills: ["Docker", "CI/CD", "Vercel", "AWS", "GitHub Actions"],
    color: "secondary",
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
    color: "accent",
  },
];

export const Skills = memo(function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-16 text-center neon-glow-cyan animate-flicker ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-${
                    category.color
                  }/30 hover-tilt group relative overflow-hidden ${
                    isVisible
                      ? `animate-fadeInUp delay-${(index + 2) * 100}`
                      : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-500 animate-gradient" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg bg-${category.color}/10 flex items-center justify-center animate-float group-hover:animate-pulse-glow transition-all duration-300`}
                      >
                        <Icon
                          className={`text-${category.color} group-hover:scale-125 transition-transform duration-300`}
                          size={20}
                        />
                      </div>
                      <h3
                        className={`text-lg font-bold group-hover:text-${category.color} transition-colors duration-300`}
                      >
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = techIcons[skill] || Code2;
                        return (
                          <span
                            key={skill}
                            className={`px-3 py-1 text-sm bg-background text-foreground rounded-full border border-border hover:border-${
                              category.color
                            } hover:bg-${
                              category.color
                            }/10 hover:scale-110 transition-all duration-300 animate-fadeInUp delay-${
                              (index + skillIndex) * 50
                            } flex items-center gap-1.5`}
                            style={{
                              animationDelay: `${(index + skillIndex) * 0.05}s`,
                            }}
                          >
                            <SkillIcon size={14} className="shrink-0" />
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});
