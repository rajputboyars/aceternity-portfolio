"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/AuroraBackground";

export function About() {
    return (
        <AuroraBackground className="bg-black text-white">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center" style={{textShadow:"4px 0px 5px rgba(0,0,0,1)"}}>
                    <span className="text-secondaryLight" style={{textShadow:"4px 0px 5px [#0504a5]"}}>Maximize</span> your reach with
                </div>
                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4" style={{textShadow:"4px 0px 5px rgba(0,0,0,1)"}}>
                    professionally edited videos.
                </div>
                <button className="border-white hover:border-black border transition-all duration-700 bg-secondary rounded-md w-fit text-white dark:text-black px-4 py-2 hover:shadow-[1px_1px_2px_0px_rgba(255,255,255,1);] active:shadow-none" style={{textShadow:"4px 0px 5px rgba(0,0,0,1)"}}>
                    Debug now
                </button>
            </motion.div>
        </AuroraBackground>
    );
}
