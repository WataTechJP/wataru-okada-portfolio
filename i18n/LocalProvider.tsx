"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import { messages, Locale, MessageKey } from "@/i18n/message";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function AppLocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside AppLocaleProvider");
  return ctx;
}

export function t(key: MessageKey, locale: Locale) {
  return messages[locale][key];
}
