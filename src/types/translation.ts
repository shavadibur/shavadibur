export type Translation = {
    header: {
        navItems: {
            homePage: string
            aboutProgram: string
            aboutUs: string
            contactUs: string
        }
    }
    main: {
        pages: {
            home: HomePageTranslation
            aboutProgram: {
                title: string
            }
            aboutUs: {
                title: string
            }
            contactUs: {
                title: string
            }
        }
    }
}

export type HomePageTranslation = {
    title: string
    mainParagraph: string
    ourGoals: {
        title: string
        cards: {
            content: string
        }[]
    }
    whyUs: {
        title: string
        cards: {
            content: string
        }[]
    }
}