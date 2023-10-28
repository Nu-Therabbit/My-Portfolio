import {FaAndroid, FaAws, FaCss3, FaGit, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact} from "react-icons/fa";
import {SiFirebase, SiFlutter, SiKotlin, SiNextdotjs, SiTailwindcss} from "react-icons/si";
import {About} from "@/app/model/About";

export const aboutData: About[] = [
    {
        topic: 'skills',
        infos: [
            {
                title: 'Android',
                icons: [
                    {name: "android", img: FaAndroid},
                    {name: "java", img: FaJava},
                    {name: "kotlin", img: SiKotlin}
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
                title: 'Backend',
                icons: [
                    {name: "nodeJs", img: FaNodeJs},
                    {name: "ktor", img: SiKotlin},
                ],
            },
            {
                title: 'Tools',
                icons: [
                    {name: "git", img: FaGit},
                    {name: "firebase", img: SiFirebase},
                    {name: "aws", img: FaAws},
                ],
            }
        ],
    },

    {
        topic: 'experience',
        infos: [
            {
                title: 'UX/UI Designer - XYZ Company',
                stage: '2012 - 2023',
            },
            {
                title: 'Web Developer - ABC Agency',
                stage: '2010 - 2012',
            },
            {
                title: 'Intern - DEF Corporation',
                stage: '2008 - 2010',
            },
        ],
    }, {
        topic: 'Education',
        infos: [
            {
                title: 'Mahasarakham University',
                stage: '2013 - 2016',
            }
        ],
    },
];

export const education = [
    {
        period: "January – May 2017",
        category: "Cooperative Education",
        company: "Digio - Thailand Co., Ltd.,",
        department: "The application is developed for use in collecting customer information conveniently. " +
            "It is designed to be further developed from the ThaiID application from the original with only data from reading the cards. " +
            "help to users can create form want and can upload and download form to be used in the more conveniently."
    },
    {
        period: "2013 - 2016",
        category: "University of Studies",
        company: "Mahasarakham University",
        department: "Bachelor of Science in Computer Science, GPA 2.57"
    },
    {
        period: "2016",
        category: "Activities During Study",
        company: "ACM-ICPC 2016",
        department: "Joining ACM-ICPC 2016 Thailand Northeastern Region Programming Contest."
    },
    {
        period: "January 2015",
        category: "C4C",
        company: "C4C 2015",
        department: "Joining Computer for Community (C4C) camp at ThongThani. School Thawatchaburi district Roied between 8 to 11 January 2015."
    },
    {
        period: "2010 - 2013",
        category: "High School",
        company: "Khamkhueankeao Chanubhatham School",
        department: "High School form Khamkhueankeao Chanubhatham GPA 2.86"
    }
]
