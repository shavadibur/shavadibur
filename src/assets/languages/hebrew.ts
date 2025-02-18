import { Translation } from "../../types/translation";

export const hebrew: Translation = {
    header: {
        navItems: {
            homePage: 'הבית',
            aboutProgram: 'תוכניות הלמידה',
            aboutUs: "עלינו",
            contactUs: "יצירת קשר"
        }
    },
    main: {
        pages: {
            home: {
                title: "שווה דיבור",
                mainParagraph: `"שווה דיבור" היא תוכנית ללמידת עברית מדוברת. התוכנית מתמקדת בפיתוח מיומנות הדיבור ובשבירת מחסום השפה. זאת מתוך הבנה שהיכולת לדבר, להתבטא ולתקשר בעברית היא המפתח להשתלבות ולהתקדמות אישית ומקצועית.`,
                ourGoals: {
                    title: "מה המטרות שלנו?",
                    cards: [
                        { content: "ללמוד עברית בדרך פשוטה וחוויתית" },
                        { content: "לאפשר מרחב בטוח ללמידה, לדיבור ולביטוי עצמי" },
                        { content: "ללמוד להשתמש בשפה העברית ככלי להצלחה ולפתיחת דלתות חדשות" },
                        { content: "לשפר את הביטחון העצמי ואת תחושת המסוגלות" },
                    ]
                },
                whyUs: {
                    title: "למה כדאי ללמוד איתנו?",
                    cards: [
                        { content: "נלמד לדבר עברית כבר מהמפגש הראשון!" },
                        { content: "למידה בקבוצות קטנות" },
                        { content: "אפשר ללמוד מכל מקום- הלמידה מתקיימת בזום!" },
                    ]
                }
            },
            aboutProgram: {
                title: ""
            },
            aboutUs: {
                title: ""
            },
            contactUs: {
                title: ""
            }
        }
    }
}