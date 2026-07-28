import React, { createContext, useContext, useState, ReactNode } from "react"
import { translations } from "../translations"

type Language = "it" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: any
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("it")

  const value = {
    language,
    setLanguage,
    t: translations[language]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    return {
      language: "it" as const,
      setLanguage: () => {},
      t: translations.it
    }
  }
  return context
}
