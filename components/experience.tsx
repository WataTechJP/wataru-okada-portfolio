"use client";

import { useEffect, useRef, useState, memo } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useCanvasAnimation } from "@/hooks/use-canvas-animation";
import Link from "next/link";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "BLOOM CONSULTING Inc.",
    office: "Vancouver, Canada",
    url: "https://www.bloom-abroad.com/about/",
    period: "2025 - Present",
    description:
      "Developed responsive and accessible web interfaces using modern frontend technologies, integrating APIs and supporting deployments on Vercel and AWS. The company provides comprehensive relocation support for Japanese speakers in Vancouver, including housing assistance, community engagement, and all local resources offered in Japanese.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "MySQL",
      "Strapi",
      "Vercel",
      "GitHub",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "OpenHeart Inc.",
    office: "Tokyo, Japan",
    url: "https://openheart.co.jp/",
    period: "2025 - Present",
    description:
      "Contributed to the development of TAVIO, a platform that makes 3D capture more accessible by combining advanced technology with user-friendly design. I implemented a modern React/Next.js architecture, built reusable and responsive UI components, and integrated Supabase for real-time data, authentication, and secure 3D file storage, while supporting GitHub-based version control and CI/CD workflows.",
    technologies: ["React", "TypeScript", "Next.js", "GitHub", "Supabase"],
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
            className={`text-4xl md:text-5xl font-bold mb-16 text-center neon-glow-cyan animate-flicker ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`p-6 md:p-8 overflow-hidden group relative transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 hover:scale-[1.01] ${
                  isVisible ? `animate-fadeInUp` : "opacity-0 translate-y-4"
                }`}
                style={{
                  animationDelay: `${(index + 2) * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient" />
                <Link
                  href={exp.url}
                  className="flex flex-col md:flex-row md:items-start gap-4"
                >
                  <div className="shrink-0">
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
                      {exp.company} <br className="block md:hidden" />
                      <span className="text-sm text-white italic md:ml-2">
                        {exp.office}
                      </span>
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
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
