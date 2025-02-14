import { useContext, useState } from "react"
import style from './LanguagesSelector.module.css'
import { LanguageContext, LanguagesOptions } from "../../context/LanguageContext"




export default function LanguagesSelector() {
    const languageContext = useContext(LanguageContext)
    const [isLangListDisplay, setIsLangListDisplay] = useState(false)

    const onClickHandler = (languagesOption: LanguagesOptions) => {
        switch (languagesOption) {
            case LanguagesOptions.HEB:
                languageContext?.selectLanguage(LanguagesOptions.HEB)
                break;
            case LanguagesOptions.ARB:
                languageContext?.selectLanguage(LanguagesOptions.ARB)
                break;
            default:
                break;
        }
        setIsLangListDisplay(false)
    }

    return (
        <div
            className={style['lang']}
            onMouseEnter={() => setIsLangListDisplay(true)}
            onMouseLeave={() => setIsLangListDisplay(false)}
        >
            {languageContext?.language.alias}
            {
                isLangListDisplay &&
                <div className={style['lang-selections']}>
                    {
                        languageContext?.language.name === 'arb'
                        &&
                        <div
                            className={style['lang-options']}
                            onClick={() => onClickHandler(LanguagesOptions.HEB)}
                        >
                            עברית
                        </div>
                    }
                    {
                        languageContext?.language.name === 'heb'
                        &&
                        <div
                            className={style['lang-options']}
                            onClick={() => onClickHandler(LanguagesOptions.ARB)}
                        >
                            Arabic
                        </div>
                    }
                </div>
            }
        </div>
    )
}