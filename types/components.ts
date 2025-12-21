import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";

/**
 * カラーバリアントの型定義
 */
export type ColorVariant = "primary" | "secondary" | "accent";

/**
 * カラー設定の型定義
 */
export interface ColorConfig {
  cardHover: string;
  iconBg: string;
  iconText: string;
  badge: string;
}

/**
 * HobbyCardコンポーネントのプロップス型定義
 */
export interface HobbyCardProps {
  icon: LucideIcon;
  title: string;
  items: readonly string[];
  color: ColorVariant;
  isVisible: boolean;
  delay: string;
}

/**
 * ContactFormのプロップス型定義
 */
export interface ContactFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * ContactInfoのアイテム型定義
 */
export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  target?: string;
  rel?: string;
}


