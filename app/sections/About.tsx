"use client";

import './about.css'
import {useEffect, useState} from "react";
import Circles from "@/app/components/Circles";
import {motion} from "framer-motion";
import {fadeIn} from "@/variants";
import CountUp from "react-countup";
import {aboutData, education, workExperience} from "@/_data/about";
import Story from "@/app/sections/components/story";

export default function About() {
    const [index, setIndex] = useState(0)
    const [animationComplete, setAnimationComplete] = useState(false)

    useEffect(() => {
        const handler = () => {
            setIndex(1) // switch ไป experience tab
        }
        window.addEventListener('scrollToExperience', handler)
        return () => window.removeEventListener('scrollToExperience', handler)
    }, [])

    return (
        <>
            <div className={'min-h-screen bg-primary/30 py-32 text-center xl:text-left relative'}>
                <Circles/>
                <div className={'container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'}>
                    <div className={'flex-1 flex flex-col justify-center'}>
                        <motion.h2
                            className={'h2'}
                            variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true, amount: 0.3}}
                        >
                            Captivating <span className={'text-accent'}>stories</span> birth magnificent design.
                        </motion.h2>
                        <motion.p
                            className={'max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'}
                            variants={fadeIn('right', 0.4)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true, amount: 0.3}}
                        >
                            Android developer with over 8 years of experience, including 6+ years at
                            LINE MAN Wongnai — one of Thailand&#39;s leading super app platforms. Solid foundation
                            in clean architecture, observability tooling, and automated testing.
                        </motion.p>
                        <motion.div
                            className={'hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'}
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{once: true, amount: 0.3}}
                            onAnimationComplete={() => setAnimationComplete(true)}
                        >
                            <div className={'flex flex-1 xl:gap-x-6'}>
                                <div className={
                                    'relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute ' +
                                    'after:top-0 after:right-0'
                                }>
                                    <div className={'text-2xl xl:text-4xl font-extrabold text-accent mb-2'}>
                                        <CountUp start={0} end={animationComplete ? 8 : 0} duration={3}/> +
                                    </div>
                                    <div
                                        className={'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'}>Years
                                        of experiences
                                    </div>
                                </div>

                                <div className={
                                    'relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute ' +
                                    'after:top-0 after:right-0'
                                }>
                                    <div className={'text-2xl xl:text-4xl font-extrabold text-accent mb-2'}>
                                        <CountUp start={0} end={animationComplete ? 3 : 0} duration={3}/> +
                                    </div>
                                    <div
                                        className={'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'}>Companies
                                        worked
                                    </div>
                                </div>

                                <div className={'relative flex-1'}>
                                    <div className={'text-2xl xl:text-4xl font-extrabold text-accent mb-2'}>
                                        <CountUp start={0} end={animationComplete ? 10 : 0} duration={3}/> +
                                    </div>
                                    <div
                                        className={'text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'}>Apps
                                        Delivered
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className={'flex flex-col w-full xl:max-w-[48%] h-[480px]'}
                        variants={fadeIn('left', 0.4)}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true, amount: 0.3}}
                    >
                        <div className={'flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'}>
                            {aboutData.map((item, i) => {
                                return (
                                    <div key={i}
                                         className={`
                                            ${index === i && 'text-accent after:w-[100%] after:!bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`
                                         }
                                         onClick={() => setIndex(i)}
                                    >
                                        {item.topic}
                                    </div>
                                )
                            })}
                        </div>
                        <div
                            className={'py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-5 items-center xl:items-start overflow-y-auto hover-scrollbar'}>
                            {index === 1 ? (
                                <Story data={workExperience}/>
                            ) : index === 2 ? (
                                <Story data={education}/>
                            ) : (
                                aboutData[index].infos.map((info, i) => (
                                    <div key={i}
                                         className={'flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'}>
                                        <div className={'font-light mb-2 md:mb-0'}>{info.title}</div>
                                        <div className={'hidden md:flex'}>-</div>
                                        <div>{info.stage}</div>
                                        <div className={'flex gap-x-4'}>
                                            {info.icons?.map((icon, j) => {
                                                const Icon = icon.img
                                                return <div
                                                    key={j}
                                                    className={'group relative inline-block text-2xl text-white hover:text-accent duration-300'}>
                                                    <Icon/>
                                                    <span
                                                        className="absolute hidden group-hover:flex bg-white min-w-[32px] rounded-[3px] p-[4px] text-primary justify-center -left-2 -top-2 -translate-y-full text-[8px] leading-none font-semibold capitalize after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white">{icon.name}</span>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}