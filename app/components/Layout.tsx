"use client";

import React from "react";
import TopLeftImg from "@/app/components/TopLeftImg";
import Header from "@/app/components/Header";

const Layout = ({
                    children,
                }: {
    children: React.ReactNode
}) => {
    return (
        <>
            <TopLeftImg/>
            <Header/>
            {children}
        </>
    )
};

export default Layout;