import { Translation } from "../../types/translation";

export const arabic: Translation = {
    header: {
        navItems: {
            homePage: 'البيت',
            aboutProgram: 'برامج التعلم',
            aboutUs: "معلومات عنا",
            contactUs: "اتصل بنا"
        }
    },
    main: {
        pages: {
            home: {
                title: "شڤ ديبور",
                mainParagraph: '"شڤ ديبور" هو برنامج لتعلم اللغة العبرية المحكية. يركز البرنامج على تطوير مهارة التحدث وكسر حاجز اللغة. وذلك من خلال الفهم أن القدرة على التواصل بالعبرية هو المفتاح للتكامل والتقدم الشخصي والمهني.',
                ourGoals: {
                    title: "ما هي أهدافنا؟",
                    cards: [
                        { content: "تعلم اللغة العبرية بطريقة بسيطة وتجريببية" },
                        { content: "تمكين كل طالب/ة من الشعور بالثقة للحديث والتواصل باللغة العبرية" },
                        { content: "تعلم طريقة استخدام اللغة العبرية كأداة للنجاح الشخصي والمهني" },
                        { content: "تحسين الثقة بالنفس وتنمية الشعور بالقدرة" },
                    ]
                },
                whyUs: {
                    title: "لماذا يُفضل التعلم معنا؟",
                    cards: [
                        { content: "سنتعلم التحدث باللغة العبرية من اللقاء الأول!" },
                        { content: "التعلم في مجموعات صغيرة" },
                        { content: "يمكن التعلم من أي مكان - التعلم يتم عبر الزوم!" },
                    ]
                }
            },
            aboutProgram: {
                title: "برامج التعلم",
                courseInfo: {
                    p1: "دورات لغة عبرية محكية على منصة الزوم ١٠ لقاءات",
                    p2: "كل لقاء: ساعتان أكاديميتان",
                    p3: {
                        part1: "بالإضافة يوجد",
                        part2: "وقت للتمرين",
                        part3: "على الزوم لمن يرغب/ترغب"
                    },
                    p4: "بإمكانكم/ن التدريب والتحاور مع زملائكم/زميلاتكن بالصف وايضا التوجه للمعلمة بالاسئلة والاستفسارات",
                    cost: "تكلفة الدورة:",
                    price: "١٢٠٠ شيكل"
                },
                courses: [
                    {
                        name: 'يلا نبلش!',
                        forWhoTitle: "لمن مناسب؟",
                        forWho: 'مناسب لمن (يعرف / تعرف)  القراءة والكتابة باللغة العبرية و(يرغب /ترغب) في كسر حاجز اللغة والبدء بالتحدث!',
                        courseLevel: 'مستوى التعليم 01',
                        registerBtnText: 'للتسجيل'
                    }
                    ,
                    {
                        name: 'يلا نكمل!',
                        forWhoTitle: "لمن مناسب؟",
                        forWho: 'مناسب لمن لديه او لديها معرفة أساسية باللغة و(يرغب / ترغب) في توسيع وتعميق مهارات التحدث!',
                        courseLevel: 'مستوى التعليم 02',
                        registerBtnText: 'للتسجيل'
                    }
                ]
            },
            aboutUs: {
                title: "المؤسسة و المديرة التربوية للبرنامج",
                p: {
                    part1: "حاصلة على درجة البكالوريوس في التربية وعلم الاجتماع - الأنثروبولوجيا، ودرجة الماجستير في السياسات العامة من الجامعة العبرية.",
                    part2: "تحمل شهادة تدريس اللغة العبرية كلغة ثانية من الجامعة العبرية، وشهادة تدريس اللغة العبرية كلغة إضافية من الكلية الأكاديمية أونو.",
                    part3: `مسؤولة عن مجال تعلم اللغة العبرية في القدس الشرقية ضمن منظمة "חותם" (حوتام ).`,
                    part4: "لديها خبرة تزيد عن عشر سنوات في تدريس وتعلم اللغة العبرية في القطاع العربي."
                },
                socialMediaTitle: "للمشاهدة محتوياتي"
            },
            contactUs: {
                title: "تعالوا لنتحدث",
                whatapp: "الدردشة على الواتس اب",
                form: {
                    username: "الاسم الكامل:",
                    phone: "رقم الهاتف:",
                    message: "رسالة:",
                    submitBtn: "ارسال"
                }
            }
        }
    }
}