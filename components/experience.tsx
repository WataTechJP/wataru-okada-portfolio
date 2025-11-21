"use client";

import { useEffect, useRef, useState, memo } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useCanvasAnimation } from "@/hooks/use-canvas-animation";

const experiences = [
  {
    title: "Senior Full-Stack Engineer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using Next.js and TypeScript. Mentoring junior developers and establishing best practices.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Frontend Engineer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Built responsive web applications and e-commerce platforms. Collaborated with design teams to implement pixel-perfect interfaces.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    title: "Junior Developer",
    company: "Startup Co.",
    period: "2019 - 2020",
    description:
      "Contributed to MVP development and learned full-stack development practices. Participated in agile development cycles.",
    technologies: ["JavaScript", "React", "Express", "MongoDB"],
  },
];

export const Experience = memo(function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-16 text-center neon-glow-green animate-flicker ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                  isVisible
                    ? `animate-fadeInUp delay-${(index + 2) * 100}`
                    : "opacity-0"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-primary font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-secondary/50 text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
