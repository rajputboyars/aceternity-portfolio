"use client";

import React from "react";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";

export function About() {
    return (
        <div className="bg-black min-h-screen text-white flex flex-col md:flex-row items-center gap-5">
            <div className="relative flex flex-col gap-3 justify-center px-4 flex-1 w-full">
                <div className="text-3xl md:!text-4xl  font-bold dark:text-white  text-center md:text-left uppercase" >
                    <span className="text-[#3533cd] md:!text-4xl text-xl ">Maximize your reach with</span> 
                </div>
                <div className=" text-base md:!text-4xl font-bold uppercase dark:text-neutral-200 pb-4 text-center md:text-left" style={{textShadow:"4px 0px 5px rgba(0,0,0,1)"}}>
                    professionally edited videos.
                </div>
                <Link href={"https://calendly.com/kukkarshubham121/30min"} className="border-white hover:border-black border transition-all duration-700 bg-secondary rounded-[30px] md:rounded-md w-fit text-white dark:text-black px-8 py-2 hover:shadow-[1px_1px_2px_0px_rgba(255,255,255,1);] active:shadow-none md:m-0 mx-auto max-md:w-full max-md:text-center" style={{textShadow:"4px 0px 5px rgba(0,0,0,1)"}}>
                    Book A call
                </Link>
            </div>
            <div className="flex-1">
                <VideoPlayer/>
            </div>
        </div>
    );
}
