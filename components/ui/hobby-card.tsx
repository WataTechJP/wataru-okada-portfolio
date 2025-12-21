"use client";

import { memo } from "react";
import type { ReactElement } from "react";
import type { ColorVariant, HobbyCardProps, ColorConfig } from "@/types/components";
import { Card } from "@/components/ui/card";

const colorConfig: Record<ColorVariant, ColorConfig> = {
  primary: {
    cardHover: "hover:shadow-primary/20",
    iconBg: "bg-primary/10",
    iconText: "text-primary",
    badge: "bg-primary/10 text-primary",
  },
  secondary: {
    cardHover: "hover:shadow-secondary/20",
    iconBg: "bg-secondary/10",
    iconText: "text-secondary",
    badge: "bg-secondary/10 text-secondary",
  },
  accent: {
    cardHover: "hover:shadow-accent/20",
    iconBg: "bg-accent/10",
    iconText: "text-accent",
    badge: "bg-accent/10 text-accent",
  },
};

export const HobbyCard = memo(function HobbyCard({
  icon: Icon,
  title,
  items,
  color,
  isVisible,
  delay,
}: HobbyCardProps): ReactElement {
  const colors = colorConfig[color];

  return (
    <Card
      className={`p-6 transition-all duration-300 hover:shadow-lg hover-tilt ${colors.cardHover} ${
        isVisible ? `animate-scaleIn ${delay}` : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div
          className={`w-12 h-12 rounded-full ${colors.iconBg} flex items-center justify-center`}
        >
          <Icon className={colors.iconText} size={24} />
        </div>
        <h4 className="font-bold text-lg">{title}</h4>
        <div className="flex flex-wrap gap-2 justify-center">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className={`px-3 py-1 text-sm ${colors.badge} rounded-full`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
});

HobbyCard.displayName = "HobbyCard";

