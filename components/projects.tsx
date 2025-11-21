"use client";

import { useEffect, useRef, useState, memo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useCanvasAnimation } from "@/hooks/use-canvas-animation";

const projects = [
  {
    title: "To-Do App",
    description: "A to-do app with a modern design and a responsive layout.",
    image: "/modern-ecommerce-website.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com/WataTechJP/To-Do-App",
    demo: "https://to-do-app-wattech.onrender.com",
  },
  {
    title: "Blog App",
    description:
      "A blog application with a modern design and a responsive layout.",
    image: "/task-management-dashboard.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/WataTechJP/Blog-App",
    demo: "https://blogapp-wattech.web.app",
  },
  {
    title: "Photographer Portfolio",
    description:
      "A photographer portfolio with a modern design and a responsive layout.",
    image: "/analytics-dashboard-charts.jpg",
    technologies: ["Next.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com/WataTechJP/yuya-sudo-photographer-website",
    demo: "https://yuya-photography-portfolio.vercel.app/",
  },
  {
    title: "Horse Racing App",
    description:
      "A Japanese horse racing app with a modern design and a responsive layout.",
    image: "/analytics-dashboard-charts.jpg",
    technologies: ["Next.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com/WataTechJP/Keiba-RaceGuess",
    demo: "https://yuya-photography-portfolio.vercel.app/",
  },
];

export const Projects = memo(function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-16 text-center neon-glow-cyan ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden group transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover-tilt relative ${
                  isVisible
                    ? `animate-scaleIn delay-${(index + 2) * 100}`
                    : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient" />

                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                </div>

                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded neon-border-pink transition-all duration-300 hover:bg-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="hover-tilt bg-transparent"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="hover-tilt">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
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
