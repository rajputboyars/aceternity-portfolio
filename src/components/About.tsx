"use client";

import React from "react";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";

export function About() {
    return (
        <div className="bg-black min-h-screen text-white flex flex-col md:flex-row items-center gap-5">
            <div className="relative flex flex-col gap-4 justify-center px-4 flex-1 w-full">
                <div className="text-3xl md:text-4xl ls:text-7xl font-bold dark:text-white  text-center md:text-left" style={{textShadow:"4px 0px 5px rgba(0,0,0,1)"}}>
                    <span className="text-secondaryLight" style={{textShadow:"4px 0px 5px [#0504a5]"}}>Maximize</span> your reach with
                </div>
                <div className="font-extralight text-base md:text-2xl ls:text-4xl dark:text-neutral-200 py-4 text-center md:text-left" style={{textShadow:"4px 0px 5px rgba(0,0,0,1)"}}>
                    professionally edited videos.
                </div>
                <Link href={"https://calendly.com/kukkarshubham121/30min"} className="border-white hover:border-black border transition-all duration-700 bg-secondary rounded-md w-fit text-white dark:text-black px-4 py-2 hover:shadow-[1px_1px_2px_0px_rgba(255,255,255,1);] active:shadow-none md:m-0 mx-auto" style={{textShadow:"4px 0px 5px rgba(0,0,0,1)"}}>
                    Book A call
                </Link>
            </div>
            <div className="flex-1">
                <VideoPlayer/>
            </div>
        </div>
    );
}
