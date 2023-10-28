"use client";

import CanvasLoader from "@/app/components/Loader";
import React, {Suspense} from "react";
import ComputersCanvas from "@/app/components/canvas/Computer";

export default function Contact() {
    return (
        <>
            <div className={'w-full h-full'}>
                <Suspense fallback={<CanvasLoader/>}>
                    <ComputersCanvas/>
                </Suspense>

            </div>
        </>
    )
}
