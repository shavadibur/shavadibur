import { createContext, useEffect, useState } from "react";
import { Language } from "../types/language";
import { Translation } from "../types/translation";
import { arabic } from "../assets/languages/arabic";
import { hebrew } from "../assets/languages/hebrew";

type PageKeys = 'home' | 'aboutProgram' | 'aboutUs' | 'contactUs';

type LanguageContextProps = {
    language: Language
    translation: Translation
    selectLanguage: (languagesOptions: LanguagesOptions) => void
    getPageTranslation: <T,>(page: PageKeys) => T
}

const Languages = {
    heb: {
        name: 'heb',
        alias: 'עברית'
    },
    arb: {
        name: 'arb',
        alias: 'Arabic'
    }
}

export enum LanguagesOptions {
    HEB='heb', ARB='arb'
}

const LOCAL_STORAGE_LANGUAGE_KEY = 'language'

export const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps)

export default function LanguageContextProvider({ children }: { children: React.ReactElement }) {

    const [language, setLanguage] = useState<Language>(Languages.heb)
    const [translation, setTranslation] = useState<Translation>(hebrew)

    useEffect(() => {
        const language = localStorage.getItem('language') as LanguagesOptions
        if (language) {
            selectLanguage(language)
        }
    }, [])

    const selectLanguage = (languagesOptions: LanguagesOptions) => {
        switch (languagesOptions) {
            case LanguagesOptions.HEB:
                setLanguage(Languages.heb)
                setTranslation(hebrew)
                localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, LanguagesOptions.HEB)
                break
            case LanguagesOptions.ARB:
                setLanguage(Languages.arb)
                setTranslation(arabic)
                localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, LanguagesOptions.ARB)
                break
        }
    }

    const getPageTranslation = <T,>(page: PageKeys) => {
        return translation.main.pages[page] as T
    }

    return (
        <LanguageContext.Provider value={{ language, translation, selectLanguage , getPageTranslation }}>
            {children}
        </LanguageContext.Provider>
    )

}