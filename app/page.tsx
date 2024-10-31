"use client";

import ProjectsBtn from "@/app/components/ProjectsBtn";
import {motion} from "framer-motion"
import {fadeIn} from "@/variants";
import Avatar from "@/app/components/Avatar";
import ParticlesContainer from "@/app/components/ParticlesContainer";
import {TypeAnimation} from "react-type-animation";

export default function Home() {
    return (
        <main className={"bg-primary/60 h-full"}>
            <div className={"w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"}>
                <div
                    className={"text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto md:pt-20"}>
                    <motion.h1 variants={fadeIn('down', 0.2)}
                               initial={'hidden'}
                               animate={'visible'}
                               exit={'hidden'}
                               className={'h1'}
                    >
                        Transforming Ideas <br/> Into{' '}
                        <TypeAnimation
                            sequence={[
                                'Android Developer',
                                2000,
                                'Web Developer',
                                2000,
                                'Backend Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            cursor={false}
                            className={'text-accent'}
                            repeat={Infinity}
                        />
                    </motion.h1>
                    <motion.p variants={fadeIn('down', 0.3)}
                              initial={'hidden'}
                              animate={'visible'}
                              exit={'hidden'}
                              className={"max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"}
                    >
                        A text area can hold an unlimited number of characters, and the text renders in a
                        fixed-width
                        font (usually Courier).
                        The size of a text area is specified by the cols and rows attributes (or with CSS).
                    </motion.p>
                    <motion.div
                        variants={fadeIn('down', 0.4)}
                        initial={'hidden'}
                        animate={'visible'}
                        exit={'hidden'}
                        className={"flex justify-center xl:hidden relative"}
                    >
                        <ProjectsBtn/>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('down', 0.4)}
                        initial={'hidden'}
                        animate={'visible'}
                        exit={'hidden'}
                        className={"hidden xl:flex"}
                    >
                        <ProjectsBtn/>
                    </motion.div>
                </div>
            </div>
            <div className={'w-full h-full absolute right-0 bottom-0'}>
                <div
                    className={'bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'}/>
                <ParticlesContainer/>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial={'hidden'}
                    animate={'visible'}
                    exit={'hidden'}
                    transition={{
                        duration: 0.7,
                        ease: 'easeInOut'
                    }}
                    className={'w-full h-full max-w-[587px] max-h-[528px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'}>
                    <Avatar/>
                </motion.div>
            </div>
        </main>
    )
}
