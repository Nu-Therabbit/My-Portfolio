import {FaAndroid, FaAws, FaCss3, FaGit, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact} from "react-icons/fa";
import {
    SiFigma,
    SiFirebase,
    SiFlutter,
    SiJetpackcompose,
    SiJira,
    SiKotlin,
    SiNextdotjs,
    SiSentry,
    SiTailwindcss
} from "react-icons/si";
import {About} from "@/app/model/About";

export const aboutData: About[] = [
    {
        topic: 'skills',
        infos: [
            {
                title: 'Android',
                icons: [
                    {name: "kotlin", img: SiKotlin},
                    {name: "java", img: FaJava},
                    {name: "android", img: FaAndroid},
                    {name: "compose", img: SiJetpackcompose},
                ]
            },
            {
                title: 'Cross Platform',
                icons: [
                    {name: "react native", img: FaReact},
                    {name: "flutter", img: SiFlutter},
                ]
            },
            {
                title: 'Backend & Cloud',
                icons: [
                    {name: "nodeJs", img: FaNodeJs},
                    {name: "firebase", img: SiFirebase},
                    {name: "aws", img: FaAws},
                ],
            },
            {
                title: 'Web',
                icons: [
                    {name: "html", img: FaHtml5},
                    {name: "css", img: FaCss3},
                    {name: "js", img: FaJs},
                    {name: "react", img: FaReact},
                    {name: "nextJs", img: SiNextdotjs},
                    {name: "tailwind", img: SiTailwindcss},
                ],
            },
            {
                title: 'Tools',
                icons: [
                    {name: "git", img: FaGit},
                    {name: "jira", img: SiJira},
                    {name: "sentry", img: SiSentry},
                    {name: "figma", img: SiFigma},
                ],
            }
        ],
    },
    {
        topic: 'experience',
        infos: [
            {
                title: 'Software Engineer Android, LINE MAN Wongnai',
                stage: 'Feb 2019 - Feb 2026',
            },
            {
                title: 'Android Developer, Radius Co., Ltd',
                stage: 'Aug 2017 - Jan 2019',
            },
            {
                title: 'Android Developer Intern, Digio Thailand Co., Ltd.',
                stage: 'Jan 2017 - May 2017',
            },
        ],
    },
    {
        topic: 'Education',
        infos: [
            {
                title: 'Mahasarakham University',
                stage: 'B.S. Computer Science, 2014 - 2017',
            },
            {
                title: 'Khamkhueankeao Chanubhatham School',
                stage: 'Science-Math, 2010 - 2013',
            }
        ],
    },
];

export const education = [
    {
        period: "2014 - 2017",
        category: "University",
        company: "Mahasarakham University",
        department: "Bachelor of Science in Computer Science"
    },
    {
        period: "2016",
        category: "Competition",
        company: "ACM-ICPC 2016",
        department: "Joined ACM-ICPC 2016 Thailand Northeastern Region Programming Contest."
    },
    {
        period: "January 2015",
        category: "C4C",
        company: "C4C 2015",
        department: "Joining Computer for Community (C4C) camp at ThongThani School, Thawatchaburi district, Roi Et."
    },
    {
        period: "2010 - 2013",
        category: "High School",
        company: "Khamkhueankeao Chanubhatham School",
        department: "Science-Mathematics Program"
    }
]

export const workExperience = [
    {
        period: "Feb 2019 - Feb 2026",
        category: "Software Engineer Android",
        company: "LINE MAN Wongnai",
        department: "LINE MAN App - Ads Team: Spearheaded the Ads module supporting core revenue generation for millions of MAU. Engineered high-precision tracking systems for accurate revenue reporting. Drove transition to Jetpack Compose and MVVM architectures."
    },
    {
        period: "Feb 2019 - Feb 2026",
        category: "Software Engineer Android",
        company: "LINE MAN Wongnai",
        department: "Merchant Solution & POS Ecosystem: Developed \"WnLogger\" integrated with Jitsu SDK for real-time observability across POS hardware. Led security overhaul migrating to Token-based and Assume Role architecture. Developed Serverless Node.js APIs for receipt printing and order synchronization. Took full ownership of FoodStory Digital Display and Checker apps."
    },
    {
        period: "Feb 2019 - Feb 2026",
        category: "Software Engineer Android",
        company: "LINE MAN Wongnai",
        department: "Wongnai Consumer App: Managed large-scale codebases built on Java and MVP architecture. Led incremental migration from Java to Kotlin. Engineered and scaled CRM & Loyalty modules for a massive user base."
    },
    {
        period: "Feb 2019 - Feb 2026",
        category: "Software Engineer Android",
        company: "LINE MAN Wongnai",
        department: "Leadership: Championed RFC process and Pair Programming for technical collaboration. Mentored interns and junior developers with structured training plans and code reviews."
    },
    {
        period: "Aug 2017 - Jan 2019",
        category: "Android Developer",
        company: "Radius Co., Ltd",
        department: "Developed and maintained Android applications for the company's own products as part of an in-house product team. Worked across full development lifecycle from feature design to release, collaborating with product and design teams."
    },
    {
        period: "Jan 2017 - May 2017",
        category: "Android Developer Intern",
        company: "Digio Thailand Co., Ltd.",
        department: "Completed internship focused on Android mobile development, gaining hands-on experience in a professional software environment."
    }
]