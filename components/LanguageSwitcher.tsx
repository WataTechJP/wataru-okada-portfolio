// src/components/LanguageSwitcher.tsx
"use client";

import { useLocale } from "@/i18n/LocalProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-full">
      <button
        onClick={() => setLocale("en")}
        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all
      ${
        locale === "en"
          ? "bg-black text-white shadow-sm"
          : "bg-white text-gray-700 border border-gray-300"
      }`}
      >
        EN 🇺🇸
      </button>

      <button
        onClick={() => setLocale("ja")}
        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all
      ${
        locale === "ja"
          ? "bg-black text-white shadow-sm"
          : "bg-white text-gray-700 border border-gray-300"
      }`}
      >
        JP 🇯🇵
      </button>
    </div>
  );
}
