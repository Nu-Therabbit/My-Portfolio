"use client";

import ProjectsBtn from "@/app/components/ProjectsBtn";
import {motion} from "framer-motion"
import {fadeIn} from "@/variants";
import Avatar from "@/app/components/Avatar";
import ParticlesContainer from "@/app/components/ParticlesContainer";
import {TypeAnimation} from "react-type-animation";
import About from "@/app/sections/About";

export default function Home() {
    return (
        <main className={"bg-primary/60 h-full overflow-y-auto scroll-smooth snap-y snap-mandatory"}>
            {/* Home Section */}
            <section id="home" className={"h-screen relative snap-start "}>
                <div className={"w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"}>
                    <div
                        className={"text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto md:pt-20 relative z-10"}>
                        <motion.h1 variants={fadeIn('down', 0.2)}
                                   initial={'hidden'}
                                   animate={'visible'}
                                   exit={'hidden'}
                                   className={'h1'}
                        >
                            Transforming Ideas <br/> Into{' '}
                            <TypeAnimation
                                sequence={[
                                    'Android Apps',
                                    2000,
                                    'Cross-Platform Apps',
                                    2000,
                                    'Web Experiences',
                                    2000,
                                    'Backend Systems',
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
                            Software Developer with 8+ years of experience specializing in Android development,
                            including 6+ years at LINE MAN Wongnai. Delivered mission-critical POS merchant
                            solutions and consumer-facing features for millions of monthly active users.
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
                        className={'max-w-[587px] max-h-[528px] absolute bottom-0 lg:right-[8%] overflow-x-hidden overflow-y-hidden'}>
                        <Avatar/>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={"snap-start"}>
                <About/>
            </section>
        </main>
    )
}