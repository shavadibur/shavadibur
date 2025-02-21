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
            aboutProgram: AboutProgramPageTranslation
            aboutUs: AboutUsPageTranslation
            contactUs: ContactUsPageTranslation
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

export type AboutProgramPageTranslation = {
    title: string
    courseInfo: {
        p1: string
        p2: string
        p3: {
            part1: string
            part2: string
            part3: string
        }
        p4: string
    }
    courses: {
        name: string
        forWho: string
        forWhoTitle: string
        courseLevel: string
        registerBtnText: string
    }[]
}


export type AboutUsPageTranslation = {
    title: string
    p:{
        part1: string
        part2: string
        part3: string
        part4: string
    }
}

export type ContactUsPageTranslation = {
    title: string
    whatapp: string
    form:{
        username: string
        phone: string
        message: string
        submitBtn: string
    }
}