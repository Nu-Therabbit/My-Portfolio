"use client";

import React from "react";
import TopLeftImg from "@/app/components/TopLeftImg";
import Nav from "@/app/components/Nav";
import Header from "@/app/components/Header";

const Layout = ({
                    children,
                }: {
    children: React.ReactNode
}) => {
    return (
        <>
            {/*<AnimatePresence mode={'wait'}>
                <motion.div key={k} className={'h-full'}>
                    <Transition/>
                    <TopLeftImg/>
                    <Nav/>
                    <Header/>
                    {children}
                </motion.div>
            </AnimatePresence>*/}

            <TopLeftImg/>
            <Nav/>
            <Header/>
            {children}
        </>
    )
};

export default Layout;
