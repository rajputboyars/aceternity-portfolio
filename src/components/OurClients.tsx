"use client";
import React from "react";
// import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { StickyScroll } from "./ui/StickyScrollReveal";

const OUR_CLIENTS = [
    {
        title: "Legal Lounge",
        description:
            "Oversaw the complete post-production process, from editing podcasts to transforming them into short videos and sharing them on various platforms.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    src="https://www.youtube.com/embed/PmwvOV5Lq5Q?si=zRBg7Z0mXhDH5U2s"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover overflow-hidden"
                    title="Legal Lounge demo"
                    // allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        ),
    },
    {
        title: "Leon Hendrix",
        description:
            "Assisted Leon Hendrix in launching his new podcast, DRVN Podcast. We were in charge of editing the episodes and helped him reach 50k subscribers within three months",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    width={300}
                    height={200}
                    src="https://www.youtube.com/embed/sJdjCy35Hww?si=Pv2KRqMZFcIvmSUN"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    },
    {
        title: "HIP Creative",
        description:
            "Produced content for the Growortho podcast, creating both short-form and long-form materials aimed at helping HIP’s partners expand their orthodontic practices.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    width={300}
                    height={200}
                    src="https://www.youtube.com/embed/R0CfLm0brJ8?si=gxxIqbpJUo84Q0Qm"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    },
    {
        title: "Magical AI",
        description:
            ", I produced several product explainer and product launch videos, which contributed to 33% of the user base and added 730,000 customers to their product.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    width={300}
                    height={200}
                    src="https://www.youtube.com/embed/w42zsR8oWOQ?si=3Rb3ImpwzpHWLiOG"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    },
    {
        title: "Kaleb",
        description:
            " Created long-form content that educated his audience about fractional sales consulting and how they could increase their earnings through fractional sales.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    width={300}
                    height={200}
                    src="https://www.youtube.com/embed/MjT_9XfvEcE?si=e4CbwmRAg7tCf-R0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    },
    {
        title: "Luke Infinger",
        description:
            " Created short-form and long-form content, helping him gain 10k followers on Instagram in 6 months.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    width={300}
                    height={200}
                    src="https://www.youtube.com/embed/pgj_cPqTMqk?si=9X4Wzi5hxyXQEFSG"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        ),
    },
    {
        title: "Versed",
        description:
            " Created several faceless documentary videos featuring intense 3D animations and complex graph animations.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe
                    src="https://www.youtube.com/embed/M4dQP7c_bjM?si=VZdKi9yoY2vcVK_s"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover overflow-hidden"
                    title="Versed demo"
                    // allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        ),
    },
    {
        title: "PracticeBeacon",
        description:
            "Created product explainer videos highlighting the new AI features of PracticeBeacon.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <iframe 
                width={300} 
                height={200} 
                src="https://www.youtube.com/embed/bUSUfGxax08?si=48Hcu_kwdM8DhIY_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        ),
    },
];
export function OurClients() {
    return (
        <div className="">
            <StickyScroll content={OUR_CLIENTS} />
        </div>
    );
}
