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
                title: "תוכניות הלמידה",
                courseInfo: {
                    p1: "קורסי עברית מדוברת בזום | 10 מפגשים",
                    p2: "כל מפגש: שעתיים אקדמיות",
                    p3: {
                        part1: "בנוסף יש",
                        part2: "זמן תרגול",
                        part3: "בזום למי שרוצה!"
                    },
                    p4: "אפשר לתרגל עם חברים מהכיתה ולשאול את המרצה שאלות"
                },
                courses: [
                    {
                        name: 'כיף להתחיל',
                        forWhoTitle: "למי מתאים?",
                        forWho: 'מתאים למי שיודע.ת לקרוא ולכתוב בעברית ורוצה לשבור את מחסום השפה ולהתחיל לדבר!',
                        courseLevel: 'רמה 01',
                        registerBtnText: 'להרשמה',
                        
                    }
                    ,
                    {
                        name: 'בואו נמשיך',
                        forWhoTitle: "למי מתאים?",
                        forWho: 'מתאים למי שיש לו.ה ידע בסיסי בשפה, ורוצה להרחיב ולהעמיק את מיומנות הדיבור!',
                        courseLevel: 'רמה 02',
                        registerBtnText: 'להרשמה',
                    }
                ]
            },
            aboutUs: {
                title: "המייסדת והמנהלת הפדגוגית של התוכנית",
                p: {
                    part1: "בעלת תואר ראשון בחינוך סוצילוגיה- אנתרופולוגיה ותואר שני במדיניות ציבורית מהאוניברסיטה העברית.",
                    part2: `בעלת תעודת הוראה "בעברית כשפה שנייה" מטעם האוניברסיטה העברית ותעודת הוראה "בעברית כשפה נוספת" מטעם הקריה האקדמית אונו.`,
                    part3: `אחראית תחום למידת השפה העברית במזרח ירושלים בארגון "חותם".`,
                    part4: `בעלת ניסיון של למעלה מעשור בהוראת ולמידת השפה העברית במגזר הערבי.`
                }
            },
            contactUs: {
                title: "בואו נדבר",
                whatapp: "צאט בוואטסאפ",
                form: {
                    username: "שם מלא:",
                    phone: "טלפון:",
                    message: "הודעה:",
                    submitBtn: "שלח"
                }
            }
        }
    }
}