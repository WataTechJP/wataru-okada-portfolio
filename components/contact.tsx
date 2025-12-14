"use client";

import type React from "react";

import { useEffect, useRef, useState, memo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import { useCanvasAnimation } from "@/hooks/use-canvas-animation";

export const Contact = memo(function Contact() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (This is a demo)");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-16 text-center neon-glow-cyan animate-flicker ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div
              className={`space-y-8 ${
                isVisible ? "animate-slideInLeft delay-200" : "opacity-0"
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:wattech3371@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      wattech3371@gmail.com
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div> */}

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Vancouver, Canada</p>
                    {/* <p className="text-muted-foreground">Tokyo, Japan</p> */}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Instagram className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a
                      href="https://instagram.com/6crazyinsane9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      @6crazyinsane9
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Discord</p>
                    <p className="text-muted-foreground">wataokatech71</p>
                  </div>
                </div>
              </div>
            </div>

            <Card
              className={`p-6 md:p-8 ${
                isVisible ? "animate-slideInRight delay-300" : "opacity-0"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full min-h-32"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});
