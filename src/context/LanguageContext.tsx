import { createContext, useState } from "react";
import { Language } from "../types/language";
import { Translation } from "../types/translation";
import { arabic } from "../assets/languages/arabic";
import { hebrew } from "../assets/languages/hebrew";


type LanguageContextProps = {
    language: Language
    translation: Translation
    selectLanguage: (languagesOptions: LanguagesOptions) => void
    getPageTranslation: <T,>(page: 'home' | 'aboutProgram' | 'aboutUs' | 'contactUs') => T
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
    HEB, ARB
}

export const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps)

export default function LanguageContextProvider({ children }: { children: React.ReactElement }) {

    const [language, setLanguage] = useState<Language>(Languages.heb)
    const [translation, setTranslation] = useState<Translation>(hebrew)

    const selectLanguage = (languagesOptions: LanguagesOptions) => {
        switch (languagesOptions) {
            case LanguagesOptions.HEB:
                setLanguage(Languages.heb)
                setTranslation(hebrew)
                break
            case LanguagesOptions.ARB:
                setLanguage(Languages.arb)
                setTranslation(arabic)
                break
        }
    }

    const getPageTranslation = <T,>(page: 'home' | 'aboutProgram' | 'aboutUs' | 'contactUs') => {
        return translation.main.pages[page] as T
    }

    return (
        <LanguageContext.Provider value={{ language, translation, selectLanguage , getPageTranslation }}>
            {children}
        </LanguageContext.Provider>
    )

}